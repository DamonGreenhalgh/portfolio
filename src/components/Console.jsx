
import '../styles/Console.css';
import { useEffect, useRef, useState } from 'react'; 
import { Link } from "react-scroll";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscClose
} from 'react-icons/vsc';
import { AiFillCode } from 'react-icons/ai';
import resume from '../data/Resume.pdf';


/**
 * Console component, holds all the logic for parsing 
 * input and commands.
 */
const Console = (props) => {
  const { atTop, sectionRefs } = props;
  const [command, setCommand] = useState("");
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [output, setOutput] = useState([]);
  const [drag, setDrag] = useState(false);
  const [initialMouse, setInitialMouse] = useState([]);
  const inputRef = useRef(null);
  const consoleRef = useRef(null);

  /**
   * This variable holds command content, errors and codes.
   */
  const commandTree = {
    "cd": {
      "..": {
        "content": <p>Return to root directory</p>,
        "index": 0
      },
      "about": {
        "content": <p>Change directory to About</p>,
        "index": 1
      },
      "projects": {
        "content": <p>Change directory to Projects</p>,
        "index": 2
      },
      "gallery": {
        "content": <p>Change directory to Gallery</p>,
        "index": 3
      },
      "contact": {
        "content": <p>Change directory to Contact</p>,
        "index": 4
      },
      "content": null,
      "code": 0,
      "error": <p>The system cannot find the path specified.</p>
    },
    "cls": {
      "content": <p>Clearing console output ...</p>,
      "code": 1
    },
    "exit": {
      "content": <p>Exit</p>,
      "code": 2
    },
    "help": {
      "content": 
      <p>
        HELP       List all possible commands <br />
        DIR        List all items within a directory <br />
        CD         Change directory <br />
        CLS        Clear console window <br />
        MAX        Maximize console window <br />
        MIN        Minimize console window <br />
        RESTORE    Restore console window <br />
        EXIT       Close web application<br />
      </p>,
      "code": -1
    },
    "dir": {
      "content": 
      <>
        <p>Directory of C:\Users\DamonGreenhalgh</p>
        <nav className="col">
          <Link to="home" onMouseEnter={() => setCommand("cd ..")}>
            {"30/12/1999  01:42 AM    <DIR>          .."}
          </Link>
          <Link to="about" onMouseEnter={() => setCommand("cd about")}>
            {"25/12/1999  06:28 PM    <DIR>          about"}
          </Link>
          <Link to="projects" onMouseEnter={() => setCommand("cd projects")}>
            {"15/02/2022  10:59 PM    <DIR>          projects"}
          </Link>
          <Link to="gallery" onMouseEnter={() => setCommand("cd gallery")}>
            {"27/08/2017  10:59 PM    <DIR>          gallery"}
          </Link>
          <Link to="contact" onMouseEnter={() => setCommand("cd contact")}>
            {"14/08/2004  07:04 AM    <DIR>          contact"}
          </Link>
          <a 
            href={resume} 
            target="_blank" 
            rel="noreferrer" 
            to="contact" 
            onMouseEnter={() => setCommand("Resume.pdf")}
          >
            {"28/10/2077  03:15 PM                   Resume.pdf"}
          </a>
        </nav>
      </>,
      "code": -1
    },
    "max": {
      "content": <p>Maximize console window</p>,
      "code": 3
    },
    "min": {
      "content": <p>Minimize console window</p>,
      "code": 4
    },
    "restore": {
      "content": <p>Restore console window</p>,
      "code": 5
    },
    "error": <p>{"'" + command + "' is not recognized as an internal or external command,\noperable program or batch file."}</p>
  }

  /**
   * This function parses the command string to determine the 
   * most appropriate action to take.
   * @param {*} e 
   */
  const submitCommand = (e) => {
    e.preventDefault(); 
    let commandResponse, commandCode;;

    // Turn command to lowercase and split into an array of subcommands
    const subcommands = command.toLowerCase().split(" ");

    // Get command content and code
    try {
      commandResponse = commandTree[subcommands[0]].content;
      commandCode = commandTree[subcommands[0]].code;
    } catch (error) {
      commandResponse = commandTree.error;
    }

    // update console with command content
    setOutput(
      [
        output, 
        <div className="row">
          <p>C:\Users\DamonGreenhalgh{">"}</p>
          <p className="console__text">{command}</p>
        </div>,
        commandResponse
      ]
    )

    // Apply command logic based on the command code
    switch (commandCode) {
      case 0:    // 'cd' - change directory
        try {
          sectionRefs[commandTree[subcommands[0]][subcommands[1]].index].current.scrollIntoView();
          commandResponse = commandTree[subcommands[0]][subcommands[1]].content;
        } catch (error) {
          commandResponse = commandTree[subcommands[0]].error;
        }
        
        setOutput(
          [
            output, 
            <div className="row">
              <p>C:\Users\DamonGreenhalgh{">"}</p>
              <p className="console__text">{command}</p>
            </div>,
            commandResponse
          ]
        )
        
        break;
      case 1:    // 'cls' - clear screen 
        console.log("check");
        setOutput([]);    
        break;
      case 2:    // 'exit' - close window
        setMinimized(true);
        break;
      case 3:    // 'max' - maximize window
        setMaximized(true);
        break;
      case 4:    // 'min' - minimize window
        setMinimized(true);
        break;
      case 5:    // 'restore' - restore window
        setMaximized(false);
        break;
      default:    // code = -1, no action required
    }

    setCommand("");    // reset command input field
  } 

  /**
   * This useEffect hook just updates the width of the 
   * console input field to reduce the gap between the pointer and text.
   */
  useEffect(() => {
    inputRef.current.style.width = Math.max(1, command.length * 0.55) + "em";
  }, [command])

  return (
    <>
      <button 
        className={"console__button" + (minimized ? " console__button--minimized" : "") + (atTop ? " console__button--top" : "")}
        onClick={() => setMinimized(minimized ? false : true)}
        title="Display Console"
      >
        <AiFillCode size="3.5em" />
      </button>
      <div 
        className={
          "console" 
          + (maximized ? " console--maximized" : "") 
          + (minimized ? " console--minimized" : "") 
          + (drag ? " console--dragging" : "")
        } 
        onMouseLeave={() => setCommand("")}
        ref={consoleRef}
      >
        <div 
          className="titlebar"
          onMouseDown={(event) => {
            setDrag(true);
            setInitialMouse([Math.abs(event.clientX - consoleRef.current.getBoundingClientRect().left), Math.abs(event.clientY - consoleRef.current.getBoundingClientRect().top)]);
          }}
          onMouseUp={() => {
            setDrag(false);
          }}
          onMouseMove={(event) => {
            if (drag) {
              consoleRef.current.style.left = Math.max(Math.min(window.innerWidth - consoleRef.current.getBoundingClientRect().width, event.clientX - initialMouse[0]), 0) + "px"; 
              consoleRef.current.style.top = Math.max(Math.min(window.innerHeight - consoleRef.current.getBoundingClientRect().height, event.clientY - initialMouse[1]), 0) + "px";
            }
          }}
        >
          <div className="row gap" style={{marginRight: "auto", paddingLeft: ".5rem"}}>
            <AiFillCode size="1.5em" />
            <p>Command Prompt</p>
          </div>
          <button 
            className="titlebar__button"
            onClick={() => setMinimized(true)}
            title="Minimize"
          >
            <VscChromeMinimize size="1.25em" />
          </button>
          <button 
            className="titlebar__button"
            onClick={() => {setMaximized(maximized ? false : true)}}
            title={maximized ? "Restore Down" : "Maximize"}
          >
            {
              maximized ?
              <VscChromeRestore size="1.25em" /> :
              <VscChromeMaximize size="1.25em" />
            }
          </button>
          <button 
            className="titlebar__button titlebar__button--close"
            onClick={() => setMinimized(true)}
            title="Close"
          >
            <VscClose size="1.25em" />
          </button>
        </div>
        <div className="console__content">          
          <p>
            Damon Greenhalgh Portfolio [Version 1.0.0]<br />
            (c) 2022 Damon Greenhalgh. All rights reserved.
          </p>
          {output}
          <div className="row">
            <p>C:\Users\DamonGreenhalgh{">"}</p>
            <form onSubmit={(event) => submitCommand(event)}>
              <input 
                ref={inputRef} 
                className="console__input"
                type="text" 
                onChange={() => setCommand(inputRef.current.value)} 
                value={command}
              />
            </form>
            <div className="waiting-pointer" />
          </div>
        </div>  
      </div>
    </>
  );
}

export default Console;
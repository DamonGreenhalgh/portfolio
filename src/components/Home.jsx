
import './Home.css';
import { useEffect, useRef, useState } from 'react'; 
import { Link } from "react-scroll";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscClose
} from 'react-icons/vsc';

const Home = () => {
  const [command, setCommand] = useState("");
  const inputRef = useRef(null);
  const consoleRef = useRef(null);
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);
  const [output, setOutput] = useState([]);
  const [drag, setDrag] = useState(false);
  const [initialMouse, setInitialMouse] = useState([]);

  const commandTree = {
    "cd": {
      "about": {
        "content": <p>Change directory to About</p>,
        "code": 0
      },
      "projects": {
        "content": <p>Change directory to Projects</p>,
        "code": 1
      },
      "contact": {
        "content": <p>Change directory to Contact</p>,
        "code": 2
      },
      "..": {
        "content": <p>Return to root directory</p>,
        "code": 5
      },
      "code": 11
    },
    "cls": {
      "content": <p>Clear screen ...</p>,
      "code": 3
    },
    "exit": {
      "content": <p>Exit</p>,
      "code": 4
    },
    "help": {
      "content": 
      <p>
        CD    Change directory <br />
        CLS   Clear console window <br />
        EXIT  Close console <br />
        DIR   List all items within a directory
      </p>
    },
    "dir": {
      "content": 
      <>
        <p>Directory of C:\Users\DamonGreenhalgh</p>
        <nav className="col">
          <a href="" to="contact" onMouseEnter={() => setCommand("Resume.pdf")}>
            {"28/10/2077  03:15 PM                   Resume.pdf"}
          </a>
          <Link to="about" onMouseEnter={() => setCommand("cd about")}>
            {"25/12/1999  06:28 PM    <DIR>          about"}
          </Link>
          <Link to="projects" onMouseEnter={() => setCommand("cd projects")}>
            {"15/02/2022  10:59 PM    <DIR>          projects"}
          </Link>
          <Link to="contact" onMouseEnter={() => setCommand("cd contact")}>
            {"14/08/2004  07:04 AM    <DIR>          contact"}
          </Link>
        </nav>
      </>,
      "code": 6
    }
  }

  /**
   * This function parses the command string to determine the 
   * most appropriate action to take.
   * @param {*} e 
   */
  const submitCommand = (e) => {
    e.preventDefault(); 
    let commandResponse, commandCode;;
    let path = commandTree;

    // Turn command to lowercase and split into an array of subcommands
    const subcommands = command.toLowerCase().split(" ");

    // Iterate through each subcommand of the string and
    // path through the commandTree. If we hit a key error
    // return error state.
    try {
      for (let i = 0; i < subcommands.length; i++) {

          path = path[subcommands[i]];
        
      };
      commandResponse = path.content;
      commandCode = path.code;

    } catch (error) {
      commandResponse = <p>{"'" + command + "' is not recognized as an internal or external command,\noperable program or batch file."}</p>
    }

    // Update console with response
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

    // Apply command logic
    switch (commandCode) {
      case 0:
        window.scrollTo(0, window.innerHeight);
        break;
      case 1:
        window.scrollTo(0, window.innerHeight * 2);
        break;
      case 2:
        window.scrollTo(0, window.innerHeight * 3);
        break;
      case 3:    // 'cls' - clear screen command, clear console output
        setOutput([]);
        break;
      case 4:    // 'exit' - close window
        window.open('','_self').close();
        break;
      case 5:
        window.scrollTo(0, 0);
        break;
      default:
    }
    setCommand("");
  } 

  useEffect(() => {
    inputRef.current.style.width = Math.max(1, command.length * 0.55) + "em";
  }, [command])

  return (
    <div className="home">
      <div 
        className={"console" + (maximized ? " console--maximized" : "") + (minimized ? " console--minimized" : "") + (closed ? " disabled" : "") + (drag ? " console--dragging" : "")} 
        onMouseLeave={() => setCommand("")}
        ref={consoleRef}
      >
        <div 
          className="titlebar" 
          onMouseDown={(e) => {
            setDrag(true);
            setInitialMouse([Math.abs(e.clientX - consoleRef.current.getBoundingClientRect().left), Math.abs(e.clientY - consoleRef.current.getBoundingClientRect().top)]);
          }}
          onMouseUp={(e) => {
            setDrag(false);
          }}
          onMouseMove={(e) => {
            if (drag) {
              consoleRef.current.style.left = Math.max(Math.min(window.innerWidth - consoleRef.current.getBoundingClientRect().width, e.clientX - initialMouse[0]), 0) + "px"; 
              consoleRef.current.style.top = Math.max(Math.min(window.innerHeight - consoleRef.current.getBoundingClientRect().height, e.clientY - initialMouse[1]), 0) + "px";
            }
          }}
        >
          <button 
            className="titlebar__button"
            onClick={() => setMinimized(true)}
          >
            <VscChromeMinimize size="1.25em" />
          </button>
          <button 
            className="titlebar__button"
            onClick={() => {setMaximized(maximized ? false : true)}}
          >
            {
              maximized ?
              <VscChromeRestore size="1.25em" /> :
              <VscChromeMaximize size="1.25em" />
            }
          </button>
          <button 
            className="titlebar__button"
            onClick={() => setClosed(true)}
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
            <form onSubmit={(e) => submitCommand(e)}>
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
    </div>
  );
}

export default Home;
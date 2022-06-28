
import './Home.css';
import { useEffect, useRef, useState } from 'react'; 
import { Link } from "react-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscClose
} from 'react-icons/vsc';

const Home = (props) => {
    const [command, setCommand] = useState("");
    const inputRef = useRef(null);
    const [maximized, setMaximized] = useState(false);
    const [closed, setClosed] = useState(false);
    const [output, setOutput] = useState([]);

    const submitCommand = (e) => {
      e.preventDefault(); 
      console.log(command);

      setOutput(
        [output, <p>{"'" + command + "' is not recognized as an internal or external command,\noperable program or batch file."}</p>]
      )


      setCommand("");
    } 

    useEffect(() => {
      inputRef.current.style.width = Math.max(.5, command.length * 0.55) + "em";
    }, [command])
    return (
      <div className="home">
        <div className={"console" + (maximized ? " console--maximized" : "") + (closed ? " disabled" : "")} onMouseLeave={() => setCommand("")}>
          <div className="titlebar">
            <button 
              className="titlebar__button"
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
              Damon Greenhalgh Portfolio [Version 0.8.0]<br />
              (c) 2022 Damon Greenhalgh. All rights reserved.
            </p>
            <div className="row">
              <p>C:\Users{">"}</p>
              <p className="console__text">cd DamonGreenhalgh</p>
            </div>
            <div className="row">
              <p>C:\Users\DamonGreenhalgh{">"}</p>
              <p className="console__text">dir</p>
            </div>
            <p>Directory of C:\Users\DamonGreenhalgh</p>
            <nav className="col">
              <a href="" to="contact" onMouseEnter={() => setCommand("Resume.pdf")}>
                {"28/10/2077  03:15 PM                   Resume.pdf"}
              </a>
              <Link to="about" offset={props.offset} onMouseEnter={() => setCommand("cd About")}>
                {"25/12/1999  06:28 PM    <DIR>          About"}
              </Link>
              <Link to="projects" offset={props.offset} onMouseEnter={() => setCommand("cd Projects")}>
                {"15/02/2022  10:59 PM    <DIR>          Projects"}
              </Link>
              <Link to="contact" offset={props.offset} onMouseEnter={() => setCommand("cd Contact")}>
                {"14/08/2004  07:04 AM    <DIR>          Contact"}
              </Link>
            </nav>
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
        <Link to="about" offset={props.offset}>
          <BsChevronDoubleDown className="scroll-down interactable" size="3em" />
        </Link>
      </div>
    );
}

export default Home;
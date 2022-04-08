
import './Home.css';
import { useState } from 'react'; 
import { Link } from "react-scroll";
import { BsChevronDoubleDown } from 'react-icons/bs';

const Home = (props) => {
    const [command, setCommand] = useState("");
    return (
        <div className="home">
        <div className="console" onMouseLeave={() => setCommand("")}>
          <div className="titlebar">
            <div className="titlebar__button" style={{backgroundColor: "#5fc252"}}/>
            <div className="titlebar__button" style={{backgroundColor: "#f4c151"}}/>
            <div className="titlebar__button" style={{backgroundColor: "#ec6a5c"}}/>
          </div>
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
          <div className="row">
            <p>C:\Users\DamonGreenhalgh{">"}</p>
            <p className="console__text">{command}</p>
            <div className="waiting-pointer" />
          </div>
        </div>  
        <Link to="about" offset={props.offset}>
          <BsChevronDoubleDown className="scroll-down interactable" size="3em" />
        </Link>
      </div>
    );
}

export default Home;
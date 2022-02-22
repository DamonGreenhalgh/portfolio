import './Navbar.css';
import logo from '../images/logo.png';
import { useState } from 'react';
import { Link } from "react-scroll";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = (props) => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [command, setCommand] = useState("");
    let basePath = props.isMobile ? "C:" : "C:\\Users\\DamonGreenhalgh";

    // Determine the appropriate orientation of the expand/contract icons.
    const expandIcon = props.isMobile ? <BsChevronDown /> : <BsChevronUp />;
    const contractIcon = props.isMobile ? <BsChevronUp /> : <BsChevronDown />;

    return (
        <nav className="navbar">
            <a href="" className="brand interactable"><img src={logo} /></a>
            <div 
                className="searchbar interactable" 
                onClick={() => setExpandNavbar(expandNavbar ? false : true)}
                onMouseLeave={() => {setCommand(""); setExpandNavbar(false)}}
                style={{opacity: props.displayNav ? "1" : "0"}}
            >
            <div className="flex center-items">
                <p>{basePath + props.path + ">"}</p>  
                <p className="console__text">{command}</p>
                <div className="waiting-pointer" />
                {expandNavbar ? expandIcon : contractIcon}
            </div>
            <div className={expandNavbar ? "flex-column" : "disabled"} >
                <Link to="home" onMouseEnter={() => setCommand("cd ..")}>
                    {"cd .."}
                </Link>
                <Link to="about" onMouseEnter={() => setCommand("cd About")} offset={props.offset}>
                    {"cd About"}
                </Link>
                <Link to="projects" onMouseEnter={() => setCommand("cd Projects")} offset={props.offset}>
                    {"cd Projects"}
                </Link>
                <Link to="contact" onMouseEnter={() => setCommand("cd Contact")} offset={props.offset}>
                    {"cd Contact"}
                </Link>
            </div>
            </div>
            <button 
                className={"theme-toggle theme--" + (isDarkMode ? "dark" : "light")} 
                onClick={() => setIsDarkMode(isDarkMode ? false : true)}
            >
                {isDarkMode ? <MdLightMode size="2.5em" />: <MdDarkMode size="2.5em" />}
            </button>
      </nav>
    );
}

export default Navbar;
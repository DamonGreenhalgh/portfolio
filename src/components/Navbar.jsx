import './Navbar.css';
import themesJSON from '../themes.json';
import brand from '../images/logo.png';
import { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = (props) => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [command, setCommand] = useState("");
    let basePath = props.isMobile ? "C:" : "C:\\Users\\DamonGreenhalgh";

    const changeTheme = () => {

        setIsDarkMode(isDarkMode ? false : true)
        const type = isDarkMode ? "dark" : "light";
        
        const keys = Object.keys(themesJSON[type].colors);
        const values = Object.values(themesJSON[type].colors)
        for (let i = 0; i < 14; i++) {
            document.documentElement.style.setProperty(keys[i], values[i]);
        }

    }

    useEffect(() => {
        changeTheme();
    }, [])

    return (
        <nav className="navbar">
            <a href="" className="brand interactable"><img src={brand} /></a>
            <div 
                className="searchbar interactable" 
                onMouseEnter={() => setExpandNavbar(expandNavbar ? false : true)}
                onMouseLeave={() => {setCommand(""); setExpandNavbar(false)}}
                style={{opacity: props.displayNav ? "1" : "0"}}
            >
            <div className="row align-center">
                <p>{basePath + props.path + ">"}</p>  
                <p className="console__text">{command}</p>
                <div className="waiting-pointer" />
            </div>
            <div className={expandNavbar ? "options options--active" : "options"} >
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
                className="theme" 
                onClick={changeTheme}
            >
                {isDarkMode ? <MdDarkMode size="2em" /> : <MdLightMode size="2em" />}
            </button>
      </nav>
    );
}

export default Navbar;
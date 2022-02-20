import './App.css';
import './utility.css';
import logo from './images/logo.png';
import resume from './Resume.pdf';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from 'react';
import { BsChevronDoubleDown, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function App() {
  const [navLbl, setNavLbl] = useState(null);
  const [path, setPath] = useState("");
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navbar = useRef(null);
  const isMobile = window.innerWidth < 900 ? true : false;
  let pathBase = isMobile ? "C:" : "C:\\Users\\DamonGreenhalgh";

  // Determine the appropriate orientation of the expand
  // and contract searchbar icons.
  let expandIcon, contractIcon;
  if (isMobile) {
    expandIcon = <BsChevronDown />;
    contractIcon = <BsChevronUp />;
  } else {
    expandIcon = <BsChevronUp />;
    contractIcon = <BsChevronDown />;
  }

  // This 'onscroll' listener is used for changing the navigation display 
  // depending on where the user is on the page.
  const listenScrollEvent = () => {
    navbar.current.style.opacity = window.scrollY < 250 ? "0" : "1";
    if (800 < window.scrollY && window.scrollY < 1000) {
      setPath(() => "\\About");  
    } else if (1000 < window.scrollY && window.scrollY < 1200) {
      setPath(() => "\\Projects"); 
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, [])

  return (
    <div className="app">
      <div className="home__background" />
      <Link to="home" className="brand"><img src={logo} /></Link>
      <div className="searchbar" ref={navbar} onClick={() => setExpandNavbar(expandNavbar ? false : true)}>
        <div className="flex center-items">
          <p>{pathBase + path + ">"}</p>  
          <p className="console__text">{navLbl}</p>
          <div className="waiting-pointer" />
          {expandNavbar ? expandIcon : contractIcon}
        </div>
        <div className={expandNavbar ? "flex-column" : "disabled"} onMouseLeave={() => setNavLbl("")}>
          <Link to="home" onMouseEnter={() => setNavLbl("cd ..")}>{"cd .."}</Link>
          <Link to="about" onMouseEnter={() => setNavLbl("cd About")}>{"cd About"}</Link>
          <Link to="projects" onMouseEnter={() => setNavLbl("cd Projects")}>{"cd Projects"}</Link>
          <Link to="contact" onMouseEnter={() => setNavLbl("cd Contact")}>{"cd Contact"}</Link>
        </div>
      </div>
      <button className={"theme-toggle theme--" + (isDarkMode ? "dark" : "light")} onClick={() => setIsDarkMode(isDarkMode ? false : true)}>
        {isDarkMode ? <MdLightMode size="2.5em" />: <MdDarkMode size="2.5em" />}
      </button>
      <div className="home">
        <h1 className="home__header">Hi There!</h1>
        <BsChevronDoubleDown className="scroll-down" size="3em" />
        <div className="console">
          <div className="titlebar">
            <div className="titlebar__button red" />
            <div className="titlebar__button yellow" />
            <div className="titlebar__button green" />
          </div>
          <p>
            Damon Greenhalgh Portfolio [Version 0.4.1]<br />
            (c) 2022 Damon Greenhalgh. All rights reserved.
          </p>
          <div className="flex">
            <p>C:\Users{">"}</p>
            <p className="console__text">cd DamonGreenhalgh</p>
          </div>
          <div className="flex">
            <p>C:\Users\DamonGreenhalgh{">"}</p>
            <p className="console__text">dir</p>
          </div>
          <p>Directory of C:\Users\DamonGreenhalgh</p>
          <nav className="flex-column" onMouseLeave={() => setNavLbl("")}>
            <a href="" to="contact" onMouseEnter={() => setNavLbl("Resume.pdf")}>28/10/2017  03:15 PM {"     "} Resume.pdf</a>
            <Link to="about" onMouseEnter={() => setNavLbl("cd About")}>25/12/1999  06:28 PM {"<DIR>"} About</Link>
            <Link to="projects" onMouseEnter={() => setNavLbl("cd Projects")}>15/02/2022  10:59 PM {"<DIR>"} Projects</Link>
            <Link to="contact" onMouseEnter={() => setNavLbl("cd Contact")}>14/08/2004  07:04 AM {"<DIR>"} Contact</Link>
          </nav>
          <div className="flex">
            <p>C:\Users\DamonGreenhalgh{">"}</p>
            <p className="console__text">{navLbl}</p>
            <div className="waiting-pointer" />
          </div>
        </div>  
      </div>
      <div className="filler" />
      <About />
      <Projects updatePath={setPath} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

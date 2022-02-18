import './App.css';
import './utility.css';
import resume from './Resume.pdf';
import About from './components/About';
import Projects from './components/Projects';
import Techstack from './components/Techstack';
import Footer from './components/Footer';
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from 'react';
import { BsChevronDoubleDown, BsChevronDown, BsChevronUp } from 'react-icons/bs';

function App() {
  const [navLbl, setNavLbl] = useState(null);
  const [path, setPath] = useState("");
  const navbar = useRef(null);
  const [expandNavbar, setExpandNavbar] = useState(false);

  // This 'onscroll' listener is used for changing the navigation display 
  // depending on where the user is on the page.
  const listenScrollEvent = () => {
    console.log(window.scrollY);
    let opacityValue;
    window.scrollY < 250 ? opacityValue = "0" : opacityValue = "1";
    navbar.current.style.opacity = opacityValue;
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
      <nav className="navbar" ref={navbar} onClick={() => setExpandNavbar(expandNavbar ? false : true)}>
        <p>C:\Users\DamonGreenhalgh{path + ">"}</p>
        <p className="console__text">{navLbl}</p>
        <div className="waiting-pointer" />
        {expandNavbar ? <BsChevronUp />: <BsChevronDown />}
        <div className={expandNavbar ? "navbar__selection" : "disabled"} onMouseLeave={() => setNavLbl("")}>
          <Link to="home" onMouseEnter={() => setNavLbl("cd ..")}>{"cd .."}</Link>
          <Link to="about" onMouseEnter={() => setNavLbl("cd About")}>{"cd About"}</Link>
          <Link to="projects" onMouseEnter={() => setNavLbl("cd Projects")}>{"cd Projects"}</Link>
          <Link to="tech" onMouseEnter={() => setNavLbl("cd Tech")}>{"cd Tech"}</Link>
          <Link to="contact" onMouseEnter={() => setNavLbl("cd Contact")}>{"cd Contact"}</Link>
        </div>
      </nav>
      
      <div className="home">
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
            <a href="" to="contact" onMouseEnter={() => setNavLbl("Resume.pdf")}>28/10/2017  03:15 PM                   Resume.pdf</a>
            <Link to="about" onMouseEnter={() => setNavLbl("cd About")}>25/12/1999  06:28 PM    {"<DIR>"}          About</Link>
            <Link to="projects" onMouseEnter={() => setNavLbl("cd Projects")}>15/02/2022  10:59 PM    {"<DIR>"}          Projects</Link>
            <Link to="tech" onMouseEnter={() => setNavLbl("cd Tech")}>22/02/2077  12:01 AM    {"<DIR>"}          Tech</Link>
            <Link to="contact" onMouseEnter={() => setNavLbl("cd Contact")}>14/08/2004  07:04 AM    {"<DIR>"}          Contact</Link>
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
      {/* <Techstack /> */}
      <Footer />
    </div>
  );
}

export default App;

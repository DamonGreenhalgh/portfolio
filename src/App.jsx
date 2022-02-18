import './App.css';
import './utility.css';
import resume from './Resume.pdf';
import About from './components/About';
import Projects from './components/Projects';
import Techstack from './components/Techstack';
import Footer from './components/Footer';
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';

function App() {
  const [navLbl, setNavLbl] = useState(null);
  const [path, setPath] = useState("");
  const navbar = useRef(null);

  // This 'onscroll' listener is used for changing the navigation display 
  // depending on where the user is on the page.
  const listenScrollEvent = (event) => {
    let opacityValue;
    window.scrollY < 250 ? opacityValue = "0" : opacityValue = "1";
    navbar.current.style.opacity = opacityValue;
    if (250 < window.scrollY && window.scrollY < 300) {
      setPath(() => "\\Projects");  
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, [])

  return (
    <div className="app">
      <nav className="navbar" ref={navbar}>
        <p>C:\Users\DamonGreenhalgh{path + ">"}</p>
        <div className="waiting-pointer" />
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
            Damon Greenhalgh Portfolio [Version 0.0.1]<br />
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
          <nav className="flex-column">
            <a href="" to="contact" onMouseEnter={() => setNavLbl("Resume.pdf")}>28/10/2017  03:15 PM                   Resume.pdf</a>
            <Link to="about" onMouseEnter={() => setNavLbl("README.md")}>25/12/1999  06:28 PM                   README.md</Link>
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

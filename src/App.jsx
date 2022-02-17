import './App.css';
import resume from './Resume.pdf';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from 'react';

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
      <nav className="navbar flex" ref={navbar}>
        <p>C:\Users\DamonGreenhalgh{path + ">"}</p>
        <div className="cmd-waiting" />
      </nav>
      <div className="home-header">
        <div className="code-window">
          <div className="task-bar">
            <div className="decorative-button red" />
            <div className="decorative-button yellow" />
            <div className="decorative-button green" />
          </div>
          <p>
            Damon Greenhalgh Portfolio [Version 0.0.1]<br />
            (c) 2022 Damon Greenhalgh. All rights reserved.
          </p>
          <div className="flex">
            <p>C:\Users{">"}</p>
            <p className="bright">cd DamonGreenhalgh</p>
          </div>
          <div className="flex">
            <p>C:\Users\DamonGreenhalgh{">"}</p>
            <p className="bright">dir</p>
          </div>
          <p>Directory of C:\Users\DamonGreenhalgh</p>
          <nav className="flex-column">
            <a href={resume} to="contact" onMouseEnter={() => setNavLbl("Resume.pdf")}>28/10/2017  03:15 PM                   Resume.pdf</a>
            <Link to="about" onMouseEnter={() => setNavLbl("README.md")}>25/12/1999  06:28 PM                   README.md</Link>
            <Link to="projects" onMouseEnter={() => setNavLbl("cd Projects")}>15/02/2022  10:59 PM    {"<DIR>"}          Projects</Link>
            <Link to="tech" onMouseEnter={() => setNavLbl("cd Tech")}>22/02/2077  12:01 AM    {"<DIR>"}          Tech</Link>
            <Link to="contact" onMouseEnter={() => setNavLbl("cd Contact")}>14/08/2004  07:04 AM    {"<DIR>"}          Contact</Link>
          </nav>
          <div className="flex">
            <p>C:\Users\DamonGreenhalgh{">"}</p>
            <p className="bright">{navLbl}</p>
            <div className="cmd-waiting" />
          </div>
        </div>  
      </div>
      <Projects updatePath={setPath} />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import './utility.css';
import resume from './Resume.pdf';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [path, setPath] = useState("");
  const offset = -200;
  const isMobile = window.innerWidth < 900 ? true : false;
  const [displayNav, setDisplayNav] = useState(false);

  // This 'onscroll' listener is used for changing the navigation display 
  // depending on where the user is on the page.
  const listenScrollEvent = () => {

    // Only display the navbar when not at the top of the page.
    window.scrollY < 250 ? setDisplayNav(false) : setDisplayNav(true);

    // Determine the path to display.
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
      <Navbar isMobile={isMobile} offset={offset} path={path} displayNav={displayNav}/>
      <Home offset={offset}/>
      <About />
      <Projects setPath={setPath} />
      <Contact />
      <Footer />
      <div className="sidebar" />
      <div className="mainbar" />
    </div>
  );
}

export default App;

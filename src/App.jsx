import './App.css';
import './utility.css';
import Navbar from './components/Navbar';
import Console from './components/Console';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect, useRef, useMemo } from 'react';

function App() {

  const [atTop, setAtTop] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [sectionIndex, setSectionIndex] = useState(0);
  const prevScrollRef = useRef(0);

  // references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = useMemo(() => [homeRef, aboutRef, projectsRef, contactRef], []);

  /**
   * This useEffect hook handles all scroll position dependent states.
   */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const windowHeight = window.innerHeight;

      // check if user has scrolled into a new section
      sectionRefs.forEach((section, index) => {
        if (Math.abs(section.current.getBoundingClientRect().top) < 3 * windowHeight / 4) {
          setSectionIndex(index);
        }
      });

      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
      
      // check if user is scrolling up to reveal navbar
      if (prevScrollRef.current > window.scrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScrollRef.current = window.scrollY;
    });
  }, [sectionRefs])
    
  return (
    <div className="app">
      <Navbar atTop={atTop} showNav={showNav} />
      <Console atTop={atTop} sectionRefs={sectionRefs} />
      <Home sectionIndex={sectionIndex} sectionRef={homeRef} />
      <About sectionIndex={sectionIndex} sectionRef={aboutRef} />
      <Projects sectionIndex={sectionIndex} sectionRef={projectsRef} />
      <Contact sectionIndex={sectionIndex} sectionRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;

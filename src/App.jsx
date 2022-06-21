import './App.css';
import './utility.css';
import resume from './data/Resume.pdf';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const offset = -200;
  
  return (
    <div className="app">
      <Home offset={offset}/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

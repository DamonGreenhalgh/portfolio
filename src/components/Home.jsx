import '../styles/Home.css';
import { useRef } from 'react';
import { useAnimationDelay } from '../hooks/useAnimationDelay';

const Home = (props) => {
  const { sectionIndex, sectionRef } = props
  const animationRef = useRef(null);
  useAnimationDelay(animationRef, true, 1, window.innerWidth < 700 ? 0 : 1500, 1, 1, sectionIndex === 0);
  return(
    <div className="home" id="home" ref={sectionRef}>
      <div className="home__content" ref={animationRef}>
        <div className="home__hero-container">
          <h1>Hi! I'm</h1>
          <h1 className="home__hero-text">Damon.</h1>
        </div>
        <h3>I like to <b>build</b> and <b style={{fontFamily: "ArchitectsDaughter"}}>doodle</b> stuff.</h3>
        <button 
          onClick={() => window.scrollTo(0, window.innerHeight)} 
          title="Show More"
        >
          / show me!
        </button>
      </div>
    </div>
  );
}

export default Home;
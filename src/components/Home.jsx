import '../styles/Home.css';
import resume from '../assets/resume.pdf';

const Home = () => {
  return(
    <div className="home" id="home">
      <div className="home__content">
        <h1>Hi! I'm Damon</h1>
        <h3>I like to build stuff.</h3>
        <div className='home__button-container'>
          <a 
            href={resume}
            className='home__button home__button--alt'
            target="_blank"
            rel="noreferrer"
          >
            {"$ resume.pdf"}
          </a> 
          <button 
            onClick={() => window.scrollTo(0, window.innerHeight)} 
            title="Show More"
            className='home__button'
          >
            {"$ cd show_more"}
          </button>
           
        </div>
      </div>
    </div>
  );
}

export default Home;
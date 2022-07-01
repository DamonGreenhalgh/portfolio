import '../styles/Home.css';

const Home = () => {

  return(
    <div className="home">
      <div className="home__content">
        <div className="row align-center gap">
          <h1>Hi! I'm</h1>
          <h1 className="home__hero-text">Damon.</h1>
        </div>
        <h3>I build things.</h3>
        <button 
          onClick={() => window.scrollTo(0, window.innerHeight)} 
          title="Show More"
        >
          Show Me!
        </button>
      </div>
    </div>
  );
}

export default Home;
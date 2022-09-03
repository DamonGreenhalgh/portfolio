import '../styles/Home.css';

const Home = () => {
  return(
    <div className="home" id="home">
      <div className="home__content">
        <h1>Hi! I'm Damon</h1>
        <h3>I like to build stuff.</h3>
        <button 
          onClick={() => window.scrollTo(0, window.innerHeight)} 
          title="Show More"
        >
          {"> cd show_more"}
        </button>
      </div>
    </div>
  );
}

export default Home;
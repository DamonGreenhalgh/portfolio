import '../styles/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Link to="/dev" className='section section--dev'>
        <h2>DEV</h2>
        <button className='home__button home__button--dev'>{"$ cd dev"}</button>
        <div className='section__background section__background--dev' />
      </Link>
      <Link to="/art" className='section section--art'>
        <h2>ART</h2>
        <button className='home__button home__button--art'>Show Me!</button>
        <div className='section__background section__background--art' />  
      </Link>
    </div>
  );
}

export default App;

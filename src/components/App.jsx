import '../styles/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className='section'>
        <h2>ART</h2>
        <Link to="/art" className='home__button home__button--art'>Show Me!</Link>
        <div className='section__background section__background--art' />  
      </div>
      <div className='section'>
        <h2>DEV</h2>
        <Link to="/dev" className='home__button home__button--dev'>{"$ cd dev"}</Link>
        <div className='section__background section__background--dev' />
      </div>
    </div>
  );
}

export default App;

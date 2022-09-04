import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Console from './components/Console';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

import Art from './pages/Art';
import Dev from './pages/Dev';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import './utility.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<App />} 
        />
        <Route 
          path="/dev" 
          element={
            <>
              <Console />
              <Home />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/art"
          element={<Art />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

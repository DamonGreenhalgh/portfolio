import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/art" element={<Art />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

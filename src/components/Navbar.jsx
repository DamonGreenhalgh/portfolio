import '../styles/Navbar.css';
import brand from '../images/logo.png';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';
import { useAnimationDelay } from '../hooks/useAnimationDelay';

const Navbar = (props) => {
    const { atTop, showNav } = props;
    const animationRef = useRef(null);
    useAnimationDelay(animationRef, true, 0, 0, 6, .5, true);
    return(
        <nav 
            className={
                "navbar" 
                + (atTop ? " navbar--top" : "") 
                + (showNav ? " navbar--show" : "")
            }
            ref={animationRef}
        >
            <button onClick={() => window.location.reload()} >
                <img src={brand} className="navbar__brand" alt="Brand" />
            </button>
            <a href="#home" className="navbar__item">/ home</a>
            <a href="#about" className="navbar__item">/ about</a>
            <a href="#projects" className="navbar__item">/ projects</a>
            <a href="#contact" className="navbar__item">/ contact</a>
            <a
                href="https://github.com/DamonGreenhalgh"
                target="_blank"
                rel="noreferrer"
                title="Github"
                alt="Github"
                style={{marginLeft: "auto"}}
                className="navbar__item"
            >
                <FaGithub size="1.25em"/>
            </a>
            <a
                href="https://www.linkedin.com/in/damon-greenhalgh-2a11b6191/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                alt="LinkedIn"
                className="navbar__item"
            >
                <FaLinkedinIn size="1.25em"/>
            </a>
            <a
                href="mailto: damonligreenhalgh@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Email"
                alt="Email"
                className="navbar__item"
            >
                <MdEmail size="1.25em"/>
            </a>
        </nav>
    );
}

export default Navbar;
import '../styles/Navbar.css';
import brand from '../images/logo.png';
import { FaGithub, FaLinkedinIn, FaArtstation } from 'react-icons/fa';
import { MdEmail, MdMenu, MdClose } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import { useAnimationDelay } from '../hooks/useAnimationDelay';

const Navbar = (props) => {
    const { atTop, showNav } = props;
    const [burger, setBurger] = useState(false);
    const [displayPanel, setDisplayPanel] = useState(false);
    const animationRef = useRef(null);
    useAnimationDelay(animationRef, true, 0, 0, 6, .5, true);

    const checkResize = () => {
        setBurger(() => window.innerWidth < 900 ? true : false)
    }

    useEffect(() => {
        checkResize();
        window.addEventListener('resize', () => {
            checkResize();
        });
    }, [])

    return(        
        <nav 
            className={
                "navbar"
                + (displayPanel ? " navbar--panel" : "")
                + (atTop ? " navbar--top" : "") 
                + (showNav ? " navbar--show" : "")
            }
            ref={animationRef}
        >
            <button onClick={() => window.location.reload()} className="navbar__brand">
                <img src={brand} style={{maxWidth: "3rem"}} alt="Brand" />
            </button>
            {
                burger ?
                <button className="navbar__burger" onClick={() => setDisplayPanel(displayPanel ? false : true)}>
                    {
                        displayPanel ? 
                        <MdClose size="2em" /> :
                        <MdMenu size="2em" />
                    }
                </button> :
                null
            }  
            {
                (burger && displayPanel) || !burger ?
                <>
                    <a href="#home" className="navbar__item navbar__item--section" style={{marginLeft: burger ? "0" : "4rem"}}>Home</a>
                    <a href="#about" className="navbar__item navbar__item--section">About</a>
                    <a href="#projects" className="navbar__item navbar__item--section">Projects</a>
                    <a href="#gallery" className="navbar__item navbar__item--section">Artworks</a>
                    <a href="#contact" className="navbar__item navbar__item--section">Contact</a>
                    <div className="row gap" style={{margin: burger ? "auto 0 0 0" : "0 0 0 auto"}}>
                        <a
                            href="https://github.com/DamonGreenhalgh"
                            target="_blank"
                            rel="noreferrer"
                            title="Github"
                            alt="Github"
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
                            href="https://www.artstation.com/damongreenhalgh"
                            target="_blank"
                            rel="noreferrer"
                            title="Email"
                            alt="Email"
                            className="navbar__item"
                        >
                            <FaArtstation size="1.25em" />
                        </a>
                        <a
                            href="mailto: damonligreenhalgh@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            title="Email"
                            alt="Email"
                            className="navbar__item"
                        >
                            <MdEmail size="1.25em" />
                        </a>
                    </div>
                </> :
                null
            }
        </nav>
    );
}

export default Navbar;
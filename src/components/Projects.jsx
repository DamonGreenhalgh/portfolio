import './Projects.css';
import Divider from './Divider';
import techJSON from '../data/techstack.json';
import { useRef, useState } from 'react';
import { 
    FaGithub,
    FaDownload,
    FaFileCode } from 'react-icons/fa';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

import xivtrackerIcon from '../images/xivtracker.png';
import xivtrackerHero from '../images/xivtracker-hero.png';
import xivtrackerSS1 from '../images/screenshots/xivtracker/1.png';
import xivtrackerSS2 from '../images/screenshots/xivtracker/2.png';
import xivtrackerSS3 from '../images/screenshots/xivtracker/3.png';
import xivtrackerSS4 from '../images/screenshots/xivtracker/4.png';
import xivtrackerSS5 from '../images/screenshots/xivtracker/5.png';
import conwaysGameOfLifeIcon from '../images/conways-game-of-life.png';
import conwaysGameOfLifeHero from '../images/conways-game-of-life-hero.png';
import conwaysGameOfLifeSS1 from '../images/screenshots/conways-game-of-life/1.png';
import conwaysGameOfLifeSS2 from '../images/screenshots/conways-game-of-life/2.png';
import CGOLRules1 from '../images/screenshots/conways-game-of-life/rules-1.png';
import CGOLRules2 from '../images/screenshots/conways-game-of-life/rules-2.png';
import CGOLRules3 from '../images/screenshots/conways-game-of-life/rules-3.png';
import CGOLRules4 from '../images/screenshots/conways-game-of-life/rules-4.png';
import CGOLRules5 from '../images/screenshots/conways-game-of-life/rules-5.png';
import CGOLRules6 from '../images/screenshots/conways-game-of-life/rules-6.png';
import matrixPackageIcon from '../images/matrix-package.png';

import Project from './Project';

const Projects = () => {
    const [currentBlog, setCurrentBlog] = useState([1, 0, 0, 0]);
    const blogs = useRef(null);
    const iconSize = "1.5em";
    const linkBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    // This function is used to set the current project to display.
    // We set '1' at index to set that page visible, and '0' everwhere
    // else.
    const setPage = (index) => {
        const newCurrentBlog = [0, 0, 0, 0];
        newCurrentBlog[index] = 1;
        setCurrentBlog(() => newCurrentBlog);
    }
    return (
        <div className="projects" id="projects">
            <div className="projects__panel">
                <button 
                    className={"project-card " + (currentBlog[1] ? "project-card--active" : "")}
                    title="XIV Tracker" 
                    onClick={() => setPage(1)}>
                    <img src={xivtrackerIcon} alt="XIV Tracker Icon" />
                </button>
                <button 
                    className={"project-card " + (currentBlog[2] ? "project-card--active" : "")} 
                    title="Conway's Game of Life" 
                    onClick={() => setPage(2)}>
                    <img src={conwaysGameOfLifeIcon} alt="Conway's Game of Life Icon"/>
                </button>
                <button 
                    className={"project-card " + (currentBlog[3] ? "project-card--active" : "")}
                    title="Matrix Package" 
                    onClick={() => setPage(3)}>
                    <img src={matrixPackageIcon} alt="Matrix Package Icon"/>
                </button>
            </div>
            <div className="relative" ref={blogs}>
                {/* Default Project */}
                <div className={currentBlog[0] ? "blog" : "disabled"}>
                    <div className="default-project">
                        <FaFileCode size="2em" />
                        <div className="default-project__text">
                            <h2>No Projects Selected!</h2>
                            <p>Select a project on the left to view.</p>
                        </div>
                        <BsArrowReturnLeft size="2em" />
                    </div>     
                </div>
                {/* XIV Tracker */}
                <div className={currentBlog[1] ? "blog" : "disabled"}>
                    <div className="blog__header">
                        <div className="row gap-sm">
                            <img src={linkBase + techJSON.html.icon} className="blog__tools" title={techJSON.html.name} alt={techJSON.html.name} />
                            <img src={linkBase + techJSON.css.icon} className="blog__tools" title={techJSON.css.name} alt={techJSON.css.name} />
                            <img src={linkBase + techJSON.js.icon} className="blog__tools" title={techJSON.js.name} alt={techJSON.js.name} />
                            <img src={linkBase + techJSON.reactjs.icon} className="blog__tools" title={techJSON.reactjs.name} alt={techJSON.reactjs.name} />
                        </div>
                        <div className="row gap-sm">
                            <a href="https://damongreenhalgh.github.io/xivtracker/">
                                <CgWebsite size={iconSize} title="XIV Tracker"/> 
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/xivtracker/archive/refs/heads/main.zip">
                                <FaDownload size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/xivtracker">
                                <FaGithub size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <img className="blog__hero" src={xivtrackerHero} alt="XIV Tracker Hero"/>     
                    <p>
                        <a 
                        className="link" 
                        href="https://damongreenhalgh.github.io/xivtracker/">
                            XIV Tracker
                        </a>
                        {" "}is a web application to help players keep track of their 
                        character progression through <b>Final Fantasy XIV</b>. The 
                        web app utilizes the community made{" "} 
                        <a
                        className="link"
                        href="https://xivapi.com/">
                            XIVAPI
                        </a>
                        {" "}for all its RESTful requests. <b>FINAL FANTASY XIV 
                        CONTENT IS PROPERTY OF SQUARE ENIX CO,. LTD.</b>
                    </p>
                </div>
                {/* Conway's Game of Life */}
                <div className={currentBlog[2] ? "blog" : "disabled"}>
                    <div className="blog__header">
                        <img src={linkBase + techJSON.java.icon} className="blog__tools" title={techJSON.java.name} alt={techJSON.java.name} />
                        <div className="row gap-sm">
                            <a href="https://github.com/DamonGreenhalgh/conways-game-of-life-app/archive/refs/heads/main.zip">
                                <FaDownload size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/conways-game-of-life-app">
                                <FaGithub size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <img className="blog__hero" src={conwaysGameOfLifeHero} alt="Conway's Game of Life Hero"/>
                    <h2>Conway's Game of Life</h2>
                    <Divider />
                    <p>A fun little application that simulates the rules and constraints of <b><i>Conway's Game of Life.</i></b></p>
                </div> 
                {/* Matrix Package */}
                <div className={currentBlog[3] ? "blog" : "disabled"}>
                    <div className="blog__header">
                        <img src={linkBase + techJSON.java.icon} className="blog__tools" title={techJSON.java.name} alt={techJSON.java.name} />
                        <div className="row gap-sm">
                            <a href="https://github.com/DamonGreenhalgh/matrix-package/archive/refs/heads/main.zip">
                                <FaDownload size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/matrix-package">
                                <FaGithub size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <h2>Matrix Package for Java</h2>
                    <Divider />
                    <p>
                        This package implements the matrix mathematical 
                        structure for Java.
                    </p>   
                </div>
            </div>
        </div>
    );
}

export default Projects;
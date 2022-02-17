import './Projects.css';
import { useRef, useState } from 'react';
import { 
    FaGithub,
    FaHtml5, 
    FaCss3, 
    FaReact, 
    FaJava,
    FaLink,
    FaDownload,
    FaFileCode } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { BsArrowReturnLeft } from 'react-icons/bs';

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

const Projects = (props) => {
    const [currentBlog, setCurrentBlog] = useState([1, 0, 0, 0]);
    const blogs = useRef(null);
    const paths = [
        "\\Projects",
        "\\Projects\\XIVTracker",
        "\\Projects\\ConwaysGameOfLife",
        "\\Projects\\MatrixPackage"
    ];
    const iconSize = "1.5em";
    const setPage = (index) => {
        const newCurrentBlog = [0, 0, 0, 0];
        newCurrentBlog[index] = 1;
        setCurrentBlog(() => newCurrentBlog);
        props.updatePath(() => paths[index]);
    }
    return (
        <div className="projects" id="projects">
            <div className="title">
                <h2>Projects</h2>
                <div className="divider-horizontal" />
            </div>
            <div className="flex-column gap-md center relative">
                <div className="filler" />   
                <button className={"project-card " + (currentBlog[1] ? "project-card--active" : "")} title="XIV Tracker" onClick={() => setPage(1)}>
                    <img className="project-icon" src={xivtrackerIcon} alt="XIV Tracker Icon" />
                </button>
                <button className={"project-card " + (currentBlog[2] ? "project-card--active" : "")} title="Conway's Game of Life" onClick={() => setPage(2)}>
                    <img className="project-icon" src={conwaysGameOfLifeIcon} alt="Conway's Game of Life Icon"/>
                </button>
                <button className={"project-card " + (currentBlog[3] ? "project-card--active" : "")} title="Matrix Package" onClick={() => setPage(3)}>
                    <img className="project-icon" src={matrixPackageIcon} alt="Matrix Package Icon"/>
                </button>
            </div>
            <div className="relative" ref={blogs}>
                {/* Default Project */}
                <div className={currentBlog[0] ? "blog" : "disabled"}>
                    <div className="default-project">
                        <FaFileCode size="2em" />
                        <div className="flex-column center-items">
                            <h2>No Project Selected!</h2>
                            <p>Select a project on the left to view.</p>
                        </div>
                        
                        <BsArrowReturnLeft size="2em" />
                    </div>     
                </div>
                {/* XIV Tracker */}
                <div className={currentBlog[1] ? "blog" : "disabled"}>
                    <div className="blog-header">
                        <div className="flex gap-sm">
                            <FaHtml5 size={iconSize} color="var(--color-html)" title="HTML5" />  
                            <FaCss3 size={iconSize} color="var(--color-css)" title="CSS3" />  
                            <SiJavascript size={iconSize} color="var(--color-js)" title="Javascript" />  
                            <FaReact size={iconSize} color="var(--color-react)" title="ReactJS"/> 
                        </div>
                        <div className="flex gap-sm">
                            <a href="https://damongreenhalgh.github.io/xivtracker/">
                                <FaLink className="social-icon" size={iconSize} title="XIV Tracker"/> 
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/xivtracker/archive/refs/heads/main.zip">
                                <FaDownload className="social-icon" size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/xivtracker">
                                <FaGithub className="social-icon" size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <img className="blog-hero" src={xivtrackerHero} alt="XIV Tracker Hero"/>     
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
                    <h2>Features</h2>
                    <div className="divider-horizontal" />
                    <p>Current features of the app include the following,</p>
                    <ul>
                        <li>Character Display</li>
                        <li>Glamour</li>
                        <li>Current Attributes</li>
                        <li>Collection (Mounts and Minions)</li>
                        <li>Jobs</li>
                        <li>Quests and Encounter Completion</li>
                        <li>Free Company</li>
                    </ul>
                    <h2>Screenshots</h2>
                    <div className="divider-horizontal" />
                    <img src={xivtrackerSS1} alt="Home Page" />
                    <img src={xivtrackerSS2} alt="Equipment and Stats" />
                    <img src={xivtrackerSS3} alt="Minions and Hand/Land Jobs" />
                    <img src={xivtrackerSS4} alt="Mounts and War/Magic Jobs"/>
                    <img src={xivtrackerSS5} alt="Quests"/>
                </div>
                {/* Conway's Game of Life */}
                <div className={currentBlog[2] ? "blog" : "disabled"}>
                    <div className="blog-header">
                        <FaJava size={iconSize} color="var(--color-html)" title="Java" />  
                        <div className="flex gap-sm">
                            <a href="https://github.com/DamonGreenhalgh/conways-game-of-life-app/archive/refs/heads/main.zip">
                                <FaDownload className="social-icon" size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/conways-game-of-life-app">
                                <FaGithub className="social-icon" size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <img className="blog-hero" src={conwaysGameOfLifeHero} alt="Conway's Game of Life Hero"/>
                    <h2>Conway's Game of Life</h2>
                    <div className="divider-horizontal" />
                    <p>A fun little application that simulates the rules and constraints of <b><i>Conway's Game of Life.</i></b></p>
                    <h2>Rules</h2>
                    <div className="divider-horizontal" />
                    <p>
                        <i>How does the game work?</i> There exists a 
                        grid where each node on the grid is one of two 
                        states, <b>alive </b> or <b>dead</b>. You can 
                        manipulate these states by simply clicking on the 
                        node. In the next iteration, the node will either 
                        live or die depending on the following  
                        <b> three rules</b> of the game.
                    </p>
                    <p>
                        <b>1. </b>Alive nodes<b> die </b>due to loneliness 
                        if there exists<b> 1 or fewer </b>neighbours around it.
                    </p>
                    <div className="flex gap">
                        <img src={CGOLRules1} alt="Rule 1 Before Iteration" />
                        <img src={CGOLRules2} alt="Rule 1 After Iteration" />
                    </div>
                    <p>
                        <b>2. </b>Alive nodes<b> die </b>due to overcrowding 
                        if there exists<b> 4 or more </b>neighbours around it.
                    </p>
                    <div className="flex gap">
                        <img src={CGOLRules3} alt="Rule 2 Before Iteration" />
                        <img src={CGOLRules4} alt="Rule 2 After Iteration" />
                    </div>
                    <p>
                        <b>3.</b> Dead nodes are<b> revived </b>due to 
                        repopulation if there exists<b> exactly 3 </b>
                        neighbours around it.
                    </p>
                    <div className="flex gap">
                        <img src={CGOLRules5} alt="Rule 3 Before Iteration" />
                        <img src={CGOLRules6} alt="Rule 3 After Iteration" />
                    </div>
                    <h2>Features</h2>
                    <div className="divider-horizontal" />
                    <ul>
                        <li>Custom Patterns</li>
                        <li>Present Patterns</li>
                        <li>Random Patterns</li>
                        <li>Dark and Light Themes</li>
                        <li>Speed Slider</li>
                    </ul>
                    <h2>Screenshots</h2>
                    <div className="divider-horizontal" />
                    <img src={conwaysGameOfLifeSS1} className="screenshot" alt="Light Theme" />
                    <img src={conwaysGameOfLifeSS2} className="screenshot" alt="Dark Theme" />
                </div> 
                {/* Matrix Package */}
                <div className={currentBlog[3] ? "blog" : "disabled"}>
                    <div className="blog-header">
                        <FaJava size={iconSize} color="var(--color-html)" title="Java" />  
                        <div className="flex gap-sm">
                            <a href="https://github.com/DamonGreenhalgh/matrix-package/archive/refs/heads/main.zip">
                                <FaDownload className="social-icon" size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/matrix-package">
                                <FaGithub className="social-icon" size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <h2>Matrix Package for Java</h2>
                    <div className="divider-horizontal" />
                    <p>
                        This package implements the matrix mathematical 
                        structure for Java.
                    </p>
                    <h3>Matrix Class</h3>
                    <div className="divider-horizontal" />
                    <h4>Fields</h4>
                    <p>The following fields are used in the Matrix.java class.</p>
                </div>   
            </div>
        </div>
    );
}

export default Projects;
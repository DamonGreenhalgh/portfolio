import './Projects.css';
import xivtrackerIcon from '../images/xivtracker.png';
import xivtrackerHero from '../images/xivtracker-hero.png';
import conwaysGameOfLifeIcon from '../images/conways-game-of-life.png';

// Screenshots
import xivtrackerSS1 from '../images/screenshots/xivtracker/1.png'
import xivtrackerSS2 from '../images/screenshots/xivtracker/2.png'
import xivtrackerSS3 from '../images/screenshots/xivtracker/3.png'
import xivtrackerSS4 from '../images/screenshots/xivtracker/4.png'
import xivtrackerSS5 from '../images/screenshots/xivtracker/5.png'
import xivtrackerSS6 from '../images/screenshots/xivtracker/6.png'

const Projects = (props) => {
    return (
        <div className="projects" id="projects">
            <div className="flex-column gap-sm center relative">
                <div className="filler" />   
                <button className={"project-card"}>
                    <img className="project-icon" src={xivtrackerIcon} alt="XIV Tracker Icon" />
                </button>
                <button className={"project-card"}>
                    <img className="project-icon" src={conwaysGameOfLifeIcon} alt="Conway's Game of Life Icon"/>
                </button>
            </div>
            <div className="relative">
                <div className="flex gap-md">
                    <div className="flex-column gap">
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
                    </div>
                    <div className="flex-column gap">
                        <img src={xivtrackerSS1} className="screenshot" alt="Character" />
                        <img src={xivtrackerSS2} className="screenshot" alt="Equipment Tooltip" />
                        <img src={xivtrackerSS3} className="screenshot" alt="Home Page" />
                        <img src={xivtrackerSS4} className="screenshot" alt="Minions and Hand/Land Jobs" />
                        <img src={xivtrackerSS5} className="screenshot" alt="Mounts and War/Magic Jobs" />
                        <img src={xivtrackerSS6} className="screenshot" alt="Quests"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
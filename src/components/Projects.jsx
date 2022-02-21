import './Projects.css';
import Divider from './Divider';
import techJSON from './Tech.json';
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
import { tab } from '@testing-library/user-event/dist/tab';

const Projects = (props) => {
    const [currentBlog, setCurrentBlog] = useState([1, 0, 0, 0]);
    const blogs = useRef(null);
    const paths = [
        "\\Projects",
        "\\Projects\\XIVTracker",
        "\\Projects\\Conway",
        "\\Projects\\MatrixPackage"
    ];
    const iconSize = "1.5em";
    const linkBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    // This function is used to set the current project to display.
    // We set '1' at index to set that page visible, and '0' everwhere
    // else.
    const setPage = (index) => {
        const newCurrentBlog = [0, 0, 0, 0];
        newCurrentBlog[index] = 1;
        setCurrentBlog(() => newCurrentBlog);
        props.updatePath(() => paths[index]);
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
                        <div className="flex gap-sm">
                            <img src={linkBase + techJSON.html.icon} className="blog__tools" title={techJSON.html.name} alt={techJSON.html.name} />
                            <img src={linkBase + techJSON.css.icon} className="blog__tools" title={techJSON.css.name} alt={techJSON.css.name} />
                            <img src={linkBase + techJSON.js.icon} className="blog__tools" title={techJSON.js.name} alt={techJSON.js.name} />
                            <img src={linkBase + techJSON.reactjs.icon} className="blog__tools" title={techJSON.reactjs.name} alt={techJSON.reactjs.name} />
                        </div>
                        <div className="flex gap-sm">
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
                    <h2>Features</h2>
                    <Divider isHorizontal={true} />
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
                    <Divider isHorizontal={true} />
                    <img src={xivtrackerSS1} alt="Home Page" />
                    <img src={xivtrackerSS2} alt="Equipment and Stats" />
                    <img src={xivtrackerSS3} alt="Minions and Hand/Land Jobs" />
                    <img src={xivtrackerSS4} alt="Mounts and War/Magic Jobs"/>
                    <img src={xivtrackerSS5} alt="Quests"/>
                </div>
                {/* Conway's Game of Life */}
                <div className={currentBlog[2] ? "blog" : "disabled"}>
                    <div className="blog__header">
                        <img src={linkBase + techJSON.java.icon} className="blog__tools" title={techJSON.java.name} alt={techJSON.java.name} />
                        <div className="flex gap-sm">
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
                    <Divider isHorizontal={true} />
                    <p>A fun little application that simulates the rules and constraints of <b><i>Conway's Game of Life.</i></b></p>
                    <h2>Rules</h2>
                    <Divider isHorizontal={true} />
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
                    <div className="blog__display">
                        <img src={CGOLRules1} alt="Rule 1 Before Iteration" />
                        <img src={CGOLRules2} alt="Rule 1 After Iteration" />
                    </div>
                    <p>
                        <b>2. </b>Alive nodes<b> die </b>due to overcrowding 
                        if there exists<b> 4 or more </b>neighbours around it.
                    </p>
                    <div className="blog__display">
                        <img src={CGOLRules3} alt="Rule 2 Before Iteration" />
                        <img src={CGOLRules4} alt="Rule 2 After Iteration" />
                    </div>
                    <p>
                        <b>3.</b> Dead nodes are<b> revived </b>due to 
                        repopulation if there exists<b> exactly 3 </b>
                        neighbours around it.
                    </p>
                    <div className="blog__display">
                        <img src={CGOLRules5} alt="Rule 3 Before Iteration" />
                        <img src={CGOLRules6} alt="Rule 3 After Iteration" />
                    </div>
                    <h2>Features</h2>
                    <Divider isHorizontal={true} />
                    <ul>
                        <li>Custom Patterns</li>
                        <li>Present Patterns</li>
                        <li>Random Patterns</li>
                        <li>Dark and Light Themes</li>
                        <li>Speed Slider</li>
                    </ul>
                    <h2>Screenshots</h2>
                    <Divider isHorizontal={true} />
                    <img src={conwaysGameOfLifeSS1} className="screenshot" alt="Light Theme" />
                    <img src={conwaysGameOfLifeSS2} className="screenshot" alt="Dark Theme" />
                </div> 
                {/* Matrix Package */}
                <div className={currentBlog[3] ? "blog" : "disabled"}>
                    <div className="blog__header">
                        <img src={linkBase + techJSON.java.icon} className="blog__tools" title={techJSON.java.name} alt={techJSON.java.name} />
                        <div className="flex gap-sm">
                            <a href="https://github.com/DamonGreenhalgh/matrix-package/archive/refs/heads/main.zip">
                                <FaDownload size={iconSize} title="Download"/>
                            </a>
                            <a href="https://github.com/DamonGreenhalgh/matrix-package">
                                <FaGithub size={iconSize} title="Github"/>   
                            </a>
                        </div>
                    </div>
                    <h2>Matrix Package for Java</h2>
                    <Divider isHorizontal={true} />
                    <p>
                        This package implements the matrix mathematical 
                        structure for Java.
                    </p>
                    <h3>Matrix Class</h3>
                    <Divider isHorizontal={true} />
                    <h4>Fields</h4>
                    <p>The following fields are used in the Matrix.java class.</p>
                    <table className="blog__table">
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>double[][]</td>
                            <td>matrix</td>
                            <td>The underlying data structure used to represent the matrix structure</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>rows</td>
                            <td>The number of rows of the matrix.</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>columns</td>
                            <td>The number of columns of the matrix.</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>rank</td>
                            <td>The rank of the matrix.</td>
                        </tr>
                    </table>
                    <h4>Constructors</h4>
                    <p>The following constructors can be used to instantiate the matrix object.</p>
                    <table className="blog__table">
                        <tr>
                            <th>Constructor</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Matrix()</td>
                            <td>This default non-arg constructor, instantiates a 3x3 zero matrix.</td>
                        </tr>
                        <tr>
                            <td>Matrix(int rows, int columns)</td>
                            <td>This contructor creates a rows x columns zero matrix.</td>
                        </tr>
                        <tr>
                            <td>Matrix(int rows, int columns, MatrixType type)</td>
                            <td>This constructor creates a rows x columns preset matrix determined by the parameter type.</td>
                        </tr>
                        <tr>
                            <td>Matrix(double[][] array)</td>
                            <td>This constructor creates an array based on the parameter two-dimensional array.</td>
                        </tr>
                    </table>
                    <h4>Accessors/Mutators</h4>
                    <p>The following methods can be used to access and modify certain fields of the matrix object.</p>
                    <table className="blog__table">
                        <tr>
                            <th>Accessor/Mutator</th>
                            <th>Return</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>getNumRows()</td>
                            <td>int</td>
                            <td>Returns the rows field.</td>
                        </tr>
                        <tr>
                            <td>getNumColumns()</td>
                            <td>int</td>
                            <td>Returns the columns field.</td>
                        </tr>
                        <tr>
                            <td>getRow(int index)</td>
                            <td>Matrix</td>
                            <td>Returns the row of a matrix at the given index.</td>
                        </tr>
                        <tr>
                            <td>getColumn(int index)</td>
                            <td>Matrix</td>
                            <td>Returns the column of the matrix at the given index.</td>
                        </tr>
                        <tr>
                            <td>getElement(int row, int column)</td>
                            <td>double</td>
                            <td>Returns the element at the given parameter index.</td>
                        </tr>
                        <tr>
                            <td>setElement(int row, int column, int value)</td>
                            <td>void</td>
                            <td>Sets the element at the parameter index to the new parameter value.</td>
                        </tr>
                        <tr>
                            <td>getRank()</td>
                            <td>int</td>
                            <td>Returns the rank field.</td>
                        </tr>
                    </table>
                    <h4>Methods</h4>
                    <p>Below are the following methods that have been implemented in the Matrix.java class.</p>
                    <table className="blog__table">
                        <tr>
                            <th>Method</th>
                            <th>Return</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>toString()</td>
                            <td>String</td>
                            <td>This method returns a string representation of the matrix.</td>
                        </tr>
                        <tr>
                            <td>clone()</td>
                            <td>String</td>
                            <td>This method returns a new matrix, which is a clone of the original matrix.</td>
                        </tr>
                        <tr>
                            <td>transpose()</td>
                            <td>String</td>
                            <td>This method a new matrix, which is the transpose of the matrix.</td>
                        </tr>
                        <tr>
                            <td>multiply(double value)</td>
                            <td>String</td>
                            <td>This method multiplies the matrix with the scalar parameter value.</td>
                        </tr>
                        <tr>
                            <td>multiply(Matrix m)</td>
                            <td>String</td>
                            <td>This method returns a new matrix, which is the product of the matrix and the parameter. The matrix is right multiplied by the parameter matrix m.</td>
                        </tr>
                        <tr>
                            <td>add(double value)</td>
                            <td>String</td>
                            <td>This method adds the scalar parameter value to every element of the matrix.</td>
                        </tr>
                        <tr>
                            <td>add(Matrix m)</td>
                            <td>String</td>
                            <td>This method adds the parameter matrix to the matrix.</td>
                        </tr>
                        <tr>
                            <td>power(int value)</td>
                            <td>String</td>
                            <td>This method returns a new matrix, which is the result of the matrix to the power of the parameter value.</td>
                        </tr>
                        <tr>
                            <td>echelonForm(int end)</td>
                            <td>String</td>
                            <td>This method reduces the matrix to Reduced Row Echelon Form through the use of Gaussian Elimination.</td>
                        </tr>
                        <tr>
                            <td>join(Matrix m)</td>
                            <td>String</td>
                            <td>This method appends the parameter matrix to the end of the matrix.</td>
                        </tr>
                        <tr>
                            <td>submatrix(int[] indices)</td>
                            <td>String</td>
                            <td>This method returns a submatrix of the matrix determined by the parameter.</td>
                        </tr>
                        <tr>
                            <td>inverse()</td>
                            <td>String</td>
                            <td>This method returns the inverse of the matrix, if it exists.</td>
                        </tr>
                        <tr>
                            <td>solve(Matrix b)</td>
                            <td>String</td>
                            <td>This method solves a system of linear equations in the form Ax = b, where A is the matrix, b is the parameter vector and x is the vector to solve. The return value is the vector x.</td>
                        </tr>
                        <tr>
                            <td>determinant()</td>
                            <td>String</td>
                            <td>This method returns the determinant of the matrix, if it exists.</td>
                        </tr>
                    </table>
                    <h3>MatrixType Enum</h3>
                    <Divider isHorizontal={true} />
                    <p>Below are the following enums for the MatrixType.enum file.</p>
                    <h4>Enums</h4>
                    <table className="blog__table">
                        <tr>
                            <th>Enum</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>DEFAULT</td>
                            <td>nxm zero matrix</td>
                        </tr>
                        <tr>
                            <td>IDENTITY</td>
                            <td>nxn identity matrix.</td>
                        </tr>
                        <tr>
                            <td>RANDOM</td>
                            <td>nxm matrix with random integers as elements.</td>
                        </tr>
                        <tr>
                            <td>ONE</td>
                            <td>nxm matrix with integer 1 for all elements.</td>
                        </tr>
                    </table>
                </div>   
            </div>
        </div>
    );
}

export default Projects;
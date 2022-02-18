import './About.css';
import portrait from '../images/portrait.png';
import Divider from './Divider';

const About = (props) => {
    return (
        <div className="about" id="about">
            <div className="about__text">
                <h2 className="title">Hello, World!</h2>
                <p>
                    Hi! My name is <b>Damon Greenhalgh</b> and I'm a <i><b>Software 
                    Developer</b></i> based in <i>Auckland, New Zealand</i>. I'm currently 
                    studying to gain a <b>Bachelor of Science (Bsc)</b> majoring 
                    in <b> Computer Science </b>and <b>  Mathematics </b>at the 
                    <i> University of Auckland</i>.
                </p>
                <Divider isHorizontal={true} />
                <p>
                    I have a strong background in <b>Illustration</b> and 
                    <b> Concept Art</b>. The former has trained my eye to develop 
                    a strong understanding of <i>color, light</i> and <i>form</i>, 
                    allowing me to deliver pleasing <b>UI/UX</b> designs. The latter 
                    trained my design methodology. Weather by canvas or code. I 
                    strive to build <b><i>beautiful awe-inspiring products</i></b>.
                </p>
                <p>
                    I'm currently developing web applications using <b>HTML, CSS,
                    </b> and <b> JavaScript</b> with <b>ReactJS</b>. But look 
                    forward to pushing my web apps to the desktop environment 
                    through technologies like <b>Electron</b>.
                </p>
                <Divider isHorizontal={true} />
                <p>
                    <i>In my spare time I like to ...</i>
                </p>
                <ul>
                    <li>Draw, Paint and Sculpt</li>
                    <li>Play Guitar</li>
                    <li>Play Badminton</li>
                    <li>Play Video Games</li>
                    <li>Learn new Technologies</li>
                </ul>
            </div>
            <img src={portrait} className="about__portrait" alt="Portrait" />
        </div>
    );
}

export default About;
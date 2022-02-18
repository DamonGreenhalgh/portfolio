import './About.css';
import portrait from '../images/portrait.png';
import Divider from './Divider';

const About = (props) => {
    return (
        <div className="about" id="about">
            <div className="about__text">
                <p>
                    My name is <b>Damon Greenhalgh</b> and I'm a Software 
                    Engineer based in <i>Auckland, New Zealand</i>. I'm currently 
                    studying to gain a <b>Bachelor of Science (Bsc)</b> majoring 
                    in <b> Computer Science </b>and <b>  Mathematics </b>at the 
                    <b><i> University of Auckland</i></b>.
                </p>
                <p>
                    I'm currently developing web applications using <b>HTML, CSS,
                    </b> and <b> JavaScript</b> with <b>ReactJS</b>. But looking 
                    forward to pushing my web apps to the desktop environment 
                    through technologies like <b>Electron</b>.
                </p>
                <p>
                    <i>In my <b>spare time</b> I like to ...</i>
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
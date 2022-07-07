import '../styles/About.css';
import profile from '../images/profile.png';
import techJSON from '../data/techstack.json';
import Divider from './Divider';
import { useAnimationDelay } from '../hooks/useAnimationDelay';

const About = (props) => {
    const { sectionIndex, sectionRef } = props;
    const linkBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
    useAnimationDelay(sectionRef, false, 1, 0, 4, 1, sectionIndex === 1);
    return (
        <div className="about" id="about" ref={sectionRef}>
            <div className="col gap">
                <div className="row max-width">
                    <h2 className="about__header-text">"Hello, World!"</h2>
                    <div className="waiting-pointer waiting-pointer--about" />
                </div>
                <Divider />
                <p>
                    <b>Hi there!</b> My name is <b>Damon Greenhalgh</b>. I'm a <i><b>Software 
                    Developer</b></i> based in <i>Auckland, New Zealand</i>. I'm currently 
                    studying towards a <b>Bachelor of Science (Bsc)</b> majoring 
                    in <b> Computer Science </b>and <b>  Mathematics </b>at the  
                    <i><b> University of Auckland</b></i>.
                </p>
                <p>
                    I have a strong background in <b>Illustration</b> and 
                    <b> Concept Art</b>. The former has trained my eye to develop 
                    a strong understanding of <i>color, light</i> and <i>form</i>, 
                    allowing me to deliver pleasing <b>UI/UX</b> designs. The latter 
                    trained my design methodology. Be it by canvas or code. I 
                    strive to build <b><i>beautiful awe-inspiring products</i></b>.
                </p>
                <Divider />
                <p >
                    <i>The following are <b>technologies</b> i've worked with ...</i>
                </p>
                <div className="techstack">
                    {Object.values(techJSON).map((tech, index) => 
                        <div className="tech" title={tech.name} key={index}>
                            <img src={linkBase + tech.icon} alt={tech.name}/>
                            <p style={{fontFamily: "consola"}}>{tech.name}</p>
                        </div>
                    )}
                </div>   
            </div>
            <img src={profile} className="about__portrait" alt="Portrait" />
        </div>
    );
}

export default About;
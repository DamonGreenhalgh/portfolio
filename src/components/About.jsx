import '../styles/About.css';
import profile from '../assets/profile.png';
import techJSON from '../data/techstack.json';
import Divider from './Divider';

const About = () => {
    const linkBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
    return (
        <div className="about" id="about">
            <div className="col gap">
                <div className="about__header-container">
                    <h2 className="about__header-text">"Hello, World!"</h2>
                    <div className="waiting-pointer waiting-pointer--about" />
                </div>
                <Divider />
                <p>
                    Hi there! My name is <b>Damon Greenhalgh</b>. I'm a <b>Software 
                    Developer</b> based in <i>Auckland, New Zealand</i>. I'm currently 
                    studying towards a <i>Bachelor of Science (Bsc)</i> majoring 
                    in <b> Computer Science </b>and <b>  Mathematics </b>at the  
                    <i> University of Auckland</i>.
                </p>
                <p>
                    One of my core passions is <b>Visual Art</b>. From little doodles to full digital illustrations. 
                    I'm always striving to improve my skills. Many of which are applicable to 
                    <b> Front-end UI/UX</b> design. Concepts like <i>color, contrast</i> and <i>form</i> are foundations 
                    for building <b>coherent</b>, <b>accessible</b> and <b>beautiful products</b>. 
                </p>
                <p>
                    I'm currently building upon the foundations of front-end web development by integrating 
                    <b> CI/CD</b> pipelines into my existing projects. 
                </p>
                <Divider />
                
                <p >
                    The following are <b>technologies</b> i've worked with in the past,
                </p>
                <div className="techstack">
                    {Object.values(techJSON).map((tech, index) => 
                        <div className="tech" title={tech.name} key={index}>
                            <img src={linkBase + tech.icon} alt={tech.name}/>
                            <p>{tech.name}</p>
                        </div>
                    )}
                </div>   
            </div>
            <div className="about__profile-container">
                <img src={profile} className="about__portrait" alt="Portrait" />
                <p className="about__quote">"Be it by canvas or code, I strive to build awe-inspiring products"</p>
            </div>
            
        </div>
    );
}

export default About;
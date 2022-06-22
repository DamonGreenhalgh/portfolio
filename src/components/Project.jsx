
import './Project.css';
import techstackJSON from '../data/techstack.json';
import { FaGithub, FaDownload} from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FiMaximize2 } from 'react-icons/fi';

const iconSize = "1.25em";
const linkIcons = {
    "github": <FaGithub size={iconSize} />,
    "download": <FaDownload size={iconSize} />,
    "website": <CgWebsite size={iconSize} />
}

const Project = (props) => {
    const { 
        banner, 
        icon, 
        title, 
        description, 
        stack, 
        link,
        id,
        index, 
        setIndex } = props;
    const linkBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
    return (
        <div className={"project-card" + (id === index ? " project-card--active" : "")} onClick={() => setIndex(id)}>
            <img src={banner} style={{maxHeight: "270px"}} />
            <div className="project-card__content">
                <div className="row align-center justify-between">
                    <h3>{title}</h3>
                    <img src={icon} style={{height: "2.5rem"}} />
                </div>
                <p style={{color: "var(--base-700)"}}>{description}</p>
                <div className="row align-center justify-between" style={{marginTop: "auto"}}>
                    <div className="row gap-sm">
                        {
                            stack.map((tool, index) =>
                                <img 
                                    src={linkBase + techstackJSON[tool].icon} 
                                    alt={techstackJSON[tool].name} 
                                    title={techstackJSON[tool].name}
                                    style={{height: "1.25em"}}
                                    key={index}
                                />
                            )
                        }
                    </div>
                    <div className="row gap-sm">
                        {
                            Object.keys(link).map((item, index) => 
                                <a 
                                    href={link[item]} 
                                    title={item}
                                    key={index}
                                >
                                    {linkIcons[item]}
                                </a>
                            )
                        }
                        <button><FiMaximize2 size={iconSize} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
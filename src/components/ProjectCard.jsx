
import './ProjectCard.css';
import { FiMaximize } from 'react-icons/fi';

const iconSize = "1.25em";
const ProjectCard = (props) => {
    const { 
        banner, 
        icon, 
        title, 
        description, 
        tech, 
        link,
        id,
        index, 
        setIndex,
        expanded,
        setExpanded 
    } = props;

    return (
        <div onClick={() => setIndex(id)} className={"project-card" + (id === index ? " project-card--active" : "")}>            
            <img src={banner} style={{maxHeight: "270px"}} />
            <div className="project-card__content">
                <div className="row align-center justify-between">
                    <h3>{title}</h3>
                    <img src={icon} style={{height: "2.5rem"}} />
                </div>
                <p style={{color: "var(--base-700)"}}>{description}</p>
                <div 
                    className="row align-center justify-between" 
                    style={{marginTop: "auto"}}
                >
                    <div className="row gap-sm">
                        {tech}
                    </div>
                    <div className="row gap algin-center">
                        {link}
                        <button 
                            onClick={() => setExpanded(expanded ? false : true)}
                            className="icon-button"
                        >
                            <FiMaximize size={iconSize} /> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
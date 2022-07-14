
import '../styles/ProjectCard.css';
import { useRef} from 'react';

/**
 * ProjectCard Component
 * This component is a card that represents a project. Clicking
 * on the card will display the Modal component.
 */
const ProjectCard = (props) => {
    const cardRef = useRef(null);
    const { 
        icon, 
        title, 
        description, 
        link,
        tech,
        id,
        setIndex,
        setExpanded 
    } = props;

    return (
        <button 
            onClick={() => {setIndex(id); setExpanded(true);}} 
            className="project-card"
            ref={cardRef}
        >            
            <div className="project-card__header">
                <img 
                    src={icon} 
                    style={{maxHeight: "3rem", maxWidth: "4rem"}} 
                    alt="Project brand" 
                />
                <div className="project__items">
                    {link}
                </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project__items project__items--tech" style={{fontFamily: "consola"}}>
                {tech}
            </div>
        </button>
    );
}

export default ProjectCard;

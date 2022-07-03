
import '../styles/ProjectCard.css';
import { useEffect, useRef, useState } from 'react';

/**
 * ProjectCard Component
 * This component is a card that represents a project. Clicking
 * on the card will display the Modal component.
 */
const ProjectCard = (props) => {
    const [active, setActive] = useState(false);
    const cardRef = useRef(null);
    const { 
        banner, 
        icon, 
        title, 
        description, 
        link,
        tech,
        id,
        setIndex,
        setExpanded 
    } = props;

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, id / 4 * 1000)
    }, [id])

    return (
        <div 
            onClick={() => {setIndex(id); setExpanded(true);}} 
            className={"project-card" + (active ? " project-card--active" : "")}
            ref={cardRef}
        >            
            <img src={banner} style={{maxHeight: "225px"}} alt="Project banner" />
            <div className="project-card__content">
                <div className="row align-center justify-between">
                    <img 
                        src={icon} 
                        style={{maxHeight: "2.5rem", maxWidth: "4rem"}} 
                        alt="Project brand" 
                    />
                    <div className="project__items">
                        {link}
                    </div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project__items project__items--tech">
                    {tech}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

import './Projects.css';
import Modal from './Modal';
import ProjectCard from './ProjectCard';
import projectsJSON from '../data/projects.json';
import techstackJSON from '../data/techstack.json';
import { useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Assets
import vpsLogo from '../images/projects/vps/vps-logo.png';
import xivtrackerLogo from '../images/projects/xivtracker/xivtracker-logo.png';
import gameoflifeLogo from '../images/projects/gameoflife/gameoflife-logo.png';
import matrixLogo from '../images/projects/matrix/matrix-logo.png';
import matrixBanner from '../images/projects/matrix/screenshots/1.png';

import { FaGithub, FaDownload} from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
const iconSize = "1.25em";

const linkIcons = {
    "github": <FaGithub size={iconSize} />,
    "download": <FaDownload size={iconSize} />,
    "website": <CgWebsite size={iconSize} />
}


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const vpsImages = Object.values(importAll(require.context('../images/projects/vps/screenshots', false, /\.png/)));
const xivImages = Object.values(importAll(require.context('../images/projects/xivtracker/screenshots', false, /\.png/)));
const gameoflifeImages = Object.values(importAll(require.context('../images/projects/gameoflife/screenshots', false, /\.png/)));

const projectNames = Object.keys(projectsJSON);
const projectAssets = {
    "vps": {
        "logo": vpsLogo,
        "screenshots": vpsImages
    },
    "xivtracker": {
        "logo": xivtrackerLogo,
        "screenshots": xivImages
    },
    "gameoflife": {
        "logo": gameoflifeLogo,
        "screenshots": gameoflifeImages
    },
    "matrix": {
        "logo": matrixLogo,
        "screenshots": [matrixBanner]
    }
}



const Projects = () => {
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef(null);
    const [links, setLinks] = useState(null);
    const [tech, setTech] = useState(null);
    useEffect(() => {
        containerRef.current.style.translate = "calc((-480px - 8rem) *" + index + ")";
        setLinks(Object.keys(projectsJSON[projectNames[index]].link).map((item, key) => 
            <a 
                href={projectsJSON[projectNames[index]].link[item]} 
                title={item}
                key={key}
                className="icon-button"
            >
                {linkIcons[item]}
            </a>
        ));
        setTech(projectsJSON[projectNames[index]].stack.map((tool, index) =>
            <img 
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons" + techstackJSON[tool].icon} 
                alt={techstackJSON[tool].name} 
                title={techstackJSON[tool].name}
                style={{height: "1.25em"}}
                key={index}
            />
        ));
    }, [index]);

    return (
        <div className="projects" id="projects">
            <Modal
                name={projectsJSON[projectNames[index]].title}
                description={projectsJSON[projectNames[index]].description}
                screenshots={projectAssets[projectNames[index]].screenshots}
                links={links}
                tech={tech}
                logo={projectAssets[projectNames[index]].logo}
                tags={projectsJSON[projectNames[index]].tags}
                expanded={expanded}
                setExpanded={setExpanded}
            />
            <div className={"flair" + (expanded ? " flair--expanded" : "")} />
            <button 
                className="project-arrow"
                style={{right: expanded ? "calc(100vw / 2 + 30%)" : "calc(100vw / 2 + 240px)"}}
                onClick={() => setIndex(Math.max(index - 1, 0))}
            >
                <FaArrowLeft size="2em" />
            </button>
            <button 
                className="project-arrow"
                style={{left: expanded ? "calc(100vw / 2 + 30%)" : "calc(100vw / 2 + 240px)"}}
                onClick={() => setIndex(Math.min(index + 1, 3))}
            >
                <FaArrowRight size="2em" />
            </button>
            
            <div className="projects-container" ref={containerRef}>
                {
                    projectNames.map((project, key) => 
                        <ProjectCard 
                            banner={projectAssets[project].screenshots[0]}
                            icon={projectAssets[project].logo}
                            title={projectsJSON[project].title}
                            description={projectsJSON[project].description}
                            tech={tech}
                            link={links}
                            id={key}
                            index={index}
                            setIndex={setIndex}
                            expanded={expanded}
                            setExpanded={setExpanded}
                            key={key}
                        />
                    )
                }
            </div>
            <div className="projects__navigation">
                {
                    projectNames.map((project, key) =>
                        <button 
                            className={"project-button" + (index === key ? " project-button--active" : "")}
                            onClick={() => setIndex(key)}
                            key={key}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Projects;
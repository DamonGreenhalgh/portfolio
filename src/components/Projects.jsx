import '../styles/Projects.css';
import Modal from './Modal';
import ProjectCard from './ProjectCard';
import projectsJSON from '../data/projects.json';
import techstackJSON from '../data/techstack.json';
import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// import all logos and banners for each project
import vpsLogo from '../assets/projects/vps/logo.png';
import vpsBanner from '../assets/projects/vps/banner.png';
import xivtrackerLogo from '../assets/projects/xivtracker/logo.png';
import xivtrackerBanner from '../assets/projects/xivtracker/banner.png';
import gameoflifeLogo from '../assets/projects/gameoflife/logo.png';
import gameoflifeBanner from '../assets/projects/gameoflife/banner.png';
import matrixLogo from '../assets/projects/matrix/logo.png';
import matrixBanner from '../assets/projects/matrix/banner.png';

// function to import all image assets within a directory
function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item));
    return images;
}

// Import all screenshots for each project
const vpsImages = Object.values(importAll(require.context('../assets/projects/vps/screenshots', false, /\.png/)));
const xivtrackerImages = Object.values(importAll(require.context('../assets/projects/xivtracker/screenshots', false, /\.png/)));
const gameoflifeImages = Object.values(importAll(require.context('../assets/projects/gameoflife/screenshots', false, /\.png/)));
const matrixImages = Object.values(importAll(require.context('../assets/projects/matrix/screenshots', false, /\.png/)));

const projectNames = Object.keys(projectsJSON);

// stores all project logos and banners for easy referencing
const projectAssets = {
    "vps": {
        "logo": vpsLogo,
        "banner": vpsBanner,
        "screenshots": vpsImages
    },
    "xivtracker": {
        "logo": xivtrackerLogo,
        "banner": xivtrackerBanner,
        "screenshots": xivtrackerImages
    },
    "gameoflife": {
        "logo": gameoflifeLogo,
        "banner": gameoflifeBanner,
        "screenshots": gameoflifeImages
    },
    "matrix": {
        "logo": matrixLogo,
        "banner": matrixBanner,
        "screenshots": matrixImages
    }
}

const linkIcons = {
    "github": <FaGithub size="1.25em" />,
    "website": <FaExternalLinkAlt size="1.25em" />,
}

/**
 * Projects Container
 * Contains the Modal and Project Card components. Singular
 * modal which changes content based on the index variable state.
 * Multiple Project Card components, each representing a different project.
 * Project information is drawn from the static projects.json file.
 */
const Projects = () => {
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const animationRef = useRef(null);
    return (
        <div className="projects" id="projects">
            <Modal
                type={0}
                name={projectsJSON[projectNames[index]].title}
                description={projectsJSON[projectNames[index]].description}
                content={projectsJSON[projectNames[index]].content.map((section, key) =>
                        <div className="col gap" key={key}>
                            <h4>{section.name}</h4>
                            <p>{section.content}</p>
                        </div>
                    )
                }
                banner={projectAssets[projectNames[index]].banner}
                screenshots={projectAssets[projectNames[index]].screenshots}
                links={
                    Object.keys(projectsJSON[projectNames[index]].link).map((item, key) => 
                        <a 
                            href={projectsJSON[projectNames[index]].link[item]} 
                            title={item}
                            key={key}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {linkIcons[item]}
                        </a>
                    )
                }
                tech={
                    projectsJSON[projectNames[index]].stack.map((tech, key) =>
                        <div className="project__items" key={key}>
                            <img 
                                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons" + techstackJSON[tech].icon} 
                                alt={techstackJSON[tech].name} 
                                title={techstackJSON[tech].name}
                                style={{height: "1.25em"}}
                            />
                            <p>{techstackJSON[tech].name}</p>
                        </div>
                    )
                }
                logo={projectAssets[projectNames[index]].logo}
                tags={projectsJSON[projectNames[index]].tags}
                expanded={expanded}
                setExpanded={setExpanded}
                index={index}
                setIndex={setIndex}
                maxIndex={projectNames.length - 1}
            />
            <div className="projects-container" ref={animationRef}>
                {
                    projectNames.map((project, key) => 
                        <ProjectCard 
                            icon={projectAssets[project].logo}
                            title={projectsJSON[project].title}
                            description={projectsJSON[project].description}
                            link={
                                Object.keys(projectsJSON[project].link).map((item, key) => 
                                    <a 
                                        href={projectsJSON[project].link[item]} 
                                        title={item}
                                        key={key}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {linkIcons[item]}
                                    </a>
                                )
                            }
                            tech={
                                projectsJSON[project].stack.map((tech, key) =>
                                    <p key={key}>{techstackJSON[tech].name}</p>
                                )
                            }
                            id={key}
                            setIndex={setIndex}
                            setExpanded={setExpanded}
                            key={key}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Projects;

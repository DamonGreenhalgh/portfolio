import '../styles/Projects.css';
import Modal from './Modal';
import ProjectCard from './ProjectCard';
import projectsJSON from '../data/projects.json';
import techstackJSON from '../data/techstack.json';
import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaKaggle} from 'react-icons/fa';

// import all logos and banners for each project
import spaceshiptitanicLogo from '../images/projects/spaceshiptitanic/logo.png'
import spaceshiptitanicBanner from '../images/projects/spaceshiptitanic/banner.png';
import vpsLogo from '../images/projects/vps/logo.png';
import vpsBanner from '../images/projects/vps/banner.png';
import xivtrackerLogo from '../images/projects/xivtracker/logo.png';
import xivtrackerBanner from '../images/projects/xivtracker/banner.png';
import gameoflifeLogo from '../images/projects/gameoflife/logo.png';
import gameoflifeBanner from '../images/projects/gameoflife/banner.png';
import matrixLogo from '../images/projects/matrix/logo.png';
import matrixBanner from '../images/projects/matrix/banner.png';
import { useAnimationDelay } from '../hooks/useAnimationDelay';

// function to import all image assets within a directory
function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item));
    return images;
}

// Import all screenshots for each project
const spaceshiptitanicImages = Object.values(importAll(require.context('../images/projects/spaceshiptitanic/screenshots', false, /\.png/)));
const vpsImages = Object.values(importAll(require.context('../images/projects/vps/screenshots', false, /\.png/)));
const xivtrackerImages = Object.values(importAll(require.context('../images/projects/xivtracker/screenshots', false, /\.png/)));
const gameoflifeImages = Object.values(importAll(require.context('../images/projects/gameoflife/screenshots', false, /\.png/)));
const matrixImages = Object.values(importAll(require.context('../images/projects/matrix/screenshots', false, /\.png/)));

const projectNames = Object.keys(projectsJSON);

// stores all project logos and banners for easy referencing
const projectAssets = {
    "spaceshiptitanic": {
        "logo": spaceshiptitanicLogo,
        "banner": spaceshiptitanicBanner,
        "screenshots": spaceshiptitanicImages
    },
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
    "kaggle": <FaKaggle size="1.25em" />
}

/**
 * Projects Container
 * Contains the Modal and Project Card components. Singular
 * modal which changes content based on the index variable state.
 * Multiple Project Card components, each representing a different project.
 * Project information is drawn from the static projects.json file.
 */
const Projects = (props) => {
    const { sectionIndex, sectionRef } = props;
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const animationRef = useRef(null);
    useAnimationDelay(animationRef, true, 1, 0, 4, .5, sectionIndex === 2);
    return (
        <div className="projects" id="projects" ref={sectionRef}>
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

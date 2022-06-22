import './Projects.css';
import Project from './Project';
import projectsJSON from '../data/projects.json';
import { useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import vpsLogo from '../images/vps/vps-logo.png';
import vpsBanner from '../images/vps/ss1.png';

import xivtrackerLogo from '../images/xivtracker/xivtracker-logo.png';
import xivtrackerBanner from '../images/xivtracker/ss1.png';

import gameoflifeLogo from '../images/gameoflife/gameoflife-logo.png';
import gameoflifeBanner from '../images/gameoflife/ss1.png';

import matrixLogo from '../images/matrix/matrix-logo.png';
import matrixBanner from '../images/matrix/ss1.png';

const projectAssets = {
    "vps": {
        "logo": vpsLogo,
        "screenshots": [vpsBanner]
    },
    "xivtracker": {
        "logo": xivtrackerLogo,
        "screenshots": [xivtrackerBanner]
    },
    "gameoflife": {
        "logo": gameoflifeLogo,
        "screenshots": [gameoflifeBanner]
    },
    "matrix": {
        "logo": matrixLogo,
        "screenshots": [matrixBanner]
    }
}

const Projects = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        containerRef.current.scrollTo(500 + 480 * index, 0);
    }, [index]);

    return (
        <div className="projects" id="projects">
            <div className="flair" />
            <button 
                className="project-arrow"
                style={{right: "calc(100vw / 2 + 240px + 1rem)"}}
                onClick={() => setIndex(Math.max(index - 1, 0))}
            >
                <FaArrowLeft size="2em" />
            </button>
            <button 
                className="project-arrow"
                style={{left: "calc(100vw / 2 + 240px + 1rem)"}}
                onClick={() => setIndex(Math.min(index + 1, 3))}
            >
                <FaArrowRight size="2em" />
            </button>
            
            <div className="projects-container" ref={containerRef}>
                {
                    Object.keys(projectAssets).map((project, key) => 
                        <Project 
                            banner={projectAssets[project].screenshots}
                            icon={projectAssets[project].logo}
                            title={projectsJSON[project].title}
                            description={projectsJSON[project].description}
                            stack={projectsJSON[project].stack}
                            link={projectsJSON[project].link}
                            id={key}
                            index={index}
                            setIndex={setIndex}
                            key={key}
                        />
                    )
                }
            </div>
            <div className="projects__navigation">
                <button 
                    className={"project-button" + (index === 0 ? " project-button--active" : "")}
                    onClick={() => setIndex(0)}
                />
                <button 
                    className={"project-button" + (index === 1 ? " project-button--active" : "")}
                    onClick={() => setIndex(1)}
                />
                <button 
                    className={"project-button" + (index === 2 ? " project-button--active" : "")}
                    onClick={() => setIndex(2)}
                />
                <button 
                    className={"project-button" + (index === 3 ? " project-button--active" : "")}
                    onClick={() => setIndex(3)}
                />
            </div>
        </div>
    );
}

export default Projects;
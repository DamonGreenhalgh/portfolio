import '../styles/Gallery.css';
import '../styles/Modal.css';
import { useAnimationDelay } from '../hooks/useAnimationDelay';
import { useEffect, useRef, useState } from "react";
import artworksJSON from '../data/artworks.json';
import Modal from './Modal';

// function to import all image assets within a directory
function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item));
    return images;
}

// Import all screenshots for each project
const thumbnails = Object.values(importAll(require.context('../images/gallery/thumbnails', false, /\.png/)));
const artworks = Object.values(importAll(require.context('../images/gallery/artwork', false, /\.png/)));
const maxIndex = artworks.length - 1;

/**
 * Gallery container
 * Container for artworks.
 * @param {*} props 
 * @returns 
 */
const Gallery = (props) => {
    const { sectionIndex, sectionRef } = props; 
    const [content, setContent] = useState([]);
    const [contentIndex, setContentIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const animationRef = useRef(null);
    useAnimationDelay(animationRef, true, 2, 0, 4, .5, sectionIndex === 3);

    useEffect(() => {
        const galleryCols = [];
        thumbnails.forEach((thumbnail, index) => {
            galleryCols.push(
                <button 
                className="art__wrapper"
                key={index}
                onClick={() => {setExpanded(true); setContentIndex(index)}}
                >
                    <div className="art__overlay">
                        <p>{artworksJSON[index].name}</p>
                    </div>
                    <img src={thumbnail} alt="Art" className="art" />
                </button>
            )
        });
        setContent(galleryCols); 
    }, [])

    return(
        <div className="gallery" id="gallery" ref={sectionRef}>
            <Modal 
                expanded={expanded}
                setExpanded={setExpanded}
                type={1}
                artwork={artworks[contentIndex]}
                index={contentIndex}
                maxIndex={maxIndex}
                setIndex={setContentIndex}
            />
            <div className="gallery__content" ref={animationRef}>
                {content}
            </div>
        </div>        
    );
}

export default Gallery;

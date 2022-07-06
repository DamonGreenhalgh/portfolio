import { useAnimationDelay } from '../hooks/useAnimationDelay';
import { useState } from "react";
import '../styles/Gallery.css';

// function to import all image assets within a directory
function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item));
    return images;
}

// Import all screenshots for each project
const artImages = Object.values(importAll(require.context('../images/art', false, /\.png/)));

const Gallery = (props) => {
    const { sectionIndex, sectionRef } = props; 
    const galleryCols = [[], [], []];
    useAnimationDelay(sectionRef, true, 1, 0, 4, .5, sectionIndex === 3);
    return(
        <div className="gallery" id="gallery" ref={sectionRef}>
            {
                artImages.map((art, index) => 
                    galleryCols[index % 3].push(
                        <button 
                        className="art-wrapper"
                        key={index}
                        >
                            <img src={art} alt="Art" className="art"/>
                        </button>
                    )
                )
            }
            <div className="gallery__col">
                {galleryCols[0]}
            </div>
            <div className="gallery__col">
                {galleryCols[1]}
            </div>
            <div className="gallery__col">
                {galleryCols[2]}
            </div>
        </div>        
    );
}

export default Gallery;

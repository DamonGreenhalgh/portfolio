import '../styles/Art.css';
import Gallery from '../components/Gallery';

import {
    a0,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7
} from '../assets/art';

const artworks = [
    a0,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7
]

const Art = () => {
    return(
        <div className='art'>
            <h1 className='art__header'>PORTFOLIO</h1>
            <Gallery images={artworks} />
        </div>
    );
}

export default Art;
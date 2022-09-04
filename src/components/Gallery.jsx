import '../styles/Gallery.css';
import { useEffect, useState } from "react";

// just use a cdn like google drive for images.

const Gallery = (props) => {
    const { images } = props;
    const [cols, setCols] = useState(null);

    useEffect(() => {
        const distribution = [[], [], []];
        images.forEach((art, index) => {
            distribution[index % distribution.length].unshift(
                <button className='gallery__item-container'>
                    <div className='gallery__item-overlay' />
                    <img src={art} alt="" key={index} className='gallery__item' />
                </button>
            )
        })
        setCols(
            distribution.map((col, index) => 
                <div className='gallery__col' key={index}>
                    {col}
                </div>
            )
        )
    }, [images])

    return(
        <div className='gallery'>
            {cols}
        </div>
    );
}

export default Gallery;

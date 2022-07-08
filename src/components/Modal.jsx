import '../styles/Modal.css';
import Divider from './Divider';
import { 
    MdClose, 
    MdArrowForwardIos, 
    MdOutlineArrowBackIosNew 
} from 'react-icons/md';
import { useState, useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc';

/**
 * Modal Component
 * This is the project modal component. Will display content
 * based on the current index state.
 */
const Modal = (props) => {
    const [loading, setLoading] = useState(false);
    const {
        name,
        description,
        content,
        banner,
        screenshots,
        links,
        tech,
        logo,
        tags,
        expanded,
        setExpanded,
        index,
        maxIndex,
        setIndex,
        type,
        artwork
    } = props;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, [500])
    }, [index])

    return (
        <div className={"modal" + (expanded ? " modal--expanded" : "")}>
            <button onClick={() => setIndex(Math.max(index - 1, 0))} className="modal__button">
                <MdOutlineArrowBackIosNew size="2em" />
            </button>
            {
                loading ? 
                <VscLoading size="3em" className="modal__loading" /> :
                type === 0 ?
                <div 
                    className={
                        "modal__panel" 
                        + (expanded ? " modal__panel--expanded" : "")
                    }
                >
                    <img 
                        src={banner} 
                        className="modal__banner" 
                        alt="Project banner"
                    />
                    <div className="modal__content">
                        <div className="modal__header">
                            <img 
                                src={logo} 
                                style={{height: "2.5rem"}} 
                                alt="Project brand"
                            />
                            <h2>{name}</h2>
                            <div className="project__items">
                                {links}
                            </div>
                        </div>
                        <Divider />
                        <div className="modal__content-row">
                            <div className="col gap max-width" style={{flex: 2}}>
                                <h4>Description</h4>
                                <p>{description}</p>
                                {content}
                                <h4>Tools</h4>
                                <div className="project__items" style={{fontFamily: "consola"}}>
                                    {tech}
                                </div>
                                <h4>Tags</h4>
                                <div className="project__items">
                                {
                                    tags.map((tag, key) =>
                                        <p className="modal__tag" key={key}>{tag}</p>
                                    )
                                }
                                </div>
                            </div>
                            <div className="col gap max-width" style={{flex: 1}}>
                                <h4>Screenshots</h4>
                                {
                                    screenshots.map((ss, index) => 
                                        <img 
                                            src={ss} 
                                            className="screenshot"
                                            key={index}
                                            alt="Example screenshot of project"
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="modal__art-container">
                    <img 
                        src={artwork} 
                        alt={description} 
                        className="modal__art" 
                    />
                </div>
            }
            <div className="modal__button-container">
                <button onClick={() => setExpanded(false)} style={{position: "absolute"}} className="modal__button modal__button--close">
                    <MdClose size="2em" />
                </button>
                <button onClick={() => {setIndex(Math.min(index + 1, maxIndex)); console.log(index + 1)}} className="modal__button">
                    <MdArrowForwardIos size="2em" />
                </button>
            </div>
        </div>
    );
}

export default Modal;
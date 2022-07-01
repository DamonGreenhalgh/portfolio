import '../styles/Modal.css';
import Divider from './Divider';
import { IoClose } from 'react-icons/io5';

const Modal = (props) => {
    const {
        name,
        description,
        screenshots,
        links,
        tech,
        logo,
        tags,
        expanded,
        setExpanded
    } = props;
    return (
        <div 
            className={"modal" + (expanded ? " modal--expanded" : "")} 
        >
            <button className="modal__close-button" onClick={() => setExpanded(false)}><IoClose size="2.5em" /></button>
            <div className={"modal__panel" + (expanded ? " modal__panel--expanded" : "")}>
                <img src={screenshots[0]} className="modal__banner" alt="Project banner"/>
                <div className="modal__content">
                    <div className="row justify-between">
                        <div className="row gap align-center">
                            <img src={logo} style={{height: "2.5rem"}} alt="Project brand"/>
                            <h2>{name}</h2>
                        </div>
                        <div className="row gap align-center">
                            {links}
                        </div>
                    </div>
                    <Divider />
                    <div className="row gap-lg">
                        <div className="col gap max-width" style={{flex: 2}}>
                            <h4>Description</h4>
                            <p>{description}</p>
                            <h4>Tools</h4>
                            <div className="row gap-sm align-center">
                                {tech}
                            </div>
                            <h4>Tags</h4>
                            <div className="row gap-sm align-center">
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
            </div>
        </div>
    );
}

export default Modal;
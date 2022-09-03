import '../styles/Footer.css';
import { FaLinkedinIn, FaGithub, FaArtstation } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialSize = "1.5em";

const Footer = (props) => {
    const { type } = props;
    return (
        <div className={`footer ${type === "dev" ? 'footer--dev' : ''}`}>
            <p>
                Designed and Developed by Damon Greenhalgh<br />
                © 2022 Damon Greenhalgh. All rights reserved.
            </p>
            <div className='footer__socials'>
                {
                    type === "art" ?
                    null :
                    <>
                        <a 
                            href="https://github.com/DamonGreenhalgh" 
                            title="Github" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <FaGithub size={socialSize} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/damongreenhalgh" 
                            title="LinkedIn" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <FaLinkedinIn size={socialSize} />
                        </a>
                    </>
                }
                {
                    type === "dev" ?
                    null :
                    <a 
                        href="https://www.artstation.com/damongreenhalgh" 
                        title="Artstation" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <FaArtstation size={socialSize} />
                    </a>
                }
                <a 
                    href="mailto: damonligreenhalgh@gmail.com" 
                    title="Email" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <MdEmail size={socialSize} />
                </a>
            </div>
        </div>
        
    );
}

export default Footer;
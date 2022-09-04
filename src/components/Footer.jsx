import '../styles/Footer.css';
import { 
    FaLinkedinIn, 
    FaGithub, 
    FaArtstation, 
    FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const socialSize = "1.5em";

const Footer = () => {
    const currentPath = useLocation().pathname;
    return (
        <div className={`footer ${currentPath === "/dev" ? 'footer--dev' : ''}`}>
            <p>
                Designed and Developed by Damon Greenhalgh<br />
                © {new Date().getFullYear()} Damon Greenhalgh. All rights 
                reserved.
            </p>
            <div className='footer__socials'>
                {
                    currentPath === "/art" ?
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
                    currentPath === "/dev" ?
                    null :
                    <>
                        <a 
                            href="https://www.artstation.com/damongreenhalgh" 
                            title="Artstation" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <FaArtstation size={socialSize} />
                        </a>
                        <a
                            href="https://twitter.com/damongreenhalgh"
                            title="Twiiter" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <FaTwitter size={socialSize} />
                        </a>
                    </>
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
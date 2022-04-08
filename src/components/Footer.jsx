import './Footer.css';
import { 
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const iconSize = "1.5em"
    return (
        <div className="footer">
            <p>
                Designed and Developed by Damon Greenhalgh<br />
                © 2022 Damon Greenhalgh. All rights reserved.
            </p>
            <div className="row gap-sm">
                <a href="https://github.com/DamonGreenhalgh/portfolio">
                    <FaGithub size={iconSize} />
                </a>
                <a href="https://www.linkedin.com/in/damon-greenhalgh-2a11b6191/">
                    <FaLinkedinIn size={iconSize} />
                </a>
                <a href="mailto: damonligreenhalgh@gmail.com">
                    <MdEmail size={iconSize} />
                </a>
            </div>
        </div>
        
    );
}

export default Footer;
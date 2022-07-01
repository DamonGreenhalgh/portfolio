import '../styles/Navbar.css';
import Socials from "./Socials";
import Console from "./Console";
import brand from '../images/logo.png';

const Navbar = () => {
    return(
        <nav className="navbar">
            <button 
                onClick={() => window.location.reload()} 
            >
                <img src={brand} className="navbar__brand" alt="Brand" />
            </button>
            <Console />
            <Socials />
            
        </nav>
    );
}

export default Navbar;
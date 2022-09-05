import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {

    return(
        <nav className='navbar'>
            <Link to="/">
                <img src={logo} alt="Brand logo" className='navbar__icon' />
            </Link>

        </nav>
    );
}

export default Navbar;
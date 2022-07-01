import '../styles/Socials.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socials = (props) => {


  return(
  <div className="socials">
    <a
      href="https://github.com/DamonGreenhalgh"
      target="_blank"
      rel="noreferrer"
      title="Github"
      alt="Github"
    >
      <FaGithub size="1.5em"/>
    </a>
    <a
      href="https://www.linkedin.com/in/damon-greenhalgh-2a11b6191/"
      target="_blank"
      rel="noreferrer"
      title="LinkedIn"
      alt="LinkedIn"
    >
      <FaLinkedinIn size="1.5em"/>
    </a>
    <a
      href="mailto: damonligreenhalgh@gmail.com"
      target="_blank"
      rel="noreferrer"
      title="Email"
      alt="Email"
    >
      <MdEmail size="1.5em"/>
    </a>
  </div>
  );
}

export default Socials;
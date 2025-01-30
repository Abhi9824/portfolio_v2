import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/abhijit-chanda-bb6117221/"
          className="footer__item"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Abhi9824" className="footer__item">
          <FaGithub />
        </a>
      </div>
      <p>
        Built with <FaReact className="react__icon" /> by Abhijit
      </p>
    </div>
  );
};

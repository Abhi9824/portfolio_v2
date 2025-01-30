import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdMailOutline, MdOutlineEventAvailable } from "react-icons/md";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__banner">
        <img src="/banner.jpg" alt="waves" />
      </div>
      <div className="hero__body">
        <div className="profile__heading">
          <img src="/profile_img.gif" alt="Me" className="profile__pic" />
          <a href="https://github.com/Abhi9824" className="hireme__btn">
            Hire Me <BsFillRocketTakeoffFill />
          </a>
        </div>
        <div className="profile__content">
          <h1>Abhijit Chanda</h1>
          <small>Crafting user-friendly web experiences.</small>
          <p>
            Hi, I'm a Full-Stack web developer specializing in MERN stack and a
            Computer Science & Engineering grad.
          </p>
          <ul className="profile__links">
            <li className="disable">
              <MdOutlineEventAvailable className="disable__icon" /> Available
            </li>
            <li className="disable">
              <FaGithub className="disable__icon" />
              <a href="https://github.com/Abhi9824" className="disable">
                Github
              </a>
            </li>
            <li className="disable">
              <MdMailOutline className="disable__icon" />
              <a href="mailto:heyamlan19@gmail.com" className="disable">
                abhijitchanda2000@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="profile__skills">
          <h3>
            My skills <FaCode className="fill__primary" />
          </h3>
          <ul className="profile__skills-ul">
            <li className="profile__skills-li">React</li>
            <li className="profile__skills-li">Redux</li>
            <li className="profile__skills-li">JavaScript</li>
            <li className="profile__skills-li">MongoDB</li>
            <li className="profile__skills-li">Node.js</li>
            <li className="profile__skills-li">Express.js</li>
            <li className="profile__skills-li">HTML5</li>
            <li className="profile__skills-li">CSS3</li>
            <li className="profile__skills-li">Bootstrap</li>
            <li className="profile__skills-li">Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

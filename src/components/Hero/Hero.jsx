import { BsFillRocketTakeoffFill as RocketIcon } from "react-icons/bs";
import { FaGithub, FaDownload } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdMailOutline, MdOutlineEventAvailable } from "react-icons/md";
import { motion } from "framer-motion";
import "./Hero.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export const Hero = () => {
  return (
    <div className="hero container">
      <motion.div
        className="hero__banner"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/banner3.jpg" alt="waves banner" />
      </motion.div>

      <motion.div
        className="hero__body"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="profile__heading">
          <motion.img
            variants={itemVariants}
            src="/profile_img.gif"
            alt="Abhijit Chanda"
            className="profile__pic"
          />

          <motion.div className="button__group" variants={itemVariants}>
            <a
              href="mailto:abhijitchanda2000@gmail.com"
              className="hireme__btn primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me <RocketIcon />
            </a>
            <a
              target="blank"
              href="/about/Abhijit_Resume_Cv.pdf"
              download="Abhijit_Resume_Cv.pdf"
              className="hireme__btn secondary-btn"
            >
              CV <FaDownload />
            </a>
          </motion.div>
        </div>

        <motion.div className="profile__content" variants={itemVariants}>
          <h1 className="text-gradient">Abhijit Chanda</h1>
          <small>Crafting stunning, user-friendly frontend experiences.</small>
          <p>
            Hi, I'm a Frontend-focused Software Developer specializing in the MERN stack. I build scalable applications with high-performance, animated, and premium user interfaces.
          </p>

          <ul className="profile__links">
            <li className="disable">
              <MdOutlineEventAvailable className="disable__icon" /> Available
            </li>
            <li className="disable gap-override">
              <FaGithub className="disable__icon" />
              <a
                href="https://github.com/Abhi9824"
                className="disable text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className="disable gap-override">
              <MdMailOutline className="disable__icon" />
              <a
                href="mailto:abhijitchanda2000@gmail.com"
                className="disable text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                abhijitchanda2000@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div className="profile__skills" variants={itemVariants}>
          <h3>
            Technical Arsenal <FaCode className="fill__primary" />
          </h3>
          <ul className="profile__skills-ul">
            {["React", "Redux", "Framer Motion", "JavaScript", "MongoDB", "Node.js", "Express.js", "HTML5/CSS3", "TailwindCSS", "Git"].map((skill, index) => (
              <motion.li
                key={index}
                className="profile__skills-li glass-panel"
                whileHover={{ y: -5, scale: 1.05, borderColor: "var(--primary-color)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

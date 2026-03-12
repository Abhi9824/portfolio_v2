import { motion } from "framer-motion";
import "./About.css";

const fadeUpVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <div className="about container">
      <motion.div
        className="about__intro"
        initial="hidden" animate="visible" variants={fadeUpVariant}
      >
        <h2 className="text-gradient">Hi, I'm Abhijit 👋</h2>
        <p>
          Software Developer with over 2 years of experience specializing in ReactJS, Redux, Node.js,
          Express.js, and MongoDB. I'm skilled in building scalable applications, seamless API
          integrations, and working in Agile workflows. I prioritize performance, stability, and stunning user interfaces.
        </p>
      </motion.div>

      <motion.div
        className="about__section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section__title">Education 🎓</h2>
        <div className="glass-panel card__layout">
          <div className="card__content">
            <h3>B. Tech, Computer Science and Engineering</h3>
            <h4>NERIST, Itanagar, Arunachal Pradesh</h4>
            <p className="highlight">CGPA: 8.49</p>
          </div>
          <div className="card__image">
            <img src="/about/college_img.jpg" alt="NERIST College" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="about__section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section__title">Experience 💼</h2>
        <div className="timeline">
          <div className="timeline__item glass-panel">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <h3>Quantta Analytics</h3>
              <h4 className="text-gradient">Frontend Developer</h4>
              <span className="timeline__date">May 2025 – Feb 2026</span>
              <ul className="timeline__list">
                <li>
                  Built an internal analytics console with interactive dashboards using Chart.js and Recharts.
                </li>
                <li>
                  Implemented rule-based notifications to alert teams on critical events and thresholds.   </li>
                <li>
                  Developed the <a href="https://nirabalance.com/" target="_blank" rel="noopener noreferrer">NIRA Balance brand website</a> using React.js, Tailwind CSS, and Framer Motion, implementing campaign sections and newsletter modules for marketing initiatives.
                </li>
                <li>
                  Built a secure Partner Portal using Redux Toolkit and JWT authentication to support partner onboarding and internal operational workflows.

                </li>
              </ul>
            </div>
          </div>
          <div className="timeline__item glass-panel">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <h3>Maveric Systems Limited</h3>
              <h4 className="text-gradient">Associate Engineer</h4>
              <span className="timeline__date">June 2023 – September 2024</span>
              <ul className="timeline__list">
                <li>
                  Migrated core components from React 16 to 18 and optimized state logic.
                </li>
                <li>
                  Refactored 60% of class components to functional components using Hooks, enhancing reusability.
                </li>
                <li>
                  Increased test coverage from 30% to 75% implementing unit tests with Jest.
                </li>
                <li>
                  Integrated RESTful APIs (Axios, Fetch, Node.js, Express) for seamless data flow.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </motion.div>

      <motion.div
        className="about__section contact__section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section__title">Let's Connect 📞</h2>
        <div className="contact__cards">
          <a href="mailto:abhijitchanda2000@gmail.com" target="_blank" rel="noopener noreferrer" className="glass-panel contact__card">
            <span className="contact__icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>abhijitchanda2000@gmail.com</p>
            </div>
          </a>
          <div className="glass-panel contact__card">
            <span className="contact__icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>Assam, India</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

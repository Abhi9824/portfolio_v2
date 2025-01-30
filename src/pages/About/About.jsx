import "./About.css";

const About = () => {
  return (
    <div className="about container">
      <h2>Hi, I'm Abhijit 👋</h2>
      <p>
        I'm a software developer with 1 year of experience in full-stack
        development using ReactJS, Redux, Node.js, Express.js, and MongoDB. I
        specialize in regression testing and ensuring application stability.
      </p>

      <h2>Education 🎓</h2>
      <p>
        I have completed my Bachelor of Technology degree in Computer Science
        and Engineering from NERIST, Itanagar, Arunachal Pradesh, achieving a
        CGPA of 8.49.
        <img src="/about/college_img.jpg" alt="My college" />
      </p>

      <h2>Experience 💼</h2>
      <p>
        <strong>
          Maveric Systems Limited - Associate Engineer (June 2023 – September
          2024)
        </strong>
        <ul>
          <li>
            Upgraded React applications from React 16 to React 18 using Hooks
            and functional components.
          </li>
          <li>
            Conducted functional testing to validate features, identify bugs,
            and ensure timely resolutions.
          </li>
          <li>
            Created unit tests with Jest and led regression testing for
            stability.
          </li>
          <li>
            Managed bugs and test cases with Jira for smooth collaboration.
          </li>
        </ul>
      </p>

      <h2>Contact 📞</h2>
      <p>
        📧 Email:{" "}
        <a href="mailto:abhijitchanda2000@gmail.com">
          abhijitchanda2000@gmail.com
        </a>{" "}
        📍 Location: Assam, India <br />
      </p>
    </div>
  );
};

export default About;

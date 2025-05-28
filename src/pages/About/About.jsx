import "./About.css";

const About = () => {
  return (
    <div className="about container">
      <h2>Hi, I'm Abhijit 👋</h2>
      <p>
        Software Developer with 1 year of experience in ReactJS, Redux, Node.js,
        Express.js, and MongoDB. Skilled in scalable development, API
        integration, and Agile workflows, with experience in testing for
        stability
      </p>

      <h2>Education 🎓</h2>
      <p>
        I have completed my Bachelor of Technology degree in Computer Science
        and Engineering from NERIST, Itanagar, Arunachal Pradesh, achieving a
        CGPA of 8.49.
      </p>
      <img src="/about/college_img.jpg" alt="My college" />

      <h2>Experience 💼</h2>
      <p>
        <strong>
          Maveric Systems Limited - Associate Engineer (June 2023 – September
          2024)
        </strong>
      </p>
      <ul className="list-items">
        <li>
          Upgraded applications from React 16 to 18, refactoring class
          components to functional components with Hooks for improved
          performance and maintainability.
        </li>
        <li>
          Integrated RESTful APIs with Axios, Fetch, Node.js, and Express for
          seamless data flow.
        </li>
        <li>
          Built and optimized fintech applications, ensuring secure and
          efficient user interactions.
        </li>
        <li>
          Wrote unit tests with Jest and conducted regression testing to
          maintain system stability.
        </li>
      </ul>

      <h2>Contact 📞</h2>
      <p>
        📧 Email:{" "}
        <a
          href="mailto:abhijitchanda2000@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          abhijitchanda2000@gmail.com
        </a>
        <br />
        📍 Location: Assam, India
      </p>
    </div>
  );
};

export default About;

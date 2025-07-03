import "./index.css";
import "./about.css";
import ProfileImg from "./assets/ProfileImg.jpg";
import Resume from "./assets/BrendaResume2.0.pdf";

export default function About() {
  return (
    <section id="about" className="about-container">
      <h2>About Me</h2>

      <img src={ProfileImg} alt="Profile Image" className="profile-image" />

      <h3>Brenda Zamora</h3>

      <p>
        I'm a Software Engineering student with a strong interest in web
        development and user-centered design. I enjoy learning new technologies
        and building meaningful digital experiences. Currently focused on
        improving my skills in React, Node.js, and database systems.
      </p>

      <p>
        My goal is to continuously learn and improve my skills while working on
        exciting projects.
      </p>

      <p>
        I am always open to new opportunities and collaborations. Feel free to
        reach out if you’d like to work together!
      </p>
      <br />
      <a
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        View My Resume (PDF)
      </a>
    </section>
  );
}

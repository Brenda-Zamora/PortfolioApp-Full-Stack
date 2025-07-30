import "../src/index.css";
import "../src/Home.css";
import hireme from "../src/assets/hireme.png";
import IntroImg from "../src/assets/IntroImg2.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="intro">
        <div className="intro-content">
          <h1 className="intro-title">Welcome to My Portfolio!</h1>
          <span className="hello">Hi,</span>
          <span className="intro-text">
            I am <span className="intro-name">Brenda Zamora</span> <br />
            Software Engineering Student
          </span>
          <p className="intro-para">
            I love turning ideas into real digital experiences using modern
            tools and technologies.
            <br />
            Let’s build something awesome together!
          </p>
          <p className="mission">
            <span className="mission-title">Mission</span> <br />
            To keep learning, building, and sharing creative software solutions
            that make people's lives easier.
          </p>
          <p className="intro-para">
            Take a look around to learn more about me, what I do, and the
            projects I've been working on!
          </p>
          <Link>
            <button className="btn-hireme">
              <img
                src={hireme}
                className="btn-hireme-img"
                alt="Hire Me Button"
              />
              Hire Me
            </button>
          </Link>
        </div>
        <img src={IntroImg} alt="Profile" className="profile-img" />
      </section>
    </>
  );
}

import SkillBar from "../components/skillbar";
import "./services.css";
import service1 from "./assets/Service1.png";
import service2 from "./assets/Service2.1.png";
import service3 from "./assets/Service3.png";

export default function Service() {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I’m a passionate software engineering student who loves building
          useful, clean, and modern digital solutions. I’m always learning and
          experimenting with new technologies, and I enjoy turning ideas into
          real, working apps. Whether it's a simple website or a more complex
          system, I put care and effort into everything I create. Here are some
          of the services I offer:
        </span>
        <div className="skillBars">
          <SkillBar
            imgSrc={service1}
            altText="Custom Web Development"
            title="Custom Web Development"
            description="I can create responsive websites using HTML, CSS, JavaScript, 
            and React. Whether it's a personal blog or a small business page, I’ll help bring 
            your idea to life in the browser."
          />
          <SkillBar
            imgSrc={service2}
            altText="App Prototypes and Frontend"
            title="App Prototypes and Frontend"
            description="Using tools like React Native or frontend frameworks, I can build 
            interactive app prototypes that look and feel like the real thing. Perfect for 
            testing out your idea or impressing investors."
          />
          <SkillBar
            imgSrc={service3}
            altText="App Debugging and Code Fixes"
            title="App Debugging and Code Fixes"
            description="Got bugs? I can help you find and fix issues in your code (JavaScript, 
            Python, C#, etc.) or improve your project’s structure to make it run smoother."
          />
        </div>
      </section>
    </>
  );
}

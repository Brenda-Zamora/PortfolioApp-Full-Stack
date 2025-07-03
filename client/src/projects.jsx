import "./projects.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A simple and clean portfolio built with React and Vite to showcase my work and skills.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://github.com/brenda/portfolio",
  },
  {
    title: "To-Do List App",
    description:
      "A to-do list with local storage functionality to help manage daily tasks.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/brenda/todo-app",
  },
  {
    title: "E-commerce Database Design",
    description:
      "Designed a relational database schema for an online store using SQL Developer.",
    technologies: ["SQL", "Database Design"],
    link: "https://github.com/brenda/ecommerce-database",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>
              <strong>Technologies:</strong> {proj.technologies.join(", ")}
            </p>
            {proj.link !== "#" && ( //
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get the projects from the API
    const BASE_URL =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

    fetch(`${BASE_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Get the user role from localStorage
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <br />
              <p>
                {proj.completion
                  ? `Completion Date: ${new Date(
                      proj.completion
                    ).toLocaleDateString()}`
                  : "No completion date"}
              </p>
            </div>
          ))}
        </div>
      )}
      <br />
      {token && userRole === "admin" && (
        <button
          className="addProjectBtn"
          onClick={() => navigate("/projects/add")}
        >
          Add Project
        </button>
      )}
    </section>
  );
};

export default Projects;

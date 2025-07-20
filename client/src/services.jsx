import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./services.css";

const Services = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get the projects from the API
    fetch("http://localhost:3000/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Get the user role from localStorage
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  return (
    <section id="services" className="services-container">
      <span className="serviceTitle">My Services</span>
      <span className="serviceIntro">
        I’m a passionate software engineering student who loves building useful,
        clean, and modern digital solutions. I’m always learning and
        experimenting with new technologies, and I enjoy turning ideas into
        real, working apps. Whether it's a simple website or a more complex
        system, I put care and effort into everything I create. Here are some of
        the services I offer:
      </span>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="serviceBars">
          {services.map((serv, index) => (
            <div className="serviceBar" key={index}>
              <img
                src={serv.imgSrc}
                alt={serv.altText}
                className="serviceBarImg"
              />
              <div className="serviceBarText">
                <h3>{serv.title}</h3>
                <p>{serv.description}</p>
                <br />
                <p>
                  {serv.completion
                    ? `Completion Date: ${new Date(
                        serv.completion
                      ).toLocaleDateString()}`
                    : "No completion date"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <br />
      {token && userRole === "admin" && (
        <button
          className="addServiceBtn"
          onClick={() => navigate("/services/add")}
        >
          Add Service
        </button>
      )}
    </section>
  );
};

export default Services;

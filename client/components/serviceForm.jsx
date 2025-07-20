import { useState } from "react";
import { Link } from "react-router-dom";
import "./serviceForm.css";

export default function ServiceForm() {
  // FORM STATE
  const [formData, setFormData] = useState({
    title: "",
    full_name: "",
    email: "",
    completion: "",
    description: "",
  });

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split the formData into a new object to match the backend schema
    const fullName = formData.full_name.split(" ");
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(" ") || "-"; // Join the rest as last name

    try {
      // Log the body being sent for debugging
      console.log("Body sent:", {
        title: formData.title,
        firstname: firstName,
        lastname: lastName,
        email: formData.email,
        completion: formData.completion,
        description: formData.description,
      });

      const res = await fetch("http://localhost:3000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: formData.title,
          firstname: firstName,
          lastname: lastName,
          email: formData.email,
          completion: new Date(formData.completion),
          description: formData.description,
        }),
      });

      if (res.ok) {
        alert("Service added successfully ✅");
        setFormData({
          title: "",
          full_name: "",
          email: "",
          completion: "",
          description: "",
        });
      } else {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        alert(
          "Failed to add service ❌: " + (errorData.error || "Unknown error")
        );
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Form JSX
  return (
    <div id="serviceFormPage">
      <Link to="/services" className="backToServices">
        Back to Services
      </Link>
      <div id="service">
        <h1 className="serviceFormTitle">Add New Service</h1>
        <form className="serviceForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Service Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="full_name"
            placeholder="Your Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="completion"
            value={formData.completion}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Service Description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submitServiceBtn">
            Submit Service
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import "../src/contact.css";

export default function Contact() {
  // FORM STATE
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
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
    const fullName = formData.from_name.split(" ");
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(" ") || "-"; // Join the rest as last name

    try {
      const BACKEND_URL =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

      const response = await fetch(`${BACKEND_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: formData.from_email,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          from_phone: "",
          message: "",
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Form JSX
  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="name"
            placeholder="Your Full Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="phone"
            placeholder="Your Phone Number"
            name="from_phone"
            value={formData.from_phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>

        <p className="contactInfo">
          <i>
            Call me on: <strong>1-4376655034</strong>
          </i>
        </p>
        <p className="contactInfomail">
          Email:{" "}
          <strong>
            <a href="mailto:bdzamora.98@gmail.com">bdzamora.98@gmail.com</a>
          </strong>
        </p>
        <p className="contactInfo">
          LinkedIn: www.linkedin.com/in/brenda-zamora98
        </p>
      </div>
    </div>
  );
}

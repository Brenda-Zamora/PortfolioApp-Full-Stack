import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/SignUp.css";

export default function Signup() {
  // FORM STATE
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_password: "",
  });

  const navigate = useNavigate();

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false); // State to manage loading status

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const BACKEND_URL =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

      const res = await fetch(`${BACKEND_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.form_name,
          email: formData.form_email,
          password: formData.form_password,
          /*created: new Date(),
          updated: new Date(),*/ // This is not necessary, the server will handle these fields
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful ✅");
        setFormData({
          form_name: "",
          form_email: "",
          form_password: "",
        });
        navigate("/");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Form JSX
  return (
    <div id="signUpPage">
      <div id="signUp">
        <h2 className="signUpPageTitle">Sign Up</h2>
        <form className="signUpForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="form_name"
            placeholder="Full Name"
            value={formData.form_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="form_email"
            placeholder="Email Address"
            value={formData.form_email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="form_password"
            placeholder="Password"
            value={formData.form_password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signUpBtn" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <p className="signInLink">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

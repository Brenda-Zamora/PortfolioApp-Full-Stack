import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/SignIn.css";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const BACKEND_URL =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

      const res = await fetch(`${BACKEND_URL}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Login data:", data);
        localStorage.setItem("token", data.token); // Store token in localStorage
        localStorage.setItem("role", data.user.role); // Store user role in localStorage
        alert("Login successful ✅");

        // Redirect to home or dashboard
        navigate("/");
      } else {
        alert("Login failed ❌");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div id="signInPage">
      <div id="signIn">
        <h2 className="signInPageTitle">Sign In</h2>
        <form className="signInForm" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="rememberMeContainer">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" className="signInBtn">
            Sign In
          </button>
        </form>
      </div>
      <p className="signUpLink">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

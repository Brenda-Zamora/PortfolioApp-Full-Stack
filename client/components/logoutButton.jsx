import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./logoutButton.css";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true si hay token, false si no
  }, []);

  const handleLogout = async () => {
    try {
      // Call the logout endpoint
      await fetch("http://localhost:3000/auth/signout", {
        method: "GET",
      });

      // Erase the token from local storage
      localStorage.removeItem("token");

      // Redirect to the sign-in page
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!isLoggedIn) {
    return null; // Hide the button if not logged in
  }

  return (
    <button onClick={handleLogout} className="logoutBtn">
      Logout
    </button>
  );
}

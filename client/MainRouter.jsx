import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./src/SignUp.jsx";
import Signin from "./src/SignIn.jsx";
import Home from "./components/Home";
import About from "./src/about.jsx";
import Contact from "./src/contact.jsx";
import Service from "./src/services.jsx";
import ServiceForm from "./components/serviceForm.jsx";
import Project from "./src/projects.jsx";
import ProjectForm from "./components/projectForm.jsx";
import Layout from "./components/layout";
import Footer from "./components/Footer/footer.jsx";

const MainRouter = () => {
  return (
    <div>
      <Layout />

      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/services/add" element={<ServiceForm />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/projects/add" element={<ProjectForm />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};
export default MainRouter;

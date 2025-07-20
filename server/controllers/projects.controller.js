import Project from "../models/project.model.js";

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error getting projects" });
  }
};

// Get a project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Error finding project" });
  }
};

// Add a new project
const addProject = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Error adding project:", err);
    res.status(400).json({ error: err.message });
  }
};

// Update a project by ID
const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error updating project" });
  }
};

// Delete a project by ID
const deleteProjectById = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting project" });
  }
};

// Delete all projects
const deleteAllProjects = async (req, res) => {
  try {
    await Project.deleteMany({});
    res.json({ message: "All projects deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting projects" });
  }
};

export default {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProjectById,
  deleteAllProjects,
};

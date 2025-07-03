import express from "express";
import {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProjectById,
  deleteAllProjects,
} from "../controllers/projects.controller.js";

const router = express.Router();

router.get("/", getAllProjects); // GET all projects
router.get("/:id", getProjectById); // GET project by ID
router.post("/", addProject); // POST new project
router.put("/:id", updateProject); // PUT update project by ID
router.delete("/:id", deleteProjectById); // DELETE project by ID
router.delete("/", deleteAllProjects); // DELETE all projects

export default router;

import express from "express";
import projCtrl from "../controllers/projects.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router
  .route("/api/projects")
  .get(projCtrl.getAllProjects)
  .post(authCtrl.requireSignin, authCtrl.isAdmin, projCtrl.addProject) // just admin can add a project
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, projCtrl.deleteAllProjects); // just admin can delete all

router
  .route("/api/projects/:projectId")
  .get(projCtrl.getProjectById) // anyone can get a project by ID
  .put(authCtrl.requireSignin, authCtrl.isAdmin, projCtrl.updateProject) // just admin can update
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, projCtrl.deleteProjectById); // just admin can delete

export default router;

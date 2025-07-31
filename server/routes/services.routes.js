import express from "express";
import servCtrl from "../controllers/services.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router
  .route("/")
  .get(servCtrl.getAllServices)
  .post(authCtrl.requireSignin, authCtrl.isAdmin, servCtrl.addService) // just admin can add a project
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, servCtrl.deleteAllServices); // just admin can delete all

router
  .route("/:id")
  .get(servCtrl.getServiceById) // anyone can get a project by ID
  .put(authCtrl.requireSignin, authCtrl.isAdmin, servCtrl.updateService) // just admin can update
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, servCtrl.deleteServiceById); // just admin can delete

export default router;

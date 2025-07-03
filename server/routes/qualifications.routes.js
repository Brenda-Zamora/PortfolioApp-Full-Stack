import express from "express";
import {
  getAllQualifications,
  getQualificationById,
  addQualification,
  updateQualification,
  deleteQualificationById,
  deleteAllQualifications,
} from "../controllers/qualifications.controller.js";

const router = express.Router();

router.get("/", getAllQualifications);
router.get("/:id", getQualificationById);
router.post("/", addQualification);
router.put("/:id", updateQualification);
router.delete("/:id", deleteQualificationById);
router.delete("/", deleteAllQualifications);

export default router;

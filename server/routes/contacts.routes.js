import express from "express";
import {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContactById,
  deleteAllContacts,
} from "../controllers/contacts.controller.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.post("/", addContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContactById);
router.delete("/", deleteAllContacts);

export default router;

// Controller to manage qualifications
import Qualification from "../models/education.model.js";

// Get all qualifications
export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ error: "Error getting qualifications" });
  }
};

// Get a qualification by ID
export const getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) {
      return res.status(404).json({ error: "Qualification not found" });
    }
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ error: "Error finding qualification" });
  }
};

// Add a new qualification
export const addQualification = async (req, res) => {
  try {
    const newQualification = new Qualification(req.body);
    await newQualification.save();
    res.status(201).json(newQualification);
  } catch (err) {
    res.status(400).json({ error: "Error creating qualification" });
  }
};

// Update a qualification by ID
export const updateQualification = async (req, res) => {
  try {
    const updated = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Qualification not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error updating qualification" });
  }
};

// Delete a qualification by ID
export const deleteQualificationById = async (req, res) => {
  try {
    const deleted = await Qualification.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Qualification not found" });
    }
    res.json({ message: "Qualification deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting qualification" });
  }
};

// Delete all qualifications
export const deleteAllQualifications = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: "All qualifications deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting qualifications" });
  }
};

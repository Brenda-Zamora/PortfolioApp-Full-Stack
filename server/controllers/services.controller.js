// Controller to manage services
import Service from "../models/service.model.js";

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Error getting services" });
  }
};

// Get a service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Error finding service" });
  }
};

// Add a new service
const addService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ error: "Error creating service" });
  }
};

// Update a service by ID
const updateService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error updating service" });
  }
};

// Delete a service by ID
const deleteServiceById = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting service" });
  }
};

// Delete all services
const deleteAllServices = async (req, res) => {
  try {
    await Service.deleteMany({});
    res.json({ message: "All services deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting services" });
  }
};

export default {
  getAllServices,
  getServiceById,
  addService,
  updateService,
  deleteServiceById,
  deleteAllServices,
};

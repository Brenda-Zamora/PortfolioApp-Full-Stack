// This file contains the controller functions for managing contacts in a Node.js application using Mongoose.

import Contact from "../models/contact.model.js";
export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  contact ? res.json(contact) : res.status(404).send("Contact not found");
};

export const addContact = async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.status(201).json(newContact);
};

export const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  updated ? res.json(updated) : res.status(404).send("Not found");
};

export const deleteContactById = async (req, res) => {
  const deleted = await Contact.findByIdAndDelete(req.params.id);
  deleted ? res.sendStatus(204) : res.status(404).send("Not found");
};

export const deleteAllContacts = async (req, res) => {
  await Contact.deleteMany();
  res.sendStatus(204);
};

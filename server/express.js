import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contacts.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import serviceRoutes from "./routes/services.routes.js";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

// CORS setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  })
);

// Middleware setup
app.use(express.static(path.join(CURRENT_WORKING_DIR, "client", "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());

// Routes setup
//app.use("/", userRoutes);
//app.use("/", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(CURRENT_WORKING_DIR, "client", "dist", "index.html"));
});

// Error handling
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";
import epicProvider from "../services/epicProvider.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json());

// ⚡ Enable CORS before routes
app.use(cors({
  origin: "http://localhost:3000"
}));

const PORT = process.env.PORT || 5000;

// Root route
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});

// EPIC lookup endpoint
app.post(
  "/api/epic/lookup",
  body("epic").isLength({ min: 10, max: 10 }).trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { epic } = req.body;

    try {
      const result = await epicProvider.lookupEPIC(epic);
      if (!result) {
        return res.status(404).json({ message: "EPIC not found" });
      }
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Server error", message: err.message });
    }
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

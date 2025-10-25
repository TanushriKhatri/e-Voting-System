import express from "express";
import epicProvider from "../services/epicProvider.js";

const router = express.Router();

router.post("/lookup", async (req, res) => {
  const { epic } = req.body;
  const result = await epicProvider.lookupEPIC(epic);
  if (!result) {
    return res.status(404).json({ message: "EPIC not found" });
  }
  res.json(result);
});

export default router;

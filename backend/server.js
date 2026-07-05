import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

// ==============================
// Middleware
// ==============================
app.use(cors());
app.use(express.json());

// ==============================
// Health Check Route
// ==============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 BizPilot AI Backend is Running",
    version: "1.0.0",
  });
});

// ==============================
// Chat API
// ==============================
app.use("/api/chat", chatRoute);

// ==============================
// 404 Route
// ==============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// ==============================
// Start Server
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Mock ensemble model prediction function
// Removed mock function to replace with call to Python microservice

const axios = require("axios");

app.post("/chat", async (req, res) => {
  const { message, formData } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Call Python ensemble model microservice for prediction
    const predictionRes = await axios.post(
      "http://localhost:6000/predict",
      formData
    );
    const prediction = predictionRes.data.prediction || "Unknown";

    // Create explanation prompt for Gemini
    let explanationPrompt = `The model prediction is: ${prediction}. Please explain this prediction in simple terms.`;

    if (formData && typeof formData === "object") {
      const formDataString = Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
      explanationPrompt = `Form Data: { ${formDataString} }. ${explanationPrompt} User Message: ${message}`;
    }

    // Get explanation from Gemini
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: explanationPrompt,
    });

    const explanationText = response.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({
      prediction,
      explanation: explanationText || "No explanation from Gemini.",
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Gemini server is running at http://localhost:${port}`);
});

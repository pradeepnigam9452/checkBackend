import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT;
const main = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected successfully ✅");
  } catch (e) {
    console.log("Database error:", e);
  }
};

main();

app.get("/", (req, res) => {
  res.json({ message: "Server running 🚀" });
});

app.get("/data", (req, res) => {
  res.send("chal rhaa h bhai 😄");
});

app.listen(PORT)
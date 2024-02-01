import "express-async-errors";
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined.");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined.");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database.");
  } catch (err) {
    console.error(err);
  }

  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();

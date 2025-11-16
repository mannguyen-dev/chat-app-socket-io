import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const POST = process.env.PORT || 3000;

const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(POST, () => {
      console.log("Server is running on port:", POST);
    });
  })
  .catch((err) => {
    console.log("Failed to start server due to database connect error", err);
  });

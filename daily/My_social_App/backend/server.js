import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});

app.use('/api/user',userRoutes);
app.use('/api/post',postRoutes);
app.listen(PORT, () => {
  console.log('Server running ...')
});

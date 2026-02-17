import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
import userRoutes from "./routes/user.route.js";
import blogRoutes from "./routes/blog.route.js";
// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});
app.use('/api/user',userRoutes);
app.use('/api/blog',blogRoutes);

app.listen(PORT, () => {
  console.log('Server running ...')
});

import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/Config/db.js";
import userRoutes from "./src/Routes/user.routes.js";
import taskRoutes from "./src/Routes/task.routes.js";

const app = express();

dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

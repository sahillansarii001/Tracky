import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTask,
  updateTask,
} from "../Controllers/task.controller.js";

const router = express.Router();

router.post("/create-task", createTask);
router.put("/update-task/:id", updateTask);
router.get("/get-task/:id", getTask);
router.get("/get-all-task", getAllTask);
router.delete("/delete-task/:id", deleteTask);

export default router;

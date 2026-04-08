import mongoose from "mongoose";
import User from "./user.models.js";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  assignTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;

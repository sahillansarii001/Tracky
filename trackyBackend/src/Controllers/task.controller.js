import Task from "../Models/task.model.js";
import User from "../Models/user.models.js";

export const createTask = async (req, res) => {
  try {
    const { title, assignTo } = req.body;

    const newTask = new Task({
      title,
      assignTo,
    });
    await newTask.save();
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (err) {
    res.status(500).json({ message: "Task creation failed", err });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Task Updated Successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Task Update Failed", error: err.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({ message: "Task retrieved successfully", task });
  } catch (err) {
    res.status(500).json({ message: "Task Get Failed", error: err.message });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignTo", "name");
    res.status(201).json({ message: "Tasks retrieved successfully", tasks });
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve tasks", err });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task Deleted Successfully", tasks });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Task Deletion Failed", error: err.message });
  }
};

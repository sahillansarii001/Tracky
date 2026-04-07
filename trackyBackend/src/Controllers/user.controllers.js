import User from "../Models/user.models.js";

export const addUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await User({ name });
    newUser.save();
    res.status(201).json({ message: "User Created Successfully", newUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: "User Creation Failed", error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "User Updated Successfully", user });
  } catch (err) {
    res.status(500).json({ message: "User Update Failed", error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "User Get Failed", error: err.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Users Found", users });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Getting Users Failed", error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted Successfully", users });
  } catch (err) {
    res
      .status(500)
      .json({ message: "User Deletion Failed", error: err.message });
  }
};

import express from "express";
import { addUser, updateUser, getUser, getAllUser, deleteUser } from "../Controllers/user.controllers.js";

const router = express.Router();

router.post("/adduser", addUser);
router.put("/updateuser/:id", updateUser);
router.get("/getuser/:id", getUser);
router.get("/getalluser", getAllUser);
router.delete("/deleteuser/:id", deleteUser);

export default router;

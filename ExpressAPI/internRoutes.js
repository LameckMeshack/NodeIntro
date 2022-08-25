import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./InternsControllers.js";
const router = express.Router();

const interns = [
  {
    id: 1,
    name: "John Doe",
    location: "Cysuite",
  },
  {
    id: 2,
    name: "Sonwar",
    location: "RiverRand",
  },
];
// all routes will be prefixed with /users

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

// This router handles user-related HTTP requests such as retrieving users for the sidebar.

router.get("/", protectRoute, getUsersForSidebar);

export default router;

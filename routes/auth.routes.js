import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// This router handles authentication-related HTTP requests such as user signup, login, and logout.

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;

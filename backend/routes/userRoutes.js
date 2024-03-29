import express from "express";
import {
  loginUser,
  getUserProfile,
  registerUser,
  logoutUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/jwt.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/logout").post(logoutUser);

export default router;

import express from "express";
import {
  getProfileData,
  login,
  register,
  updateProfileData,
} from "../controllers/auth.controller.js";
import { userProfileMiddleware } from "../middleware/userProfile.middleware.js";

const router = express();

router.post("/api/register", register);
router.post("/api/login", login);
router.get("/api/user/profile",userProfileMiddleware,getProfileData);
router.put("/api/user/profile/update",userProfileMiddleware,updateProfileData);

export const authRouter = router;

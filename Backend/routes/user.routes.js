import express from "express";
import {
  getProfileData,
  login,
  register,
  updateProfileData,
} from "../controllers/auth.controller.js";
import { userProfileMiddleware } from "../middleware/userProfile.middleware.js";
import { appointmentBook, cancelAppointment, getAllAppointment } from "../controllers/appointment.controller.js";
import { PaymentRazorPay } from "../controllers/doctor.controller.js";

const router = express();

router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/book-appointment", userProfileMiddleware,appointmentBook);
router.get("/api/user/appointment",userProfileMiddleware,getAllAppointment)
router.get("/api/user/profile",userProfileMiddleware,getProfileData);
router.put("/api/user/profile/update",userProfileMiddleware,updateProfileData);
router.post("/api/user/appointment/cancel",userProfileMiddleware,cancelAppointment);
router.post("/api/user/payment",userProfileMiddleware,PaymentRazorPay);

export const authRouter = router;

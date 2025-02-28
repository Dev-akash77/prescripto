import express from "express";
import {
  addDoctor,
  doctorPagination,
  getAllDoctor,
  doctorLogin,
  getDoctorEarning,
  getAppointmentForDoctor,
  getUserforDoctor,
  compleateAppointment
} from "../controllers/doctor.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { doctorMiddleware } from "../middleware/doctor.middleware.js";
const router = express();
router.post("/api/admin/add-doctor", adminMiddleware, addDoctor);
router.get("/api/all-doctors", getAllDoctor);
router.get("/api/earning-doctor", doctorMiddleware, getDoctorEarning); //! get earning for doctor
router.get(
  "/api/apoointment-doctor",
  doctorMiddleware,
  getAppointmentForDoctor
); //! get appointment for doctor
router.get("/api/user-doctor", doctorMiddleware, getUserforDoctor); //! get user for doctor
router.post("/api/complete-doctor", doctorMiddleware, compleateAppointment); //! doctor complete
router.post("/api/doctor/:id", doctorPagination);
router.post("/api/doctor-login", doctorLogin);
export const doctorRouter = router;

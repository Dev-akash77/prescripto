import  express  from "express";
import { adminLogin, getAdminAppointment, getadminDoctorList, getAllUser, updateDoctorsAvailablity } from "../controllers/admin.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
const router = express();
router.post("/api/admin/login",adminLogin);  //! admin login authentication
router.get("/api/admin/all-doctors",adminMiddleware,getadminDoctorList); //! get admin doctor list
router.get("/api/admin/all-appointment",adminMiddleware,getAdminAppointment); //! get admin appointment
router.get("/api/admin/all-user",adminMiddleware,getAllUser); //! get admin appointment
router.put("/api/admin/update-doctors-available",adminMiddleware,updateDoctorsAvailablity); //! update doctor available
export const adminRouter = router;
 
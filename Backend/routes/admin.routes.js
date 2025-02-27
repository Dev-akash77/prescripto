import  express  from "express";
import { adminLogin, getAdminAppointment, getadminDoctorList, getAllUser, updateDoctorsAvailablity,cancleAdminAppointment,deleteAppointment } from "../controllers/admin.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
const router = express();
router.post("/api/admin/login",adminLogin);  //! admin login authentication
router.post("/api/admin/cancle-appointment",adminMiddleware,cancleAdminAppointment);  //! admin cancle appointment
router.post("/api/admin/delete-appointment",adminMiddleware,deleteAppointment);  //! admin delete appointment
router.get("/api/admin/all-doctors",adminMiddleware,getadminDoctorList); //! get admin doctor list
router.get("/api/admin/all-appointment",adminMiddleware,getAdminAppointment); //! get admin appointment
router.get("/api/admin/all-user",adminMiddleware,getAllUser); //! get admin appointment
router.put("/api/admin/update-doctors-available",adminMiddleware,updateDoctorsAvailablity); //! update doctor available
export const adminRouter = router;
 
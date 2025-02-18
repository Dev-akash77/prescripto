import  express  from "express";
import { adminLogin, getadminDoctorList, updateDoctorsAvailablity } from "../controllers/admin.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
const router = express();
router.post("/api/admin/login",adminLogin);  //! admin login authentication
router.get("/api/admin/all-doctors",adminMiddleware,getadminDoctorList); //! get admin doctor list
router.put("/api/admin/update-doctors-available",adminMiddleware,updateDoctorsAvailablity); //! update doctor available
export const adminRouter = router;
 
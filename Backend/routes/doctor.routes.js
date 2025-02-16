import  express from 'express';
import { addDoctor, getAllDoctor } from '../controllers/doctor.controller.js';
import { adminMiddleware } from '../middleware/admin.middleware.js';
const router = express();
router.post("/api/admin/add-doctor",adminMiddleware,addDoctor);
router.get("/api/all-doctors",getAllDoctor);
export const doctorRouter = router;
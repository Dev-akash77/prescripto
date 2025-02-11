import  express from 'express';
import { addDoctor } from '../controllers/doctor.controller.js';
import { adminMiddleware } from '../middleware/admin.middleware.js';
const router = express();
router.post("/api/admin/add-doctor",adminMiddleware,addDoctor);
export const doctorRouter = router;
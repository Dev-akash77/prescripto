import  express  from "express";
import { adminLogin } from "../controllers/admin.controller.js";
const router = express();
router.post("/api/admin/login",adminLogin);
export const adminRouter = router;

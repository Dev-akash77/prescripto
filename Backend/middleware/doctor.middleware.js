import jwt from "jsonwebtoken";
import { doctorModel } from "../models/doctor.model.js";
export const doctorMiddleware = async (req, res, next) => {
  try {
    const token = req.header("token");
    const jwToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!token || !jwToken) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized Login Again" });
    }

    const { email, password } = jwToken;
    const doctor = await doctorModel.findOne({ email }).select("-password");

    if (!doctor) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized Login Again" });
    }

    req.doctor = doctor;

    next();
    
  } catch (error) {
    console.log("doctorMiddleware middleware erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

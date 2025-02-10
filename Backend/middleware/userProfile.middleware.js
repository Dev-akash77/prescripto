import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
export const userProfileMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res
      .status(400)
      .json({ success: false, msg: "HTTP unauthorized, token not provide" });
  }
  try {
    const jwtToken = token.replace("Bearer ", "").trim();
    const jwtVarified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    const profiledata = await userModel.findById({_id:jwtVarified.id}).select("-password");
    req.user = profiledata;
    next();
  } catch (error) {
    console.log("get profile data middleware errorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

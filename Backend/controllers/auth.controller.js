import validator from "validator";
import bcrypt from "bcryptjs";
import { userModel } from "./../models/user.model.js";
import { appointmentModel } from "../models/appointment.model.js";

// ! register controller logics
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // ! if required field are missing show error
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }
    // ! invalid email format
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }
    const existingUser = await userModel.findOne({ email });
    // ! user allready exist
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User allready exist with this email",
      });
    }
    // ! password length
    if (password.length <= 6) {
      return res.status(400).json({
        success: false,
        message: "Please add strong password",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(password, salt);
    const user = new userModel({ name, email, password: hasPassword });
    await user.save();
    res.status(201).json({ success: true, message: "Registered successfully" });
  } catch (error) {
    console.log("register controller errorr: ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! login controller logics
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    const token = await existingUser.generateToken();

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    if (!isValidPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    res
      .status(200)
      .json({ success: true, message: "login successfully", token });
  } catch (error) {
    console.log("register controller errorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! get profile data
export const getProfileData = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("get profile data controller errorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateProfileData = async (req, res) => {
  try {
    const { name, email, dob, gender, address, phone } = req.body;
    const userID = req.user.id;
    const updatedDob = dob ? dob : "Not Selected";
    if (!userID) {
      return res.status(400).json({
        success: false,
        message: "Login to update profile",
      });
    }
    await userModel.findByIdAndUpdate(
      { _id: userID },
      { name, email, dob: updatedDob, gender, address, phone }
    );
     await appointmentModel.updateMany(
      { userId: userID }, // Find all documents with this userId
      { $set: { userData: { name, email, dob: updatedDob, gender, address, phone } } },
    );
    
    
    res
      .status(200)
      .json({ success: true, message: "profile update successfully" });
  } catch (error) {
    console.log("update profile data controller errorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

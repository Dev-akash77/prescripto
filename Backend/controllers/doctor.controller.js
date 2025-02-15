import { doctorModel } from "./../models/doctor.model.js";
import bcrypt from "bcryptjs";

// ! add doctor functionality
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    // ! existing user
    const existingUser = await doctorModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Doctor allready exist with this email",
      });
    }

    if (!name || !email || !password || !image) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    if (!speciality || !degree || !experience || !about) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    if (!fees || !address) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    const solt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, solt);

    const doctor = new doctorModel({
      name,
      email,
      password: hashPassword,
      image,
      speciality,
      degree,
      experience,
      about,
      fees,
      date: Date.now(),
      address,
    });
    await doctor.save();
    console.log(doctor);

    res
      .status(201)
      .json({ success: true, message: "Doctor added Successfully" });
  } catch (error) {
    console.log("addDoctor controller errorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

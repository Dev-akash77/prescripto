import { generateJWT } from "../Utils/Function/generateJWT_Token.js";
import { doctorModel } from "./../models/doctor.model.js";
import { appointmentModel } from "./../models/appointment.model.js";
import { userModel } from "./../models/user.model.js";

// ! admin login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ! if user can not fill email and password
    if (!email && !password) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    // ! if email and passowrd not matched
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res
        .status(400)
        .json({ success: false, message: "invalid cradentials" });
    }

    // ! get json web token
    const token = generateJWT(
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_PASSWORD
    );

    // ! if token are not available
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Token generation faield" });
    }

    // ! all the tthings are perfect send response to admin
    res
      .status(200)
      .json({ success: true, message: "Login Successfully", token });
  } catch (error) {
    console.log("admin login controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! admin doctors list
export const getadminDoctorList = async (req, res) => {
  try {
    const allDoctor = await doctorModel.find({});
    if (!allDoctor) {
      res.status(400).json({ success: false, message: "Doctor Not Found" });
    }
    res.status(200).json({ success: true, doctor: allDoctor });
  } catch (error) {
    console.log("admin getadminDoctorList controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! update doctors availablity
export const updateDoctorsAvailablity = async (req, res) => {
  try {
    const { _id, available } = req.body;
    const doctor = await doctorModel.findById(_id);

    if (typeof available !== "boolean") {
      return res
        .status(400)
        .json({ success: false, message: "Available must be a boolean value" });
    }

    if (!doctor) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor not found" });
    }

    await doctorModel.findByIdAndUpdate(_id, { available });

    res
      .status(200)
      .json({ success: true, message: "Doctor availability updated" });
  } catch (error) {
    console.log(
      "admin updateDoctorsAvailablity controller error",
      error.message
    );
    res.status(400).json({ success: false, message: error.message });
  }
};

//! get all admin appointment
export const getAdminAppointment = async (req, res) => {
  try {
    const appointment = await appointmentModel.find({});

    if (!appointment) {
      return res
        .status(400)
        .json({ success: false, message: "appointment not found" });
    }

    res.status(200).json({ success: true, appointment });
  } catch (error) {
    console.log("admin getAdminAppointment controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! get all user
export const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find({}).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("admin getAllUser controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! cancle appointment only admin
export const cancleAdminAppointment = async (req, res) => {
  try {
    const { appointmentID } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentID);

    if (!appointmentData) {
      return res
        .status(400)
        .json({ success: false, message: "Appointment not found" });
    }
    await appointmentModel.findByIdAndUpdate(appointmentID, { cancle: true });

    const { doctorData, slotTime, slotDate } = appointmentData;
    const slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (cur) => cur !== slotTime
    );

    if (doctorData.slots_booked[slotDate].length === 0) {
      delete doctorData.slots_booked[slotDate];
    }

    await doctorModel.findByIdAndUpdate(doctorData._id, { slots_booked });
    res.status(200).json({ success: true, message: "Cancle Appointment" });
  } catch (error) {
    console.log("admin getAllUser controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! delete appointment
export const deleteAppointment = async (req, res) => {
  try {
    const { appointmentID } = req.body;

    if (!appointmentID) {
      return res
        .status(400)
        .json({ success: false, message: "Appointment id not found" });
    }
    await appointmentModel.findByIdAndDelete(appointmentID);
    res
      .status(200)
      .json({ success: true, message: "Appointment Delete Successfully" });
  } catch (error) {
    console.log("admin deleteAppointment controller error", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

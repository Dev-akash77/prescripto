import { doctorModel } from "./../models/doctor.model.js";
import bcrypt from "bcryptjs";
import { generateJWT } from "../Utils/Function/generateJWT_Token.js";
import { appointmentModel } from "./../models/appointment.model.js";

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

// ! get all doctor
export const getAllDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});

    if (!doctors) {
      res.status(400).json({ success: false, message: "Doctors not found" });
    }
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.log("getallDoctor controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! single doctor for pagination
export const doctorPagination = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor's id not found" });
    }

    const doctor = await doctorModel.findById(id);

    if (!doctor) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor's not found" });
    }

    res.status(200).json({ success: true, doctor });
  } catch (error) {
    console.log("doctorPagination controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! doctor login
export const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctorData = await doctorModel.findOne({ email });
    const isMatch = await bcrypt.compare(password, doctorData.password);

    if (!doctorData || !isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "IInvalid credentials" });
    }
    const token = generateJWT(email, password);
    res
      .status(200)
      .json({ success: true, message: "Login Successfully", token });
  } catch (error) {
    console.log("doctorLogin controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! get total Earning for doctor
export const getDoctorEarning = async (req, res) => {
  try {
    const doctorId = req.doctor._id;
    const appointment = await appointmentModel.find({ doctorId });
    const paymentAppoinment = appointment
      .filter((cur) => cur.payment)
      .map((cur) => cur.amount); //! get all amount only payment true
    const totalEarning = paymentAppoinment.reduce(
      (accum, cur) => accum + cur,
      0
    ); //! total earning

    res.status(200).json({ success: true, totalEarning });
  } catch (error) {
    console.log("getDoctorEarning controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! get all appointment for specific doctor
export const getAppointmentForDoctor = async (req, res) => {
  try {
    const doctorId = req.doctor._id;
    const appointment = await appointmentModel.find({ doctorId });

    res.status(200).json({ success: true, appointment });
  } catch (error) {
    console.log("getAmountForDoctor controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! get user for doctor
export const getUserforDoctor = async (req, res) => {
  try {
    const doctorId = req.doctor._id;
    const appointment = await appointmentModel.find({ doctorId });
    const user = appointment.map((cur) => cur.userData.name);
    const name = [...new Set(user)];
    res.status(200).json({ success: true, name });
  } catch (error) {
    console.log("getAmountForDoctor controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! compleate doctor appoinmrnt
export const compleateAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleate: true, });

    const { doctorData, slotTime, slotDate,doctorId } = appointmentData;
   const slots_booked = doctorData.slots_booked;
   slots_booked[slotDate] = slots_booked[slotDate].filter((cur)=>cur !== slotTime);

   if (slots_booked[slotDate].length ===0) {
    delete slots_booked[slotDate]
   }
  await doctorModel.findByIdAndUpdate(doctorId,{slots_booked})
    res
      .status(200)
      .json({
        success: true,
        message: "Appointment Completed",
      });
  } catch (error) {
    console.log("compleateAppointment controller erorr", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

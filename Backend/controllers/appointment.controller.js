import { userModel } from "../models/user.model.js";
import { doctorModel } from "./../models/doctor.model.js";
import { appointmentModel } from "./../models/appointment.model.js";

// ! book appointment
export const appointmentBook = async (req, res) => {
  try {
    const { doctorId, slotDate, slotTime } = req.body;
    const userId = req.user._id;
    const doctorData = await doctorModel
      .findById(doctorId)
      .select("-password,-slots_booked");
    const userData = await userModel.findById(userId).select("-password");

    if (!doctorData) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor not found" });
    }

    if (!doctorData.available) {
      return res
        .status(400)
        .json({ success: false, message: "Doctor not available" });
    }

    if (!slotDate) {
      return res
        .status(400)
        .json({ success: false, message: "Select Date for Book Appointment" });
    }

    if (!slotTime) {
      return res
        .status(400)
        .json({ success: false, message: "Select Time for Book Appointment" });
    }

    let slots_booked = doctorData.slots_booked;

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res
          .status(400)
          .json({ success: false, message: "Slot not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const newappointMentData = {
      userId,
      doctorId,
      slotDate,
      userData,
      doctorData,
      slotTime,
      amount: doctorData.fees,
      date: Date.now(),
    };

    const appointment = new appointmentModel(newappointMentData);

    await appointment.save();
    await doctorModel.findByIdAndUpdate(doctorId, { slots_booked });

    res.status(201).json({ success: true, message: "Appointment Booked" });
  } catch (error) {
    console.log("appointmentBook controller error", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! get all book appointment
export const getAllAppointment = async (req, res) => {
  try {
    const userId = req.user._id;
    const appointment = await appointmentModel.find({ userId });
    res.status(200).json({ success: true, appointment });
  } catch (error) {
    console.log("getAllAppointment controller error");
    res.status(400).json({ success: false, message: error.message });
  }
};

// ! cancle appointment
export const cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const userId = req.user._id;
    const appointData = await appointmentModel.findById(appointmentId);

    if (!appointData) {
      return res
        .status(400)
        .json({ success: false, message: "Appointment data not found" });
    }

    if (appointData.userId === userId) {
      return res 
        .status(400)
        .json({ success: false, message: "User not authoirized login again" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancle: true }); //! update cancle : true from appointment data

    const { slotDate, slotTime, doctorId } = appointData;

    const doctortData = await doctorModel.findById(doctorId);
    let slots_booked = doctortData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (cur) => cur !== slotTime
    );
    if (doctortData.slots_booked[slotDate].length === 0) {
      delete doctortData.slots_booked[slotDate];
    }

    await doctorModel.findByIdAndUpdate(doctorId, { slots_booked });
    res
      .status(200)
      .json({ success: true, message: "Cancle Appointment", doctortData });
  } catch (error) {
    console.log("cancelAppointment controller error");
    res.status(400).json({ success: false, message: error.message });
  }
};

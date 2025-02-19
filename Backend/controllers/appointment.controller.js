import { userModel } from "../models/user.model.js";
import { doctorModel } from "./../models/doctor.model.js";
import { appointmentModel } from "./../models/appointment.model.js";

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

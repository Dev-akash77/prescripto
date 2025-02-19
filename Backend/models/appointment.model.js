import { model, Schema } from "mongoose";

const appointmentSchema = new Schema({
  userId: { type: String, required: true },
  doctorId: { type: String, required: true },
  slotDate: { type: String, required: true },
  userData:{type:Object,required:true},
  doctorData:{type:Object,required:true},
  slotTime: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Number, required: true },
  cancle: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  isCompleate: { type: Boolean, default: false },
});

export const appointmentModel = model("Appointment", appointmentSchema);

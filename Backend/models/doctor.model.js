import { model, Schema } from "mongoose";
const doctorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
  speciality: { type: String, required: true },
  degree: { type: String, required: true },
  experience: { type: String, required: true },
  about: { type: String, required: true },
  available: { type: Boolean, required: true,default:true },
  fees: { type: Number, required: true },
  address: { type: String, required: true },
  date: { type: Number, required: true },
  slots_booked: { type: Object, default: {} },
});
export const doctorModel = model("Doctor",doctorSchema);

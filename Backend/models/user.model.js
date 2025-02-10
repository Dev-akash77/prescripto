import jwt from "jsonwebtoken";
import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, default: "0000000000" },
  address: { type: String, default: "Not selected"},
  gender: { type: String, default: "Not selected" },
  dob: { type: String, default: "Not selected" },
});

UserSchema.methods.generateToken = function () {
  try {
    const token = jwt.sign(
      { id: this._id, email: this.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    return token;
  } catch (error) {
    console.log("generate token error ", error);
  }
};

export const userModel = model("User", UserSchema);

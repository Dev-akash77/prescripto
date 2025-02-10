import mongoose from "mongoose";

export const databaseConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/prescripto`);
    console.log("mongo db connected succesfully");
  } catch (error) {
    console.log("db connection error", error);
  }
};

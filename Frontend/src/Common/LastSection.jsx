import React from "react";
import { Link } from "react-router-dom";

const LastSection = () => {
  return (
    <div className="bg-blue w-full md:px-[3rem] p-[2rem] md:py-0 rounded-lg text-white flex justify-between items-center">
      <div className="flex flex-col gap-4">
        <p className="font-semibold md:text-5xl md:leading-[4rem] text-xl leading-[3rem]">
          Book Appointment <br /> With 100+ Trusted Doctors
        </p>
        <div className="bg-white rounded-full px-10 py-3 text-text w-max cursor-pointer">
          <Link to="/login">Create Account</Link>
        </div>
      </div>
      <img
        src="https://prescripto.vercel.app/assets/appointment_img-DzbZlMsi.png"
        alt="leady doctor images"
        className="w-[25rem] hidden md:block"
      />
    </div>
  );
};

export default LastSection;

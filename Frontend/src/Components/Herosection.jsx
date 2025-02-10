import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Herosection = () => {
  return (
    <div className="bg-blue w-full md:h-[32rem] h-[35rem] rounded-lg text-white relative flex flex-col md:justify-center md:px-[4rem] px-[1.4rem] gap-5 overflow-hidden">
      <h1 className="md:text-[3rem] text-[1.8rem] font-[600] md:leading-[4rem] mt-[2rem] md:mt-0">
        Book Appointment <br /> With Trusted Doctors
      </h1>
      <div className="flex items-center gap-2 md:flex-row flex-col">
        <div className="flex items-center">
          <img
            src="https://prescripto.vercel.app/assets/group_profiles-BCL6AVF5.png"
            alt="doctor image"
            className="rounded-full -ml-2"
          />
        </div>
        <p className="md:text-[1rem] text-[.85rem] md:w-[40%]">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free
        </p>
      </div>
      <div className=" flex justify-center md:justify-normal">
           <div className="flex gap-3 items-center bg-white rounded-[2rem] text-black w-max px-5 py-3 cursor-pointer">
        <span className="text-[.8rem]">Book appointment</span>
        <FaArrowRightLong />
      </div>
      </div>
   
      <img
        src="./Images/doc-header-img.svg"
        alt="group of doctor"
        className="w-[40rem] absolute bottom-0 right-0"
      />
    </div>
  );
};

export default Herosection;

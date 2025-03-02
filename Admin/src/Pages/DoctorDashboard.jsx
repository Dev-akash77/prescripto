import React, { useContext } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import DoctorsLastAppoinment from "../UI/DoctorsLastAppoinment";
import { StoreContext } from "../Context/Store";
const DoctorDashboard = () => {
  const {doctorAppointmentData} =useContext(StoreContext);
  return (
    <div className="section_margin sidebar_margin">
      <div className="flex items-center gap-[2rem] w-max">
        <div className="flex bg-white border-2 w-[15rem] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans rounded-md p-3 text-[2rem] text-blue">
            <GiMoneyStack />
          </div>
          <div>
            <p className="font-semibold text-[1.5rem]">$80</p>
            <p className=" text-[#5f5f5fdd]">Earning</p>
          </div>
        </div>

        <div className="flex bg-white border-2 w-[15rem] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans rounded-md p-3 text-[2rem] text-blue">
            <CiBookmarkCheck />
          </div>
          <div>
            <p className="font-semibold text-[1.5rem]">2</p>
            <p className=" text-[#5f5f5fdd]">Appointment</p>
          </div>
        </div>

        <div className="flex bg-white border-2 w-[15rem] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans rounded-md p-3 text-[2rem] text-blue">
            <FaUserTie />
          </div>
          <div>
            <p className="font-semibold text-[1.5rem]">2</p>
            <p className=" text-[#5f5f5fdd]">Paitents</p>
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem]">
      <DoctorsLastAppoinment data={doctorAppointmentData?.appointment}/>
      </div>
    </div>
  );
};

export default DoctorDashboard;

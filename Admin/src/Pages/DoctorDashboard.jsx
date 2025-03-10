import React, { useContext } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import DoctorsLastAppoinment from "../UI/DoctorsLastAppoinment";
import { StoreContext } from "../Context/Store";
import Loader from "./../UI/Loader";
const DoctorDashboard = () => {
  const {
    doctorAppointmentData,
    doctorappointmentLoading,
    doctorEarningData,
    doctorPaitaintData,
  } = useContext(StoreContext);

  if (doctorappointmentLoading) {
    return (
      <div className="cc h-screen w-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="section_margin sidebar_margin md:w-max md:py-0 py-5">
      <div className="md:grid-cols-3 grid-cols-1 grid md:gap-[2rem] gap-3">
        <div className="flex bg-white border-2 md:w-[15rem] w-[94%] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans rounded-md p-3 text-[2rem] text-blue">
            <GiMoneyStack />
          </div>
          <div>
            <p className="font-semibold text-[1.5rem]">
              ${doctorEarningData?.totalEarning}
            </p>
            <p className=" text-[#5f5f5fdd]">Earning</p>
          </div>
        </div>

        <div className="flex bg-white border-2 md:w-[15rem] w-[94%] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans rounded-md p-3 text-[2rem] text-blue">
            <CiBookmarkCheck />
          </div>
          <div>
            <p className="font-semibold text-[1.5rem]">
              {doctorAppointmentData?.availableAppointments.length}
            </p>
            <p className=" text-[#5f5f5fdd]">Appointment</p>
          </div>
        </div>

        <div className="flex bg-white border-2 md:w-[15rem] w-[94%] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans rounded-md p-3 text-[2rem] text-blue">
            <FaUserTie />
          </div>
          <div>
            <p className="font-semibold text-[1.5rem]">
              {doctorPaitaintData?.name.length}
            </p>
            <p className=" text-[#5f5f5fdd]">Paitents</p>
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem]">
        <DoctorsLastAppoinment data={doctorAppointmentData?.appointment} />
      </div>
    </div>
  );
};

export default DoctorDashboard;

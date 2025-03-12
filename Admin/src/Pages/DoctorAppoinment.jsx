import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";
import Loader from "../UI/Loader";

const DoctorAppoinment = () => {
  const { doctorAppointmentData, doctorappointmentLoading } =
    useContext(StoreContext);

  if (doctorappointmentLoading) {
    return (
      <div className="cc h-screen w-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="section_margin sidebar_margin">
      <div className="flex flex-col px-4 bg-white ">
        {/* Header Row */}
        <div className="-mx-4 -mt-3 md:grid grid-cols-8 gap-5 px-4 py-3 bg-gray-100 hidden mb-2">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date </p>
          <p>Time </p>
          <p>Fees</p>
          <p>Status</p>
        </div>
      </div>

      {/*! Data Row */}
      {doctorAppointmentData?.appointment.map((cur, id) => {
        function calculateAge(dob) {
          const birthDate = new Date(dob);
          const today = new Date();
          let age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          const dayDiff = today.getDate() - birthDate.getDate();
          if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
          }
          return age;
        }
        return (
          <div
            className={`grid grid-cols-2 md:grid-cols-8 gap-5 text-[#464646dd] border-b border-[#dddd] px-4 py-3 hover:bg-[#fefefe] cursor-pointer duration-300 `}
            key={cur._id}
          >
            <p className="md:block hidden">{id + 1}</p>
            <p className="capitalize  md:text-base text-lg">
              {cur.userData.name}
            </p>
            <p className="w-max  md:text-base text-lg">
              {cur.payment ? <span>Received</span> : <span>Processed</span>}
            </p>
            <p className=" md:text-base text-lg">
              {calculateAge(cur.userData.dob)}
            </p>
            <p className="w-max capitalize md:text-base text-lg">
              {cur.slotDate}{" "}
            </p>
            <p className="w-max capitalize  md:text-base text-lg">
              {cur.slotTime}{" "}
            </p>
            <p className=" md:text-base text-lg">${cur.doctorData.fees}</p>

            {cur.cancle ? (
              <p className="text-red-700 text-lg font-semibold">Cancled</p>
            ) : cur.isCompleate ? (
              <p className="text-green-700  text-lg font-semibold">Done</p>
            ) : (
              <p className="text-yellow-700  text-lg font-semibold">Pending</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DoctorAppoinment;

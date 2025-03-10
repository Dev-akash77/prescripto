import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "../Context/Store";
import Loader from "../UI/Loader";
const Appopointment = () => {
  const {
    allAppointmentData,
    appointmentLoading,
    handleCancleAppointment,
    handleDeleteAppointment,
  } = useContext(StoreContext);

  if (appointmentLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loader />
      </div>
    );
  }
  return (
    <div className="section_margin sidebar_margin">
      <div className="flex flex-col px-4  bg-white ">
        {/* Header Row */}
        <div className="-mx-4 -mt-3 md:grid grid-cols-8 gap-5 px-4 py-3 bg-gray-100 hidden mb-2">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date </p>
          <p>Time </p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/*! Data Row */}
        {allAppointmentData?.appointment.map((cur, id) => {
          console.log(cur);
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
              className="-mx-4  grid md:grid-cols-8 grid-cols-2 gap-5 text-[#464646dd] border-b border-[#dddd] md:px-4 py-3 pl-1 pr-5 hover:bg-[#fefefe] cursor-pointer duration-300"
              key={cur._id}
            >
              <p className="md:block hidden">{id + 1}</p>
              <p className="capitalize md:text-base text-lg">
                {cur.userData.name}
              </p>
              <p className="md:text-base text-lg">
                {calculateAge(cur.userData.dob)}
              </p>
              <p className="w-max capitalize md:text-base text-lg">
                {cur.slotDate}{" "}
              </p>
              <p className="w-max capitalize md:text-base text-lg">
                {cur.slotTime}{" "}
              </p>
              <p className="w-max md:text-base text-lg">
                {cur.doctorData.name}
              </p>
              <p className="md:text-base text-lg">${cur.doctorData.fees}</p>
              <div className="w-[2rem] h-[2rem] bg-[#ff898939] md:flex items-center hidden justify-center rounded-full cursor-pointer text-red-600">
                {cur.cancle || cur.isCompleate ? (
                  <MdDelete
                    onClick={() => {
                      handleDeleteAppointment(cur._id);
                    }}
                  />
                ) : (
                  <RxCross2
                    onClick={() => {
                      handleCancleAppointment(cur._id);
                    }}
                  />
                )}
              </div>
              <div className="flex items-center col-span-full md:hidden justify-center text-white ">
                {cur.cancle || cur.isCompleate ? (
                  <p
                    className="bg-red-500 w-full cc rounded-sm cursor-pointe py-2"
                    onClick={() => {
                      handleDeleteAppointment(cur._id);
                    }}
                  >
                    Delete Appoinment
                  </p>
                ) : (
                  <p
                    className="bg-red-500 w-full cc rounded-sm cursor-pointe py-2"
                    onClick={() => {
                      handleCancleAppointment(cur._id);
                    }}
                  >
                    Cancle Appoinment
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appopointment;

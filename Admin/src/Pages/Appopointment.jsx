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
      <div className="flex flex-col px-4  w-[95%] bg-white ">
        {/* Header Row */}
        <div className="-mx-4 -mt-3 grid grid-cols-7 gap-5 px-4 py-3 bg-gray-100">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
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
              className="-mx-4 grid grid-cols-7 gap-5 text-[#464646dd] border-b border-[#dddd] px-4 py-3 hover:bg-[#fefefe] cursor-pointer duration-300"
              key={cur._id}
            >
              <p>{id + 1}</p>
              <p className="capitalize">{cur.userData.name}</p>
              <p>{calculateAge(cur.userData.dob)}</p>
              <p>{cur.userData.dob}</p>
              <p>{cur.doctorData.name}</p>
              <p>${cur.doctorData.fees}</p>
              <div className="w-[2rem] h-[2rem] bg-[#ff898939] flex items-center justify-center rounded-full cursor-pointer text-red-600">
                {cur.cancle ? (
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appopointment;

import React, { useContext } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { approveAppoinment } from "../Api/Api";
import { toast } from "react-toastify";
import { StoreContext } from "../Context/Store";
const DoctorsLastAppoinment = ({ data }) => {
  const {
    doctorToken,
    doctorAppointmentRefetch,
    handleDcoctorCancleAppointment,
  } = useContext(StoreContext);

  //! get first letter for user name
  const getNameFirstLetter = (name) => {
    return name?.split("")[0];
  };

  // ! approve appointment
  const handleApproveAppointment = async (id) => {
    try {
      const cancleData = await approveAppoinment(doctorToken, id);
      if (cancleData?.success) {
        toast.success(cancleData.message);
        doctorAppointmentRefetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-[#c7c7c7dd] rounded-md md:w-auto w-[93%]">
      <div className="flex items-center gap-3 p-4">
        <TbArrowsLeftRight className="text-blue  border p-[0.2rem] text-xl" />
        <p className="text-xl">Latest Appointment</p>
      </div>
      <hr className="text-[#c7c7c7dd]" />
      {data?.length === 0 && (
        <p className="cc mt-10">No Appointment Available</p>
      )}
      <div className="p-4 flex flex-col gap-5">
        {data
          ?.slice(0, 5)
          .reverse()
          .map((cur) => {
            return (
              <div
                className="flex md:items-center md:justify-between md:flex-row flex-col md:border-0 border-b md:pb-0 pb-2"
                key={cur._id}
              >
                <div className="flex md:flex-row flex-col md:items-center md:gap-5 gap-2">
                  <p className="md:-[2.3rem] md:h-[2.3rem] w-[3rem] h-[3rem] cc bg-blue text-white text-xl uppercase md:rounded-full rounded-sm cursor-pointer">
                    {getNameFirstLetter(cur.userData.name)}
                  </p>
                  <div className="flex flex-col">
                    <p className="md:text-lg text-xl capitalize">
                      {cur.userData.name}
                    </p>
                    <p className="md:text-md text-lg text-[#808080dd]">
                      Booking on{" "}
                      <span className="capitalize"> {cur.slotDate}</span>
                    </p>
                  </div>
                </div>

                {cur.cancle ? (
                  <div className="md:text-red-500 md:border-0 md:m-0 my-2 flex justify-center border border-red-700 text-red-600 md:justify-end md:py-0 py-1 rounded-sm">
                    Cancled
                  </div>
                ) : cur.isCompleate ? (
                  <div className="md:green md:border-0 md:m-0 my-2 flex justify-center border border-green text-green md:justify-end md:py-0 py-1 rounded-sm">Completed</div>
                ) : (
                  <div className="flex md:flex-row flex-col md:items-center gap-2 md:text-black text-white">
                    <div className="w-[2.5rem] h-[2.5rem] bg-[#ffc9c94a] rounded-full cursor-pointer md:flex items-center justify-center hidden">
                      <RxCross2
                        className="text-red-500"
                        onClick={() => {
                          handleDcoctorCancleAppointment(cur._id);
                        }}
                      />
                    </div>
                    <div className=" mt-4 h-[2.5rem] overflow-hidden rounded-md cursor-pointer md:hidden items-center justify-center flex">
                      <p
                        className="w-full cc h-full bg-red-500"
                        onClick={() => {
                          handleDcoctorCancleAppointment(cur._id);
                        }}
                      >
                        Cancle Appointment
                      </p>
                    </div>
                    <div className="w-[2.5rem] h-[2.5rem] bg-[#c9ffe54a] md:flex items-center justify-center hidden  rounded-full cursor-pointer">
                      <IoCheckmark
                        className="text-green"
                        onClick={() => {
                          handleApproveAppointment(cur._id);
                        }}
                      />
                    </div>
                    <div className="h-[2.5rem] overflow-hidden rounded-md cursor-pointer md:hidden block">
                      <p
                        className="w-full cc h-full bg-green-700 "
                        onClick={() => {
                          handleApproveAppointment(cur._id);
                        }}
                      >
                        Approve Appointment
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DoctorsLastAppoinment;

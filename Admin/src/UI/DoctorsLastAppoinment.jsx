import React, { useContext } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { approveAppoinment } from "../Api/Api";
import { toast } from "react-toastify";
import { StoreContext } from "../Context/Store";
const DoctorsLastAppoinment = ({ data }) => {
  const { doctorToken, doctorAppointmentRefetch,handleDcoctorCancleAppointment } = useContext(StoreContext);

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
    <div className="border border-[#c7c7c7dd] rounded-md">
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
              <div className="flex items-center justify-between" key={cur._id}>
                <div className="flex items-center gap-5">
                  <p className="w-[2.3rem] h-[2.3rem] cc bg-blue text-white text-xl uppercase rounded-full cursor-pointer">
                    {getNameFirstLetter(cur.userData.name)}
                  </p>
                  <div className="flex flex-col">
                    <p className="text-lg capitalize">{cur.userData.name}</p>
                    <p className="text-md text-[#808080dd]">
                      Booking on{" "}
                      <span className="capitalize"> {cur.slotDate}</span>
                    </p>
                  </div>
                </div>

                {cur.cancle ? (
                  <div className="text-red-500">Cancled</div>
                ) : cur.isCompleate ? (
                  <div className="text-green">Completed</div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-[2.5rem] h-[2.5rem] bg-[#ffc9c94a] cc rounded-full cursor-pointer">
                      <RxCross2
                        className="text-red-500"
                        onClick={() => {
                          handleDcoctorCancleAppointment(cur._id);
                        }}
                      />
                    </div>
                    <div className="w-[2.5rem] h-[2.5rem] bg-[#c9ffe54a] cc rounded-full cursor-pointer">
                      <IoCheckmark
                        className="text-green"
                        onClick={() => {
                          handleApproveAppointment(cur._id);
                        }}
                      />
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

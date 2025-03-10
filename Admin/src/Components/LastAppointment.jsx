import React, { useContext } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from "../Context/Store";
const LastAppointment = ({ data }) => {
  const { handleCancleAppointment } = useContext(StoreContext);
  return (
    <div className="border border-[#c7c7c7dd] rounded-md md:w-auto w-[93%]">
      <div className="flex items-center gap-3 p-4">
        <TbArrowsLeftRight className="text-blue  border p-[0.2rem] text-xl" />
        <p className="text-xl">Latest Appointment</p>
      </div>
      <hr className="text-[#c7c7c7dd]" />
      {data.length === 0 && (
        <p className="cc mt-10">No Appointment Available</p>
      )}
      <div className="p-4 flex flex-col gap-5">
        {data
          .slice(0, 5)
          .reverse()
          .map((cur) => {
            return (
              <div
                className="flex md:items-center md:justify-between md:flex-row flex-col md:border-0 border-b md:pb-0 pb-2"
                key={cur._id}
              >
                <div className="flex md:items-center md:flex-row flex-col gap-5">
                  <img
                    src={cur.doctorData.image}
                    className="rounded-full w-[3.5rem] overflow-hidden cursor-pointer bg-[#dddd]"
                    alt={`${cur.doctorData.name} images`}
                  />
                  <div className="flex flex-col">
                    <p className="md:text-lg ">{cur.doctorData.name}</p>
                    <p className="md:text-md text-[#808080dd]">
                      Booking on
                      <span className="capitalize"> {cur.slotDate}</span>
                    </p>
                  </div>
                </div>

                {cur.cancle ? (
                  <div className="text-red-500 md:my-0 my-3 mt-5 md:border-0 border md:py-0 py-1 md:rounded-none rounded-sm flex md:justify-start justify-center">
                    Cancled
                  </div>
                ) : cur.isCompleate ? (
                  <div className="text-green">Completed</div>
                ) : (
                  <div>
                    <div className="w-[2.5rem] h-[2.5rem] bg-[#ffc9c94a] md:flex hidden items-center justify-center rounded-full cursor-pointer">
                      <RxCross2
                        className="text-red-500"
                        onClick={() => {
                          handleCancleAppointment(cur._id);
                        }}
                      />
                    </div>
                    <div
                      className="md:hidden items-center bg-red-500 justify-center flex py-1 text-white rounded-sm my-3 md:my-0 cursor-pointer"
                      onClick={() => {
                        handleCancleAppointment(cur._id);
                      }}
                    >
                      Cancel Appointment
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

export default LastAppointment;

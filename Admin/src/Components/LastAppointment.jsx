import React, { useContext } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from "../Context/Store";
const LastAppointment = ({ data }) => {
  const { handleCancleAppointment } = useContext(StoreContext);
  return (
    <div className="border border-[#c7c7c7dd] rounded-md">
      <div className="flex items-center gap-3 p-4">
        <TbArrowsLeftRight className="text-blue  border p-[0.2rem] text-xl" />
        <p className="text-xl">Latest Appointment</p>
      </div>
      <hr className="text-[#c7c7c7dd]" />
      {data.length === 0 && <p className="cc mt-10">No Appointment Available</p>}
      <div className="p-4 flex flex-col gap-5">
        {data
          .slice(0, 5)
          .reverse()
          .map((cur) => {
            return (
              <div className="flex items-center justify-between" key={cur._id}>
                <div className="flex items-center gap-5">
                  <img
                    src={cur.doctorData.image}
                    className="rounded-full w-[3.5rem] overflow-hidden cursor-pointer bg-[#dddd]"
                    alt={`${cur.doctorData.name} images`}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg">{cur.doctorData.name}</p>
                    <p className="text-md text-[#808080dd]">
                      Booking on{" "}
                      <span className="capitalize"> {cur.slotDate}</span>
                    </p>
                  </div>
                </div>
                {cur.cancle ? (
                  <div className="text-red-500">Cancled</div>
                ) : (
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#ffc9c94a] cc rounded-full cursor-pointer">
                    <RxCross2
                      className="text-red-500"
                      onClick={() => {
                        handleCancleAppointment(cur._id);
                      }}
                    />
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

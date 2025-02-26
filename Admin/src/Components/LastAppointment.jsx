import React from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
const LastAppointment = ({ data }) => {
  
  return (
    <div className="border border-[#c7c7c7dd] rounded-md">
      <div className="flex items-center gap-3 p-4">
        <TbArrowsLeftRight className="text-blue  border p-[0.2rem] text-xl" />
        <p>Latest Appointment</p>
      </div>
      <hr className="text-[#c7c7c7dd]" />
      <div className="p-4 flex flex-col gap-5">
        {data
          .slice(0, 5)
          .reverse()
          .map((cur) => {
            const userFirstLetter = cur.userData.name.split("")[0];
            return (
              <div className="flex items-center justify-between" key={cur._id}>
                <div className="flex items-center gap-5">
                  <div className="w-[2.5rem] h-[2.5rem] cc bg-blue rounded-full text-white uppercase">
                    {userFirstLetter}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md">{cur.doctorData.name}</p>
                    <p className="text-sm text-[#808080dd]">
                      Booking on{" "}
                      <span className="capitalize"> {cur.slotDate}</span>
                    </p>
                  </div>
                </div>
                <div className="w-[2.5rem] h-[2.5rem] bg-[#ffc9c94a] cc rounded-full cursor-pointer">
                  <RxCross2 className="text-red-500" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LastAppointment;

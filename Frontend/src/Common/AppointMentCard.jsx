import React from "react";

const AppointMentCard = ({ data }) => {
  return (
    <div className="border-[#dfdfdfdd] border-b-[.04rem] py-4 flex items-center justify-between">
      <div className="flex gap-7">
        <div className="bg-blueTrans">
          <img src={data?.doctorData.image} alt="" className="w-[9rem]" />
        </div>

        <div className="flex flex-col gap-[.08rem]">
          <h2 className="font-semibold">{data?.doctorData.name}</h2>
          <p className=" text-gray">{data?.doctorData.speciality}</p>
          <p className="mt-[.17rem]">Address:</p>
          <p className=" text-gray capitalize ">{data?.doctorData.address}</p>
          <p className="mt-2 font-medium">
            Date & Time:{" "}
            <span className="text-gray capitalize">
              {data?.slotDate} | {data?.slotTime}
            </span>
          </p>
        </div>
      </div>

      <div className="h-full flex flex-col justify-end items-center gap-3">
        <div className="border border-[#dfdfdfdd] w-[12rem] h-[2.5rem] cc rounded-sm text-gray cursor-pointer hover:bg-blue hover:border-none hover:text-white duration-300">
          Pay Online
        </div>
        <div className="border border-[#dfdfdfdd] w-[12rem] h-[2.5rem] cc rounded-sm text-gray cursor-pointer hover:bg-[#f03535] hover:border-none hover:text-white duration-300">
          Cancel appointment
        </div>
      </div>
    </div>
  );
};

export default AppointMentCard;

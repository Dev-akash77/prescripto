import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleDoctor } from "../Api/Api";
import Loaders from "./../UI/Loaders";
import { PiSealCheckFill } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { getDate_Time } from "./../Utils/Function/getDate_Time";
const Details = () => {
  const { id } = useParams();
  const [slotDate, setSlotDate] = useState([]);
  const [slotIndex, setSlotIndex] = useState(null);
  const [doctorSlotTime, setDoctorSlotTime] = useState(null);
  // ! doctor slots data
  let doctorSlotDate = slotDate[slotIndex];

  useEffect(() => {
    window.scroll(0, 0);
    getDate_Time(setSlotDate);
  }, [id]);

  const { data, isLoading } = useQuery({
    queryKey: ["details", id],
    queryFn: () => singleDoctor(id),
    enabled: true,
  });

  if (isLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loaders />
      </div>
    );
  }
  // ! destructre doctor data
  const { image, name, speciality, degree, experience, about, fees } =
    data?.doctor;

  const handleSlotTime = (id) => {
    setSlotIndex(id);
  };
  return (
    <div className="section_margin cc">
      <div className="container mt-[1rem]">
        <div className="flex md:flex-row flex-col items-center justify-between md:gap-[1rem] w-[full] ">
          <div className="bg-blue md:w-[25%]  h-full cc rounded-lg">
            <img src={image} alt={name} />
          </div>

          <div className="border rounded-lg md:p-8 p-6 md:w-[74.5%] w-[95%] h-full border-[#606060dd] bg-white z-20 -mt-[4rem] md:mt-0">
            <div className="flex items-center text-center gap-2">
              <h2 className="md:text-3xl text-2xl font-medium">{name}</h2>
              <PiSealCheckFill className="text-[1.6rem] text-[#1e1ef0]" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 mt-1 text-gray">
                <p className="capitalize">{degree} - </p>
                <p>{speciality}</p>
              </div>
              <p className="border rounded-full py-[.15rem] px-3 text-[.7rem] mt-1 border-[#9c9c9cdd]">
                {experience}
              </p>
            </div>

            <div className="md:mt-6 mt-3 flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <h2 className="font-medium ">About</h2>
                <IoMdInformationCircleOutline />
              </div>
              <p className="text-gray">{about}</p>
            </div>

            <div className="flex items-center mt-5">
              Appointment fee: ${fees}
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full ">
          <div className="mt-5 md:w-[74.5%] overflow-x-scroll">
            <h2 className="text-black">Booking slots</h2>
            <div className="flex items-center mt-5 gap-4 overflow-x-auto">
              <div
                className={`py-6 px-8 rounded-full cursor-pointer ${
                  slotIndex === null ? " bg-blue" : "border border-[#b5b5b5dd]"
                }`}
                onClick={() => {
                  setSlotIndex(null);
                  setDoctorSlotTime(null);
                }}
              ></div>
              {slotDate.map((cur, id) => {
                const formattedWeek = new Date(cur.date).toLocaleDateString(
                  "en-US",
                  { weekday: "short" }
                );
                const formattedDate = new Date(cur.date).getDate();

                return (
                  <div
                    className={`py-5 px-3 rounded-full border border-[#b5b5b5dd] cc cursor-pointer transition-all duration-300
                      ${
                        slotIndex !== null && slotIndex === id
                          ? "bg-blue border-none text-white"
                          : ""
                      }`}
                    key={id}
                    onClick={() => handleSlotTime(id)}
                  >
                    <p className="font-medium uppercase">{formattedWeek}</p>
                    <p className="text-lg">{formattedDate}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3 overflow-x-auto">
              {slotIndex !== null &&
              (!doctorSlotDate?.slots || doctorSlotDate?.slots.length === 0) ? (
                <div className="mt-3 text-red-500 text-sm">
                  Sorry, no appointments available for today. Please select
                  another date
                </div>
              ) : (
                doctorSlotDate?.slots?.map((cur, id) => (
                  <div
                    className={`py-2 px-6 rounded-full cursor-pointer text-sm whitespace-nowrap mt-5
                  ${
                    doctorSlotTime === cur.formattedTime
                      ? "bg-blue text-white border-none"
                      : "text-[#4d4d4ddd] border border-[#d0d0d0dd]"
                  }`}
                    key={id}
                    onClick={() => {
                      setDoctorSlotTime(cur.formattedTime);
                    }}
                  >
                    {cur.formattedTime}
                  </div>
                ))
              )}
            </div>
            <button
              className={`text-white py-[.8rem] px-[5rem] w-max rounded-full mt-8 cursor-pointer 
                  ${
                    slotIndex === null || !doctorSlotDate?.slots?.length
                      ? "bg-[#82a7ff] cursor-not-allowed"
                      : "bg-blue"
                  }`}
              disabled={slotIndex === null || !doctorSlotDate?.slots?.length}
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

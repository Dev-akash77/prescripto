import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleDoctor } from "../Api/Api";
import Loaders from "./../UI/Loaders";
import { PiSealCheckFill } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
const Details = () => {
  const { id } = useParams();

  useEffect(()=>{
    window.scroll(0,0)
  },[id])


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
  const { image, name, speciality, degree, experience, about, fees } = data?.doctor;
  return (
    <div className="section_margin cc">
      <div className="container">
        <div className="flex items-center justify-between gap-[1rem] w-[full] ">

          <div className="bg-blue w-[25%] h-full cc rounded-lg">
            <img src={image} alt={name} />
          </div>

          <div className="border rounded-lg p-8 w-[74.5%] h-full border-[#606060dd]">
            <div className="flex items-center text-center gap-2">
              <h2 className="text-3xl font-medium">{name}</h2>
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

            <div className="mt-6 flex flex-col gap-1">
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
      </div>
    </div>
  );
};

export default Details;

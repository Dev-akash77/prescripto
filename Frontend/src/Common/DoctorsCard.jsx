import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorsCard = ({ data }) => {
  const { image, name, speciality, available,_id } = data;
  const navigate = useNavigate()
  return (
    <div className="border border-blue rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 duration-300" onClick={()=>{navigate(`/doctors/details/${_id}`)}}>
      <div className="cc w-full bg-blueTrans">
        <img src={image} alt={name} />
      </div>
      <div className="w-full py-4 px-5">
        <div className="flex items-center gap-[.3rem]">
          <div
            className={`rounded-full p-[.3rem] ${
              available ? "bg-green" : "bg-red-700"
            }`}
          ></div>
          <p className={available ? `text-green` : `text-red-600`}>
            {available ? "Available" : "Unavailable"}
          </p>
        </div>
        <p className="tetx-xl font-medium">{name}</p>
        <p className="text-sm text-gray-500">{speciality}</p>
      </div>
    </div>
  );
};

export default DoctorsCard;

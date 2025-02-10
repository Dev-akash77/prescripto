import React from "react";
import specialityData from "../Config/Specality.json";
import { useNavigate } from "react-router-dom";
const Speciality = () => {
 const navigate = useNavigate();
  return (
    <div className="cc mt-10 overflow-hidden md:overflow-auto w-full">
      <ul className="flex md:gap-[2rem] gap-[1rem] overflow-x-auto md:overflow-auto w-full md:justify-center md:items-center">
        {specialityData.map((cur, id) => {
          return (
            <li className="cc text-center cursor-pointer gap-2 special_main_cont" onClick={()=>{navigate(`/doctors/${cur.doctorName}`)}} key={id}>
              <div className="border md:w-[5.5rem] md:h-[5.5rem] w-[4.5rem] h-[4.5rem] rounded-full cc main_special">
                <img src={cur.logo} alt={cur.doctorName} className="md:w-[2.8rem] w-[2.3rem]" />
              </div>
              <span className="md:text-[.9rem] text-[.8rem] whitespace-nowrap">{cur.doctorName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Speciality;

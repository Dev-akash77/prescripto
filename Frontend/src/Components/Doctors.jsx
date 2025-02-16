import React from "react";
import DoctorsCard from "../Common/DoctorsCard";
import Heading from "../Common/Heading";
import { NavLink } from "react-router-dom";
const Doctors = ({ doctors }) => {
  return (
    <div>
      <Heading
        heading={"Top Doctors to Book"}
        text={"Simply browse through our extensive list of trusted doctors."}
      />
      <div className="grid place-content-center md:grid-cols-5 grid-cols-1 gap-5 w-full mt-[3rem]">
        {doctors.slice(0, 10).map((cur, id) => {
          return <DoctorsCard key={id} data={cur} />;
        })}
      </div>
      <div className="cc mt-[4rem]">
        <NavLink
          to={"/doctors"}
          className="py-[.8rem] px-[3rem] rounded-full bg-blueTrans border border-blue"
        >
          More
        </NavLink>
      </div>
    </div>
  );
};

export default Doctors;

import React, { useContext } from "react";
import DoctorsCrad from "./../UI/DoctorsCrad";
import { StoreContext } from "../Context/Store";
import Loader from './../UI/Loader';

const AllDoctor = () => {
  const { allDoctotrData, doctorLoading } = useContext(StoreContext);
  if (doctorLoading) {
    return <div className="cc h-screen w-screen"><Loader /></div>;
  }
  return ( 
    <div className="section_margin mb-[3rem] sidebar_margin">
      <h2 className="font-semibold text-lg">All Doctor</h2>
      <div className="grid grid-cols-5 mt-[2rem] gap-x-[1rem] gap-y-[1.5rem]">
        {allDoctotrData?.doctor.map((cur) => {
          return <DoctorsCrad key={cur._id} data={cur} />;
        })}
      </div>
    </div>
  );
};

export default AllDoctor;

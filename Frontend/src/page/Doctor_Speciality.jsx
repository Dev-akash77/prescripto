import React, { useContext } from "react";
import { related_doctor } from "../Utils/Function/Related_doctor";
import { useParams } from "react-router-dom";
import { StoreContext } from "../Context/Store";
import DoctorsCard from "../Common/DoctorsCard";

const Doctor_Speciality = () => {
  const { allDoctorsData } = useContext(StoreContext);
  const { speciality } = useParams();
  const Speciality_Doctor = related_doctor(speciality, allDoctorsData?.doctors);

  return (
    <div className="grid place-content-center md:grid-cols-4 grid-cols-1 gap-5 w-full">
      {Speciality_Doctor?.map((cur, id) => {
        return <DoctorsCard data={cur} key={id} />;
      })}
    </div>
  );
};

export default Doctor_Speciality;

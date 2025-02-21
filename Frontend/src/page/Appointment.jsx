import React, { useContext } from "react";
import AppointMentCard from "../Common/AppointMentCard";
import { StoreContext } from "../Context/Store";
import Loaders from "./../UI/Loaders";

const Appointment = () => {
  const { allAppointmentData, allAppointmentLoading } =
    useContext(StoreContext);

  if (allAppointmentLoading) {
    return (
      <div className="w-screen h-screen cc">
        <Loaders />
      </div>
    );
  }

  return (
    <div className="section_margin cc">
      <div className="container">
        <h2 className="text-lg mt-5 font-[500]">My appointments</h2>
        <hr className="text-[#dfdfdfdd] mt-4" />
        <div className="flex flex-col">
          {allAppointmentData?.appointment.map((cur, id) => {
            return <AppointMentCard key={id} data={cur} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Appointment;

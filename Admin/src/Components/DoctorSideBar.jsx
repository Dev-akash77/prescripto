import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
const DoctorSideBar = () => {
  const navLinkClass = ({ isActive }) =>
    `w-full text-text flex items-center gap-2 p-3 pl-[2.4rem] text-[1.1rem] transition
    ${isActive ? "bg-blueTrans border-r-4 border-blue" : "hover:bg-[#f8f9fd]"}`;

  return (
    <div className="pt-[6rem] bg-white h-screen w-[18rem] flex flex-col border-r border-[#dddddd] fixed">
      <NavLink to="." end className={navLinkClass}>
        <FiUsers className="text-[1.5rem]" />
        Profile
      </NavLink>
      <NavLink to="dashboard" className={navLinkClass}>
        <RiHome2Line className="text-[1.5rem]" />
        Dashboard
      </NavLink>
      <NavLink to="appoinment" className={navLinkClass}>
        <FaRegCalendarAlt className="text-[1.5rem]" />
        Appointments
      </NavLink>
    </div>
  );
};

export default DoctorSideBar;

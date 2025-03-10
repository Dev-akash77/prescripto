import React from "react";
import { NavLink } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
const SideBar = () => {
  const navLinkClass = ({ isActive }) =>
    `w-full text-text flex items-center gap-2 p-3 md:pl-[2.4rem] pl-[1rem] text-[1.1rem] transition
    ${isActive ? "bg-blueTrans border-r-4 border-blue" : "hover:bg-[#f8f9fd]"}`;
  return (
    <div className="pt-[6rem] bg-white h-screen md:w-[18rem] flex flex-col border-r border-[#dddddd] fixed">
      <NavLink to="." className={navLinkClass}>
        <CgAddR className="md:text-[1.5rem] text-[1.4rem]" />
        <p className="hidden md:block"> Add Doctor</p>
      </NavLink>
      <NavLink to="all-doctor" className={navLinkClass}>
        <FiUsers className="md:text-[1.5rem] text-[1.4rem]" /> 
        <p className="hidden md:block"> Doctors List</p>
      </NavLink>
      <NavLink to="dashboard" className={navLinkClass}>
        <RiHome2Line className="md:text-[1.5rem] text-[1.4rem]" />
        <p className="hidden md:block"> Dashboard</p>
      </NavLink>
      <NavLink to="appointments" className={navLinkClass}>
        <FaRegCalendarAlt className="md:text-[1.5rem] text-[1.4rem]" />
        <p className="hidden md:block"> Appointments</p>
      </NavLink>
    </div>
  );
};

export default SideBar;

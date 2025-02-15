import React from "react";
import { NavLink } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="pt-[6rem] bg-white h-screen w-[18rem] flex flex-col border-r border-[#dddddd] fixed">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-full text-text flex items-center gap-2 p-3  pl-[2.4rem] text-[1.1rem] transition
          ${
            isActive
              ? "bg-blueTrans border-r-4 border-blue"
              : "hover:bg-[#f8f9fd]"
          }`
        }
      >
        <CgAddR className="text-[1.5rem]" />
        Add Doctor
      </NavLink>
      <NavLink
        to="/all-doctor"
        className={({ isActive }) =>
          `w-full text-text flex items-center gap-2 p-3 pl-[2.4rem] text-[1.1rem] transition
          ${
            isActive
              ? "bg-blueTrans border-r-4 border-blue"
              : "hover:bg-[#f8f9fd]"
          }`
        }
      >
        <FiUsers className="text-[1.5rem]" />
       Doctors List
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `w-full text-text flex items-center gap-2 p-3 pl-[2.4rem] text-[1.1rem] transition
          ${
            isActive
              ? "bg-blueTrans border-r-4 border-blue"
              : "hover:bg-[#f8f9fd]"
          }`
        }
      >
        <RiHome2Line className="text-[1.5rem]" />
       Dashboard
      </NavLink>
      <NavLink
        to="/appointments"
        className={({ isActive }) =>
          `w-full text-text flex items-center gap-2 p-3 pl-[2.4rem] text-[1.1rem] transition
          ${
            isActive
              ? "bg-blueTrans border-r-4 border-blue"
              : "hover:bg-[#f8f9fd]"
          }`
        }
      >
        <FaRegCalendarAlt className="text-[1.5rem]" />
        Appointments
      </NavLink>
    </div>
  );
};

export default SideBar;

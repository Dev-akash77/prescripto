import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/Store";

const Navbar = () => {
  const { setAdminToken, doctorToken, setDoctorToken } =
    useContext(StoreContext);
  return (
    <div className="cc w-screen h-[5rem] fixed top-0 z-50 bg-white border-b border-[#dddddd]">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://prescripto-admin.vercel.app/assets/admin_logo-BYur65Lc.svg"
            alt="the logo of Prescripto"
            className="md:w-[10rem] w-[9.3rem]"
          />
          <span className="border rounded-full px-2 border-black text-sm cc py-[.1rem]">
            {doctorToken ? "Doctor" : "Admin"}
          </span>
        </Link>
        <div
          className="bg-blue text-white md:px-[2.5rem] px-[1rem] py-2 md:rounded-3xl rounded-lg text-[.9rem] cursor-pointer"
          onClick={() => {
            setAdminToken(false);
            setDoctorToken(false);
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;

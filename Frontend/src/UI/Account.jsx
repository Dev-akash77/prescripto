import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Store";
import { Link } from "react-router-dom";
import { getNameFirstLetter } from "./../Utils/Function/getFirstLetter";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
const Account = () => {
  const { userProfileData, setToken } = useContext(StoreContext);
  const [first, setFirst] = useState(false);
  const handleLogout = () => {
    setFirst(false);
    setToken(false);
  };
  return (
    <div className="md:cc ">
      <div
        className="md:bg-blue md:rounded-full md:w-[2.5rem] md:h-[2.5rem] cc text-xl md:text-white cursor-pointer uppercase"
        onClick={() => {
          setFirst(!first);
        }}
      >
        <p className="hidden md:block">
          {getNameFirstLetter(userProfileData?.name) || "A"}
        </p>
        <ul className="flex items-center md:hidden uppercase font-[500] text-[1rem] w-full">
          <li>Account</li>{" "}
          <li className="text-xl">
            {!first ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </li>
        </ul>
      </div>
      {first && (
        <ul className="fixed md:right-[-5rem] md:w-[12rem] md:px-3 md:py-6 flex flex-col gap-2 rounded-lg md:bg-[#f6f6f6] mt-2">
          <li>
            <Link
              to={"profile"}
              className="capitalize font-medium cursor-pointer hover:text-blue duration-150"
              onClick={() => {
                setFirst(false);
              }}
            >
              my profile
            </Link>
          </li>
          <li>
            <Link
              to={"appointments"}
              className="capitalize font-medium cursor-pointer hover:text-blue duration-150"
              onClick={() => {
                setFirst(false);
              }}
            >
              my appointments
            </Link>
          </li>
          <li
            className="capitalize font-medium cursor-pointer hover:text-blue duration-150"
            onClick={handleLogout}
          >
            logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default Account;

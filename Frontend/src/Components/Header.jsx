import React, { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../Context/Store";
import Account from "../UI/Account";
const Header = () => {
  const { isopen, handleToggleMenue, setIsopen, token } =
    useContext(StoreContext);
  return (
    <div className="cc w-screen h-[5rem] fixed top-0 z-50 bg-white">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Images/Group_4123.svg"
            alt="the logo of Prescripto"
            className="w-[2.4rem]"
          />
          <span className="text-highlightText text-[1.7rem] font-bold">
            Prescripto
          </span>
        </Link>
        <div
          className="flex items-center justify-between md:w-[66%] main_nav_content md:translate-x-0 transform duration-200"
          style={isopen ? { transform: "translateX(20%)" } : {}}
        >
          <ul className="flex gap-5 nav_content">
            {["/", "doctors", "about", "contact"].map((cur, id) => {
              return (
                <li key={id}>
                  <NavLink
                    to={cur}
                    className="uppercase navbar font-[600]"
                    onClick={() => {
                      setIsopen(false);
                    }}
                  >
                    {cur == "/" ? "home" : cur}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {!token ? (
            <Link
              to={`login`}
              className="bg-blue text-white px-7 py-3 md:rounded-3xl rounded-lg text-[.9rem] cursor-pointer"
              onClick={() => {
                setIsopen(false);
              }}
            >
              Creat Account
            </Link>
          ) : (
            <Account />
          )}
        </div>
        <div className="md:hidden block z-20 w-max" onClick={handleToggleMenue}>
          {!isopen ? (
            <FaBarsStaggered className="text-[1.5rem]" />
          ) : (
            <RxCross2 className="text-[1.5rem]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loaders from "../UI/Loaders";
import { StoreContext } from "../Context/Store";

import { RxCross2 } from "react-icons/rx";
const Doctors = () => {
  const { allDoctorsLoading, allCategoryName } = useContext(StoreContext);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [speciality]);

  if (allDoctorsLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loaders />
      </div>
    );
  }

  const handleNavigate = (catagory) => {
    if (pathname === `/doctors/${catagory}`) {
      navigate("/doctors");
    } else {
      navigate(`/doctors/${catagory}`);
    }
  };

  return (
    <div className="section_margin cc ">
      <div className="container">
        <p className="mt-4">Browse through the doctors specialist.</p>
        <div
          className="md:hidden block border w-max py-1 px-5 mt-5 cursor-pointer"
          onClick={() => {
            setIsFilterOpen(true);
          }}
        >
          Filter
        </div>
        <div className="flex items-start gap-5 mt-[2rem]">
          <div
            className="flex flex-col gap-4 items-start doctor_catagory duration-300"
            style={isFilterOpen ? { transform: "translateX(0%)" } : {}}
          >
            <div className="flex items-end justify-end w-[90%] mb-10 md:hidden">
              <RxCross2
                className="text-3xl"
                onClick={() => {
                  setIsFilterOpen(false);
                }}
              />
            </div>
            {allCategoryName?.map((cur) => {
              return (
                <div
                  key={cur}
                  onClick={() => {
                    handleNavigate(cur);
                    setIsFilterOpen(false);
                  }}
                  className={`cursor-pointer md:h-[2.2rem] md:w-[14em] w-full md:py-0 py-1  md:border border-[#c6c6c6dd] text-[1.4rem] flex items-center pl-3 rounded-sm md:text-sm hover:bg-blueTrans ${
                    cur === speciality && "bg-blueTrans"
                  }`}
                >
                  {cur}
                </div>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Doctors;

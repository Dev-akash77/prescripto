import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Loaders from "../UI/Loaders";
import { StoreContext } from "../Context/Store";

const Doctors = () => {
  const { allDoctorsLoading, allCategoryName } = useContext(StoreContext);

  if (allDoctorsLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loaders />
      </div>
    );
  }
 
  return (
    <div className="section_margin cc">
      <div className="container">
        <p className="mt-4">Browse through the doctors specialist.</p>
        <div className="flex items-start gap-5 mt-[2rem]">
          <div className="flex flex-col gap-4 items-start ">
            {allCategoryName.map((cur) => {
              return (
                <Link
                  key={cur}
                  to={`/doctors/${cur}`}
                  className={`h-[2.2rem] w-[14em] border border-[#c6c6c6dd] flex items-center pl-3 rounded-sm text-sm`}
                >
                 {cur}
                </Link>
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

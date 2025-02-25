import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loaders from "../UI/Loaders";
import { StoreContext } from "../Context/Store";

const Doctors = () => {
  const { allDoctorsLoading, allCategoryName } = useContext(StoreContext);
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
    <div className="section_margin cc">
      <div className="container">
        <p className="mt-4">Browse through the doctors specialist.</p>
        <div className="flex items-start gap-5 mt-[2rem]">
          <div className="flex flex-col gap-4 items-start ">
            {allCategoryName?.map((cur) => {
              return (
                <div
                  key={cur}
                  onClick={() => {
                    handleNavigate(cur);
                  }}
                  className={`cursor-pointer h-[2.2rem] w-[14em] border border-[#c6c6c6dd] flex items-center pl-3 rounded-sm text-sm hover:bg-blueTrans ${
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

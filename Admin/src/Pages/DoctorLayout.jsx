import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/Store";
import Auth from "../Auth/Auth";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import DoctorSideBar from "../Components/DoctorSideBar";

const DoctorLayout = () => {
  const { doctorToken, doctorLoginData } = useContext(StoreContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!doctorToken) {
      navigate("/")
    }
  },[doctorToken])
  if (!doctorToken) {
    return <Auth />;
  }
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex gap-4 flex-1 p-4">
        <DoctorSideBar />
        <div className="flex-1 h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;

import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Auth from "../Auth/Auth";
import { StoreContext } from "../Context/Store";

const AdminLayout = () => {
  const { adminToken, doctorToken } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctorToken) {
      navigate("/doctor");
    }
  }, [doctorToken]);

  if (!adminToken) {
    return <Auth />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-4 flex-1 p-4">
        <SideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Auth from '../Auth/Auth';
import { StoreContext } from "../Context/Store";

const Layout = () => {
  const {adminToken} = useContext(StoreContext);
  
  return (
    <div>
     {!adminToken? <Auth />: <div>
        <Navbar />
        <div className="flex gap-4">
          <SideBar />
          <Outlet />
        </div>
      </div>}
    </div>
  );
};

export default Layout;

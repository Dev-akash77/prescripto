import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Store";
import { Link } from "react-router-dom";
import { getNameFirstLetter } from './../Utils/Function';

const Account = () => {
  const { token,userProfileData,setToken} = useContext(StoreContext);
  const [first, setFirst] = useState(false);
  const handleLogout=()=>{
    setFirst(false);
    setToken(false)
  }
  return (
    <div className="cc">
      <div
        className="bg-blue rounded-full w-[2.5rem] h-[2.5rem] cc text-xl text-white cursor-pointer fixed uppercase"
        onClick={() => {
          setFirst(!first);
        }}
      >
       {getNameFirstLetter(userProfileData?.name)||"A"}
      </div>
      {first && (
        <ul className="fixed mt-[12.5rem] w-[12rem] px-3 py-6 flex flex-col gap-2 rounded-lg bg-[#f6f6f6]">
          <li>
            <Link
              to={"profile"}
              className="capitalize font-medium cursor-pointer hover:text-blue duration-150" onClick={()=>{setFirst(false)}}
            >
              my profile
            </Link>
          </li>
          <li>
            <Link
              to={"appointments"}
              className="capitalize font-medium cursor-pointer hover:text-blue duration-150" onClick={()=>{setFirst(false)}}
            >
              my appointments
            </Link>
          </li>
          <li className="capitalize font-medium cursor-pointer hover:text-blue duration-150" onClick={handleLogout}>logout</li>
        </ul>
      )}
    </div>
  );
};

export default Account;

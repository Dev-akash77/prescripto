import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Context/Store";
import { getNameFirstLetter } from "../Utils/Function";
import { useNavigate } from "react-router-dom";
import Loaders from "../UI/Loaders";

const Profile = () => {
  const {
    userProfileData,
    userProfileLoading,
    setIsLogin,
    token,
    handleUpdateProfile,
  } = useContext(StoreContext);
  const [editProfile, setEditProfile] = useState(false);
  const navigate = useNavigate();
  // ! token base home page redirection
  useEffect(() => {
    if (!token) {
      navigate("/login");
      setIsLogin(false);
    }
  }, [token]);

  if (userProfileLoading) {
    return (
      <div className="cc h-screen">
        <Loaders />
      </div>
    );
  }
  if (!userProfileData) {
    return <div className="section_margin cc">No profile data available</div>;
  }
  const { name, email, dob, phone, address, gender } = userProfileData;
  console.log(dob);

  return (
    userProfileData && (
      <div className="section_margin cc">
        <form
          className="container"
          onSubmit={(e) => {
            handleUpdateProfile(e, editProfile, setEditProfile);
          }}
        >
          <div className="name_logo cc w-[7rem] h-[7rem] uppercase rounded-xl bg-blue text-white text-[4rem] mt-10 cursor-pointer">
            {getNameFirstLetter(name)}
          </div>
          <div className="mt-6 capitalize text-[1.8rem] font-semibold">
            {!editProfile ? (
              name
            ) : (
              <input
                type="text"
                name="name"
                className="border border-black"
                defaultValue={name}
              />
            )}
          </div>
          <div className="w-1/2 h-[.03rem] bg-black my-3"></div>
          <p className="border-b-2 w-max text-xl">Contact Information</p>
          <div className="flex flex-col mt-5 gap-3 w-max">
            <div className="flex items-center gap-[5rem]">
              <p className="text-[1rem] font-semibold">Email id:</p>
              {!editProfile ? (
                <p className="text-blue">{email}</p>
              ) : (
                <input
                  type="email"
                  name="email"
                  className="border border-black"
                  defaultValue={email}
                />
              )}
            </div>
            <div className="flex items-center gap-[5.7rem]">
              <p className="text-[1rem] font-semibold">Phone:</p>
              <p className="text-blue">
                {!editProfile ? (
                  phone
                ) : (
                  <input
                    type="text"
                    name="phone"
                    className="border border-black text-text"
                    defaultValue={phone}
                  />
                )}
              </p>
            </div>
            <div className="flex items-center gap-[5rem]">
              <p className="text-[1rem] font-semibold">Address:</p>
              <p className="text-blue">
                {!editProfile ? (
                  address
                ) : (
                  <input
                    type="text"
                    name="address"
                    className="border border-black text-text"
                    defaultValue={address}
                  />
                )}
              </p>
            </div>
          </div>
          <p className="border-b-2 w-max text-xl mt-5">Basic Information</p>
          <div className="flex flex-col mt-5 gap-3 w-max">
            <div className="flex items-center gap-[5rem]">
              <p className="text-[1rem] font-semibold">Gender:</p>
              {!editProfile ? (
                <p className="text-blue">{gender}</p>
              ) : (
                <select
                  name="gender"
                  className="border border-black text-text px-2 py-1 cursor-pointer"
                  defaultValue={gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Not selected">Not selected</option>
                </select>
              )}
            </div>

            <div className="flex items-center gap-[4.6rem]">
              <p className="text-[1rem] font-semibold">Birthday:</p>
              <p className="text-blue">
                {!editProfile ? (
                  dob
                ) : (
                  <input
                    type="date"
                    name="dob"
                    className="border border-black text-text cursor-pointer"
                    defaultValue={dob}
                  />
                )}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue px-7 py-2 text-white rounded-full w-max cursor-pointer mt-6"
          >
            {editProfile ? "Save Profile" : "Edit Profile"}
          </button>
        </form>
      </div>
    )
  );
};

export default Profile;

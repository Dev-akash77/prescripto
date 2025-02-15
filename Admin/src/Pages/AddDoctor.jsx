import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Store";

const AddDoctor = () => {
  const { handleAddDoctor, doctroFromData, setDoctroFromData } =
    useContext(StoreContext);

  const doctorCategories = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic Surgeon",
    "Pediatrician",
    "Psychiatrist",
    "General Physician",
    "Gynecologist",
  ];
  const experienceLevels = [
    "1 Year",
    "2 Year",
    "3 Year",
    "4 Year",
    "5 Year",
    "6 Year",
    "7 Year",
    "8 Year",
    "9 Year",
    "10+ Year",
  ];

  const handleDoctorFrom = (e) => {
    const { name, value } = e.target;
    setDoctroFromData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="section_margin sidebar_margin">
      <h2 className="font-semibold text-lg">Add Doctor</h2>
      <form
        className="fixed border border-[#dddd] h-[75vh] mt-5 px-7 flex flex-col py-7 bg-white gap-5 overflow-y-auto"
        onSubmit={handleAddDoctor}
      >
        <div className="flex flex-col gap-1 rounded-sm">
          <p>Upload doctor picture</p>
          <input
            type="text"
            name="image"
            value={doctroFromData.image}
            onChange={(e) => {
              handleDoctorFrom(e);
            }}
            required
            className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
            placeholder="Image url"
          />
        </div>

        <div className="flex gap-[2.5rem] items-center justify-center">
          <div className="flex flex-col gap-1  rounded-sm">
            <p>Doctor's name</p>
            <input
              type="text"
              name="name"
              value={doctroFromData.name}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-1  rounded-sm">
            <p>Speciality</p>
            <select
              name="speciality"
              value={doctroFromData.speciality}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
            >
              {doctorCategories.map((cur, id) => {
                return (
                  <option value={cur} key={id}>
                    {cur}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex gap-[2.5rem] items-center justify-center">
          <div className="flex flex-col gap-1 rounded-sm">
            <p>Doctor Email</p>
            <input
              type="email"
              name="email"
              value={doctroFromData.email}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1 rounded-sm">
            <p>Degree</p>
            <input
              type="text"
              name="degree"
              value={doctroFromData.degree}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
              placeholder="Degree"
            />
          </div>
        </div>

        <div className="flex gap-[2.5rem] items-center justify-center">
          <div className="flex flex-col gap-1 rounded-sm">
            <p>Set Password</p>
            <input
              type="password"
              name="password"
              value={doctroFromData.password}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1 rounded-sm">
            <p>Address</p>
            <input
              type="text"
              name="address"
              value={doctroFromData.address}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="flex gap-[2.5rem] items-center justify-center">
          <div className="flex flex-col gap-1 rounded-sm">
            <p>Experience</p>
            <select
              name="experience"
              value={doctroFromData.experience}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
            >
              {experienceLevels.map((cur, id) => {
                return (
                  <option value={cur} key={id}>
                    {cur}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1 rounded-sm">
            <p>Fees</p>
            <input
              type="number"
              name="fees"
              value={doctroFromData.fees}
              onChange={(e) => {
                handleDoctorFrom(e);
              }}
              required
              className="border border-[#dddd] rounded-sm bg-transparent p-2 w-[26rem]"
              placeholder="Doctors fees"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 rounded-sm">
          <p className="font-medium text-gray-700">About Doctor</p>
          <textarea
            name="about"
            value={doctroFromData.about}
            onChange={(e) => {
              handleDoctorFrom(e);
            }}
            required
            className="border border-gray-300 rounded-sm bg-transparent px-5 w-full py-2 resize-none"
            rows={8}
            placeholder="Write about doctor"
          />
        </div>

        <button
          type="submit"
          className="border-none outline-none bg-blue text-white cc py-2 rounded-md cursor-pointer"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;

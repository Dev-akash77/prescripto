import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookAppointment, singleDoctor } from "../Api/Api";
import Loaders from "./../UI/Loaders";
import { PiSealCheckFill } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { getDate_Time } from "./../Utils/Function/getDate_Time";
import { StoreContext } from "./../Context/Store";
import { toast } from "react-toastify";
import { related_doctor } from "../Utils/Function/Related_doctor";
import DoctorsCard from "../Common/DoctorsCard";
const Details = () => {
  const navigate = useNavigate();
  const {
    token,
    allDoctorsRefetch,
    setIsLogin,
    allAppointmentRefetch,
    allDoctorsData,
  } = useContext(StoreContext);
  const { id } = useParams();
  const [slotDate, setSlotDate] = useState([]);
  const [slotIndex, setSlotIndex] = useState(null);
  const [doctorSlotTime, setDoctorSlotTime] = useState(null);
  // ! doctor slots data
  let doctorSlotDate = slotDate[slotIndex];

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["details", id],
    queryFn: () => singleDoctor(id),
    enabled: true,
  });

  const fmMonth = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  useEffect(() => {
    window.scroll(0, 0);
    getDate_Time(setSlotDate, data);
  }, [data]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loaders />
      </div>
    );
  }
  // ! destructre doctor data
  const { image, name, speciality, degree, experience, about, fees } =
    data?.doctor;

  const relatedDoctor = related_doctor(speciality, allDoctorsData?.doctors, id); // ! related doctors

  const handleSlotTime = (id) => {
    setSlotIndex(id);
    setDoctorSlotTime(null);
  };

  // ! handle book appointment
  const handleBookAppointment = async () => {
    const date = new Date(slotDate[slotIndex]?.date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const formatedDate = `${day} ${fmMonth[month]} ${year}`;

    if (!token) {
      toast.warn("Login First to Book Appointment");
      setIsLogin(true);
      return navigate("/login");
    }

    if (slotIndex === null) {
      return toast.error("Select Date for Book Appointment");
    }

    try {
      const data = await bookAppointment(
        id,
        formatedDate,
        doctorSlotTime,
        token
      );
      if (data?.success) {
        toast.success(data.message);
        setSlotIndex(null);
        setDoctorSlotTime(null);
        allDoctorsRefetch();
        navigate("/appointments");
        refetch();
        allAppointmentRefetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="section_margin cc">
      <div className="container mt-[1rem]">
        <div className="flex md:flex-row flex-col items-center justify-between md:gap-[1rem] w-[full] ">
          <div className="bg-blue md:w-[25%]  h-full cc rounded-lg">
            <img src={image} alt={name} />
          </div>

          <div className="border rounded-lg md:p-8 p-6 md:w-[74.5%] w-[95%] h-full border-[#606060dd] bg-white z-20 -mt-[4rem] md:mt-0">
            <div className="flex items-center text-center gap-2">
              <h2 className="md:text-3xl text-2xl font-medium">{name}</h2>
              <PiSealCheckFill className="text-[1.6rem] text-[#1e1ef0]" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 mt-1 text-gray">
                <p className="capitalize">{degree} - </p>
                <p>{speciality}</p>
              </div>
              <p className="border rounded-full py-[.15rem] px-3 text-[.7rem] mt-1 border-[#9c9c9cdd]">
                {experience}
              </p>
            </div>

            <div className="md:mt-6 mt-3 flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <h2 className="font-medium ">About</h2>
                <IoMdInformationCircleOutline />
              </div>
              <p className="text-gray">{about}</p>
            </div>

            <div className="flex items-center mt-5">
              Appointment fee: ${fees}
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full ">
          <div className="mt-5 md:w-[74.5%] overflow-x-scroll">
            <h2 className="text-black">Booking slots</h2>
            <div className="flex items-center mt-5 gap-4 overflow-x-auto">
              <div
                className={`py-6 px-8 rounded-full cursor-pointer ${
                  slotIndex === null ? " bg-blue" : "border border-[#b5b5b5dd]"
                }`}
                onClick={() => {
                  setSlotIndex(null);
                  setDoctorSlotTime(null);
                }}
              ></div>
              {slotDate?.map((cur, id) => {
                const formattedWeek = new Date(cur.date).toLocaleDateString(
                  "en-US",
                  { weekday: "short" }
                );
                const formattedDate = new Date(cur.date).getDate();

                return (
                  <div
                    className={`py-5 px-3 rounded-full border border-[#b5b5b5dd] cc cursor-pointer transition-all duration-300
                      ${
                        slotIndex !== null && slotIndex === id
                          ? "bg-blue border-none text-white"
                          : ""
                      }`}
                    key={id}
                    onClick={() => handleSlotTime(id)}
                  >
                    <p className="font-medium uppercase">{formattedWeek}</p>
                    <p className="text-lg">{formattedDate}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-3 overflow-x-auto">
              {slotIndex !== null &&
              (!doctorSlotDate?.slots || doctorSlotDate?.slots.length === 0) ? (
                <div className="mt-3 text-red-500 text-sm">
                  Sorry, no appointments available for today. Please select
                  another date
                </div>
              ) : (
                doctorSlotDate?.slots?.map((cur, id) => (
                  <div
                    className={`py-2 px-6 rounded-full cursor-pointer text-sm whitespace-nowrap mt-5
                  ${
                    doctorSlotTime === cur.formattedTime
                      ? "bg-blue text-white border-none"
                      : "text-[#4d4d4ddd] border border-[#d0d0d0dd]"
                  }`}
                    key={id}
                    onClick={() => {
                      setDoctorSlotTime(cur.formattedTime);
                    }}
                  >
                    {cur.formattedTime}
                  </div>
                ))
              )}
            </div>
            <button
              className={`text-white py-[.8rem] px-[5rem] w-max rounded-full mt-8 cursor-pointer bg-blue`}
              onClick={handleBookAppointment}
            >
              Book an appointment
            </button>
          </div>
        </div>

        {/* related doctor */}
        <div className="section_gap">
          <h2 className="cc md:text-3xl text-2xl font-medium">
            Related Doctors
          </h2>
          <p className="cc mt-3">
            Simply browse through our extensive list of trusted doctors.
          </p>

          {relatedDoctor?.length === 0 && (
            <p className="cc mt-[3rem] text-xl">No Related Doctors Available</p>
          )}

          <div className="grid place-content-center md:grid-cols-5 grid-cols-1 gap-5 w-full mt-[3rem]">
            {relatedDoctor?.lentgh !== 0 &&
              relatedDoctor?.map((cur, id) => {
                return <DoctorsCard data={cur} key={id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

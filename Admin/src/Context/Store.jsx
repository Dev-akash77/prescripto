import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  addDoctor,
  adminLogin,
  getallAppointment,
  getAllDoctor,
  getallUser,
  updateDoctorAvailable,
} from "../Api/Api";
import { toast } from "react-toastify";

export const StoreContext = createContext();
export const StoreContextProvider = ({children} ) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [adminToken, setAdminToken] = useState(
    JSON.parse(localStorage.getItem("adminToken")) || false
  );
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [doctroFromData, setDoctroFromData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    speciality: "",
    degree: "",
    experience: "",
    about: "",
    fees: "",
    address: "",
  });

  // ! tanstack query
  const { data: loginData, refetch: loginRefetch } = useQuery({
    queryKey: ["login"],
    queryFn: () => adminLogin(formData),
    enabled: false,
  });

  // ! get all doctor
  const {
    data: allDoctotrData,
    isLoading: doctorLoading,
    refetch: allDoctorRefetch,
  } = useQuery({
    queryKey: ["allDoctor", adminToken],
    queryFn: () => getAllDoctor(adminToken),
    enabled: !!adminToken,
  });


// ! get all appointment
 const {data:allUserData} = useQuery({
  queryKey:["allUser"],
  queryFn:()=>getallUser(adminToken),
  enabled:!!adminToken
 })

// ! get all appointment
 const {data:allAppointmentData,refetch:allAppointmentRefetch,isLoading:appointmentLoading} = useQuery({
  queryKey:["allAppointment"],
  queryFn:()=>getallAppointment(adminToken),
  enabled:!!adminToken
 })

  // ! authentication
  const handleAuthentication = async (e) => {
    e.preventDefault();
    try {
      if (isAdmin) {
        loginRefetch();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  // ! adding doctor
  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      const data = await addDoctor(doctroFromData, adminToken);
      if (data.success) {
        toast.success(data.message);
        allDoctorRefetch(); //! after adding doctor refresh doctor data
        allAppointmentRefetch(); //! after adding doctor refresh appointment data
        setDoctroFromData({
          name: "",
          email: "",
          password: "",
          image: "",
          speciality: "",
          degree: "",
          experience: "",
          about: "",
          fees: "",
          address: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ! update doctor availibility
  const changeDoctorAvailable = async (doctor) => {
    try {
      let available = !doctor.available;
      const data = await updateDoctorAvailable(
        doctor?._id,
        available,
        adminToken
      );
      if (data?.success) {
        toast.success(data?.message);
        allDoctorRefetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("adminToken", JSON.stringify(adminToken));
  }, [adminToken]);

  useEffect(() => {
    if (loginData?.success) {
      toast.success(loginData?.message);
      setAdminToken(loginData?.token);
      setFormData({ email: "", password: "" });
    }
  }, [loginData]);
  
  return (
    <StoreContext.Provider
      value={{
        setIsAdmin,
        isAdmin,
        formData,
        setFormData,
        handleAuthentication,
        adminToken,
        setAdminToken,
        handleAddDoctor,
        doctroFromData,
        setDoctroFromData,
        allDoctotrData,
        doctorLoading,
        changeDoctorAvailable,
        allAppointmentData,
        allUserData,
        appointmentLoading
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

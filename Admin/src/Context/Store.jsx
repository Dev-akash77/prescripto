import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  addDoctor,
  adminLogin,
  cancleAppointMent,
  deleteAppointment,
  doctorCancleAppointMent,
  doctorsLogin,
  getallAppointment,
  getAllDoctor,
  getallUser,
  getDoctorAppoinments,
  getDoctorEarning,
  getDoctorPaitaint,
  getDoctorProfile,
  updateDoctorAvailable,
} from "../Api/Api";
import { toast } from "react-toastify";

export const StoreContext = createContext();
export const StoreContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [adminToken, setAdminToken] = useState(
    JSON.parse(localStorage.getItem("adminToken")) || false //! admin token
  );
  const [doctorToken, setDoctorToken] = useState(
    JSON.parse(localStorage.getItem("doctorToken") || false) //! doctor token
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
  // ! admin Login
  const { data: loginData, refetch: loginRefetch } = useQuery({
    queryKey: ["login"],
    queryFn: () => adminLogin(formData),
    enabled: false,
  });

  // ! doctors login
  const { data: doctorLoginData, refetch: doctorLoginRefetch } = useQuery({
    queryKey: ["doctorLogin"],
    queryFn: () => doctorsLogin(formData),
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

  // ! get all user
  const { data: allUserData } = useQuery({
    queryKey: ["allUser"],
    queryFn: () => getallUser(adminToken),
    enabled: !!adminToken,
  });

  // ! get all appointment
  const {
    data: allAppointmentData,
    refetch: allAppointmentRefetch,
    isLoading: appointmentLoading,
  } = useQuery({
    queryKey: ["allAppointment"],
    queryFn: () => getallAppointment(adminToken),
    enabled: !!adminToken,
  });

  // ! get doctor appointment
  const {
    data: doctorAppointmentData,
    refetch: doctorAppointmentRefetch,
    isLoading: doctorappointmentLoading,
  } = useQuery({
    queryKey: ["doctorAppointment"],
    queryFn: () => getDoctorAppoinments(doctorToken),
    enabled: !!doctorToken,
  });

  // ! get doctor earning
  const { data: doctorEarningData, refetch: doctorEarningRefetch } = useQuery({
    queryKey: ["doctorEarning"],
    queryFn: () => getDoctorEarning(doctorToken),
    enabled: !!doctorToken,
  });

  // ! get doctor paitaint
  const { data: doctorPaitaintData, refetch: doctorPaitaint } = useQuery({
    queryKey: ["doctorPaitaint"],
    queryFn: () => getDoctorPaitaint(doctorToken),
    enabled: !!doctorToken,
  });
  // ! get doctor Profile
  const { data: doctorProfileData, refetch: doctorProfileRefetch,isLoading:doctorProfileLoading } = useQuery({
    queryKey: ["doctorProfile"],
    queryFn: () => getDoctorProfile(doctorToken),
    enabled: !!doctorToken,
  });

  // ! authentication
  const handleAuthentication = async (e) => {
    e.preventDefault();
    try {
      if (isAdmin) {
        loginRefetch();
      }
      if (!isAdmin) {
        doctorLoginRefetch();
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

  // ! cancle appointment
  const handleCancleAppointment = async (id) => {
    try {
      const data = await cancleAppointMent(id, adminToken);

      if (data.success) {
        toast.success(data.message);
        allAppointmentRefetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while canceling");
    }
  };

  // ! delete appointment
  const handleDeleteAppointment = async (id) => {
    try {
      const data = await deleteAppointment(id, adminToken);

      if (data.success) {
        toast.success(data.message);
        allAppointmentRefetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while canceling");
    }
  };
  

// ! doctor appointment cancle
  const handleDcoctorCancleAppointment = async (id) => {
    try {
      const cancleData = await doctorCancleAppointMent(doctorToken, id);
      if (cancleData?.success) {
        toast.success(cancleData.message);
        doctorAppointmentRefetch();
      }
    } catch (error) {
      console.log(error);
    }
  };






  useEffect(() => {
    localStorage.setItem("adminToken", JSON.stringify(adminToken));
    localStorage.setItem("doctorToken", JSON.stringify(doctorToken));
  }, [adminToken, doctorToken]);

  useEffect(() => {
    if (loginData?.success) {
      toast.success(loginData?.message);
      setAdminToken(loginData?.token);
      setDoctorToken(false);
      setFormData({ email: "", password: "" });
    }
  }, [loginData]);

  useEffect(() => {
    if (doctorLoginData?.success) {
      toast.success(doctorLoginData.message);
      setDoctorToken(doctorLoginData.token);
      setAdminToken(false);
      setFormData({ email: "", password: "" });
    }
  }, [doctorLoginData]);

  return (
    <StoreContext.Provider
      value={{
        setIsAdmin,
        isAdmin,
        formData,
        setFormData,
        handleAuthentication,
        adminToken,
        doctorToken,
        setAdminToken,
        setDoctorToken,
        handleAddDoctor,
        doctroFromData,
        setDoctroFromData,
        allDoctotrData,
        doctorLoading,
        changeDoctorAvailable,
        allAppointmentData,
        allUserData,
        appointmentLoading,
        handleCancleAppointment,
        handleDeleteAppointment,
        doctorLoginData,
        doctorAppointmentData,
        allAppointmentRefetch,
        doctorAppointmentRefetch,
        doctorappointmentLoading,
        doctorEarningData,
        doctorEarningRefetch,
        doctorPaitaintData,
        handleDcoctorCancleAppointment,
        doctorProfileData,
        doctorProfileLoading,
        doctorProfileRefetch
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

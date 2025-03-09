import { createContext, useEffect, useState } from "react";
import {
  getAllAppointment,
  getAllDoctor,
  login,
  profileData,
  registered,
  updatedProfileApi,
} from "../Api/Api";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [isopen, setIsopen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || false
  ); // ! here is server token
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ! setlocal storage function
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  // ! tanstack query
  const { data: loginData, refetch: loginRefetch } = useQuery({
    queryKey: ["login"],
    queryFn: () => login(fromData.email, fromData.password),
    enabled: false,
  });

  // ! user profile data
  const {
    data: userProfileData,
    isLoading: userProfileLoading,
    refetch: userProfileRefetch,
  } = useQuery({
    queryKey: ["userProfile", token],
    queryFn: () => profileData(token),
    enabled: !!token,
  });

  // ! user appontment data
  const {
    data: allAppointmentData,
    isLoading: allAppointmentLoading,
    refetch: allAppointmentRefetch,
  } = useQuery({
    queryKey: ["allAppointment", token],
    queryFn: () => getAllAppointment(token),
    enabled: !!token,
  });

  // ! all doctors data
  const {
    data: allDoctorsData,
    isLoading: allDoctorsLoading,
    refetch: allDoctorsRefetch,
  } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: getAllDoctor,
    enabled: true,
  });

  // ! handle toggle menue
  const handleToggleMenue = () => {
    setIsopen((prev) => {
      return !prev;
    });
  };
  // ! handle user form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // ! handle user authentication
  const handleAuthentication = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        const data = await registered(fromData);
        if (data?.success) {
          toast.success(data.message);
          setFromData({ name: "", email: "", password: "" });
          setIsLogin(true);
        }
      } else {
        loginRefetch();
      }
    } catch (error) {
      toast.error(error.message);
      console.log("registered error", error);
    }
  };

  // ! update profile
  const handleUpdateProfile = async (e, editProfile, setEditProfile) => {
    e.preventDefault();
    setEditProfile(!editProfile);
    const formData = new FormData(e.target);
    const updatedProfile = Object.fromEntries(formData.entries());
    try {
      if (!editProfile) {
        return false;
      }
      const data = await updatedProfileApi(updatedProfile, token);
      if (data.success) {
        userProfileRefetch();
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("update frofile error", error);
    }
  };

  // ! use effect
  useEffect(() => {
    if (loginData?.success) {
      toast.success(loginData.message);
      setToken(loginData.token);
      setFromData({ name: "", email: "", password: "" });
    }
  }, [loginData]);

  // ! all catagory name
  const getAllCategory = () => {
    return [...new Set(allDoctorsData?.doctors.map((cur) => cur.speciality))];
  };
  const allCategoryName = getAllCategory();

  return (
    <StoreContext.Provider
      value={{
        isopen,
        handleToggleMenue,
        setIsopen,
        setIsLogin,
        isLogin,
        fromData,
        handleAuthentication,
        handleInputChange,
        token,
        setToken,
        userProfileData,
        userProfileLoading,
        handleUpdateProfile,
        allDoctorsData,
        allDoctorsLoading,
        allDoctorsRefetch,
        allAppointmentData,
        allAppointmentLoading,
        allAppointmentRefetch,
        allCategoryName,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

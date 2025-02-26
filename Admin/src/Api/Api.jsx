import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
import { toast } from "react-toastify";

// ! admin login data
export const adminLogin = async (formData) => {
  try {
    const { data } = await api.post("/api/admin/login", formData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("admin login eerror", error);
  }
};

// ! add doctor
export const addDoctor = async (fromdata, adminToken) => {
  try {
    const { data } = await api.post("/api/admin/add-doctor", fromdata, {
      headers: { aToken: adminToken },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("add-doctor error", error);
  }
};

// ! get all doctor
export const getAllDoctor = async (aToken) => {
  try {
    const { data } = await api.get("/api/admin/all-doctors", {
      headers: { aToken: aToken },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getAllDoctor", error);
  }
};

// ! update doctor availibility
export const updateDoctorAvailable = async (_id, available, aToken) => {
  try {
    const { data } = await api.put(
      "/api/admin/update-doctors-available",
      { _id, available },
      { headers: { aToken: aToken } }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("updateDoctorAvailable", error);
  }
};

// ! get all appointment
export const getallAppointment = async (aToken) => {
  try {
    const { data } = await api.get("/api/admin/all-appointment", {
      headers: { aToken },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getallAppointment", error);
  }
};

// ! get all user
export const getallUser = async (aToken) => {
  try {
    const { data } = await api.get("/api/admin/all-user", {
      headers: { aToken },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getallUser", error);
  }
};

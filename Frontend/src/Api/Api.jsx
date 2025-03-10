import axios from "axios";
import { toast } from "react-toastify";
// ! base url
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// ! register api
export const registered = async (fromData) => {
  try {
    const { data } = await api.post("/api/register", fromData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("registered error", error);
  }
};

// ! login api
export const login = async (email, password) => {
  try {
    const { data } = await api.post("/api/login", { email, password });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("login error", error);
  }
};

// ! profile data api
export const profileData = async (token) => {
  try {
    const { data } = await api.get("/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.log("profile error", error);
  }
};

// ! update profile
export const updatedProfileApi = async (profileData, token) => {
  try {
    const { data } = await api.put("/api/user/profile/update", profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("updatedProfileApi error", error);
  }
};

// ! get all doctor api
export const getAllDoctor = async () => {
  try {
    const { data } = await api.get("/api/all-doctors");
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getAllDoctorapi error", error);
  }
};

// ! get single docttor data
export const singleDoctor = async (id) => {
  try {
    const { data } = await api.post(`/api/doctor/${id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("singleDoctor error", error);
  }
};

// ! book appointment doctor
export const bookAppointment = async (doctorId, slotDate, slotTime, token) => {
  try {
    const { data } = await api.post(
      `/api/book-appointment`,
      { doctorId, slotDate, slotTime },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("bookAppointment error", error);
  }
};

// ! get all book appointment
export const getAllAppointment = async (token) => {
  try {
    const { data } = await api.get("/api/user/appointment", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getAllAppointment error", error);
  }
};


// ! add razorpay payemtnt api
export const razorpayApi = async (appointmentId, token) => {
  try {
    const { data } = await api.post("/api/user/payment", {appointmentId}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("razorpayApi error", error);
  }
};

// !  razorpay payemtnt verify
export const razorpayVerify = async (razorpay_order_id, token) => {
  try {
    const { data } = await api.post("/api/user/verify-payment", {razorpay_order_id}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("razorpayVerify error", error);
  }
};
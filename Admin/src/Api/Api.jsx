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

// ! cancle appointment
export const cancleAppointMent = async (appointmentID, aToken) => {
  try {
    const { data } = await api.post(
      "/api/admin/cancle-appointment",
      { appointmentID },
      { headers: { aToken } }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("cancleAppointMent", error);
  }
};
// ! doctor cancle appointment
export const doctorCancleAppointMent = async (token, appointmentID) => {
  try {
    const { data } = await api.post(
      "/api/doctor-cancle-appointment",
      { appointmentID },
      { headers: { token } }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("doctorCancleAppointMent", error);
  }
};

// ! delete appointment
export const deleteAppointment = async (appointmentID, aToken) => {
  try {
    const { data } = await api.post(
      "/api/admin/delete-appointment",
      { appointmentID },
      { headers: { aToken } }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("deleteAppointment", error);
  }
};

// ! Doctor Login
export const doctorsLogin = async (fromdata) => {
  try {
    const { data } = await api.post(`/api/doctor-login`, fromdata);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("doctorsLogin error", error);
  }
};

// ! get doctors appoinment data
export const getDoctorAppoinments = async (token) => {
  try {
    const { data } = await api.get("/api/apoointment-doctor", {
      headers: { token },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getallAppointment error", error);
  }
};
// ! get doctors appoinment data
export const getDoctorProfile = async (token) => {
  try {
    const { data } = await api.get("/api/doctor-profile", {
      headers: { token },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getallAppointment error", error);
  }
};
// ! get doctors erning data
export const getDoctorEarning = async (token) => {
  try {
    const { data } = await api.get("/api/earning-doctor", {
      headers: { token },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getallAppointment error", error);
  }
};

// ! get doctors patiant data
export const getDoctorPaitaint = async (token) => {
  try {
    const { data } = await api.get("/api/user-doctor", {
      headers: { token },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("getallAppointment error", error);
  }
};

// ! approve appointment by doctor
export const approveAppoinment = async (token, appointmentId) => {
  try {
    const { data } = await api.post(
      "/api/complete-doctor",
      { appointmentId },
      { headers: { token } }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("approveAppoinment error", error);
  }
};

// ! update doctor Profile by doctor
export const doctorProfileUpdate = async (token, fromData) => {
  try {
    const { data } = await api.put("/api/doctor-update-profile", fromData, {
      headers: { token },
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("approveAppoinment error", error);
  }
};


// ! add razorpay payemtnt api

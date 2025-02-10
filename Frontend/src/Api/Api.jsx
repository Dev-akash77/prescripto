import axios from "axios";
import { toast } from "react-toastify";
// ! base url
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const registered = async (fromData) => {
  try {
    const { data } = await api.post("/api/register", fromData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("registered error", error);
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await api.post("/api/login", { email, password });
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("login error", error);
  }
};

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

export const updatedProfileApi = async (profileData,token) => {
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

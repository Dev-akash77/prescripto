import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddDoctor from "./Pages/AddDoctor";
import AllDoctor from "./Pages/AllDoctor";
import DashBoard from "./Pages/DashBoard";
import Appopointment from "./Pages/Appopointment";
import { StoreContextProvider } from "./Context/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import AdminLayout from "./Components/AdminLayout";
import DoctorLayout from "./Pages/DoctorLayout";
import DoctorProfile from "./Pages/DoctorProfile";
import DoctorDashboard from "./Pages/DoctorDashboard";
import DoctorAppoinment from './Pages/DoctorAppoinment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AddDoctor />,
      },
      {
        path: "all-doctor",
        element: <AllDoctor />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "appointments",
        element: <Appopointment />,
      },
    ],
  },
  {
    path: "/doctor",
    element: <DoctorLayout />,
    children: [
      {
        index: true,
        element: <DoctorProfile />,
      },
      {
        path: "dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "appoinment",
        element: <DoctorAppoinment />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </StoreContextProvider>
    </QueryClientProvider>
  );
};

export default App;

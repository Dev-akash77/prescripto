import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./page/About";
import Doctors from "./page/Doctors";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Details from "./page/Details";
import ErrorPage from "./page/ErrorPage";
import { StoreContextProvider } from "./Context/Store";
import Auth from "./Authentication/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Profile from "./page/Profile";
import Appointment from "./page/Appointment";
import DoctorsLayout from "./page/All_Doctors";
import Doctor_Speciality from "./page/Doctor_Speciality";
import PrivateRoute from "./page/PrivateRoute";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/doctors",
          element: <Doctors />,
          children: [
            {
              index: true,
              element: <DoctorsLayout />,
            },
            {
              path: "/doctors/:speciality",
              element: <Doctor_Speciality />,
            },
          ],
        },
        {
          path: "/doctors/details/:id",
          element: <Details />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "/appointments",
          element: (
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Auth />,
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </StoreContextProvider>
    </QueryClientProvider>
  );
};

export default App;

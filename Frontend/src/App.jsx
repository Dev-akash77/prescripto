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
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ToastContainer } from "react-toastify";
import Profile from "./page/Profile";
import Appointment from "./page/Appointment";
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
        },
        {
          path: "/doctors/:id",
          element: <Details />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Auth />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/appointments",
          element: <Appointment />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContextProvider>
        <RouterProvider router={router}>
          
        </RouterProvider>
        <ToastContainer />
      </StoreContextProvider>
    </QueryClientProvider>
  );
};

export default App;

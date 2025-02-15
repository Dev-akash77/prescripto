import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import AddDoctor from "./Pages/AddDoctor";
import AllDoctor from "./Pages/AllDoctor";
import DashBoard from "./Pages/DashBoard";
import Appopointment from "./Pages/Appopointment";
import { StoreContextProvider } from "./Context/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AddDoctor />,
      },
      {
        path: "/all-doctor",
        element: <AllDoctor />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/appointments",
        element: <Appopointment />,
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

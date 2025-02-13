import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import AddDoctor from './Pages/AddDoctor';
import AllDoctor from './Pages/AllDoctor';
import DashBoard from './Pages/DashBoard';
import Appopointment from './Pages/Appopointment';

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
  return <RouterProvider router={router} />;
};

export default App;

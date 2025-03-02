import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";
const DoctorsLastAppoinment = ({ data }) => {
  const { handleCancleAppointment } = useContext(StoreContext);
  return (
    <div>
      hello
    </div>
  );
};

export default DoctorsLastAppoinment;

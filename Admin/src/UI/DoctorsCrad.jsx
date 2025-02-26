import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";

const DoctorsCrad = ({ data }) => {
  const { changeDoctorAvailable } = useContext(StoreContext);
  return (
    <div className="border border-[#abababdd] rounded-xl overflow-hidden flex flex-col cursor-pointer group">
      <div className="bg-blueTrans cc group-hover:bg-blue duration-500">
        <img src={data.image} alt={data.name} className="w-[14rem]" />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h2 className="font-semibold text-lg">{data.name}</h2>
        <p className="text-[#7d7d7ddd]">{data.speciality}</p>
        <div
          className="flex gap-1"
          onClick={() => {
            changeDoctorAvailable(data);
          }}
        >
          <input
            type="checkbox"
            defaultChecked={data.available}
            name="available"
          />
          Available
        </div>
      </div>
    </div>
  );
};

export default DoctorsCrad;

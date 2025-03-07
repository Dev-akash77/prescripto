import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Store";
import Loader from "../UI/Loader";
import { doctorProfileUpdate } from "../Api/Api";
import { toast } from "react-toastify";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
const DoctorProfile = () => {
  const {
    doctorProfileData,
    doctorProfileLoading,
    doctorToken,
    doctorProfileRefetch,
  } = useContext(StoreContext);
  const [isEdit, setIsEdit] = useState(false);

  if (doctorProfileLoading) {
    return (
      <div className="cc h-screen w-screen">
        <Loader />
      </div>
    );
  }

  const handleFormData = async (e) => {
    e.preventDefault();

    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    setIsEdit(false);

    const formData = new FormData(e.target);
    const updatedProfile = Object.fromEntries(formData.entries());
    updatedProfile.available = e.target.available.checked;
    try {
      const data = await doctorProfileUpdate(doctorToken, updatedProfile);
      if (data?.success) {
        toast.success(data?.message);
        doctorProfileRefetch();
      }
      console.log(updatedProfile);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <form
      className="section_margin sidebar_margin"
      onSubmit={(e) => {
        handleFormData(e);
      }}
    >
      {!isEdit ? (
        <div className="bg-blue cc w-[12rem] h-[12rem] rounded-lg">
          {
            <img
              className="w-full"
              src={doctorProfileData?.doctorProfile.image}
              alt={doctorProfileData?.doctorProfile.name}
            />
          }
        </div>
      ) : (
        <input
          type="text"
          name="image"
          defaultValue={doctorProfileData?.doctorProfile.image}
          placeholder="image url"
          className="outline-none py-1 px-4 w-[100%] rounded-sm text-black"
        />
      )}

      <div
        className={`${
          isEdit ? "bg-gray-50" : "bg-white"
        } mt-5 p-5 rounded-lg w-max text-gray-500 border`}
      >
        {isEdit ? (
          <input
            type="text"
            name="name"
            defaultValue={doctorProfileData?.doctorProfile.name}
            placeholder="name"
            className="outline-none py-1 px-4 w-full rounded-sm font-lg text-black text-2xl"
          />
        ) : (
          <h2 className="font-lg text-black text-2xl">
            {doctorProfileData?.doctorProfile.name}
          </h2>
        )}

        <div className="flex items-center mt-2 gap-1">
          {isEdit ? (
            <input
              type="text"
              name="degree"
              placeholder="degree"
              defaultValue={doctorProfileData?.doctorProfile.degree}
              className="outline-none py-1 px-4 rounded-sm text-black"
            />
          ) : (
            <p className="font-lg text-gray-500 text-md">
              {doctorProfileData?.doctorProfile.degree} -
            </p>
          )}
          {isEdit ? (
            <input
              type="text"
              name="speciality"
              placeholder="speciality"
              defaultValue={doctorProfileData?.doctorProfile.speciality}
              className="outline-none py-1 px-4 rounded-sm text-black"
            />
          ) : (
            <p className="font-lg text-gray-500 text-md">
              {doctorProfileData?.doctorProfile.speciality}
            </p>
          )}
          {isEdit ? (
            <input
              type="text"
              name="experience"
              placeholder="experience"
              defaultValue={doctorProfileData?.doctorProfile.experience}
              className="outline-none py-1 px-4 rounded-sm text-black"
            />
          ) : (
            <p className="border rounded-full py-[.15rem] px-3 text-[.7rem] mt-1 border-[#9c9c9cdd]">
              {doctorProfileData?.doctorProfile.experience}
            </p>
          )}
        </div>

        <h2 className="text-black font-medium text-md mt-2">About:</h2>
        {isEdit ? (
          <textarea
            name="about"
            defaultValue={doctorProfileData?.doctorProfile?.about || ""}
            placeholder="Write something about yourself..."
            className="outline-none py-1 px-4 text-gray-500 w-[30rem] h-[7rem] overflow-y-auto text-sm"
          />
        ) : (
          <p className="font-lg text-gray-500 w-[30rem] text-sm">
            {doctorProfileData?.doctorProfile.about}
          </p>
        )}

        <div className="text-black mt-2 flex items-center">
          Appointment Fees: $
          {isEdit ? (
            <input
              name="fees"
              defaultValue={doctorProfileData?.doctorProfile?.fees || ""}
              placeholder="Fees"
              className="outline-none text-black text-lg"
            />
          ) : (
            <p className="text-black text-lg">
              {doctorProfileData?.doctorProfile.fees}
            </p>
          )}
        </div>

        <div className="text-black mt-2 flex items-center gap-2">
          Address:
          {isEdit ? (
            <input
              name="address"
              defaultValue={doctorProfileData?.doctorProfile?.address || ""}
              placeholder="address"
              className="outline-none py-1 px-4 text-gray-500 w-[20rem]"
            />
          ) : (
            <p className="text-gray-500">
              {doctorProfileData?.doctorProfile.address}
            </p>
          )}
        </div>
        <p className="mt-2 flex items-center gap-1 text-black cursor-pointer">
          Available
          {!isEdit ? (
            !doctorProfileData?.doctorProfile.available ? (
              <MdOutlineCheckBoxOutlineBlank className="text-lg" />
            ) : (
              <IoCheckbox className="text-blue text-lg" />
            )
          ) : (
            <input
              type="checkbox"
              name="available"
              className="mt-[.1rem]"
              defaultChecked={doctorProfileData?.doctorProfile.available}
            />
          )}
        </p>

        <button
          className=" bg-blue text-white cursor-pointer rounded-md p-2 mt-2 w-[5rem] h-[2rem] overflow-hidden cc border-none outline-none"
          type="submit"
        >
          {isEdit ? "Save" : "Edit"}
        </button>
      </div>
    </form>
  );
};

export default DoctorProfile;

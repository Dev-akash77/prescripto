import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";

const Auth = () => {
  const { setIsAdmin, isAdmin, handleAuthentication, setFormData, formData } =
    useContext(StoreContext);
  const handleisAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const handleFromDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="h-screen w-screen md:flex md:items-center md:justify-center">
      <div className=" md:hidden bg-blue pt-16 rounded-b-[50%] pb-16 px-5 text-white">
        <h2 className="cc md:text-2xl text-[2.2rem] font-semibold">
          {isAdmin ? `Admin Login` : `Doctor Login`}
        </h2>
        <p className="cc mt-3 md:text-sm">
          {isAdmin
            ? `Please login to show dashboard`
            : `Please login to show appointment`}
        </p>
      </div>
      <div className="md:w-[24rem] w-full md:border border-[#dddd] rounded-xl auth_main px-[2rem] py-[2rem] auth_main">
        <div className="hidden md:block">
          <h2 className="text-highlightText text-2xl font-medium">
            {isAdmin ? `Admin Login` : `Doctor Login`}
          </h2>
          <p className="mt-3 text-sm">
            {isAdmin
              ? `Please login to show dashboard`
              : `Please login to show appointment`}
          </p>
        </div>
        {/* ! here is all form data */}
        <form
          className="flex flex-col text-sm md:gap-[.5rem] mt-3"
          onSubmit={(e) => {
            handleAuthentication(e);
          }}
        >
          <div className="flex flex-col md:gap-2">
            <label htmlFor="email" className="capitalize md:text-base text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFromDataChange}
              required
              className="md:border border-b w-full p-2 outline-none md:rounded-md md:border-[#dddd]"
            />
          </div>
          <div className="flex flex-col md:gap-2 md:my-0 my-[2rem]">
            <label htmlFor="password" className="capitalize md:text-base text-xl">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleFromDataChange}
              value={formData.password}
              required
              className="md:border border-b w-full p-2 outline-none md:rounded-md md:border-[#dddd]"
            />
          </div>
          <button
            type="submit"
            className="cc mt-[.5rem] bg-blue text-white p-3 rounded-md cursor-pointer md:text-base text-lg"
          >
            Login
          </button>
        </form>
        {/* ! here is all form data */}
        {!isAdmin ? (
          <p className="md:mt-4 md:text-sm text-lg mt-[2rem]">
            Admin Login?{" "}
            <span
              onClick={handleisAdmin}
              className="text-blue border-b border-b-blue cursor-pointer"
            >{`Click here`}</span>
          </p>
        ) : (
          <p className="md:mt-4 md:text-sm text-lg mt-[2rem]">
            Doctor Login?{" "}
            <span
              onClick={handleisAdmin}
              className="text-blue border-b border-b-blue cursor-pointer"
            >{`Click here`}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;

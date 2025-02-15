import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";

const Auth = () => {
  const { setIsAdmin, isAdmin,handleAuthentication,setFormData,formData} = useContext(StoreContext);
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
    <div className="h-screen w-screen cc bg-white">
      <div className="md:w-[24rem] w-[22rem] border border-[#dddd] rounded-xl auth_main px-[2rem] py-[2rem] auth_main">
        <h2 className="text-highlightText text-2xl font-medium">
          {isAdmin ? `Admin Login` : `Doctor Login`}
        </h2>
        <p className="mt-3 text-sm">
          {isAdmin
            ? `Please login to show dashboard`
            : `Please login to show appointment`}
        </p>
        {/* ! here is all form data */}
        <form className="flex flex-col text-sm gap-[.5rem] mt-3" onSubmit={(e)=>{handleAuthentication(e)}}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="capitalize">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFromDataChange}
              required
              className="border w-full p-2 outline-none rounded-md border-[#dddd]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="capitalize">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleFromDataChange}
              value={formData.password}
              required
              className="border w-full p-2 outline-none rounded-md border-[#dddd]"
            />
          </div>
          <button
            type="submit"
            className="cc mt-[.5rem] bg-blue text-white p-3 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
        {/* ! here is all form data */}
        {!isAdmin ? (
          <p className="mt-4 text-sm">
            Admin Login?{" "}
            <span
              onClick={handleisAdmin}
              className="text-blue border-b border-b-blue cursor-pointer"
            >{`Click here`}</span>
          </p>
        ) : (
          <p className="mt-4 text-sm">
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

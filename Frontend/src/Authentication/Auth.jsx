import React, { useContext, useEffect } from "react";
import { StoreContext } from "../Context/Store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const {
    setIsLogin,
    isLogin,
    fromData,
    handleAuthentication,
    handleInputChange,
    token,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  // ! check login or signup
  const handleisLogin = () => {
    setIsLogin((prev) => {
      return !prev;
    });
    setIsAdmin(false);
  };

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setIsLogin(true);
  };

  // ! token base home page redirection
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="h-screen w-screen cc">
      <div className="md:w-[24rem] w-[22rem] border rounded-xl section_gap auth_main px-[2rem] py-[2rem]">
        <h2 className="text-highlightText text-2xl font-medium">
          {isLogin
            ? `Login`
            : `Create Account`}
        </h2>
        <p className="mt-3 text-sm">
          {isLogin
            ? `Please log in to book appointment`
            : `Please sign up to book appointment`}
        </p>
        {/* ! here is all form data */}
        <form
          className="flex flex-col text-sm gap-[.5rem] mt-3"
          onSubmit={(e) => {
            handleAuthentication(e);
          }}
        >
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="capitalize">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={fromData.name}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                required
                className="border w-full p-2 outline-none rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="capitalize">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
              required
              className="border w-full p-2 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="capitalize">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={fromData.password}
              onChange={(e) => {
                handleInputChange(e);
              }}
              required
              className="border w-full p-2 outline-none rounded-md"
            />
          </div>
          <button
            type="submit"
            className="cc mt-[.5rem] bg-blue text-white p-3 rounded-md"
          >
            {isLogin ? `Login` : `Create Account`}
          </button>
        </form>
        {/* ! here is all form data */}
        {!isLogin ? (
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <span
              onClick={handleisLogin}
              className="text-blue border-b border-b-blue cursor-pointer"
            >{`Login here`}</span>
          </p>
        ) : (
          <p className="mt-4 text-sm">
            Create an new account?{" "}
            <span
              onClick={handleisLogin}
              className="text-blue border-b border-b-blue cursor-pointer"
            >{`Click here`}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;

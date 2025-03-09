import React, { useContext, useEffect } from "react";
import { StoreContext } from "../Context/Store";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
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
  };

  // ! token base home page redirection
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="h-screen w-screen md:flex md:items-center md:justify-center">
      <div className="md:hidden block bg-blue pt-5 rounded-b-[50%] pb-16 px-5 text-white">
        <Link to={"/"}>
          <MdKeyboardBackspace className="text-4xl mb-2" />
        </Link>
        <h2 className="cc md:text-2xl text-[2.5rem] font-semibold">
          {isLogin ? `Login Account` : `Create Account`}
        </h2>
        <p className="cc mt-3 md:text-sm text-md">
          {isLogin
            ? `Please log in to book appointment`
            : `Please sign up to book appointment`}
        </p>
      </div>
      <div className="md:w-[24rem] w-full md:border border-[#dddd] rounded-xl auth_main px-[1.5rem] md:px-[2rem] md:py-[1.5rem]">
        <div className="md:block hidden">
          <Link to={"/"}>
            <MdKeyboardBackspace className="text-4xl mb-2" />
          </Link>
          <h2 className="text-highlightText md:text-2xl text-2xl font-medium">
            {isLogin ? `Login` : `Create Account`}
          </h2>
          <p className="mt-3 md:text-sm text-md">
            {isLogin
              ? `Please log in to book appointment`
              : `Please sign up to book appointment`}
          </p>
        </div>
        {/* ! here is all form data */}
        <form
          className="flex flex-col text-sm md:gap-[.5rem] gap-[1.6rem] md:mt-3 mt-[3rem]"
          onSubmit={(e) => {
            handleAuthentication(e);
          }}
        >
          {!isLogin && (
            <div className="flex flex-col md:gap-2 gap-1">
              <label
                htmlFor="name"
                className="capitalize md:text-base text-[1.2rem]"
              >
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
                className="md:border md:focus:border-2 md:border-[#dddd] border-b w-full p-2 outline-none md:rounded-md"
              />
            </div>
          )}
          <div className="flex flex-col md:gap-2 gap-1">
            <label
              htmlFor="email"
              className="capitalize md:text-base text-[1.2rem]"
            >
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
              className="md:border md:focus:border-2 md:border-[#dddd] border-b w-full p-2 outline-none md:rounded-md"
            />
          </div>
          <div className="flex flex-col md:gap-2 gap-1">
            <label
              htmlFor="password"
              className="capitalize md:text-base text-[1.2rem]"
            >
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
              className="md:border md:focus:border-2 md:border-[#dddd] border-b w-full p-2 outline-none md:rounded-md"
            />
          </div>
          <button
            type="submit"
            className="cc md:mt-[.5rem] bg-blue text-white p-3 rounded-md md:py-2 py-3 md:text-base text-xl"
          >
            {isLogin ? `Login` : `Create Account`}
          </button>
        </form>
        {/* ! here is all form data */}
        {!isLogin ? (
          <p className="mt-4 md:text-sm text-lg">
            Already have an account?{" "}
            <span
              onClick={handleisLogin}
              className="text-blue border-b border-b-blue cursor-pointer"
            >{`Login here`}</span>
          </p>
        ) : (
          <p className="mt-4 md:text-sm text-lg">
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

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-5 cc section_gap bg-blueTrans">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10">
          <div className="flex flex-col gap-4 md:w-[50%]">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Images/Group_4123.svg"
                alt="the logo of Prescripto"
                className="w-[2.4rem]"
              />
              <span className="text-highlightText text-[1.7rem] font-bold">
                Prescripto
              </span>
            </Link>
            <p className="text-[.89rem] md:w-[80%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-top md:justify-end md:gap-[15rem] gap-5 md:w-[50%]">
            <div className="flex flex-col md:gap-4 gap-1">
              <div className="flex items-center gap-2">
                <h2 className="text-highlightText text-[1.3rem] text-black font-semibold">
                  COMPANY
                </h2>
              </div>
              <ul className="flex flex-col gap-1">
                <li className="capitalize">home</li>
                <li className="capitalize">about us</li>
                <li className="capitalize">delivery</li>
                <li className="capitalize">Privacy policy</li>
              </ul>
            </div>

            <div className="flex flex-col md:gap-4 gap-1">
              <div className="flex items-center gap-2">
                <h2 className="text-highlightText text-[1.3rem] text-black font-semibold">
                  GET IN TOUCH
                </h2>
              </div>
              <ul className="flex flex-col gap-1">
                <li className="capitalize">+91-8101602709</li>
                <li>akashrahul2006@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="md:mt-10 mt-5 border" />
        <p className="cc mt-5 text-[.8rem] md:text-sm">
          Copyright 2025 @ Akash Biswas.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

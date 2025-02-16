import React, { useContext } from "react";
import Herosection from "../Components/Herosection";
import Heading from "../Common/Heading";
import Speciality from "../Components/Speciality";
import Doctors from "../Components/Doctors";
import LastSection from "../Common/LastSection";
import { StoreContext } from "./../Context/Store";
import Loaders from "./../UI/Loaders";
const Home = () => {
  const { allDoctorsData, allDoctorsLoading } = useContext(StoreContext);
  if (allDoctorsLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loaders />
      </div>
    );
  }
  return (
     (
      <div className={`section_margin cc`}>
        <div className="container">
          <Herosection />
          <div className="section_gap cc">
            <div className="md:w-[38%]">
              <Heading
                heading={"Find by Speciality "}
                text={
                  "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
                }
              />
            </div>
            <Speciality />
          </div>

          <div className="section_gap cc">
            <Doctors doctors={allDoctorsData?.doctors} />
          </div>
          <div className="section_gap cc">
            <LastSection />
          </div>
        </div>
      </div>
    )
  );
};

export default Home;

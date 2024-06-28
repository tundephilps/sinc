import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";
import Logo8 from "../assets/logo8.png";
import Logo9 from "../assets/logo9.png";
import Logo10 from "../assets/logo10.png";
//import Logo11 from "../assets/logo11.png";
import Logo12 from "../assets/logo12.png";
import Logo13 from "../assets/logo13.png";
import Logo14 from "../assets/logo14.png";
import Logo15 from "../assets/logo15.png";
import Logo16 from "../assets/logo16.png";
import Logo17 from "../assets/logo17.png";
import Logo18 from "../assets/logo18.png";
import Logo19 from "../assets/logo19.png";
import Logo20 from "../assets/logo20.png";
import Logo21 from "../assets/logo21.png";
import Logo22 from "../assets/logo22.png";
//import Logo23 from "../assets/logo23.png";
//import Logo24 from "../assets/logo24.png";
import Logo25 from "../assets/logo25.png";
import Logo26 from "../assets/logo26.png";
//import Logo27 from "../assets/logo27.png";
import Logo28 from "../assets/logo28.png";
//import Logo29 from "../assets/logo29.png";
import Logo30 from "../assets/logo30.png";
//import Logo31 from "../assets/logo31.png";
import Logo32 from "../assets/logo32.png";
import Logo33 from "../assets/logo33.png";
import Logo34 from "../assets/logo34.png";
import Logo35 from "../assets/logo35.png";
import Logo36 from "../assets/logo36.png";
import Logo37 from "../assets/logo37.png";
import Logo38 from "../assets/logo38.png";
import Logo39 from "../assets/logo39.png";
import Logo40 from "../assets/logo40.png";

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  // Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo21,
  Logo22,
  //  Logo23,
  //  Logo24,
  Logo25,
  Logo26,
  // Logo27,
  Logo28,
  // Logo29,
  Logo30,
  // Logo31,
  Logo32,
  Logo33,
  Logo34,
  Logo35,
  Logo36,
  Logo37,
  Logo38,
  Logo39,
  Logo40,
];

const Portfolio = () => {
  return (
    <section class="bg-[#F9F9F9] body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class=" text-[56px] tracking-widest font-medium title-font mb-1">
            Our Studio Portfolio
          </h2>
          <h1 class="text-3xl lg:text-xs font-medium title-font text-gray-900">
            Our 2024 Service Incubator Portfolio Companies
          </h1>
        </div>
        <div className="flex flex-wrap lg:gap-8 gap-3">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white h-[60px] w-[120px] flex items-center justify-center"
            >
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center pt-12  underline">
          <p>View All Companies</p>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

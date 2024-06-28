import React from "react";
import Frame from "../assets/Frame.png";

const Slider2 = () => {
  return (
    <div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg lg:px-[122px] p-4 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="lg:text-[32px] text-[20px] text-gray-800 font-semibold md:text-4xl">
            Come with an idea, leave with a<br className="hidden" /> company.
          </h3>
          <p className="text-gray-500 leading-relaxed lg:text-[24px] text-[17px]  mt-3 w-full pb-8">
            You, alongside seasoned service partners and investors, expedite the
            growth and market entry of your startup.
          </p>
          <div className="bg-[#303030] h-[49px] w-[162px] flex items-center justify-center rounded-full text-white">
            SINC with Us
          </div>
        </div>
        <div className="hidden lg:block mt-5 mx-auto w-9/12 lg:w-[58%] lg:mt-0 ">
          <img src={Frame} alt="" className="w-full lg:h-full" />
        </div>
      </div>
    </div>
  );
};

export default Slider2;

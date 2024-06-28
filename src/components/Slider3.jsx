import React from "react";
import Frame2 from "../assets/Frame2.png";
import SIP1 from "../assets/SIP1.png";
import SIP2 from "../assets/SIP2.png";
import SIP3 from "../assets/SIP3.png";

const Slider3 = () => {
  return (
    <div className="relative z-10 gap-5 items-center lg:flex">
      <div className="flex-1 max-w-lg lg:px-[122px] p-4 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
        <h3 className="lg:text-[32px] text-[20px] text-gray-800 font-semibold md:text-4xl">
          We are big on these 3 things;
        </h3>
        <p className="text-gray-500 leading-relaxed lg:text-[24px] text-[17px]  mt-3 w-full pb-8">
          ✓ Service Incubation & Ecosystem Advocacy <br />
          ✓ Building SAAS & Marketing Tech Platforms
          <br />✓ Institutional Innovations
        </p>
        <div className="bg-[#303030] h-[49px] w-[162px] flex items-center justify-center rounded-full text-white">
          SINC with Us
        </div>
      </div>
      <div className="hidden lg:block mt-5  w-9/12 lg:h-full lg:w-[703px] lg:mt-0 ">
        <img src={Frame2} alt="" className="lg:w-full lg:h-[100%]" />
        <div className="absolute top-[20%] left-[45%]">
          <div className="flex flex-col gap-2">
            <img src={SIP2} />
            <img src={SIP1} />
            <img src={SIP3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3;

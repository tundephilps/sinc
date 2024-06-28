import React from "react";

import Hero1 from "../assets/Hero1.png";

const Slider1 = () => {
  return (
    <div className="relative z-10 gap-5 items-center lg:flex">
      <div className="flex-1 max-w-lg lg:px-[122px] p-4 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
        <h3 className="lg:text-[32px] text-[20px] text-gray-800 font-semibold md:text-4xl">
          Sinc Partners is a Service <br className="hidden" /> Incubation
          Company
        </h3>
        <p className="text-gray-500 leading-relaxed lg:text-[24px] text-[17px]  mt-3 w-full pb-8">
          Connecting experts in product development
          <br /> and growth marketing willing to offer their
          <br /> services to amazing startups in exchange for minute equity
          (usually 0.5% to 2%).
        </p>
        <div className="bg-[#303030] h-[49px] w-[162px] flex items-center justify-center rounded-full text-white">
          SINC with Us
        </div>
      </div>
      <div className="hidden lg:block mt-5 mx-auto w-9/12 lg:w-[703px] lg:mt-0 ">
        <img src={Hero1} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Slider1;

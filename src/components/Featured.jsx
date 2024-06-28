import React from "react";
import Featured1 from "../assets/Featured1.png";
import Logo2 from "../assets/logo2.png";

const Featured = () => {
  return (
    <div className="bg-[#F9F9F9]  pb-16 lg:h-full h-full lg:block hidden">
      <h1 className="text-center text-[24px] font-bold text-[#212121] pb-12">
        As Featured In
      </h1>

      <div className="bg-white w-[894px] lg:h-[393px] h-full flex lg:flex-row flex-col">
        <img src={Featured1} className="lg:w-[622px] w-[350px]  " />
        <div className="p-4 py-8 space-y-3 lg:w-full flex flex-col">
          <img src={Logo2} className="w-[71px] h-[30px]" />
          <p className="text-[15px] font-bold">
            SINC Partners invests over 200 million naira in 5 startups
          </p>
          <p className="text-[#4E4E4E]">
            SINC Partners invests over 200 million naira in 5 startups. SINC
            Partners invests over 200 million naira in 5 startups SINC Partners
            invests over 200 million naira in ....
          </p>
          <p className="text-[13px] text-[#4E4E4E]">REPORTED BY:</p>
          <p className="text-[#4E4E4E]">Rema Viel</p>
        </div>
      </div>

      <div>
        <h1 className="lg:text-[80px] text-[24px] text-center py-12">
          Let's build companies that <br />
          help everyone succeed
        </h1>
      </div>

      <div className="flex flex-row items-center gap-8 justify-center">
        <div className=" border-[1px] border-[#212121] h-[49px] w-[162px] flex items-center justify-center rounded-full text-[#212121]">
          SINC with Us
        </div>
        <div className="bg-[#303030] h-[49px] w-[162px] flex items-center justify-center rounded-full text-white">
          Apply to SIP 1.0
        </div>
      </div>
    </div>
  );
};

export default Featured;

import React from "react";

const Focus = () => {
  return (
    <div className="bg-[#F9F9F9] py-12 mx-auto lg:px-24 px-2 ">
      <p className="lg:text-[56px] text-[20px] text-center">
        Our Area of Focus
      </p>
      <p className="text-xs text-center">
        In our quest to help make success available to everyone, we have initial
        strategic
        <br className="hidden" /> direction to focus on these five (5) key areas
        at the lab
      </p>
      <div className="flex lg:flex-row flex-col w-full items-center justify-center lg:pt-16 pt-6">
        <div className="bg-[#303030] lg:w-[240px] w-full lg:h-[160px] h-full p-4 space-y-8">
          <p className="text-white text-[20px]">01</p>
          <p className="text-white text-[20px]">
            Business Support & Incubation
          </p>
        </div>
        <div className="bg-[#F47733] lg:w-[240px] w-full lg:h-[160px] h-full p-4  space-y-8">
          <p className="text-white text-[20px]">02</p>
          <p className="text-white text-[20px]">On-Demand & As-A-Service</p>
        </div>{" "}
        <div className="bg-[#FF78BF] lg:w-[240px] w-full lg:h-[160px] h-full p-4  space-y-8">
          <p className="text-white text-[20px]">03</p>
          <p className="text-white text-[20px]">Marketplace & Crowdsourcing</p>
        </div>{" "}
        <div className="bg-[#20888F] lg:w-[240px] w-full lg:h-[160px] h-full p-4 space-y-8">
          <p className="text-white text-[20px]">04</p>
          <p className="text-white text-[20px]">Aggregation & Shared Economy</p>
        </div>{" "}
        <div className="bg-[#FF88C6] lg:w-[240px] w-full lg:h-[160px] h-full p-4  space-y-8">
          <p className="text-white text-[20px]">05</p>
          <p className="text-white text-[20px]">Aggregation & Shared Economy</p>
        </div>
      </div>
    </div>
  );
};

export default Focus;

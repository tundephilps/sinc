import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Network = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <h1 className="text-center pb-16 lg:text-[56px] text-[23px]">
        Network of Builders helping
        <br />
        Startup Scale
      </h1>
      <div className=" flex items-center justify-center ">
        <div className="flex lg:flex-row flex-col gap-12">
          <div className="bg-white h-[370px] lg:w-[528px] w-[100%] rounded-lg p-[24px] space-y-4 ">
            <p className="text-[24px]">
              Work with Service Incubators to expedite your time-to-market
            </p>
            <p className="text-xs leading-loose">
              Collaborate with our meticulously chosen service partners, each
              with a vested interest, ensuring a shared commitment to success in
              the game of venture building.
            </p>
            <p className="text-xs font-semibold leading-loose">
              For 7.5% equity, you get a product manager, product designer,
              frontend engineer, software engineer and growth marketer to build
              the MVP of your app or web application and validate it.
            </p>
            <div className="flex flex-row items-center gap-4 hover:underline cursor-pointer">
              <p>Learn More </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="bg-white h-[370px] lg:w-[528px] w-[100%] rounded-lg p-[24px] space-y-4">
            <p className="text-[24px]">
              Access funding after your mvp is validated
            </p>
            <p className="text-xs leading-loose">
              Startups that have built and validated their product can take
              advantage of the financial resources of the SINC Investors
              Network, elevating their potential for success in the venture
              capital landscape.
            </p>
            <p className="text-xs font-semibold leading-loose">
              Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
              months
            </p>
            <div className="flex flex-row items-center gap-4 hover:underline cursor-pointer">
              <p>Learn More </p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;

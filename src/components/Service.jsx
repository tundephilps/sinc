import React from "react";
import shape1 from "../assets/shape1.png";

import shape2 from "../assets/shape2.png";
import shape3 from "../assets/shape3.png";
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  return (
    <section class="bg-[#F9F9F9] body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class=" lg:text-[56px] text-[24px] tracking-widest font-medium title-font mb-1">
            Our Service Incubation Model
          </h2>
          <h1 class="text-xs lg:text-xs font-medium title-font text-gray-900">
            The Service Incubation model is an alternate funding model for
            startup that allows professionals to offer their services to
            <br />
            startups in return for a minute equity (usually between 0.5% to
            1.5%) in the startup. As a service incubator, you will see <br />{" "}
            your share grow as much as 1000% in 12 – 24 months as been first to
            invest.
          </h1>
        </div>
        <div>
          <p className="text-[32px]">Hypothesis</p>
          <p className="text-[17px]">
            Just a few reasons we know its time for this model
            within the ecosystem
          </p>
        </div>
        <div class="flex flex-wrap -m-4 pt-8">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col space-y-6">
              <img src={shape1} className="h-[40px] w-[40px]" />
              <p className="text-[16px]">
                Most early-stage companies and pre-product startups cannot
                afford professional services especially those who don’t have
                family and friends’ network that can support
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={shape2} className="h-[40px] w-[40px]" />
              <p className="text-[16px]">
                If startups can seed 5-10% in equity to incubators for $20k to
                $200k funding most times, they will be willing to seed 10%
                equity for a $25k service investment
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={shape3} className="h-[40px] w-[40px]" />
              <p className="text-[16px]">
                Young professionals who don’t have a lot of money to invest nor
                an accredited investors will have opportunities to take equity
                at the early stage of their career, usually been the first to
                invest and almost guaranteed of return
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 lg:text-start text-center">
          <h1 className="text-[32px]">Case Study</h1>
          <p>
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
          <div className="flex flex-wrap pt-6">
            <button
              type="button"
              class="text-gray-900 bg-white border border-[#A4A4A4] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Service Incubator Equity
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-[#A4A4A4] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              SEEQ Maths Equation
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-[#A4A4A4] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Value of my Equity Over Time
            </button>
          </div>
          <div className="flex flex-row items-center gap-2 underline justify-center pt-6">
            <p>Become A Service Incubator</p>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

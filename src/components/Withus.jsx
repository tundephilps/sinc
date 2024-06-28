import React from "react";
import Circle1 from "../assets/Circle1.png";
import Circle2 from "../assets/Circle2.png";
import Circle3 from "../assets/Circle3.png";
// import { FaArrowRight } from "react-icons/fa";

const Withus = () => {
  return (
    <section class="bg-[#F9F9F9] body-font">
      <div class="container px-5 lg:py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class=" lg:text-[56px] text-[24px] tracking-widest font-medium title-font mb-1">
            Co-found With Us
          </h2>
          <h1 class=" text-xs font-medium title-font text-gray-900">
            The Service Incubation model is an alternate funding model for
            startup that allows professionals to offer their services to
            <br />
            startups in return for a minute equity (usually between 0.5% to
            1.5%) in the startup. As a service incubator, you will see <br />{" "}
            your share grow as much as 1000% in 12 – 24 months as been first to
            invest.
          </h1>
        </div>

        <div class="flex flex-wrap -m-4 pt-8">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col space-y-6">
              <img src={Circle1} className="h-[40px] w-[40px]" />
              <p>We Ideate</p>
              <p className="text-[16px]">
                We internally generate concepts and ideas that help solve
                problems in our thesis areas, after which we proceed to develop
                a nano/micro MVP (usually having as low as 30 functions to as
                high as 100 functions) of the product that we take to the
                market.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={Circle2} className="h-[40px] w-[40px]" />
              <p>You Validate</p>
              <p className="text-[16px]">
                You join our 3 months inResidence program as a business expert
                to run the operations or as a technical expert to further the
                development and validate the idea with an average monthly
                revenue of $1k or 10,000 users and/or an MVP of at least 150
                functions
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={Circle3} className="h-[40px] w-[40px]" />
              <p>You Co-own</p>
              <p className="text-[16px]">
                After successful validation and demo day at the end of the EIR
                program, we move those with perfect fit to become co-founders of
                the product they validated as CEO & CTO, each owning
                20% of the venture.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-row items-center gap-2 underline justify-center pt-6">
            <p>Build your dream</p>
            {/* <FaArrowRight /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withus;

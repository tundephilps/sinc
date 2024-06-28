import React from "react";

const Concept = () => {
  return (
    <section class="bg-[#F9F9F9] body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class=" lg:text-[56px] text-[24px] tracking-widest font-medium title-font mb-1">
            Our Concept Innovations
          </h2>
          <h1 class=" lg:text-xs font-medium title-font text-gray-900">
            We have proprietary concept innovations that will support the
            startup ecosystem, support solution-providers/entrepreneurs and
            <br />
            ultimately help democratize success;
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col text-center space-y-6">
              <p className="text-[22px]">Service Incubator</p>
              <p className="text-[16px]">
                A service-for-shares model of incubating pre-product startups
                and early-stage companies by building their early stage product
                and MVP
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col text-center space-y-6">
              <p className="text-[22px]">Virtualting</p>
              <p className="text-[16px]">
                A resource share model that allows companies share the time of
                resources (employees, consultants, technical advisers or
                influencers) while also splitting the service cost of the
                resource
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col text-center space-y-6">
              <p className="text-[22px]">Diiming</p>
              <p className="text-[16px]">
                A progressive investment model that allows you to put aside
                income (disposable or non-disposable) as investment over a
                period towards an investment or spend of your choice 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;

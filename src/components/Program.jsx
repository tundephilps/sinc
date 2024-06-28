import React from "react";
import Circle4 from "../assets/Circle4.png";

import Arrow2 from "../assets/Arrow2.png";
import Arrow1 from "../assets/Arrow1.png";

import Circle5 from "../assets/Circle5.png";

import Circle6 from "../assets/Circle6.png";

import Circle7 from "../assets/Circle7.png";
import { FaArrowRight } from "react-icons/fa";

const Program = () => {
  return (
    <section class="bg-[#F9F9F9] body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class=" lg:text-[56px] text-[24px]  tracking-widest font-medium title-font mb-1">
            Join Our Entrepreneur In Residence <br />
            (EIR) Program
          </h2>
          <h1 class="text-xs font-medium title-font text-[#4E4E4E]">
            Our EIR program is our structured 3 months un-paid program designed
            to help us have a pipeline of business and <br />
            technical cofounders who can run the venture of choice as CEO & CTO
            owning 20% equity each.
          </h1>
        </div>

        <div class="flex flex-wrap -m-4 pt-8">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col space-y-6">
              <img src={Circle4} className="h-[40px] w-[40px]" />
              <p>Application and Selection</p>
              <p className="text-[16px]">
                Begin your journey by completing our straightforward application
                form. Share insights into your entrepreneurial background,
                expertise, and your vision for supporting the success of our
                portfolio companies. Our dedicated selection committee,
                comprised of key stakeholders at SINC Partners, will carefully
                review your application.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={Circle5} className="h-[40px] w-[40px]" />
              <p>Alignment Meeting and Proposal Submission</p>
              <p className="text-[16px]">
                If your application stands out, we'll invite you to an alignment
                meeting. This is an opportunity to discuss the goals of our EIR
                program and explore how your expertise aligns with the needs of
                our portfolio companies. Following the alignment meeting, submit
                a formal proposal outlining your intended contributions and how
                you envision adding significant value to our portfolio
                companies.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={Circle6} className="h-[40px] w-[40px]" />
              <p>Negotiation and Agreement</p>
              <p className="text-[16px]">
                Upon successful alignment and proposal review, we'll engage in
                discussions to finalize the terms of your EIR role. This
                includes the duration, expectations, and any compensation or
                equity arrangements. Once terms are agreed upon, we'll draft a
                formal agreement outlining the specifics of your EIR engagement,
                including reporting structures, responsibilities, and the
                support/resources provided by SINC Partners.
              </p>
            </div>
          </div>
          {/* <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-white p-8 flex-col  space-y-6">
              <img src={Circle7} className="h-[40px] w-[40px]" />
              <p>Onboarding and Integration</p>
              <p className="text-[16px]">
                Congratulations! As an accepted EIR, you'll undergo an
                onboarding process to familiarize yourself with the SINC
                Partners ecosystem, our portfolio companies, and key team
                members. Facilitated introductions will ensure a seamless
                integration between you and relevant portfolio companies,
                setting clear expectations for collaboration.
              </p>
            </div>
          </div> */}
        </div>
        <div className="pt-6">
          <div className="flex flex-row items-center gap-2 underline justify-center pt-6">
            <p>Support the future</p>
            <FaArrowRight />
          </div>
          <div className="flex flex-row gap-8 justify-center pt-6">
            <img src={Arrow2} />
            <img src={Arrow1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;

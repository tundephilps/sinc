import React from "react";

import icon1 from "../assets/icon1.png";

import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import SINC2 from "../assets/SINC2.png";

import GASUS from "../assets/GASUS.png";
import Whatsapp from "../assets/Whatsapp.png";
import Accredit from "../assets/Accredit.png";

import flag from "../assets/flag.png";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#212121] ">
        <div className="lg:py-8 lg:px-12 p-4">
          <h1 className="lg:text-[60px] text-[32px] text-white">Newsletter</h1>
          <p className="text-[16px] text-white">
            Get the latest about SINC Partners, our startup Incubator program,
            Portfolio <br />
            company offerings - straight into your inbox.
          </p>
          <div className="h-[50px] lg:w-[468px] w-full border-[1px] border-[#676767] rounded-full mt-6 flex flex-row">
            <input
              className="outline-none bg-transparent  ml-6  w-full text-xs lg:text-sm"
              placeholder="Enter with your Email Address"
            />
            <div className="bg-white border-[1px] border-[#212121] h-[49px] w-[162px] flex items-center justify-center rounded-full text-[#212121]">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      {/* Second Footer */}
      <div className="hidden px-12 bg-[#212121] lg:grid lg:grid-cols-10 border-t-[1px] border-b-[1px] border-white">
        <div className="lg:col-span-8  py-8">
          <div className="grid  grid-cols-5 gap-2">
            <div className="space-y-2">
              <img src={SINC2} alt="" />
              <p className="text-[white]">
                SINC Partners is a service incubation company connecting experts
                in product development and growth marketing willing to offer
                their services to amazing startups in exchange for minute equity
                (usually 0.5% to 2%)
              </p>
            </div>
            <div>
              <p className="text-[18px] text-white pb-3">Platforms</p>
              <ul className="text-[#C9C9C9] space-y-2">
                <li>
                  <a>KoFundMe</a>
                </li>
                <li>
                  <a>InResidency</a>
                </li>
                <li>
                  <a>Service Market</a>
                </li>
                <li>
                  <a>Founder School</a>
                </li>{" "}
                <li>
                  <a>Metty</a>
                </li>
                <li>
                  <a>Grantty</a>
                </li>{" "}
                <li>
                  <a>Boldtelly</a>
                </li>{" "}
                <li>
                  <a>Chekwa</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] text-white pb-3">Initiatives</p>
              <ul className="text-[#C9C9C9] space-y-2">
                <li>
                  <a>Jabi Plan</a>
                </li>
                <li>
                  <a>Local Pricing Initiative</a>
                </li>
                <li>
                  <a>Scholarship Program</a>
                </li>
                <li>
                  <a>School Pricing Program </a>
                </li>{" "}
                <li>
                  <a>University STEM</a>
                </li>
                <li>
                  <a>University In Residency</a>
                </li>{" "}
                <li>
                  <a>1M Nigeria Products</a>
                </li>{" "}
                <li>
                  <a>Founder Festival</a>
                </li>
              </ul>
            </div>{" "}
            <div>
              <p className="text-[18px] text-white pb-3">About Us</p>
              <ul className="text-[#C9C9C9] space-y-2">
                <li>
                  <a>Jabi Plan</a>
                </li>
                <li>
                  <a>Local Pricing Initiative</a>
                </li>
                <li>
                  <a>Scholarship Program</a>
                </li>
                <li>
                  <a>School Pricing Program </a>
                </li>{" "}
                <li>
                  <a>University STEM</a>
                </li>
                <li>
                  <a>University In Residency</a>
                </li>{" "}
                <li>
                  <a>1M Nigeria Products</a>
                </li>{" "}
                <li>
                  <a>Founder Festival</a>
                </li>
              </ul>
            </div>{" "}
            <div>
              <p className="text-[18px] text-white pb-3">More</p>
              <ul className="text-[#C9C9C9] space-y-2">
                <li>
                  <a>KoFundMe</a>
                </li>
                <li>
                  <a>InResidency</a>
                </li>
                <li>
                  <a>KoFundMe</a>
                </li>
                <li>
                  <a>InResidency</a>
                </li>{" "}
                <li>
                  <a>KoFundMe</a>
                </li>
                <li>
                  <a>InResidency</a>
                </li>{" "}
                <li>
                  <a>InResidency</a>
                </li>{" "}
                <li>
                  <a>InResidency</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-l-[1px] border-white pl-4 text-white whitespace-nowrap space-y-2 py-8">
          <p className="text-[16px] pb-4">Location</p>
          <p>Abuja, Nigeria</p>
          <p>Lagos, Nigeria</p>
          <p> Philliphidia, USA</p>
          <div className="flex flex-row items-center justify-between pt-12 w-full">
            <img src={Accredit} className="w-[177px] h-[66px]" />

            <img src={Whatsapp} className="pl-12 mt-4" alt="" />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block lg:hidden bg-[#212121] p-4">
        <div className="space-y-2">
          <img src={SINC2} alt="" />
          <p className="text-[white]">
            SINC Partners is a service incubation company connecting experts in
            product development and growth marketing willing to offer their
            services to amazing startups in exchange for minute equity (usually
            0.5% to 2%)
          </p>
        </div>

        <div className="flex flex-wrap">
          <div className="w-[50%] mt-4">
            <p className="text-[18px] text-white pb-3">Platforms</p>
            <ul className="text-[#C9C9C9] space-y-2">
              <li>
                <a>KoFundMe</a>
              </li>
              <li>
                <a>InResidency</a>
              </li>
              <li>
                <a>Service Market</a>
              </li>
              <li>
                <a>Founder School</a>
              </li>{" "}
              <li>
                <a>Metty</a>
              </li>
              <li>
                <a>Grantty</a>
              </li>{" "}
              <li>
                <a>Boldtelly</a>
              </li>{" "}
              <li>
                <a>Chekwa</a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-[18px] text-white pb-3">Initiatives</p>
            <ul className="text-[#C9C9C9] space-y-2">
              <li>
                <a>Jabi Plan</a>
              </li>
              <li>
                <a>Local Pricing Initiative</a>
              </li>
              <li>
                <a>Scholarship Program</a>
              </li>
              <li>
                <a>School Pricing Program </a>
              </li>{" "}
              <li>
                <a>University STEM</a>
              </li>
              <li>
                <a>University In Residency</a>
              </li>{" "}
              <li>
                <a>1M Nigeria Products</a>
              </li>{" "}
              <li>
                <a>Founder Festival</a>
              </li>
            </ul>
          </div>{" "}
          <div className="w-[50%] mt-4">
            <p className="text-[18px] text-white pb-3">About Us</p>
            <ul className="text-[#C9C9C9] space-y-2">
              <li>
                <a>Who We Are</a>
              </li>
              <li>
                <a>Our People</a>
              </li>
              <li>
                <a>Concept Innovations</a>
              </li>
              <li>
                <a>Our Process</a>
              </li>{" "}
              <li>
                <a>Investors</a>
              </li>
              <li>
                <a>CSR Events</a>
              </li>{" "}
              <li>
                <a>Career</a>
              </li>{" "}
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>{" "}
          <div className="mt-4">
            <p className="text-[18px] text-white pb-3">More</p>
            <ul className="text-[#C9C9C9] space-y-2">
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Equity Jobs</a>
              </li>
              <li>
                <a>Co-found with us</a>
              </li>
              <li>
                <a>Offers</a>
              </li>{" "}
              <li>
                <a>Innovation News</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>{" "}
              <li>
                <a>Blog and Resource</a>
              </li>{" "}
              <li>
                <a>Press</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden bg-[#212121]  block border-t-[1px] border-white pl-4 text-white whitespace-nowrap space-y-2 py-8">
        <p className="text-[16px] pb-4">Location</p>
        <p>Abuja, Nigeria</p>
        <p>Lagos, Nigeria</p>
        <p> Philliphidia, USA</p>
        <div className="flex flex-row items-center justify-between pt-12 w-full">
          <img src={Accredit} className="w-[177px] h-[66px]" />

          <img src={Whatsapp} className="lg:pl-12 pr-2 mt-4" alt="" />
        </div>
      </div>
      {/* Third Footer */}
      <div className=" px-12 bg-[#212121] py-8  text-white">
        <div className="flex lg:flex-row flex-col items-center text-center justify-between">
          <p>
            Guaranteed 2x on your service or cash investment, usually been the
            first to invest. Get in early and SINC your guaranty!
          </p>
          <div className="flex lg:flex-row flex-col gap-4">
            <img src={GASUS} className=" mt-3 lg:mt-0" />
            <p className="text-[12px] lg:text-start">
              We are a business built on the
              <br /> foundation of Christian values and belief
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between items-center space-y-3 pt-8">
          <p>@ 2023 SINC Partners Ltd. All rights reserved</p>
          <div className="flex gap-4 underline">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Security</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={icon2} />
            <img src={icon7} />
            <img src={icon1} /> <img src={icon3} /> <img src={icon4} />
            <img src={icon6} /> <img src={icon5} />
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center pt-8">
          <p>Web in Nigeria</p>
          <img src={flag} className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Footer;

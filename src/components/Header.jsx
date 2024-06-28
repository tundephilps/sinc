import React from "react";
import SINC from "../assets/SINC.png";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="p-4 lg:px-32 px-6 lg:flex hidden flex-row items-center justify-between relative">
      <div className="flex flex-row items-center gap-12">
        <img src={SINC} />
        <ul className="lg:flex flex-row hidden gap-4">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>SIP</a>
          </li>{" "}
          <li>
            <a>Studio</a>
          </li>{" "}
          <li>
            <a>SEEQ</a>
          </li>
          <li>
            <a>Platforms</a>
          </li>
          <li>
            <a>Initiatives</a>
          </li>
          <li>
            <a>More</a>
          </li>
        </ul>
      </div>
      <div className="lg:flex flex-row hidden items-center gap-8 ">
        <div className="bg-[#20888F] h-[49px] w-[162px] flex items-center justify-center rounded-full text-white">
          SINC with Us
        </div>
        <div className="bg-[#303030] h-[49px] w-[162px] flex items-center justify-center rounded-full text-white">
          Apply to SIP 1.0
        </div>
      </div>
    </div>
  );
};

export default Header;

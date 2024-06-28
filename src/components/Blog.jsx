import React from "react";
import Video1 from "../assets/Video1.png";

import Video2 from "../assets/Video2.png";

import Book3 from "../assets/Book3.png";
import Book2 from "../assets/Book2.png";
import Book1 from "../assets/Book1.png";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section class="text-gray-600 body-font bg-[#F9F9F9]">
      <div class="container px-5 py-24 mx-auto">
        <h1 className="text-center lg:text-[56px] text-[24px] text-[#212121] pb-12">
          Blogs & Resources
        </h1>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="w-full object-cover object-center"
                src={Video1}
                alt="blog"
              />
              <div class="py-8 flex flex-row items-center justify-between">
                <div>
                  <h1 class="title-font text-[14px] font-medium text-gray-900 mb-3">
                    Top Ten Most Powerful Startup
                  </h1>
                  <p class="leading-relaxed mb-3 text-[13px]">
                    Top Ten Most Powerful Startup. Top Ten Most <br /> Powerful
                    Startup. Top Ten Most Powerful Startup
                  </p>
                </div>
                <div>
                  <img src={Book3} />
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class=" w-full object-cover object-center"
                src={Video2}
                alt="blog"
              />
              <div class="py-8 flex flex-row items-center justify-between">
                <div>
                  <h1 class="title-font text-[14px] font-medium text-gray-900 mb-3">
                    Top Ten Most Powerful Startup
                  </h1>
                  <p class="leading-relaxed mb-3 text-[13px]">
                    Top Ten Most Powerful Startup. Top Ten Most <br /> Powerful
                    Startup. Top Ten Most Powerful Startup
                  </p>
                </div>
                <div>
                  <img src={Book2} />
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="p-4 md:w-1/3">
            <div class="h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="w-full object-cover object-center"
                src={Video2}
                alt="blog"
              />
              <div class="py-8 flex flex-row items-center justify-between">
                <div>
                  <h1 class="title-font text-[14px] font-medium text-gray-900 mb-3">
                    Top Ten Most Powerful Startup
                  </h1>
                  <p class="leading-relaxed mb-3 text-[13px]">
                    Top Ten Most Powerful Startup. Top Ten Most <br /> Powerful
                    Startup. Top Ten Most Powerful Startup
                  </p>
                </div>
                <div>
                  <img src={Book1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 underline justify-center pt-6">
          <p>See More Blogs & Resources</p>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Blog;

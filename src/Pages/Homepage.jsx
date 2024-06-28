import React from "react";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Network from "../components/Network";
import Focus from "../components/Focus";
import Concept from "../components/Concept";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Withus from "../components/Withus";
import Program from "../components/Program";
import Investors from "../components/Investors";
import EquityJobs from "../components/EquityJobs";
import Blog from "../components/Blog";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <Hero />
      <Testimonial />
      <Network />
      <Focus />
      <Concept />
      <Service />
      <Portfolio />
      <Withus />
      <Program />
      <Investors />
      <EquityJobs />
      <Blog />
      <Featured />
      <Footer />
    </div>
  );
};

export default Homepage;

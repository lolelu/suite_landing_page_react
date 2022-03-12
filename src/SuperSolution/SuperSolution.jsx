import React from "react";
import curvedLine from "../Assets/pattern-curved-line-1.svg";
import heroLandscape1x from "../Assets/image-hero-landscape.png";
import heroLandscape2x from "../Assets/image-hero-landscape@2x.png";
import heroPortrait1x from "../Assets/image-hero-portrait.png";
import heroPortrait2x from "../Assets/image-hero-portrait@2x.png";
import ButtonBot from "../Components/ButtonBot";

const SuperSolution = () => {
  return (
    <div className="container mx-auto mt-14 space-y-14 pt-14 pb-14 sm:pb-24 lg:flex lg:flex-row lg:pb-36 ">
      <div className=" relative space-y-8  sm:space-y-0 sm:pb-10 sm:pt-[5.5rem] xl:pt-[6.5rem] xl:pb-24">
        <img
          className="absolute right-0 top-0 mt-0 hidden h-full pt-0 sm:block "
          src={heroPortrait1x}
          srcSet={`${heroPortrait2x} 2x`}
          alt="hero-phone"
        />

        <h1 className="relative text-[2.375rem] text-blue sm:text-[3.5rem] xl:text-7xl ">
          A{" "}
          <b>
            super{" "}
            <span className="relative">
              {" "}
              solution
              <img
                className="absolute top-0 bottom-0 right-0 left-0 -translate-y-full pb-2"
                alt="line"
                src={curvedLine}
              />
            </span>
          </b>
          <br /> for your <b>business.</b>
        </h1>

        <p className=" text-base leading-7 tracking-wide text-gray-dark sm:w-1/2 sm:py-8">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>

        <ButtonBot text="Request Beta Access" />
      </div>
      <div className=" w-full sm:hidden">
        <img
          className=" w-full "
          src={heroLandscape1x}
          srcSet={`${heroLandscape2x} 2x`}
          alt="hero-phone"
        />
      </div>
      <div className=" space-y-8 text-center sm:flex sm:justify-around sm:space-y-0 lg:flex-col lg:pl-24 lg:text-left ">
        {Stats("2K+", "description")}
        {Stats("8", "Languages")}
        {Stats("1.2M", "Leads")}
      </div>
    </div>
  );
};

export default SuperSolution;

function Stats(title, description) {
  return (
    <div>
      <h2 className=" text-5xl font-bold leading-[3.5rem] text-blue">
        {title}
      </h2>
      <p className=" text-base uppercase leading-6 tracking-[0.15em] text-gray-dark">
        {description}
      </p>
    </div>
  );
}

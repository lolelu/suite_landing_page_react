import React from "react";
import jeremySmall1x from "../Assets/image-jeremy-small.png";
import jeremySmall2x from "../Assets/image-jeremy-small@2x.png";
import jeremyLarge1x from "../Assets/image-jeremy-large.png";
import jeremyLarge2x from "../Assets/image-jeremy-large@2x.png";
import curvedLine from "../Assets/pattern-curved-line-2.svg";
import blur from "../Assets/pattern-blur.svg";

export default function JustWorks() {
  return (
    <div className="2xl:px-24 container mx-auto grid px-0 font-sans text-white sm:px-8 lg:px-16 xl:px-20">
      <div className=" col-span-1 col-start-1 row-span-3 row-start-2 rounded-2xl bg-blue text-center xl:col-span-3 xl:col-start-1 xl:row-span-1 xl:row-start-2">
        {" "}
      </div>

      <div className="relative z-10 col-span-1 col-start-1 row-span-2 row-start-1 mx-auto px-4 xl:col-span-1  xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:ml-32">
        <img className="absolute bottom-0 left-0" src={blur} alt="blur" />
        <img
          className="relative hidden hover:-scale-x-100 xl:block"
          src={jeremyLarge1x}
          srcSet={`${jeremyLarge2x} 2x`}
          alt="jeremy"
        />
        <img
          className="relative xl:hidden"
          src={jeremySmall1x}
          srcSet={`${jeremySmall2x} 2x`}
          alt="jeremy"
        />
      </div>

      <img
        className="col-span-1 col-start-1 row-span-1 row-start-3 mx-auto pt-10 pb-9 xl:col-span-1 xl:col-start-2 xl:row-span-1 xl:row-start-2 xl:pl-9 xl:pr-12 xl:pt-40"
        src={curvedLine}
        alt="curved-line"
      />

      <div className="2xl:pr-32 col-span-1 col-start-1 row-span-1 row-start-4 text-center xl:col-span-1 xl:col-start-3 xl:row-span-1 xl:row-start-2 xl:py-[5.5rem] xl:pr-16 xl:text-left">
        <div className="mx-auto px-4 pb-10 text-[2.5rem] xl:px-0">
          It just <b>works.</b>
        </div>

        <div className="mx-auto px-4 pb-10 text-lg sm:px-8 md:px-14 xl:px-0">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </div>

        <div className="mx-auto px-4 text-lg font-bold lg:px-0">
          Jeremy Robinson
        </div>
        <div className="mx-auto px-4 pb-16 text-base leading-[1.625rem] tracking-widest xl:px-0 xl:pb-0">
          CMO, FYLO
        </div>
      </div>
    </div>
  );
}

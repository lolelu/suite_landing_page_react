import React from "react";
import curvedLine from "../Assets/pattern-curved-line-1.svg"
import heroLandscape1x from "../Assets/image-hero-landscape.png"
import heroLandscape2x from "../Assets/image-hero-landscape@2x.png"
import heroPortrait1x from "../Assets/image-hero-portrait.png"
import heroPortrait2x from "../Assets/image-hero-portrait@2x.png"
import ButtonBot from "../Components/ButtonBot";

const SuperSolution = () => {
    return (
        <div className="container pt-14 lg:pb-36 sm:pb-24 pb-14 space-y-14 mx-auto mt-14 lg:flex lg:flex-row ">

            <div className=" space-y-8 sm:space-y-0  relative sm:pb-10 sm:pt-[5.5rem] xl:pt-[6.5rem] xl:pb-24">
                <img className="hidden sm:block h-full absolute right-0 top-0 mt-0 pt-0 " src={heroPortrait1x} srcSet={`${heroPortrait2x} 2x`} alt="hero-phone" />


                <h1 className="relative text-[2.375rem] xl:text-7xl text-blue sm:text-[3.5rem] ">
                    A <b>super <span className="relative">  solution
                        <img className="absolute top-0 bottom-0 right-0 left-0 pb-2 -translate-y-full" alt="line" src={curvedLine} />
                    </span></b><br /> for your <b>business.</b>
                </h1>


                <p className=" text-gray-dark text-base leading-7 tracking-wide sm:py-8 sm:w-1/2">
                    Our marketing and sales automations help you scale your outreach to
                    get more leads for your company.
                </p>


                <ButtonBot text="Request Beta Access" />

            </div>
            <div className=" w-full sm:hidden">
                <img className=" w-full " src={heroLandscape1x} srcSet={`${heroLandscape2x} 2x`} alt="hero-phone" />

            </div>
            <div className=" space-y-8 text-center sm:flex sm:space-y-0 sm:justify-around lg:flex-col lg:text-left lg:pl-24 ">
                {Stats("2K+", "description")}
                {Stats("8", "Languages")}
                {Stats("1.2M", "Leads")}
            </div>
        </div >
    )
}

export default SuperSolution;





function Stats(title, description) {
    return <div>
        <h6 className=" text-blue text-5xl font-bold leading-[3.5rem]">
            {title}
        </h6>
        <p className=" text-gray-dark text-base leading-6 uppercase tracking-[0.15em]">
            {description}
        </p>
    </div>;
}

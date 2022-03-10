import React from "react";
import jeremySmall1x from "../Assets/image-jeremy-small.png"
import jeremySmall2x from "../Assets/image-jeremy-small@2x.png"
import jeremyLarge1x from "../Assets/image-jeremy-large.png"
import jeremyLarge2x from "../Assets/image-jeremy-large@2x.png"
import curvedLine from "../Assets/pattern-curved-line-2.svg"

export default function JustWorks() {

    return (
        <div className="container mx-auto text-white font-sans grid ">


            <div className=" bg-blue rounded-2xl text-center row-start-2 row-span-3 col-span-1 col-start-1"> </div>

            <img className="mx-auto hidden" src={jeremyLarge1x} srcSet={`${jeremyLarge2x} 2x`} alt="jeremy" />
            <img className="mx-auto px-4 col-span-1 col-start-1 row-start-1 row-span-2" src={jeremySmall1x} srcSet={`${jeremySmall2x} 2x`} alt="jeremy" />

            <div className="text-center row-start-3 row-span-2 col-span-1 col-start-1">
                <img className="mx-auto pt-10 pb-9" src={curvedLine} alt="curved-line" />

                <div className="mx-auto text-[2.5rem] pb-10 px-4 ">
                    It just works.
                </div>


                <div className="mx-auto text-lg pb-10 px-4 sm:px-8 md:px-14">
                    “I really like how it is an all-in-one solution that handle many of
                    the tasks that you would normally need separate tools to do the same
                    job. This thing is a miracle worker.”
                </div>

                <div className="mx-auto text-lg font-bold px-4">
                    Jeremy Robinson
                </div>
                <div className="mx-auto text-base leading-[1.625rem] tracking-widest pb-16 px-4">
                    CMO, FYLO
                </div>

            </div>


        </div>
    )
}
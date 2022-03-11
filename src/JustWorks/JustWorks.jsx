import React from "react";
import jeremySmall1x from "../Assets/image-jeremy-small.png"
import jeremySmall2x from "../Assets/image-jeremy-small@2x.png"
import jeremyLarge1x from "../Assets/image-jeremy-large.png"
import jeremyLarge2x from "../Assets/image-jeremy-large@2x.png"
import curvedLine from "../Assets/pattern-curved-line-2.svg"
import blur from "../Assets/pattern-blur.svg"

export default function JustWorks() {

    return (
        <div className="container mx-auto text-white font-sans grid px-0 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">


            <div className=" bg-blue rounded-2xl text-center row-start-2 row-span-3 col-span-1 col-start-1 xl:row-start-2 xl:row-span-1 xl:col-start-1 xl:col-span-3"> </div>

            <div className="relative mx-auto px-4 z-10 col-span-1 col-start-1 row-start-1 row-span-2 xl:ml-32  xl:row-span-2 xl:col-span-1 xl:row-start-1 xl:col-start-1">
                <img className="absolute bottom-0 left-0" src={blur} alt="blur" />
                <img className="relative hidden xl:block hover:-scale-x-100" src={jeremyLarge1x} srcSet={`${jeremyLarge2x} 2x`} alt="jeremy" />
                <img className="relative xl:hidden" src={jeremySmall1x} srcSet={`${jeremySmall2x} 2x`} alt="jeremy" />

            </div>

            <img
                className="mx-auto pt-10 pb-9 row-start-3 row-span-1 col-span-1 col-start-1 xl:col-start-2 xl:col-span-1 xl:row-span-1 xl:row-start-2 xl:pl-9 xl:pr-12 xl:pt-40"
                src={curvedLine}
                alt="curved-line"
            />

            <div className="text-center xl:text-left row-start-4 row-span-1 col-span-1 col-start-1 xl:col-start-3 xl:col-span-1 xl:row-start-2 xl:row-span-1 xl:py-[5.5rem] xl:pr-16 2xl:pr-32" >


                <div className="mx-auto text-[2.5rem] pb-10 px-4 xl:px-0">
                    It just works.
                </div>


                <div className="mx-auto text-lg pb-10 px-4 sm:px-8 md:px-14 xl:px-0">
                    “I really like how it is an all-in-one solution that handle many of
                    the tasks that you would normally need separate tools to do the same
                    job. This thing is a miracle worker.”
                </div>

                <div className="mx-auto text-lg font-bold px-4 lg:px-0">
                    Jeremy Robinson
                </div>
                <div className="mx-auto text-base leading-[1.625rem] tracking-widest pb-16 px-4 xl:px-0 xl:pb-0">
                    CMO, FYLO
                </div>

            </div>


        </div>
    )
}
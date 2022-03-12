import React from "react";

export default function ButtonBot(props) {
  return (
    <button className=" rounded-md border-0 bg-gradient-to-br from-blue to-blue py-3 px-4 text-sm font-bold leading-6 tracking-tight text-white hover:from-purple hover:via-[#CB30E3] hover:to-orange md:px-6 md:text-base md:leading-8">
      {props.text}
    </button>
  );
}

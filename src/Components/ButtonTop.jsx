import React from "react";

export default function ButtonTop(props) {
  return (
    <button className="rounded-md border border-blue bg-transparent py-3 px-4 text-sm font-bold leading-6 tracking-tight text-blue duration-300 hover:bg-blue hover:text-white md:px-6 md:text-base md:leading-8">
      {props.text}
    </button>
  );
}

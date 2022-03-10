import React from "react";

export function ButtonTop(props) {

    return <button href="#" className="border border-blue bg-transparent text-blue hover:bg-blue hover:text-white duration-300 rounded-md py-3 px-4 text-sm font-bold leading-6 tracking-tight md:px-6 md:text-base md:leading-8">{props.text}</button>;
}

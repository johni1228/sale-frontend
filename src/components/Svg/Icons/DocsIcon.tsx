import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 4V24C1 24.663 1.26339 25.2989 1.73223 25.7678C2.20107 26.2366 2.83696 26.5 3.5 26.5H18.5C19.163 26.5 19.7989 26.2366 20.2678 25.7678C20.7366 25.2989 21 24.663 21 24V9.4275C21 9.09445 20.9334 8.76476 20.8041 8.45781C20.6749 8.15085 20.4857 7.8728 20.2475 7.64L14.6975 2.2125C14.2305 1.75582 13.6032 1.50008 12.95 1.5H3.5C2.83696 1.5 2.20107 1.76339 1.73223 2.23223C1.26339 2.70107 1 3.33696 1 4V4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;

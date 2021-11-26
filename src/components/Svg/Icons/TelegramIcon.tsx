import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M27.919 2.163L23.694 22.088C23.375 23.494 22.544 23.844 21.363 23.182L14.925 18.438L11.819 21.426C11.475 21.77 11.188 22.057 10.525 22.057L10.988 15.501L22.919 4.72C23.438 4.258 22.806 4.001 22.113 4.464L7.36301 13.752L1.01301 11.764C-0.367993 11.333 -0.392992 10.383 1.30101 9.72L26.138 0.151C27.288 -0.28 28.294 0.407 27.919 2.164V2.163Z" fill="black"/>
    </Svg>
  );
};

export default Icon;

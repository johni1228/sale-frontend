import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.75 9.39999L5.90653 0.699995L0.150024 9.39999H11.75Z" fill="black"/>            
    </Svg>
  );
};

export default Icon;


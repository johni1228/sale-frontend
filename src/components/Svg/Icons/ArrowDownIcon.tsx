import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.75 0.600006L5.90649 9.3L0.149994 0.600006H11.75Z" fill="black"/>
    </Svg>
  );
};

export default Icon;

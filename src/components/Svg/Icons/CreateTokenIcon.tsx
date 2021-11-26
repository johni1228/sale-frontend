import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.9584 3.375L23.7917 12.125L16.5 28.1667M7.75002 3.375H25.25L31.0834 12.125L16.5 29.625L1.91669 12.125L7.75002 3.375ZM1.91669 12.125H31.0834H1.91669ZM15.0417 3.375L9.20835 12.125L16.5 28.1667L15.0417 3.375Z" stroke="black" stroke-width="2"/>
    </Svg>
  );
};

export default Icon;

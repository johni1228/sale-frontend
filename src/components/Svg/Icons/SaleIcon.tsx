import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <circle cx="32" cy="32" r="32" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_19_160" transform="scale(0.000333333)"/>
</pattern>
</defs>
    </Svg>
  );
};

export default Icon;





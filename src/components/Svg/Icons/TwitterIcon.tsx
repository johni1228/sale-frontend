import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../type";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28.999 2.84287C28.1915 4.06666 27.2007 5.10989 26.0268 5.97254C26.0384 6.2039 26.0442 6.4654 26.0442 6.75703C26.0442 8.3774 25.8123 9.99973 25.3485 11.624C24.8848 13.2483 24.1764 14.8031 23.2233 16.2882C22.2703 17.7734 21.135 19.0892 19.8176 20.2355C18.5001 21.3818 16.9165 22.2958 15.0666 22.9775C13.2168 23.6592 11.2343 24 9.11909 24C5.81795 24 2.77793 23.0921 -0.000976562 21.2762C0.492246 21.3321 0.965289 21.3601 1.41815 21.3601C4.17598 21.3601 6.63917 20.4947 8.80771 18.7638C7.52185 18.7398 6.37027 18.3365 5.35296 17.554C4.33566 16.7715 3.63557 15.7716 3.25271 14.5543C3.63114 14.6277 4.00465 14.6645 4.37322 14.6645C4.90376 14.6645 5.4258 14.594 5.93935 14.453C4.5671 14.173 3.4287 13.4766 2.52416 12.364C1.61964 11.2514 1.16739 9.9672 1.16739 8.51146V8.43643C2.00968 8.91157 2.90811 9.1643 3.86269 9.19464C3.04979 8.64251 2.40527 7.92252 1.92915 7.03466C1.453 6.14681 1.21492 5.18599 1.21492 4.15222C1.21492 3.06193 1.48309 2.04666 2.01942 1.10642C3.51172 2.97214 5.31994 4.46327 7.4441 5.57983C9.5683 6.69641 11.8471 7.31652 14.2807 7.44017C14.1769 6.99948 14.1249 6.5396 14.1247 6.06053C14.1247 4.38779 14.7057 2.95952 15.8678 1.77571C17.0298 0.591904 18.4318 0 20.0737 0C21.7927 0 23.2406 0.637688 24.4174 1.91306C25.762 1.64172 27.021 1.15093 28.1944 0.440688C27.7423 1.89013 26.8713 3.00827 25.5811 3.79512C26.7669 3.65157 27.9062 3.33415 28.999 2.84287H28.999Z" fill="black"/>
    </Svg>
  );
};

export default Icon;

import React from 'react'
import { WebsiteIcon, GitIcon, TelegramIcon, TwitterIcon, SaleIcon } from 'components/Svg/intex'

export const Detail = (props) => {
  return (
    <div className={`w-full min-h-full ${props.className} bg-white px-20 pt-20`}>
      <div className="flex msm:flex-col md:flex-row justify-start items-center mb-30">
        <div className="w-100 h-auto">
          <SaleIcon className="w-full h-auto"/>
        </div>
        <div className="flex flex-col msm:items-center md:items-start ml-30">
          <div className="font-bold md:text-40 msm:text-20 mb-20">Name</div>
          <div className="flex">
            <WebsiteIcon className="mr-30"/>
            <TelegramIcon className="mr-30"/>
            <TwitterIcon className="mr-30"/>
            <GitIcon className="mr-30"/>
          </div>
        </div>
      </div>
      <div className="">
      LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. DOLORIBUS EARUM INVENTORE MAXIME PRAESENTIUM REPREHENDERIT UT VOLUPTATE? ACCUSAMUS ALIQUAM ASPERNATUR AUTEM DELENITI DOLORE ERROR EXERCITATIONEM IN ITAQUE ODIO VOLUPTATEM. PRAESENTIUM, SIMILIQUE.
      </div>
      <div>
        <div className="flex msm:flex-col md:flex-row justify-between py-10 border-b"><p className="font-bold">Token Address:</p><p>0x00000000000000000000000000</p></div>
        <div className="flex msm:flex-col md:flex-row justify-between py-10 border-b"><p className="font-bold">PreSale Address:</p><p>0x00000000000000000000000000</p></div>
        <div className="grid msm:grid-cols-1 md:grid-cols-2">
          <div className="md:pr-10 md:border-r">
            <div className="flex justify-between py-10 border-b"><p className="font-bold">TokenName:</p><p>Name</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Token Symbol:</p><p>NM</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Token Supply:</p><p>1,000,000,000</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Tokens for PreSale:</p><p>400,000,000</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Tokens for Liquidity:</p><p>400,000,000</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Liquidity Percentage:</p><p>100%</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Pre Sale Rate:</p><p>80000000/1bnb</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">Listing Rate:</p><p>800000000/1bnb</p></div>
            <div className="flex justify-between py-10 border-b"><p className="font-bold">PreSale advantage:</p><p>0%</p></div>
          </div>
          <div className="md:pl-10">
            <div className="flex justify-between border-b py-10"><p className="font-bold">Token Type:</p><p>Utility</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Inital Market Cap:</p><p>%600.00</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Soft Cap:</p><p>300bnb</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Hard Cap:</p><p>500bnb</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Minimum buy:</p><p>0.1bnb</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Maximum buy:</p><p>2bnb</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Start Time:</p><p>2021.11.24.20:00(UTC)</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">End Time:</p><p>2021.11.24.20:00(UTC)</p></div>
            <div className="flex justify-between border-b py-10"><p className="font-bold">Sale Type:</p><p>Whitelisted</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}


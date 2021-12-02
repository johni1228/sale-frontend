import React from 'react'
import { CurrencyProps } from 'components/Currencies'
import { TokenImage, TokenPairImage } from 'components/Image'

interface Props {
  currency: CurrencyProps;
}

export const Currency = ({currency}: Props) => {
  return (<>
    <div className="flex justify-between items-center pb-10 border-b-2 mb-10">
      <div className="flex justify-start items-center">
        <TokenImage token={currency} width={30} height={30} />
        <div className="flex flex-col justify-center items-center ml-20">
          <p className="font-bold text-20">{currency.symbol}</p>
          <p className="">{currency.name}</p>
        </div>
      </div>
      <p>{currency.amount} BNB</p>
      <p className="cursor-pointer">view</p>
    </div>
    <div className="flex justify-between items-center pb-10 border-b-2 mb-10">
    <div className="flex justify-start items-center">
      <TokenImage token={currency} width={30} height={30} />
      <div className="flex flex-col justify-center items-center ml-20">
        <p className="font-bold text-20">{currency.symbol}</p>
        <p className="">{currency.name}</p>
      </div>
    </div>
    <p>{currency.amount} BNB</p>
    <p className="cursor-pointer">view</p>
  </div>
  <div className="flex justify-between items-center pb-10 border-b-2 mb-10">
  <div className="flex justify-start items-center">
    <TokenImage token={currency} width={30} height={30} />
    <div className="flex flex-col justify-center items-center ml-20">
      <p className="font-bold text-20">{currency.symbol}</p>
      <p className="">{currency.name}</p>
    </div>
  </div>
  <p>{currency.amount} BNB</p>
  <p className="cursor-pointer">view</p>
</div>
<div className="flex justify-between items-center pb-10 border-b-2 mb-10">
      <div className="flex justify-start items-center">
        <TokenImage token={currency} width={30} height={30} />
        <div className="flex flex-col justify-center items-center ml-20">
          <p className="font-bold text-20">{currency.symbol}</p>
          <p className="">{currency.name}</p>
        </div>
      </div>
      <p>{currency.amount} BNB</p>
      <p className="cursor-pointer">view</p>
    </div>
    <div className="flex justify-between items-center pb-10 border-b-2 mb-10">
    <div className="flex justify-start items-center">
      <TokenImage token={currency} width={30} height={30} />
      <div className="flex flex-col justify-center items-center ml-20">
        <p className="font-bold text-20">{currency.symbol}</p>
        <p className="">{currency.name}</p>
      </div>
    </div>
    <p>{currency.amount} BNB</p>
    <p className="cursor-pointer">view</p>
  </div>

  </>)
}
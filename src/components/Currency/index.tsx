import React from 'react'
import { CurrencyProps } from 'components/Currencies'
import { TokenImage, TokenPairImage } from 'components/Image'

interface Props {
  currency: CurrencyProps;
}

export const Currency = ({currency}: Props) => {
  return (<>
    <div className="pb-10 border-b-2 mb-10 flex msm:flex-col sm:flex-row sm:items-center">
      <div className="flex justify-start items-center flex-grow-0 sm:w-1/2">
        <TokenImage token={currency} width={30} height={30} />
        <div className="flex flex-col justify-center items-center ml-20">
          <p className="font-bold text-20">{currency.symbol}</p>
          <p className="msm:hidden sm:block">{currency.name}</p>
        </div>
      </div>
      <div className="flex justify-between flex-grow">
        <p>{currency.amount} BNB</p>
        <p className="cursor-pointer">view</p>
      </div>
    </div>

  </>)
}
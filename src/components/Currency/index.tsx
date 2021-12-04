import React from 'react'
import { CurrencyProps } from 'components/Currencies'
import { TokenImage, TokenPairImage } from 'components/Image'

interface Props {
  currency: CurrencyProps;
}

export const Currency = ({currency}: Props) => {
  return (<>
    <div className="pb-10 border-b-2 mb-10 flex msm:flex-col sm:grid sm:grid-cols-3 sm:items-center">
      <div className="flex justify-start items-center flex-grow-0">
        <TokenImage token={currency} min-width={30} min-height={30} />
        <div className="flex flex-col justify-center items-center ml-30">
          <p className="font-bold md:text-20 msm:text-15">{currency.symbol}</p>
          <p className="msm:hidden md:block text-center">{currency.name}</p>
        </div>
      </div>
      <p className="msm:hidden sm:flex justify-center">{currency.amount} BNB</p>
      <p className="msm:hidden sm:flex cursor-pointer justify-end">view</p>
      <div className="msm:flex msm:justify-between msm:flex-grow sm:hidden">
        <p className="flex justify-start">{currency.amount} BNB</p>
        <p className="cursor-pointer flex justify-end">view</p>
      </div>
    </div>

  </>)
}
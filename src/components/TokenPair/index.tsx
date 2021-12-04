import React from 'react'
import { CurrencyProps } from 'components/Currencies'
import { TokenPairImage } from 'components/Image'

export interface TokenPairProps {
  firstToken: CurrencyProps;
  secondToken: CurrencyProps;
}

export const TokenPair = ({firstToken, secondToken}: TokenPairProps) => {
  
  return (<>
    <div className="pb-10 border-b-2 mb-10 flex msm:flex-col sm:grid sm:grid-cols-3 sm:items-center">
      <div className="flex justify-start items-center flex-grow-0 msm:mb-20">
        <TokenPairImage firstToken={firstToken} secondToken={secondToken} min-width={20} min-height={20}/>
        <p className="ml-20">{firstToken.symbol} / {secondToken.symbol}</p>
      </div>
      <p className="msm:hidden sm:flex justify-center">1000000 BNB</p>
      <p className="msm:hidden sm:flex cursor-pointer justify-end">view</p>
      <div className="msm:flex msm:justify-between msm:flex-grow sm:hidden">
        <p className="flex justify-start">10000000 BNB</p>
        <p className="cursor-pointer flex justify-end">view</p>
      </div>
    </div>
  </>)
}
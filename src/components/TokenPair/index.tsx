import React from 'react'
import { CurrencyProps } from 'components/Currencies'
import { TokenPairImage } from 'components/Image'

export interface TokenPairProps {
  firstToken: CurrencyProps;
  secondToken: CurrencyProps;
}

export const TokenPair = ({firstToken, secondToken}: TokenPairProps) => {
  
  return (<>
    <div className="flex justify-between items-center mb-20 border-b-2 pb-20">
      <div className="flex items-center">
        <TokenPairImage firstToken={firstToken} secondToken={secondToken} />
        <p className="ml-20">{firstToken.symbol} / {secondToken.symbol}</p>
      </div>
      <div className="">10000000000</div>
      <div>View</div>
    </div>
    <div className="flex justify-between items-center mb-20 border-b-2 pb-20">
      <div className="flex items-center">
        <TokenPairImage firstToken={firstToken} secondToken={secondToken} />
        <p className="ml-20">{firstToken.symbol} / {secondToken.symbol}</p>
      </div>
      <div>10000000000</div>
      <div>View</div>
    </div>
    <div className="flex justify-between items-center mb-20 border-b-2 pb-20">
      <div className="flex items-center">
        <TokenPairImage firstToken={firstToken} secondToken={secondToken} />
        <p className="ml-20">{firstToken.symbol} / {secondToken.symbol}</p>
      </div>
      <div>10000000000</div>
      <div>View</div>
    </div>
    <div className="flex justify-between items-center mb-20 border-b-2 pb-20">
      <div className="flex items-center">
        <TokenPairImage firstToken={firstToken} secondToken={secondToken} />
        <p className="ml-20">{firstToken.symbol} / {secondToken.symbol}</p>
      </div>
      <div>10000000000</div>
      <div>View</div>
    </div>
  </>)
}
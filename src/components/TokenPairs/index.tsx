import React from 'react'
import { TokenPair } from 'components/TokenPair'
import { CurrencyProps } from 'components/Currencies'

interface TokenPairsProps {
  firstToken: CurrencyProps;
  secondToken: CurrencyProps;
}

export const TokenPairs = ({firstToken, secondToken}: TokenPairsProps) => {
  return (
    <TokenPair firstToken={firstToken} secondToken={secondToken} />
  )
}
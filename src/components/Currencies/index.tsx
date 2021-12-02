import React from 'react'
import { Currency } from 'components/Currency/index'

export interface CurrencyProps {
  symbol?: string;
  name: string;
  amount: number;
  address: string;
}

interface Props {
  currencies: CurrencyProps[];
}

export const Currencies = ({currencies}: Props) => {
  return (<div>
    {
      currencies.map((token) => (
        <Currency currency={token}/>
      ))
    }
  </div>)
}

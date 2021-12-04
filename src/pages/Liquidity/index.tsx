import React, { useState } from 'react'
import { Page } from 'components/Page'
import styled from 'styled-components'
import { CurrencyProps } from 'components/Currencies'
import { TokenPairs } from 'components/TokenPairs'

const SearchBar = styled.div`
  margin-bottom: 100px;
`
const Text = styled.div`
  cursor: pointer;
  border-width: 1px;
  width: 100px;
  text-align: center;
  border-radius: 30px;
  padding : 5px;
  font-weight: 500;
  &:active {
    border-color: blue;
  }
`



const Liquidity = () => {
  const [isAll, setAll] = useState(true);

  const firstToken: CurrencyProps = {
    symbol: "WBNB",
    name: "Wrapper BNB",
    amount: 1000000000,
    address: "0x1234567890"
  }

  const secondToken: CurrencyProps = {
    symbol: "WBNB",
    name: "Wrapper BNB",
    amount: 1000000000,
    address: "0x1234567890"
  }
  
  const CurrenciesHeader = styled.div``

  return (
    <Page color="transparent" className="min-h-full">
      <SearchBar className="flex msm:flex-col md:flex-row md:items-center justify-around md:mb-100 msm:mb-50 min-h-full">
          <div className="msm:min-w-min md:w-700 sm:mb-10 msm:mb-5"><input type="text" name="searchbar" id="searchbar" placeholder="Search by token address" className="outline-none p-10 border-2 w-full rounded-xl border-gray-900"/></div>
          <div className="flex msm:justify-between md:justify-around items-center flex-grow">
            <Text onClick={() => setAll(true)} className="msm:w-80 md:120">All</Text>
            <Text onClick={() => setAll(false)} className="msm:w-80 md:120">My Lock</Text>
          </div>
      </SearchBar>
      <CurrenciesHeader className="msm:hidden sm:grid grid grid-cols-3 text-center mb-30">
        <div className="text-center font-bold flex justify-start">TOKEN</div>
        <div className="text-center font-bold justify-center">Amount</div>
        <div className="font-bold flex justify-end">VIEW</div>
      </CurrenciesHeader>
      <TokenPairs firstToken={firstToken} secondToken={secondToken}/>
    </Page>
  )
}

export default Liquidity
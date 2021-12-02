import React, { useState } from 'react'
import { Page } from 'components/Page'
import styled from 'styled-components'
import { Currencies, CurrencyProps } from 'components/Currencies'

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



const Tokens = () => {
  const [isAll, setAll] = useState(true);

  const currencies: CurrencyProps[] = [{
    symbol: "WBNB",
    name: "Wrapper BNB",
    amount: 1000000000,
    address: "0x1234567890"
  }]
  
  const CurrenciesHeader = styled.div``

  return (
    <Page color="transparent">
      <SearchBar className="flex items-center justify-around">
        <input type="text" name="searchbar" id="searchbar" placeholder="Search by token address" className="outline-none p-10 border-2 w-900 rounded-xl border-gray-900"/>
          <Text onClick={() => setAll(true)}>All</Text>
          <Text onClick={() => setAll(false)}>My Lock</Text>
      </SearchBar>
      <CurrenciesHeader className="flex justify-between items-center mb-30">
        <div className="w-100 text-center font-bold">TOKEN</div>
        <div className="text-center font-bold">Amount</div>
        <div className="font-bold">VIEW</div>
      </CurrenciesHeader>
      <Currencies currencies={currencies}/>
    </Page>
  )
}

export default Tokens
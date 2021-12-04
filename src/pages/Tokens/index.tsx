import React, { useState } from 'react'
import { Page } from 'components/Page'
import styled from 'styled-components'
import { Currencies, CurrencyProps } from 'components/Currencies'

const SearchBar = styled.div`
  
`
const Text = styled.div`
  cursor: pointer;
  border-width: 1px;
  text-align: center;
  border-radius: 10px;
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
    <Page color="transparent" >
      <SearchBar className="flex msm:flex-col sm:flex-row sm:items-center justify-around sm: mb-100 msm:mb-50">
          <div className="msm:min-w-min sm:w-900 sm:mb-10 msm:mb-5"><input type="text" name="searchbar" id="searchbar" placeholder="Search by token address" className="outline-none p-10 border-2 w-full rounded-xl border-gray-900"/></div>
          <div className="flex msm:justify-between sm:justify-around items-center flex-grow">
            <Text onClick={() => setAll(true)} className="msm:w-80 md:120">All</Text>
            <Text onClick={() => setAll(false)} className="msm:w-80 md:120">My Lock</Text>
          </div>
      </SearchBar>
      <CurrenciesHeader className="msm:hidden sm:block flex justify-between items-center mb-30">
        <div className="w-100 text-center font-bold">TOKEN</div>
        <div className="text-center font-bold">Amount</div>
        <div className="font-bold">VIEW</div>
      </CurrenciesHeader>
      <Currencies currencies={currencies}/>
    </Page>
  )
}

export default Tokens
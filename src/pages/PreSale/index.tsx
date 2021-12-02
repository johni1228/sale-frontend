import React from 'react'
import { SaleCard } from 'components/SaleCard';
import { SaleProps } from 'components/SaleCard/type';
import BigNumber from 'bignumber.js'
import { Page } from 'components/Page';

const Sales: SaleProps[] = [{
  name: "Name",
  icon: "SaleIcon",
  amountBNB: 300,
  liquidity:  100,
  lockup: 365,
  saleType: "Meme",
  startTime: new BigNumber(12346587),
  isEnd: false,
  status: "Failed"
}]

const PreSale = () => {
  return (
    <Page color="white">
      <SaleCard sale={Sales[0]}/>
    </Page>
  )
}

export default PreSale;
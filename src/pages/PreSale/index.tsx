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
  status: "Upcoming"
},
{
  name: "Name",
  icon: "SaleIcon",
  amountBNB: 300,
  liquidity:  100,
  lockup: 365,
  saleType: "Meme",
  startTime: new BigNumber(12346587),
  isEnd: false,
  status: "Failed"
},
{
  name: "Name",
  icon: "SaleIcon",
  amountBNB: 300,
  liquidity:  100,
  lockup: 365,
  saleType: "Meme",
  startTime: new BigNumber(12346587),
  isEnd: false,
  status: "Successed"
}
,
{
  name: "Name",
  icon: "SaleIcon",
  amountBNB: 300,
  liquidity:  100,
  lockup: 365,
  saleType: "Meme",
  startTime: new BigNumber(12346587),
  isEnd: false,
  status: "Failed"
},
{
  name: "Name",
  icon: "SaleIcon",
  amountBNB: 300,
  liquidity:  100,
  lockup: 365,
  saleType: "Meme",
  startTime: new BigNumber(12346587),
  isEnd: false,
  status: "Successed"
}]

const PreSale = () => {
  return (
    <Page color="white" className="min-h-screen">
      <div className="grid msm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 min-h-full">
        {Sales.map((sale) => {
          return (
            <div className="flex justify-center msm:mb-20 sm:mb-40">
              <SaleCard sale={sale}/>
            </div>)
        })}
      </div>
    </Page>
  )
}

export default PreSale;
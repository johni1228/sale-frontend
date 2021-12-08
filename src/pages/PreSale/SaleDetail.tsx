import React from 'react'
import { Page } from 'components/Page';
import { AboutToken, TokenTrade, Detail } from 'components/SaleDetail'

const SaleDetail = () => {
  return (
    <Page color="white" className="min-h-screen grid msm:gird-cols-1 lg:grid-cols-4 lg:gap-30 p-30">
      <div className="lg:col-span-3 mb-20">
        <Detail />
      </div>
      <div className="grid msm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-30  mb-20">
        <TokenTrade />
        <AboutToken />
      </div>

    </Page>
  )
}

export default SaleDetail;
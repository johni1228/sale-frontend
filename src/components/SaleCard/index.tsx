import React from 'react'
import { useHistory } from "react-router-dom"
import { SaleIcon } from 'components/Svg/intex';
import { layout, space, SpaceProps, TypographyProps } from 'styled-system';
import { SaleProps } from './type'
import styled from 'styled-components';
import { Line } from 'rc-progress';
import { sampleSize } from 'lodash';
import { colorStatus } from './theme';

interface SaleCardProps extends SpaceProps, TypographyProps {
  sale: SaleProps;
}

const StyleDiv = styled.div<SaleCardProps>`
  position: relative;
  background-color: white;
  width: 300px;
  height: 350px;
  ${space}
  ${layout}
`

export const SaleCard = (props: SaleCardProps) => {
  const history = useHistory();
  const {sale, ...rest } = props;
  console.log(sale.status)
  const Mark = styled.div`
    ${colorStatus[sale.status]}
  `

  return (
    <StyleDiv sale={sale} p="15px 20px" className="rounded-3xl">
      <div className="flex justify-start items-center">
        <SaleIcon />
        <p className="font-bold text-25 ml-10">{sale.name}</p>
      </div>
      <p className="text-18">Soft / Hardcap</p>
      <p className="text-24 font-bold">{sale.amountBNB} / 500 BNB</p>
      <div className="px-20"><Line percent={sale.amountBNB/500*100} strokeWidth={4} strokeColor="#FFC300" trailWidth={10} trailColor="#FFC30050"/></div>
      <div className="flex justify-between mb-20">
        <p className="tracking-tight">0 BNB</p>
        <p className="tracking-tight">500 BNB</p>
      </div>
      <div className="px-15">
        <div className="flex justify-between">
          <p className="tracking-tight font-bold text-18">Liquidty :</p>
          <p className="tracking-tight font-bold text-18">{sale.liquidity}</p>
        </div>
        <div className="flex justify-between">
          <p className="tracking-tight font-bold text-18">LockUp</p>
          <p className="tracking-tight font-bold text-18">{sale.lockup} (D)</p>
        </div>
        <div className="flex justify-between border-b-2 pb-10 border-black">
          <p className="tracking-tight font-bold text-18">Type</p>
          <p className="tracking-tight font-bold text-18">{sale.saleType}</p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <p >Start: <code className="font-bold">{sale.startTime ? sale.startTime.toString() : sale.endTime.toString()}</code></p>
          <div className="text-center px-10 py-5 bg-red-200 font-bold cursor-pointer rounded-3xl text-red-600 " onClick={()=>{history.push('/launchpad/presale/detail')}}>Research</div>
        </div>
      </div>
      <Mark className="absolute top-0 right-0 px-35 py-4 rounded-tr-full">{sale.status}</Mark>
    </StyleDiv>
  )
}
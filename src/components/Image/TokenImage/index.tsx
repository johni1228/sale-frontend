import React from 'react'
import { CurrencyProps } from 'components/Currencies'
import { LayoutProps, SpaceProps, space, layout, width } from 'styled-system'
import styled from 'styled-components'
import tokens from 'util/tokens'

export interface TokenImageProps extends SpaceProps, LayoutProps {
token: CurrencyProps;
}

const Stylediv = styled.div<TokenImageProps>`
  ${space}
  ${layout}
`

export const TokenImage = ({token, ...props}: TokenImageProps) => {
  
  return (
    <Stylediv token={token}>
      <div><img src={tokens[token.symbol.toLowerCase()]?.src} alt={`${token.name} image`} width="64px" height="64px"/></div>
    </Stylediv>
  )
}
import { CurrencyProps } from 'components/Currencies'
import { LayoutProps, SpaceProps, space, layout, width } from 'styled-system'
import styled from 'styled-components'
import tokens from 'util/tokens'

export interface TokenPairImageProps extends SpaceProps, LayoutProps {
firstToken: CurrencyProps;
secondToken: CurrencyProps;
}

const Stylediv = styled.div<TokenPairImageProps>`
  position: related;
  ${space}
  ${layout}
`

export const TokenPairImage = ({firstToken, secondToken, ...props}: TokenPairImageProps) => {
  
  return (
    <Stylediv firstToken={firstToken} secondToken={secondToken}>
      <div className="z-20 relative"><img src={tokens[firstToken.symbol.toLowerCase()]?.src} alt={`${firstToken.name} image`} width="64px" height="64px"/>
        <div className="z-10 absolute top-40 left-30"><img src={tokens[secondToken.symbol.toLowerCase()]?.src} alt={`${secondToken.name} image`} width="60px" height="60px"/></div>
      </div>
    </Stylediv>
  )
}
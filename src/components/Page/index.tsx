import React from 'react'
import styled from 'styled-components'
import { space, layout, variant } from 'styled-system'
import { colorVariants } from './theme'
import { PageProps } from './type'

const StyleDiv = styled.div<PageProps>`
  border-top-width: 40px;
  border-right-width: 45px;
  border-left-width: 45px;
  border-color: #f0f0f0;
  padding: 50px 50px 0 50px;
  ${space}
  ${layout}
  ${variant({
    prop: "color",
    variants: colorVariants
  })}
`

export const Page = (props: PageProps) => {
  const { children, color,  ...rest} = props;
  const colors = color;
  return (
    <StyleDiv 
      className="w-screen"
      {...rest}
      color = {colors}
    >
      {children}
    </StyleDiv>
  )
}

Page.defaultProps = {
  color: "white"
}
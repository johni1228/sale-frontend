import React from 'react'
import styled from 'styled-components'
import { space, layout, variant } from 'styled-system'
import { colorVariants } from './theme'
import { PageProps } from './type'

const StyleDiv = styled.div<PageProps>`
  border-color: #f0f0f0;
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
      className="w-full sm:border-t-50 sm:border-l-45 sm:border-r-45 sm:px-50 msm:px-20 msm:pt-30 sm:pt-50"
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
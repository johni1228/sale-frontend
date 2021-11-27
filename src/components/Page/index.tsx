import React from 'react'
import styled from 'styled-components'

const StyleDiv = styled.div`
  border-top-width: 40px;
  border-right-width: 45px;
  border-left-width: 45px;
  border-color: #f0f0f0f;

`


export const Page : React.FC = ({children}) => {
  return (
    <StyleDiv>{children}</StyleDiv>
  )
}
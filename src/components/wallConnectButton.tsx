import React from 'react'
import styled from 'styled-components'

export const WCB: React.FC = () => {

  const StyleDiv = styled.div`
    background: rgba(0,0, 255, 0.3);
    bottom : 40px
  `

  return (
    <StyleDiv className="fixed rounded-lg px-20 py-10 text-white text-center font-bold">
      Connect
    </StyleDiv>
  )
}
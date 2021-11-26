import React from 'react'
import styled from "styled-components";
import { SubItem, Item } from './index'

interface Props extends Item{
  showMenu: boolean,
  isPushed?: boolean
}

const Stylediv = styled.div`
  background-color: rgba(255, 195, 0, 0.1)
`

export const MenuDetail: React.FC<Props> = (props) => {
  return (
    <Stylediv>

    </Stylediv>
  )
}
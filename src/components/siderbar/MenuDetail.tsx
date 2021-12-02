import React from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom"

interface SubItem {
  label: string,
  href: string
}

interface Props {
  detail: SubItem[],
  href: string
}

const Stylediv = styled.div`
  background-color: rgba(255, 195, 0, 0.1)
`

export const MenuDetail = ({detail, href}: Props) => {

  let history = useHistory();
  const parentHref = href;
  
  const handle = (href: string, parentHref: string) => {
    const detailHref = `${parentHref}/${href}`;
    return history.push(`${detailHref}`)
  }

  return (
    <Stylediv>
      { detail.map((item) => (
        <div onClick={() => handle(item.href, parentHref)} className="px-10 py-10 font-bold text-15 text-center text-gray-600 cursor-pointer hover:text-gray-900">
          {item.label}
        </div>
      ))}
    </Stylediv>
  )
}
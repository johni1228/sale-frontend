import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { ArrowDownIcon } from 'components/Svg/intex'
import { ArrowUpIcon } from 'components/Svg/intex'
import * as IconModule from 'components/Svg/intex'
import { SvgProps } from 'components/Svg/type'
import { MenuDetail } from './MenuDetail'
import { useAppSelector } from 'hooks/redux';

export interface SubItem {
  label: string,
  href: string
}

export interface Item extends SubItem {
  icon: String,
  items?:  SubItem[]
}

interface Props {
  list: Item[],
  showMenu: boolean,
  setShowMenu: any  
}

const Siderbar = ({list, showMenu, setShowMenu}: Props) => {

  const isCollepse = useAppSelector((state)=> state.collepse.value)
  const [isSelected, setSelected] = useState(list.map(_ => false));

  let history = useHistory();
  
  window.onresize = () => {
    if (window.innerWidth < 476) {
      setShowMenu(true)
    }
  }
  
  const handleLink = (item: Item, index: number) => {
    const newIsSelected = list.map(_ => false)
    newIsSelected[index] = !isSelected[index]
    setSelected(newIsSelected);
    return history.push(`${item.href}`)
  }
  
  const handleSub = (index: number) => {
    setShowMenu(true)
    const newIsSelected = list.map(_ => false)
    newIsSelected[index] = !isSelected[index]
    setSelected(newIsSelected);
  }

  const IconSVG = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

  const Menu = () => {
    return (
      <div className='w-full h-full msm:z-9 sm:z-0'>
        {
          list.map((item, index) => { 
            const Icon = IconSVG[`${item.icon}`];
            if(item.items)
              return(<div>
                <div 
                  className={`text-black py-10 px-20 cursor-pointer flex justify-between items-center hover:text-red-500 ${isSelected[index]? `bg-red-100 border-r-4 border-red-500`: ``}`} 
                  onClick={() => handleSub(index)}>
                  <div className="flex justify-start items-center">
                    <Icon width="20px"/>
                    { showMenu && <Link to="" className={"m-10 text-15"}>{showMenu?item.label: ''}</Link>}
                  </div>
                  {showMenu && (isSelected[index] ? <ArrowDownIcon /> : <ArrowUpIcon /> )}
                </div>
                {showMenu && isSelected[index] && <MenuDetail detail={item.items} href={item.href}/>}
              </div>)
            else return (
              <div 
                  className={`text-black py-10 px-20 cursor-pointer flex justify-between items-center hover:text-red-500 ${isSelected[index]? `bg-red-100 border-r-4 border-red-500`: ``}`} 
                  onClick={() => {handleLink(item, index)}}>
                  <div className="flex justify-start items-center">
                    <Icon width="20px"/>
                    { showMenu && <Link to="" className={`m-10 text-15`}>{showMenu?item.label: ''}</Link>}
                  </div>
              </div>
            )
          })}
      </div>
    )
  }

  return (<>
    <div className={`${isCollepse && `msm:hidden`} sm:block`}>
      <div className={showMenu?"p-10 flex justify-end text-gray-600": "text-center p-10 text-gray-600"}><button onClick={() => {setShowMenu(!showMenu)}}><FontAwesomeIcon icon={showMenu?faAngleDoubleLeft:faAngleDoubleRight} size="2x" /></button></div>
      <Menu />
    </div>
  </>)
}

export default Siderbar;
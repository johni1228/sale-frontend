import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBox, faCartPlus, faLandmark, faGlobe, faAngleDoubleLeft, faAngleDoubleRight, faWallet, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks/redux'
import { setCollepse } from 'reducers/collepseReducer'

interface Item {
  label: String,
  icon: String,
  href: String
}

interface Props {
  list: Item[]  
}

const Siderbar = ({list}: Props) => {

  const isCollepse = useAppSelector((state) => state.collepse.value)
  const dispatch = useAppDispatch()

  const [isOpen, setisOpen] = useState(true);

  let history = useHistory();

  const Icons = [faHome, faBox, faCartPlus, faGlobe, faLandmark];
  
  window.onresize = () => {
    if (window.innerWidth < 476) {
      setisOpen(true)
    }
  }
  
  const handleLink = (link: String) => {
    if (isCollepse) {
      dispatch(setCollepse())
    }
    return history.push(`${link}`)
  }

  const handleWallet = () => {

  }

  return (<>
    <div className="border-r-4 border-gray-300 msm:hidden sm:block">
      <div className={isOpen?"p-10 flex justify-end text-gray-600": "text-center p-10 text-gray-600"}><button onClick={() => {setisOpen(!isOpen)}}><FontAwesomeIcon icon={isOpen?faAngleDoubleLeft:faAngleDoubleRight} size="2x" /></button></div>
      <ul className='w-full h-full'>
        {
          list.map((item: Item, index) => (
            <li className={"text-gray-600 border-b-2 border-gray-500 py-10 px-20 cursor-pointer"} onClick={() => {handleLink(item.href)}}><FontAwesomeIcon icon={Icons[index]} size="lg" /><Link to="" className={isOpen?"m-10 text-20 font-bold":"text-20 font-bold"}>{isOpen?item.label: ''}</Link></li>
          ))
        }
      </ul>
    </div>

    {isCollepse && <>
      <div className="sm:hidden msm:block msm:absolute sm:static w-screen h-screen bg-white msm:z-10 sm:z-0">
        <div className="flex flex-row items-center px-20 border-b-2 border-gray-500">
          <FontAwesomeIcon icon={faSearch} size="lg" />
          <input type="text" placeholder="Search collection..." className=" w-full h-50 px-10 focus:outline-none"/>
        </div>
        <ul className='w-full'>
          {
            list.map((item: Item, index) => (
              <li className={"text-gray-600 border-b-2 border-gray-500 py-10 px-20 cursor-pointer"} onClick={() => {handleLink(item.href)}}><FontAwesomeIcon icon={Icons[index]} size="lg" /><Link to="" className={isOpen?"m-10 text-20 font-bold":"text-20 font-bold"}>{isOpen?item.label: ''}</Link></li>
            ))
          }
          <li className="text-gray-600 border-b-2 border-gray-500 py-10 px-20 cursor-pointer font-blod flex flex-row items-center" onClick={handleWallet}><FontAwesomeIcon icon={faWallet} size="lg" /><p className="text-20 font-bold pl-10">Connect Wallet</p></li>
        </ul>
        <div className="fixed bottom-50 left-0 right-0 text-center">
          <button className="font-blod text-20 bg-blue-500 text-white px-30 py-10 rounded-2xl">Filter</button>
        </div>
      </div>
      
    </>}
  </>)
}

export default Siderbar;
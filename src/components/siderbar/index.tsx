import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBox, faCartPlus, faLandmark, faGlobe, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';

interface Item {
  label: String,
  icon: String,
  href: String
}

interface Props {
  list: Item[]  
}

const Siderbar = ({list}: Props) => {
  const [isOpen, setisOpen] = useState(true);
  let history = useHistory();
  const Icons = [faHome, faBox, faCartPlus, faGlobe, faLandmark];

  const handleLink = (link: String) => {
    return history.push(`${link}`)
  }

  return (
    <div className="border-r-4 border-gray-300">
      <div className={isOpen?"p-10 flex justify-end text-gray-600": "text-center p-10 text-gray-600"}><button onClick={() => {setisOpen(!isOpen)}}><FontAwesomeIcon icon={isOpen?faAngleDoubleLeft:faAngleDoubleRight} size="2x" /></button></div>
      <ul className='w-full h-full'>
        {
          list.map((item: Item, index) => (
            <li className={"text-gray-600 border-b-2 border-gray-500 py-10 px-20 cursor-pointer"} onClick={() => {handleLink(item.href)}}><FontAwesomeIcon icon={Icons[index]} size="lg" /><Link to="" className={isOpen?"m-10 text-20 font-bold":"text-20 font-bold"}>{isOpen?item.label: ''}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Siderbar;
import React from 'react'
import Logo from 'assets/logo.png'
import SearchInput from 'components/searchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from "hooks/redux"
import { setCollepse } from 'reducers/collepseReducer'

const Nav: React.FC = (props: any) => {
  const dispatch = useAppDispatch()
  const handleCollepse = () => {
    dispatch(setCollepse())    
  }
  return (
    <div className="flex flex-row justify-between items-center pr-20 border-b-2 border-gray-300">
      <div className={"w-full sm:h-90 msm:h-70  lg:py-10 msm:px-5 md:py-5 flex flex-row msm:justify-start sm:justify-around md:justify-between items-center"}> 
        <div className="flex flex-row items-center ">
          <img src={Logo} alt="logo" height="auto" width="100"/>
          <div className="ml-5 text-25 font-extrabold msm:inline sm:hidden 2xl:inline text-gray-700">NFTs</div>
        </div>
        <SearchInput />
        <button className="sm:inline msm:hidden bg-green-600 md:leading-tight sm:text-20 msm:text-15 font-bold text-white px-10 sm:mr-0 lg:mr-40 msm:py-0 md:py-5 mx-5 rounded-md"><code className="lg:inline md:hidden sm:hidden mlg:hidden mmd:hidden msm:hidden">Connect</code> Wallet</button>
      </div>
      <div className="text-gray-700 msm:inline sm:hidden cursor-pointer"><FontAwesomeIcon icon={faBars} size="lg" onClick={handleCollepse}/></div>
    </div>
  )
}

export default Nav;
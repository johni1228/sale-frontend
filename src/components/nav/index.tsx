import React from 'react'
import Logo from 'assets/logo.png'
import SearchInput from 'components/searchInput'

const Nav: React.FC = (props: any) => {
  return (
    <div className={"w-full h-70 py-10 px-30 flex flex-row justify-between items-center border-b-2 border-gray-300"}> 
      <div className="flex flex-row items-center">
        <img src={Logo} alt="logo" height="auto" width="100"/>
        <div className="ml-5 text-25 font-extrabold">Harmony-NFTs</div>
      </div>
      <SearchInput />
      <div className="connect-btn">
        <button className="bg-green-600 text-20 font-bold text-white px-10 py-5 rounded-md">Connect Wallet</button>
      </div>
    </div>
  )
}

export default Nav;
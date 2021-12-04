import React, { useState } from "react";
import Navbar from 'components/nav'
import Siderbar from 'components/siderbar'
import config from 'components/siderbar/config'
import { WCB }  from 'components/wallConnectButton'

const Layout: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true)
  return (
      <div className="flex flex-col w-full">
        <div className="fixed w-screen top-0 left-0 z-50"><Navbar /></div>
        <div className="w-screen">
          <div className="flex flex-row w-screen sm:pt-90 msm:pt-70 h-screen box-border">
            <div className="msm:fixed md:relative msm:z-10 md:z-0 msm:bg-white h-full flex-grow-0"><Siderbar list={config} showMenu={showMenu} setShowMenu={setShowMenu}/></div>
            <div className="flex-grow overflow-y-scroll">{ children }</div>
          </div>
        </div>
        <div className="flex justify-center sm:hidden"><WCB /></div>
      </div>

  )
}

export default Layout;
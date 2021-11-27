import React, { useState } from "react";
import Navbar from 'components/nav'
import Siderbar from 'components/siderbar'
import config from 'components/siderbar/config'
import { WCB }  from 'components/wallConnectButton'

const Layout: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true)
  return (
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex-grow">
          <div className="flex flex-row min-h-screen">
            <Siderbar list={config} showMenu={showMenu} setShowMenu={setShowMenu} />
            { children }
          </div>
        </div>
        <div className="flex justify-center sm:hidden"><WCB /></div>
      </div>

  )
}

export default Layout;
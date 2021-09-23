import React from "react";
import Navbar from 'components/nav'
import Siderbar from 'components/siderbar'
import config from 'components/siderbar/config'

const Layout: React.FC = ({ children }) => {
  return (
      <div className="flex flex-col h-screen w-full">
        <Navbar />
        <div className="flex-grow">
          <div className="flex flex-row h-full">
            <Siderbar list={config}/>
            { children }
          </div>
        </div>
      </div>

  )
}

export default Layout;
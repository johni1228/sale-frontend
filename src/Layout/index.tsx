import React from "react";

import Navbar from 'components/nav'
import Siderbar from 'components/siderbar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <Siderbar />
        { children }
      </div>

    </>
  )
}

export default Layout;
import React from 'react'
import NFTCard from 'components/NFTCard'
import Layout from 'Layout'

const MintedNFTs: React.FC = () => {
  return (
    <>
      <div className="flex-grow text-center p-30">
        <NFTCard />
      </div>
    </>
  )
}

export default MintedNFTs;  
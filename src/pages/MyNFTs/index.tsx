import React from 'react'
import NFTCard from 'components/NFTCard'

const MyNFTs: React.FC = () => {
  return (
    <>
      <div className="flex-grow text-center p-30">
        <NFTCard />
      </div>
    </>
  )
}

export default MyNFTs;
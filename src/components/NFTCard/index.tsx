import React from 'react'
import Image from 'assets/images/landing/1.png'
const NFTCard = (props: any)=> {
  return (
    <div className="hover:shadow-xl sm:w-230 h-auto bg-white m-10 flex flex-col justify-around border-2 border-gray-400 p-10 rounded-lg msm:w-full">
      <div><img src={props.imageUri?`${props.imageUri}`: Image} alt="NFT logo"/></div>
      <div className="flex flex-row justify-between font-bold text-gray-500 mt-20">
        <div>{props.name?`punk#${props.name}`: 'punk#0'}</div>
        <div>{props.price?props.price: "10 KDA"}</div>
      </div>
    </div>
  )
}

export default NFTCard;  
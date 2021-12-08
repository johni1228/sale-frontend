import React from 'react'
import { Line } from 'rc-progress';

export const TokenTrade = () => {

  return (
    <div className="w-full px-15 py-20 bg-white">
      <div className="text-center mb-50">
        <p>Sale Start in:</p>
        <p>03:23:30:04</p>
      </div>
      <div>
        <div className="px-20"><Line percent={0} strokeWidth={4} strokeColor="#FFC300" trailWidth={10} trailColor="#FFC30050"/></div>
        <div className="flex justify-between mb-20">
          <p className="tracking-tight">0 BNB</p>
          <p className="tracking-tight">500 BNB</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-15">Amount</p>
        <div className="border flex items-center">
          <input type="text" placeholder="0.0bnb" className="w-full h-full outline-none p-5 text-18 "/>
          <p className="text-yellow-400 font-bold text-18 p-5 cursor-pointer">MAX</p>
        </div>
      </div>
      <div className="flex justify-start mt-20">
        <button className="font-bold text-18 text-center px-25 py-5 border hover:shadow-lg">Buy</button>
      </div>
      <div className="flex justify-end">
        <p className="text-20">Whitelist Only!</p>
      </div>
    </div>
  )
}
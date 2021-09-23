import React from 'react'
import Ques from 'assets/images/question.png'
import Layout from 'Layout';

const Mint: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <div className="py-50 border-gray-800 border-8 rounded-lg mb-20"><img src={Ques} alt="question.png" width="250" height="250"/></div>
      <div><button className="text-20 bg-blue-500 text-center rounded-lg px-20 font-bold text-white border-4 border-blue-500 hover:border-blue-600 hover:bg-white hover:text-black">Mint</button></div>
    </div>
  )
}

export default Mint;
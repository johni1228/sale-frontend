import React, { useState, useEffect } from 'react'
import random from 'random'
import Landing1 from 'assets/images/landing/1.png'
import Landing2 from 'assets/images/landing/2.png'
import Landing3 from 'assets/images/landing/3.png'
import Landing4 from 'assets/images/landing/4.png'
import Landing5 from 'assets/images/landing/5.png'
import Landing6 from 'assets/images/landing/6.png'
import Landing7 from 'assets/images/landing/7.png'
import Landing8 from 'assets/images/landing/8.png'
import Landing9 from 'assets/images/landing/9.png'
import Landing10 from 'assets/images/landing/10.png'
import Landing11 from 'assets/images/landing/11.png'
import Landing12 from 'assets/images/landing/12.png'
import Landing13 from 'assets/images/landing/13.png'

const Home: React.FC = () => {
  const [Landing, setLanding] = useState(Landing1);
  const images = [ Landing1,Landing2, Landing3, Landing4, Landing5, Landing6, Landing7, Landing8, Landing9, Landing10, Landing11, Landing12, Landing13,]
  useEffect(() => {
    const timer = setInterval(() => setLanding(images[random.int(0,12)]), 1000);
    return () => {
      clearInterval(timer);
    };
  })
  return (
      <div className="flex flex-row items-center justify-between bg-green-200 px-20 flex-grow">
        <div className="flex flex-col items-center text-20">
          <h1 className="text-80 font-extrabold mb-50">Harmony NFTs</h1>
          <div>
            <p>Harmony NFTs is a collection of 10,000 randomly generated harmony NFTs on the Kadena blockchain.</p>
            <p>
              Our harmonies are pudgy, cute, fun, and a little goofy. </p>
            <p>Harmonies are known for eating too many fish and creating legendary memes.</p>
          </div>
        </div>
        <div>
          <img src={Landing} alt="landing" width="400" height="auto"/>
        </div>
      </div>
  )
}

export default Home;
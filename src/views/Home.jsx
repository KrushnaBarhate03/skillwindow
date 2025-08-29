import React from 'react'
import Logo from '../assets/logo.png';

function Home() {
  return (
    <>
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-orange-500 font-serif font-bold text-4xl md:text-5xl"> Spaceship</h3> 

      <p className="text-orange-500 font-serif font-bold text-center px-14 text-1xl md:text-xl mt-5">Spaceship is a mini Wikipedia 📖 for computer science students, created by RoadToCode.</p>
     
     <button className="md:mt-7 mt-8">
        <a href='#GetStarted' className="bg-orange-500 font-serif  text-white font-semibold p-3 rounded-lg ">Get Started</a>
     </button>

     <h6 className="mt-10 text-black font-bold font-serif  text-2xl md:text-4xl">Our Top Courses</h6>
    
    </div>
    <div className="bg-amber-200 w-50 ml-20 md:ml-20 h-50">
        <img src={Logo}/>

    </div>
    <div>

    </div>
    </>
    
  )
}

export default Home
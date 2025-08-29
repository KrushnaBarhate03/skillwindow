import React from 'react'
import Card from './Card.jsx'
import Mern from '../assets/mern-stack.png'


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

<div className='flex flex-row flex-wrap'>

     <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>
      
      
       <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>

        <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>

         <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>

          <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>
          
           <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>

            <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>

             <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>

              <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>
      


      </div>
</>
  )
}

export default Home
import React from 'react'
import Card from './Card.jsx'
import Mern from '../assets/mern-stack.png'
import Mean from '../assets/mean.jfif';
import AI from '../assets/AI.png';
import Choose from './Choose.jsx';
import LastCard from './LastCard.jsx'



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

<div className='flex flex-row justify-evenly flex-wrap'>

     <Card name="Mern Stack" images={Mern} description="The MERN stack is a popular set of technologies used for building modern web applications."/>
      
      
       <Card name="Mean Stack" images={Mean} description="The MEAN stack is a popular full-stack development framework used to build dynamic web applications."/>

        <Card name="Artificial Intelligence" images={AI} description="(AI) refers to machines designed to mimic human intelligence to perform tasks like learning, problem-solving, and
         decision-making."/>      
</div>
<h3 className="mt-20 text-center font-bold font-serif text-2xl">Why Choose US ?</h3>

<div className="flex flex-row flex-wrap items-center"> 
  <Choose name="Expert Faculty" images={Mern} description="Learn from top educators with years of experience."/>
  <Choose name="Comprehensive Study Materials" images={Mern} description="Access high-quality notes, quizzes,and mock tests."/>
    <Choose name="24/7 Doubt Support" images={Mern} description="Get your queries resolved instantly by experts."/>
</div>

<div className="flex flex-col items-center">
  <LastCard name='"Thanks to this teaching, I secured a top placement"' description="- Anjali Sharma"/>
    <LastCard name='"The best mentors and resources helped me master MERN stack development!"' description="- Rahul Verma"/>
</div>
</>
  )
}

export default Home
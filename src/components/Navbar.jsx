import React from 'react';
import Logo from '../assets/logo.png';



function Navbar() {
  return (
  <div className="bg-blue-600 flex min-width:100%  ">

    <div className="text-white  flex   flex-col md:flex-row md:items-center items-start text-xl md:p-2 font-serif font-semibold ">
      <img src={Logo} className="w-20 absolute left-[-20px]  top-[-8px]  "/>
      <a href="#Home" className='md:mx-12 mx-10 mt-2 md:mt-auto  mb-2 md:mb-auto'>SkillWindow</a>

      <a href="#Home" className=' md:mx-10 mx-2  '>Home</a>
      <a href="#Course" className=' md:mx-10 mx-2 ' >Course</a>
      <a herf="#About" className=' md:mx-10 mx-2 ' >About</a>
      <a href="#DPP" className=' md:mx-10 mx-2 '>DPP</a>
      <a href="#" className=' md:mx-10 mx-2 '>Login</a>
    </div>
    
    </div>


  


         
  );
}

export default Navbar;

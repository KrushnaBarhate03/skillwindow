import React from 'react';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="bg-blue-600 p-2 flex items-center relative">
      {/* Logo + Title */}
      
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <a href="#" className="text-white font-serif font-bold text-xl">
          SkillWindow
        </a>
      </div>

      {/* Nav links */}
      <div className="ml-10 flex space-x-8">
        
        {/* Dropdown Menu */}
        <div className="relative group">
          <a
            href="#"
            className="text-white font-serif font-bold text-xl hover:text-gray-200"
          >
            FrontEnd
          </a>

          {/* Hidden dropdown, appears on hover */}
          <div className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg mt-2 w-40">
            <a href="#" className="px-4 py-2 hover:bg-gray-200">HTML</a>
            <a href="#" className="px-4 py-2 hover:bg-gray-200">CSS</a>
            <a href="#" className="px-4 py-2 hover:bg-gray-200">JavaScript</a>
            <a href="#" className="px-4 py-2 hover:bg-gray-200">ReactJS</a>
          </div>
        </div>

        <a href="#" className="text-white font-serif font-bold text-xl hover:text-gray-200">BackEnd</a>
        <a href="#" className="text-white font-serif font-bold text-xl hover:text-gray-200">Programming</a>
        <a href="#" className="text-white font-serif font-bold text-xl hover:text-gray-200">Others</a>
        <a href="#" className="text-white font-serif font-bold text-xl hover:text-gray-200">Blogs</a>
      </div>
    </div>
  );
}

export default Navbar;

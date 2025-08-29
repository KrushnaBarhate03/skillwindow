import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-blue-600 mt-20  flex justify-evenly flex-col  md:flex-row py-10">
        {/* Contact Us */}
        <div className="text-center font-bold mt-8 text-white font-serif text-2xl">
          Contact Us
          <p className="text-white text-sm">A.Nagar Savedi Shiv Complex Nagar</p>
          <p className="text-white text-sm">Email: info@skillWindow@gmail.com</p>
          <p className="text-white text-sm">Phone: +91 9856786644</p>
        </div>

        {/* Quick Links */}
        <div className="text-center font-bold mt-8 text-white font-serif text-2xl">
          Quick Links
          <p className="text-white text-sm">Courses</p>
          <p className="text-white text-sm">About</p>
          <p className="text-white text-sm">Login</p>
        </div>

        {/* Follow Us */}
        <div className="text-center font-bold mt-8 text-white font-serif text-2xl">
          Follow Us
          <p className="text-white text-sm">Facebook</p>
          <p className="text-white text-sm">Instagram</p>
          <p className="text-white text-sm">LinkedIn</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 bg-blue-600 pb-3 pt-2">
        <p className="text-center text-gray-500 font-serif font-semibold text-sm">
          © 2025 SkillWindow. All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default Footer

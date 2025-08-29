import React from 'react'

function LastCard({description ,name}) {
  return (
    <div className="bg-white   shadow-xl/30 w-80 h-40 md:w-140 md:ml-18 ml-7 md:h-33 mt-15 border-t-4 border-blue-500 rounded-xl">

            {/* <img src={images} className="w-8 m-auto mt-8 "/> */}

            <h4 className="text-blue-500 font-serif font-bold text-center mt-4  text-lg md:text-2xl">{name} </h4>

            <h5 className='font-serif text-blue-500 text-sm font-semibold text-center mt-5'>{description}</h5>
            </div> 
  )
}

export default LastCard
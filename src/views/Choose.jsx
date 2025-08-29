import React from 'react'

function Choose({name,description,images}) {
  return (
   <div className="bg-white   shadow-xl/30  w-80 md:ml-18 ml-5 h-50 mt-15 border-t-4 border-blue-500 rounded-xl">

            <img src={images} className="w-8 m-auto mt-8 "/>

            <h4 className="text-blue-500 font-serif font-bold text-center mt-4 text-1xl">{name} </h4>

            <h5 className='font-serif text-center mt-5'>{description}</h5>
            </div> 
    
  )
}

export default Choose
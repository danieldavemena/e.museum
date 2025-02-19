
import React from 'react'

const homepage = () => {

  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 w-svw flex items-center flex-col '>
        <div className='flex flex-row gap-5 '>
          <h1 className="banner-font text-gray-500 text-6xl tracking-wider">Welcome to </h1>
          <h1 className="banner-font text-gray-200 text-6xl tracking-wider">E.Museum</h1>
        </div>
        <h1 className="banner-font text-gray-500 text-6xl tracking-wider">Your Digital Art Gallery</h1>
        <p className='topbar-font text-gray-600 text-2xl mt-5'>
          Share your artistic side, be creative, claim your spotlight
        </p>
        <div className='flex flex-row gap-[1.5em] [&>*]:transition-all [&>*]:duration-[200ms] ease-in-out topbar-font text-[1.25em] mt-5'>
          <button className='rounded-xl transform hover:-translate-y-[3px] bg-white px-[25px] py-2'>Create Artwork</button>
          <button className='rounded-xl transform hover:-translate-y-[3px] bg-gray-900 px-[25px] py-2 text-white'>Discover Gallery</button>
        </div>
      </div>
      <div className='card-container group absolute top-[80%] flex items-center w-svw flex-col ' >
        <div className="card-4 absolute shadow-md shadow-gray-600 transform -rotate-[3deg] bg-gray-300 h-96 w-72 rounded-xl transition-all duration-[400ms] ease-in-out group-hover:-translate-x-[300px] group-hover:translate-y-[65px] group-hover:-rotate-[17deg]" >
        </div>
        <div className="card-3 absolute shadow-md shadow-gray-600 transform rotate-[1deg] bg-gray-300 h-96 w-72 rounded-xl transition-all duration-[400ms] ease-in-out group-hover:translate-x-[300px] group-hover:translate-y-[65px] group-hover:rotate-[17deg]" >
        </div>
        <div className="card-2 absolute shadow-md shadow-gray-600 transform rotate-[2deg] bg-gray-400 h-96 w-72 rounded-xl transition-all duration-300 ease-in-out group-hover:translate-x-[150px] group-hover:translate-y-[20px] group-hover:rotate-[10deg]" >
        </div>
        <div className="card-1 absolute shadow-md shadow-gray-600 transform -rotate-[4deg] bg-gray-400 h-96 w-72 rounded-xl transition-all duration-300 ease-in-out group-hover:-translate-x-[150px] group-hover:translate-y-[20px] group-hover:-rotate-[10deg]">
          
        </div>
        <div className="card absolute shadow-md shadow-gray-600 bg-gray-300 h-96 w-72 rounded-lg transition-all duration-300 ease-in-out group-hover:-translate-y-[10px] ">
          
        </div>
        
      </div>
    </div>
  )
}

export default homepage

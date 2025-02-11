import React from 'react'

const homepage = () => {

  return (
    <div className='w-screen overflow-x-hidden'>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 w-svw flex items-center flex-col '>
        <div className='flex flex-row gap-5 '>
          <h1 className="banner-font text-gray-500 text-6xl tracking-wider">Welcome to </h1>
          <h1 className="banner-font text-gray-200 text-6xl tracking-wider">Brand:</h1>
        </div>
        <h1 className="banner-font text-gray-500 text-6xl tracking-wider">A Description to Brand</h1>
      </div>
      <div className='card-container absolute top-[67%] flex items-center w-svw flex-col'>
        <div className="card-2 absolute transform bg-gray-400 h-96 w-72 rounded-lg" onMouseEnter={() => {}} style={{}}>
          
        </div>
        <div className="card-1 absolute transform bg-gray-400 h-96 w-72 rounded-lg" style={{}}>
          
        </div>
        <div className="card absolute bg-gray-300 h-96 w-72 rounded-lg">
          
        </div>
        
      </div>
    </div>
  )
}

export default homepage
import React from 'react'

const Topbar = () => {
  return (

      <div className="topbar-font text-xl h-20 px-12 flex w-screen items-center justify-center">
        <div className="flex text-white ml-0 mr-auto gap-8">
    
          <nav className="flex justify-center gap-8">
            <a href="#"><h3>Discover</h3></a>
            <a href="#"><h3>Exhibits</h3></a>
            <a href="#"><h3>Artists</h3></a>
            <a href="#"><h3 className='animate'>Contribute</h3></a>
          </nav>
        </div>
        <div className="flex text-white flex-row gap-3">
          <div className="flex flex-row gap-2 px-4 py-2 bg-gray-900 rounded-3xl">
            <h3>Item</h3>
          </div>
          <div className="flex flex-row gap-2 px-4 py-2 bg-grey-800 rounded-3xl">
            <h3>Item</h3>
          </div>
          <div className="flex flex-row gap-2 px-4 py-2 bg-grey-800 rounded-3xl">
            <h3>Item</h3>
          </div>
        </div>
      </div>

  )
}

export default Topbar

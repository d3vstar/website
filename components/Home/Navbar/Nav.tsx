import React from 'react'

const Nav = () => {
  return (
    <div className='w-full transition-all duration-200 h-[12vh] z-[1000]'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}
            <h1 className='text-xl md:text-2x1 font-bold'>
                <span className='text-3xl md:text-4x1 text-green-800'>KAI</span>
                <span className='text-3xl md:text-4x1 text-green-600'>ZEN</span>
            </h1>
        </div>
    </div>

  )
}

export default Nav
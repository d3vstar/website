import { navLinks } from '@/constant/Constant'
import Link from 'next/link';
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
            { /* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (<Link href={link.url} key={link.id}>
                        <p className='nav__link'>{link.label}</p>
                    </Link>);
                })}
            </div>
        </div>
    </div>

  )
}

export default Nav
"use client";
import { navLinks } from '@/constant/Constant'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: ()=>void
}

const Nav = ({openNav}:Props) => {

    const [navBg, setNavBg] = useState(false);

useEffect(() => {
    const handler = () => {
        if(window.scrollY >= 90) setNavBg(true);
        if(window.scrollY < 90) setNavBg(false);
    }

    window.addEventListener('scroll', handler);

    return () => {
        window.removeEventListener('scroll', handler);
    }

}, []);

  return (
    <div className={` fixed ${navBg ? ' bg-white shadow-md' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}
            <Image
                src="/logo_academy_light.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                />
            {/*
            <h1 className='text-xl md:text-2x1 font-bold'>
                <span className='text-3xl md:text-4x1 text-green-800'>KAI</span>
                <span className='text-3xl md:text-4x1 text-green-600'>ZEN</span>
            </h1>
            */}
            { /* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (<Link href={link.url} key={link.id}>
                        <p className='nav__link'>{link.label}</p>
                    </Link>);
                })}
            </div>

            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                <button className='md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-green-700 hover:bg-green-900 transition-all duration-900 rounded-full'>Join Now!</button>
            </div>

            {/* Burger menu */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
        </div>
    </div>

  )
}

export default Nav
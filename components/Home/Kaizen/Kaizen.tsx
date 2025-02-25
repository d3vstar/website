import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Kaizen = () => {
  return (
    <div className='w-full h-screen bg-[#f7f6fb]'>
         {/* className='w-full pt-[2vh] md:pt-[1vh]  h-screen bg-[#f7f6fb]' */}
        <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Text content */}
                <div>
                    {/* Heading */}
                    <h1 className='text-5xl font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                        <p><span className='underline'>ACADEMIA</span></p>
                        <span className='text-7xl md:text-7xl text-green-800'>KAI</span>
                        <span className='text-7xl md:text-7xl text-green-600'>ZEN</span>
                    </h1>

                    {/* Image Content */}
                    <div className='flex justify-center md:block sm:block lg:hidden'>
                        <Image className='cursor-pointer block mx-auto' src='/logo_academy_light.svg' alt='Logo Karate Academy KAIZEN' width={400} height={400} />
                    </div>

                    {/* Description */}
                    <div className='relative inset-x-0 mb-10'>
                        <p className='text-center'>
                            Formar una <span className='font-bold text-green-800'>voluntad indomable</span> sobre la base del <span className='font-bold text-green-800'>respeto</span>, la <span>disciplina</span> y el <span>sacrificio</span> 
                            nos ayuda a <span className='font-bold text-green-800'>enfrentar con carácter</span> los <span className='font-bold text-green-800'>desafíos de la vida</span>.
                        </p>
                    </div>
                    {/* Bottom Box */}
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadown-md flex items-center space-x-3 bg-white'>
                        <span className='text-xs sm:text-sm text-right'>
                            Para mayor información sobre nuestra academia de artes marciales solicita una clase de evaluación
                        </span>
                        <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-green-900 hover:bg-green-700 md:text-base sm:text-s text-xs text-white'>
                        <Link href="#subscription-form">Solicitar</Link>
                        </div>
                        
                    </div>
                    <div className='flex mt-8 mb-8 items-center justify-center space-x-4'>
                        <Link href="https://www.instagram.com/karatearaucania" target='_blank'>
                            <Image src="/ig.svg" alt="Instagram" width={80} height={80} className='object-contain' />
                        </Link>
                        <Link href="https://wa.me/c/56958005529" target='_blank'>
                            <Image src="/wb.svg" alt="Whatsapp" width={80} height={80} className='object-contain' />
                        </Link>
                        <Link href="https://maps.app.goo.gl/ETErqYh7WJMoCsPRA" target='_blank'>
                            <Image src="/maps.svg" alt="Google Maps" width={90} height={90} className='relative object-contain bottom-1' />
                        </Link>
                    </div>
                </div>
                {/* Image Content */}
                <div className='hidden lg:block'>
                    <Image className='cursor-pointer' src='/logo_academy_light.svg' alt='Logo Karate Academy KAIZEN' width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kaizen
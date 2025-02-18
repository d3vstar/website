import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Kaizen = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Text content */}
                <div>
                    {/* Heading */}
                    <h1 className='text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                        <p><span className='underline'>ACADEMIA</span></p>
                        <span className='text-7xl md:text-7xl text-green-800'>KAI</span>
                        <span className='text-7xl md:text-7xl text-green-600'>ZEN</span>
                    </h1>
                    {/* Description */}
                    
                    <div className='relative inset-x-0 bottom-4'>
                    <p className='text-center'>
                        Formar una voluntad indomable sobre la base del respeto, la disciplina y el sacrificio nos ayuda a enfrentar con carácter los desafíos de la vida...
                    </p>
                    </div>
                    {/* Bottom Box */}
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadown-md flex items-center space-x-3 bg-white'>
                        <span className='text-xs sm:text-sm text-right'>
                            Solicita información sobre nuestra academia de artes marciales
                        </span>
                        <div>
                        <Link href="https://wa.me/c/56958005529" target='_blank'><Image src='/WhatsApp.svg' alt='Whatsapp Academia de artes marciales KAIZEN' width={80} height={80} /></Link>
                        </div>
                        
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
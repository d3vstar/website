import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Kaizen = () => {
  return (
    <div className='w-full h-screen content-center'>
        <section id='section-home'>
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
                        <p className='text-center text-green-800'>
                            Formar una <span className='font-bold'>voluntad indomable</span> sobre la base del <span className='font-bold'>respeto</span>, la <span className='font-bold'>disciplina</span> y el <span className='font-bold'>sacrificio </span> 
                            nos ayuda a <span className='font-bold'>enfrentar con carácter</span> los <span className='font-bold'>desafíos de la vida</span>.
                        </p>
                    </div>
                    {/* More Information */}
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadown-md flex items-center space-x-3 bg-[#aaffb5]'>
                        <span className='text-xs sm:text-sm text-right text-green-900'>
                            Para mayor información sobre nuestra academia de artes marciales solicita una clase de evaluación
                        </span>
                        <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-green-900 hover:bg-green-700 md:text-base sm:text-s text-xs text-white'>
                        <Link href="#section-request-subscription">Solicitar</Link>
                        </div>
                        
                    </div>
                    <div className='flex mt-8 mb-8 items-center justify-center space-x-4'>
                        <Link href="https://www.instagram.com/karatearaucania" target='_blank'>
                            <Image src="/ig.svg" alt="Instagram" width={80} height={80} className='object-contain animate-none delay-0' />
                        </Link>
                        <Link href="https://wa.me/c/56958005529" target='_blank'>
                            <Image src="/wb.svg" alt="Whatsapp" width={80} height={80} className='object-contain animate-bounce delay-1000' />
                        </Link>
                        <Link href="https://maps.app.goo.gl/ETErqYh7WJMoCsPRA" target='_blank'>
                            <Image src="/maps.svg" alt="Google Maps" width={90} height={90} className='relative object-contain bottom-1 animate-none delay-0' />
                        </Link>
                    </div>
                </div>
                {/* Image Content */}
                <div className='hidden lg:block'>
                    <Image className='cursor-pointer' src='/logo_academy_light.svg' alt='Logo Karate Academy KAIZEN' width={700} height={700} />
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Kaizen
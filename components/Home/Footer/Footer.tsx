import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full my-20 text-green-800'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 mx-8'>
            <div>
                <h2 className='font-bold md:leading-[3rem] lg:leading-[3.5rem] text-left'>
                    <span className='text-xl text-green-800'>LINKS DE INTERÉS</span>
                </h2>

                <ul className='space-y-3'>
                    <li><a href="#section-home">ACADEMIA</a></li>
                    <li><a href="#section-review">EXPERIENCIAS</a></li>
                    <li><a href="#section-request-subscription">CLASE DE EVALUACIÓN</a></li>
                    <li><a href="#section-request-subscription">INSTAGRAM: @karatearaucania</a></li>
                    <li><a href="#section-request-subscription">WHATSAPP: +56 9 5800 5529</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-3xl font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                    <p><span className='underline'>ACADEMIA</span></p>
                    <span className='text-5xl md:text-5xl text-green-800'>KAI</span>
                    <span className='text-5xl md:text-5xl text-green-600'>ZEN</span>
                </h1>
                {/* Image Content */}
                <div className='flex justify-center md:block sm:block lg:block'>
                    <Image className='cursor-pointer block mx-auto' src='/logo_academy_light.svg' alt='Logo Karate Academy KAIZEN' width={200} height={200} />
                </div>
                
                
            </div>
            <div>
                <h2 className='font-bold md:leading-[3rem] lg:leading-[3.5rem] text-right'>
                    <span className='text-xl text-green-800'>INFORMACIÓN DE CONTACTO</span>
                </h2>

                <ul className='text-right space-y-6'>
                    <li>
                        <a href="#section-home" target='_blank'>
                            <span className='font-bold'>UBICACIÓN</span>
                            <p>Santa Teresa #1095,</p>
                            <p>Temuco, Región de la Araucanía, Chile.</p>
                        </a>
                    </li>
                    <li>
                        <a href="#section-review" target='_blank'>
                            <span className='font-bold'>TELEFONO</span>
                            <p>+56 9 5800 5529</p>
                        </a>
                    </li>
                    <li>
                        <a href="#section-review" target='_blank'>
                            <span className='font-bold'>CORREO</span>
                            <p>hola@karatearaucania.cl</p>
                        </a>
                    </li>
                    <li>
                        <a href="#section-request-subscription" target='_blank'>
                            <span className='font-bold'>HORARIOS</span>
                            <p>Lunes a Viernes</p>
                            <p>18:30hrs a 21:00hrs</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
        {/* Description */}
        <div className='relative inset-x-0 mb-10'>
            <p className='text-center text-green-800'>
                Formar una <span className='font-bold'>voluntad indomable</span> sobre la base del <span className='font-bold'>respeto</span>, la <span className='font-bold'>disciplina</span> y el <span className='font-bold'>sacrificio </span> 
                nos ayuda a <span className='font-bold'>enfrentar con carácter</span> los <span className='font-bold'>desafíos de la vida</span>.
            </p>
            <hr className=" mx-8 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className='text-center text-green-800'> Copyright &copy; 2024 dojouniverse. Todos los derechos reservados</p>
        </div>
    </div>
  )
}

export default Footer
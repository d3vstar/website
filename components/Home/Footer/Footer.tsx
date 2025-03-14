import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaFaceGrin, FaHouse, FaMapLocationDot, FaPersonRunning, FaPhoneVolume, FaRegClock, FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full my-20 text-green-800 content-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 mx-8 text-center'>
            <div className='mb-8'>
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
           
            {/* Contact info */}
            <div className='mb-8'>
                <h2 className='font-bold md:leading-[3rem] lg:leading-[3.5rem]'>
                    <span className='text-xl text-green-800'>INFORMACIÓN DE CONTACTO</span>
                </h2>
                <div className='flex justify-center'>
                    <ul className='space-y-6'>
                        <li>
                            <span className='font-bold'>
                                <FaRegClock className='mr-2 inline-block w-3.5' />
                                HORARIOS
                            </span>
                            <p>Lunes a Viernes</p>
                            <p>18:30hrs a 21:00hrs</p>
                        </li>
                        <li>
                            <a href="https://wa.me/c/56958005529" target='_blank'>
                                <span className='font-bold'>
                                    <FaPhoneVolume className='mr-2 inline-block w-3.5' />
                                    TELEFONO
                                </span>
                                <p>+56 9 5800 5529</p>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hola@karatearaucania.cl" target='_blank'>
                                <span className='font-bold'>
                                    <FaEnvelope className='mr-2 inline-block w-3.5' />
                                    CORREO
                                </span>
                                <p>hola@karatearaucania.cl</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/ETErqYh7WJMoCsPRA" target='_blank'>
                                <span className='font-bold'>
                                    <FaMapLocationDot className='mr-2 inline-block w-3.5' />
                                    UBICACIÓN 
                                </span>
                                <p>Santa Teresa #1095,</p>
                                <p>Temuco, Región de la Araucanía, Chile.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Site map */}
            <div>
                <h2 className='font-bold md:leading-[3rem] lg:leading-[3.5rem]'>
                    <span className='text-xl text-green-800'>LINKS DE INTERÉS</span>
                </h2>
                <div className='flex justify-center'>
                    <ul className='space-y-3 text-left'>
                        <li>
                            <a href="#section-home">
                            <FaHouse className='mr-2 inline-block w-3.5' />
                            ACADEMIA
                            </a>
                        </li>
                        <li>
                            <a href="#section-review">
                                <FaFaceGrin className='mr-2 inline-block w-3.5' />
                                EXPERIENCIAS
                            </a>
                        </li>
                        <li>
                            <a href="#section-request-subscription">
                                <FaPersonRunning className='mr-2 inline-block w-3.5' />
                                CLASE DE EVALUACIÓN
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/karatearaucania" target='_blank'>
                                <FaSquareInstagram className='mr-2 inline-block w-3.5' />
                                @karatearaucania
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/c/56958005529" target='_blank'>
                                <FaSquareWhatsapp className='mr-2 inline-block w-3.5' />
                                +56 9 5800 5529
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        {/* Description */}
        <div className='relative inset-x-0 mb-4'>
            <hr className="m-10 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <p className='text-center text-green-800'> Copyright &copy; 2024 dojouniverse. Todos los derechos reservados</p>
        </div>
    </div>
  )
}

export default Footer
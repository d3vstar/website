"use client"
import React, { useActionState, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { subscriptionRequestAction } from '../actions';

import { 
  FaEnvelope, 
  FaUserLarge, 
  FaAddressCard, 
  FaCakeCandles,
  FaUserGroup,
  FaPhone,
  FaPeopleArrows,
  FaPersonCircleCheck
 } from 'react-icons/fa6'

const Registration = () => {
  const [state, action] = useActionState(subscriptionRequestAction, {});
  const [showParentFields, setShowParentFields] = useState(true);

  const toggleSlide = (event: any) => {
    // event.preventDefault();
    setShowParentFields(!event.target.checked);
  }

  return (
    <div className='w-full min-h-screen bg-[#f7f6fb]'>
      
      {/* Form Content */}
      <div className='bg-white shadow-md rounded px-8 lg:mx-8 md:mx-8 pt-6 pb-8 mb-4'>
        {/* Form header and text */}
        <div>
          <h2 className='text-3xl font-bold mb-6 text-center'>
            <span>
              Clase de evaluación
            </span>
          </h2>
          <p className='text-justify my-4'>
              <span>
              Es una instancia donde el apoderado tendrá la oportunidad de conocer la filosofía sobre la cual se trabaja en la academia y por otra parte el estudiante validará su curiosidad con un entrenamiento práctico, en donde se evaluarán diferentes aspectos por el instructor a cargo.
              </span>
          </p>
          <p className='text-justify my-4'>
              <span>
              Completa el siguiente formulario y nos pondremos en contacto a la brevedad para agendar una clase de evaluación.
            </span>
          </p>
        </div>

      <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
        <form action={action}>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-20'>

          {/* Form - sección estudiante */}
          <div>
            <h2 className='font-bold my-4'>DATOS ESTUDIANTE</h2>
            <label htmlFor="student_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaUserLarge className='mr-2 inline-block w-3.5' />
              Nombre
            </label>
            <div className='mb-6'>
              <input type="text" id='student_fullname' name='student_fullname' maxLength={80} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
              {state.errors?.student_fullname && <span className='text-red-600 font-bold'>{state.errors.student_fullname}</span>}
            </div>

            <label htmlFor="student_id" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaAddressCard className='mr-2 inline-block w-3.5' />
              Run
            </label>
            <div className='mb-6'>
              <input type="text" id='student_id' name='student_id' maxLength={12} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Cédula de Identidad. Ej.: 20.101.566-4' />
              {state.errors?.student_id && <span className='text-red-600 font-bold'>{state.errors.student_id}</span>}
            </div>

            <label htmlFor="student_birthday" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaCakeCandles className='mr-2 inline-block w-3.5' />
              Fecha de Nacimiento
            </label>
            <div className='mb-6'>
              <input type="text" id='student_birthday' name='student_birthday' maxLength={10} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='dia/mes/año. Ejemplo: 06/12/2010' />
              {state.errors?.student_birthday && <span className='text-red-600 font-bold'>{state.errors.student_birthday}</span>}
            </div>

            <label htmlFor="student_email" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaEnvelope className='mr-2 inline-block w-3.5' />
              Email
            </label>
            <div className='mb-6'>
              <input type="text" id='student_email' name='student_email' maxLength={50} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='ejemplo@correo.cl' />
              {state.errors?.student_email && <span className='text-red-600 font-bold'>{state.errors.student_email}</span>}
            </div>

            <label htmlFor="student_phone" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPhone className='mr-2 inline-block w-3.5' />
              Teléfono
            </label>
            <div className='mb-6'>
              <input type="text" id='student_phone' name='student_phone' maxLength={9} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
              {state.errors?.student_phone && <span className='text-red-600 font-bold'>{state.errors.student_phone}</span>}
            </div>
            <div className='my-4'>
              <input onClick={toggleSlide} type="checkbox" id='parent_needed' name='parent_needed' className='mr-1 accent-green-700 appearance-none w-4 h-4 bg-white border-2 rounded border-white outline checked:bg-green-600 '/>
              Soy mayor de edad y seré mi propio apoderado.
            </div>
          </div>
            
          {/* Form - sección apoderado */}
          <div>
            <h2 className='font-bold my-4'>DATOS APODERADO</h2>
            <div className={`overflow-hidden transition-all duration-2000 ${showParentFields ? 'max-h-full' : 'max-h-0'}`}>
              <label htmlFor="parent_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaUserGroup className='mr-2 inline-block w-3.5' />
                Nombre Apoderado
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_fullname' name='parent_fullname' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
                {state.errors?.parent_fullname && <span className='text-red-600 font-bold'>{state.errors.parent_fullname}</span>}
              </div>

              <label htmlFor="parent_id" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaAddressCard className='mr-2 inline-block w-3.5' />
                Run
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_id' name='parent_id' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Cédula de Identidad. Ej.: 20.101.566-4' />
                {state.errors?.parent_id && <span className='text-red-600 font-bold'>{state.errors.parent_id}</span>}
              </div>

              <label htmlFor="parent_email" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaEnvelope className='mr-2 inline-block w-3.5' />
                Email
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_email' name='parent_email' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='ejemplo@correo.cl' />
                {state.errors?.parent_email && <span className='text-red-600 font-bold'>{state.errors.parent_email}</span>}
              </div>

              <label htmlFor="parent_phone" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaPhone className='mr-2 inline-block w-3.5' />
                Teléfono
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_phone' name='parent_phone' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
                {state.errors?.parent_phone && <span className='text-red-600 font-bold'>{state.errors.parent_phone}</span>}
              </div>
            </div>
          </div>

          {/* Form - sección urgencias */}  
          <div>
            <h2 className='font-bold my-4'>Contacto de emergencia</h2>

            <label htmlFor="emergency_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPersonCircleCheck className='mr-2 inline-block w-3.5' />
              Nombre Contacto
            </label>
            <div className='mb-6'>
              <input type="text" id='emergency_fullname' name='emergency_fullname' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
              {state.errors?.emergency_fullname && <span className='text-red-600 font-bold'>{state.errors.emergency_fullname}</span>}
            </div>

            <label htmlFor="emergency_relationship_type" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPeopleArrows className='mr-2 inline-block w-3.5' />
              Tipo de parentesco
            </label>
            <div className='mb-6'>
              <input type="text" id='emergency_relationship_type' name='emergency_relationship_type' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='indicar parentesco. Ej.: Tía, Abuelita, etc.' />
              {state.errors?.emergency_relationship_type && <span className='text-red-600 font-bold'>{state.errors.emergency_relationship_type}</span>}
            </div>

            <label htmlFor="emergency_phone" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPhone className='mr-2 inline-block w-3.5' />
              Teléfono
            </label>
            <div className='mb-6'>
              <input type="text" id='emergency_phone' name='emergency_phone' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
              {state.errors?.emergency_phone && <span className='text-red-600 font-bold'>{state.errors.emergency_phone}</span>}
            </div>
            
          </div>
          </div>

          <div className='flex items-center justify-center'>
            <button type='submit' className='bg-green-900 hover:bg-green-700 my-4 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 w-full md:w-48 lg:w-60 '>
              Enviar
            </button>
          </div>
          <div className='flex mt-8 mb-8 items-center justify-center text-xl'>
            
            <Link href="https://wa.me/c/56958005529" target='_blank' className='text-gray-600 hover:underline'>
              <Image src="/Whatsapp.svg" alt="Whatsapp" width={150} height={150} className='object-contain' />
            </Link>

            <Link href="https://wa.me/c/56958005529" target='_blank' className='text-gray-600 hover:underline'>
              <span>Tienes problemas con el formulario? escribenos a nuestro whatsapp <span className='font-extrabold'>+56958005529</span></span>
            </Link>

          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Registration
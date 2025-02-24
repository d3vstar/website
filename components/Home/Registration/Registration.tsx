"use client"
import React, { useActionState } from 'react'
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

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w.md'>
        <h2 className='text-3xl font-bold mb-6 text-cente'>
          <span>
            Clase de evaluación
          </span>
          <p>
            <span className='text-lg'>
            En esta instancia el apoderado tendrá la oportunidad de conocer la filosofía sobre la cual se trabaja en la academia y por otra parte el estudiante validará su curiosidad con un entrenamiento práctico, en donde se evaluarán diferentes aspectos por el instructor a cargo.
          </span>
          </p>
        </h2>

        <form action={action}>
          <div className='mb-6'>
            <p>Datos Alumno</p>
            <label htmlFor="student_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaUserLarge className='mr-2 inline-block w-3.5' />
              Nombre
            </label>
            <div>
              <input type="text" id='student_fullname' name='student_fullname' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
              {state.errors?.student_fullname && <span>{state.errors.student_fullname}</span>}
            </div>

            <label htmlFor="student_id" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaAddressCard className='mr-2 inline-block w-3.5' />
              Run
            </label>
            <div>
              <input type="text" id='student_id' name='student_id' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Documento de Identificación. Ejemplo: 20.101.566-4' />
            </div>

            <label htmlFor="student_birthday" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaCakeCandles className='mr-2 inline-block w-3.5' />
              Fecha de Nacimiento
            </label>
            <div>
              <input type="text" id='student_birthday' name='student_birthday' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Formato: dia/mes/año. Ejemplo: 06/12/2010' />
            </div>

            <label htmlFor="student_email" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaEnvelope className='mr-2 inline-block w-3.5' />
              Email
            </label>
            <div>
              <input type="text" id='student_email' name='student_email' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='ejemplo@correo.cl' />
            </div>

            <label htmlFor="student_phone" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPhone className='mr-2 inline-block w-3.5' />
              Teléfono
            </label>
            <div>
              <input type="text" id='student_phone' name='student_phone' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
            </div>

            <p>Datos Apoderado</p>
            [y/n] Soy mayor de edad y seré mi propio apoderado.

            <label htmlFor="parent_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaUserGroup className='mr-2 inline-block w-3.5' />
              Nombre Apoderado
            </label>
            <div>
              <input type="text" id='parent_fullname' name='parent_fullname' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Ingrese su correo' />
            </div>

            <label htmlFor="parent_id" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaAddressCard className='mr-2 inline-block w-3.5' />
              Run
            </label>
            <div>
              <input type="text" id='parent_id' name='parent_id' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Documento de Identificación. Ejemplo: 20.101.566-4' />
            </div>

            <label htmlFor="parent_email" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaEnvelope className='mr-2 inline-block w-3.5' />
              Email
            </label>
            <div>
              <input type="text" id='parent_email' name='parent_email' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='ejemplo@correo.cl' />
            </div>

            <label htmlFor="parent_phone" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPhone className='mr-2 inline-block w-3.5' />
              Teléfono
            </label>
            <div>
              <input type="text" id='parent_phone' name='parent_phone' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
            </div>

            <p>Contacto de emergencia</p>

            <label htmlFor="emergency_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPersonCircleCheck className='mr-2 inline-block w-3.5' />
              Nombre Contacto
            </label>
            <div>
              <input type="text" id='emergency_fullname' name='emergency_fullname' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Ingrese su correo' />
            </div>

            <label htmlFor="emergency_relationship_type" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPeopleArrows className='mr-2 inline-block w-3.5' />
              Tipo de parentesco
            </label>
            <div>
              <input type="text" id='emergency_relationship_type' name='emergency_relationship_type' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Documento de Identificación. Ejemplo: 20.101.566-4' />
            </div>

            <label htmlFor="emergency_phone" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPhone className='mr-2 inline-block w-3.5' />
              Teléfono
            </label>
            <div>
              <input type="text" id='emergency_phone' name='emergency_phone' autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
            </div>
            <div className='flex items-center justify-center'>
              <button type='submit' className='bg-green-900 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 w-full'>
                Enviar
              </button>
            </div>
            <div className='items-center mt-4'>
              <Link href="https://wa.me/c/56958005529" target='_blank' className='text-gray-600 hover:underline'>
              <span>Tienes problemas con el formulario? hablanos acá</span>
              <Image src="/Whatsapp.svg" alt="Whatsapp" width={50} height={50} className='object-contain' />
              </Link>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Registration
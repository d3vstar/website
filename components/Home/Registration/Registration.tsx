"use client"
import React, { useActionState, useEffect, useState } from 'react'
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
  FaPersonCircleCheck,
  FaFaceGrinStars
 } from 'react-icons/fa6'

const Registration = () => {
  const [state, action, isLoading] = useActionState(subscriptionRequestAction, {
        student_motivation: '',
        student_fullname: '',
        student_birthday: '',
        student_id: '',
        student_email: '',
        student_phone: '',
        is_parent: false,
        parent_fullname: '',
        parent_id: '',
        parent_email: '',
        parent_phone: '',
        emergency_fullname: '',
        emergency_relationship_type: '',
        emergency_phone: '', 
        success: ''
  });
  const [showParentFields, setShowParentFields] = useState(true);
  const [formTriggered, setFormTriggered] = useState(false);

  useEffect(() => {

    if(isLoading) {
      setFormTriggered(true);
    }

    if(state.success === 'validation') {
      setFormTriggered(false);
    }
    
    return () => {
      if(state.success === 'validation') {
        state.success = '';
      }
    }
  }, [isLoading, state.success]);

  // useEffect(() => {
  //   if(!formTriggered) {
  //     state.student_motivation = '';

  //     state = {
  //       student_motivation: '',
  //       student_fullname: '',
  //       student_birthday: '',
  //       student_id: '',
  //       student_email: '',
  //       student_phone: '',
  //       is_parent: false,
  //       parent_fullname: '',
  //       parent_id: '',
  //       parent_email: '',
  //       parent_phone: '',
  //       emergency_fullname: '',
  //       emergency_relationship_type: '',
  //       emergency_phone: '', 
  //       success: ''
  //     }
  //   }

  //     return () => {

  //     }
  // }, [formTriggered, state])

  const toggleSlide = (event: any) => {
    // event.preventDefault();
    setShowParentFields(!event.target.checked);
  }

  const restoreInitialFormTriggeredOnSuccess = () => {
    setFormTriggered(false);

    state.student_motivation = '';
    state.student_fullname = '';
    state.student_birthday = '';
    state.student_id = '';
    state.student_email = '';
    state.student_phone = '';
    state.is_parent = false;
    state.parent_fullname = '';
    state.parent_id = '';
    state.parent_email = '';
    state.parent_phone = '';
    state.emergency_fullname = '';
    state.emergency_relationship_type = '';
    state.emergency_phone = '';
    state.success = '';
  }

  const restoreInitialFormTriggeredOnFail = () => {
    setFormTriggered(false);
    state.success = '';
  }

  console.log(`formTriggered: ${formTriggered} - isLoading: ${isLoading} - state.success: ${state.success}`);

  return (
    <div className='w-full min-h-screen text-green-800'>
      <section id="subscription-form">
      {/* Form Content */}
      <div className='bg-[#f8fff9] shadow-md rounded px-8 lg:mx-8 md:mx-8 pt-6 pb-8 mb-4'>
        {/* Form header and text */}
        <div>
          <h2 className=' font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
          <span className='text-2xl md:text-2xl text-green-800'>CLASE DE EVALUACIÓN</span>
          </h2>
          <p className='text-justify my-4'>
              <span>
              Es una instancia donde tendrán la oportunidad de conocer la filosofía sobre la cual 
              se trabaja en la academia y por otra parte el postulante podrá validar su curiosidad en 
              un entrenamiento práctico, en donde se evaluarán diferentes aspectos por el instructor 
              a cargo.
              </span>
          </p>
          <p className='text-justify my-4'>
              <span>
              Para agendar una clase de evaluación necesitamos un poco de información sobre ti y 
              por eso te pedimos completar el siguiente formulario y así preparar correctamente 
              tu primera experiencia con nosotros.
            </span>
          </p>
        </div>
        
      <div className='relative'>
        { 
        formTriggered &&
          <div className='absolute flex w-full h-full justify-center items-center bg-green-100 gap-4'>
              <div className='w-full justify-center md:mx-20 p-10 bg-green-300 items-center grid-cols-1 gap-6'>
              
              { /* Message - Sending request  */}
            { state.success != 'true' && state.success != 'fail' &&
                <div className='w-full flex justify-center items-center gap-6'>
                  <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>

                  <div className='flex justify-center items-center'>
                    <h2 className=' font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                      <span className='text-xl md:text-2xl text-green-900'>ENVIANDO </span>
                      <span className='text-xl md:text-2xl text-green-700'> POSTULACIÓN</span>
                    </h2>
                  </div>
                </div>
            }
              { /* Message - Request Received successfully  */}
            {  state.success == 'true' &&
              <div>
                <div className='w-full flex justify-center items-center gap-6'>
                  <div className='block'>
                    <Image className='cursor-pointer' src='/logo_academy_dark.svg' alt='Logo Karate Academy KAIZEN' width={100} height={100} />
                  </div>
                  <div className='justify-center'>
                    <h2 className='font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                      <span className='text-xl md:text-2xl text-green-900'>POSTULACIÓN </span>
                      <span className='text-xl md:text-2xl text-green-700'> RECIBIDA</span>
                    </h2>
                    <div className='text-center my-2'>
                      <span className='font-bold'>Nos contactaremos a la brevedad</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <button type='button' onClick={restoreInitialFormTriggeredOnSuccess} className={`bg-green-900 hover:bg-green-700 my-4 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 w-full`}>
                    OK
                  </button>
                </div>
              </div>
            }

            { /* Message - Request Received Failed  */}
            {  state.success == 'fail' &&
              <div>
                <div className='w-full flex justify-center items-center gap-6'>
                  <div className='block'>
                    <Image className='cursor-pointer' src='/logo_academy_dark.svg' alt='Logo Karate Academy KAIZEN' width={100} height={100} />
                  </div>
                  <div className='justify-center'>
                    <h2 className='font-bold md:leading-[3rem] lg:leading-[3.5rem] text-center'>
                      <span className='text-xl md:text-2xl text-green-900'>ERROR EN </span>
                      <span className='text-xl md:text-2xl text-green-700'> ENVÍO</span>
                    </h2>
                    <div className='text-center my-2'>
                      <span className='font-bold'>Al parecer tenemos problemas con nuestro formulario</span>
                    </div>
                    <div className='text-center my-2'>
                      <span className='font-bold'>Por favor escribenos a nuestro Whatsapp +56958005529</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <button type='button' onClick={restoreInitialFormTriggeredOnSuccess} className={`bg-green-900 hover:bg-green-700 my-4 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 w-full`}>
                    OK
                  </button>
                </div>
              </div>
            }
            </div>
          </div>
        }
      <div className={`flex justify-center flex-col h-full mx-auto ${isLoading ? "opacity-20 pointer-events-none": ""}`}>
        <form action={action}>
          <div className='m-8'>
            <label htmlFor="student_motivation" className='block text-gray-700 text-sm font-bold mb-6'>
              <FaFaceGrinStars className='mr-2 inline-block w-3.5' />
              ¿ CUÁL ES SU MOTIVACIÓN PARA CONTACTARNOS ?
            </label>
            <div className='mb-6'>
              <textarea id='student_motivation' name='student_motivation' defaultValue={state.student_motivation} rows={4} maxLength={200} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Cuéntanos, ¿qué esperas encontrar en nuestra academia?' />
              {state.errors?.student_motivation && <span className='text-red-600 font-bold'>{state.errors.student_motivation}</span>}
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 mx-8'>

          {/* Form - sección estudiante */}
          <div>
            <h2 className='font-bold my-4'>DATOS ESTUDIANTE</h2>
            <label htmlFor="student_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaUserLarge className='mr-2 inline-block w-3.5' />
              Nombre
            </label>
            <div className='mb-6'>
              <input type="text" id='student_fullname' name='student_fullname' defaultValue={state.student_fullname} maxLength={80} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
              {state.errors?.student_fullname && <span className='text-red-600 font-bold'>{state.errors.student_fullname}</span>}
            </div>

            <label htmlFor="student_id" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaAddressCard className='mr-2 inline-block w-3.5' />
              Run
            </label>
            <div className='mb-6'>
              <input type="text" id='student_id' name='student_id' defaultValue={state.student_id} maxLength={12} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Cédula de Identidad. Ej.: 20.101.566-4' />
              {state.errors?.student_id && <span className='text-red-600 font-bold'>{state.errors.student_id}</span>}
            </div>

            <label htmlFor="student_birthday" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaCakeCandles className='mr-2 inline-block w-3.5' />
              Fecha de Nacimiento
            </label>
            <div className='mb-6'>
              <input type="date" id='student_birthday' name='student_birthday' defaultValue={state.student_birthday} maxLength={10} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='dia/mes/año. Ejemplo: 06/12/2010' />
              {state.errors?.student_birthday && <span className='text-red-600 font-bold'>{state.errors.student_birthday}</span>}
            </div>

            {/* Si es mayor de edad se le pregunta por su correo y teléfono */}
            <div className={`overflow-hidden transition-all duration-2000 ${!showParentFields ? 'max-h-full' : 'max-h-0'}`}>
              <label htmlFor="student_email" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaEnvelope className='mr-2 inline-block w-3.5' />
                Email
              </label>
              <div className='mb-6'>
                <input type="email" id='student_email' name='student_email' defaultValue={state.student_email} maxLength={50} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='ejemplo@correo.cl' />
                {state.errors?.student_email && <span className='text-red-600 font-bold'>{state.errors.student_email}</span>}
              </div>

              <label htmlFor="student_phone" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaPhone className='mr-2 inline-block w-3.5' />
                Teléfono
              </label>
              <div className='mb-6'>
                <input type="text" id='student_phone' name='student_phone' defaultValue={state.student_phone} maxLength={15} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
                {state.errors?.student_phone && <span className='text-red-600 font-bold'>{state.errors.student_phone}</span>}
              </div>
            </div>
            <div className='my-4'>
              <input onClick={toggleSlide} type="checkbox" id='is_parent' name='is_parent' defaultChecked={state.is_parent} className='mr-1 accent-green-700 appearance-none w-4 h-4 bg-white border-2 rounded border-white outline checked:bg-green-600 '/>
              Soy mayor de edad y seré mi propio apoderado.
            </div>
          </div>
            
          {/* Form - sección apoderado */}
          <div>
          <div className={`overflow-hidden transition-all duration-2000 ${showParentFields ? 'max-h-full' : 'max-h-0'}`}>
            <h2 className='font-bold my-4'>DATOS APODERADO</h2>
              <label htmlFor="parent_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaUserGroup className='mr-2 inline-block w-3.5' />
                Nombre Apoderado
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_fullname' name='parent_fullname' defaultValue={state.parent_fullname}  autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
                {state.errors?.parent_fullname && <span className='text-red-600 font-bold'>{state.errors.parent_fullname}</span>}
              </div>

              <label htmlFor="parent_id" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaAddressCard className='mr-2 inline-block w-3.5' />
                Run
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_id' name='parent_id' defaultValue={state.parent_id}  autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Cédula de Identidad. Ej.: 20.101.566-4' />
                {state.errors?.parent_id && <span className='text-red-600 font-bold'>{state.errors.parent_id}</span>}
              </div>

              <label htmlFor="parent_email" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaEnvelope className='mr-2 inline-block w-3.5' />
                Email
              </label>
              <div className='mb-6'>
                <input type="email" id='parent_email' name='parent_email' defaultValue={state.parent_email}  autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='ejemplo@correo.cl' />
                {state.errors?.parent_email && <span className='text-red-600 font-bold'>{state.errors.parent_email}</span>}
              </div>

              <label htmlFor="parent_phone" className='block text-gray-700 text-sm font-bold mb-2'>
                <FaPhone className='mr-2 inline-block w-3.5' />
                Teléfono
              </label>
              <div className='mb-6'>
                <input type="text" id='parent_phone' name='parent_phone' defaultValue={state.parent_phone}  maxLength={15} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
                {state.errors?.parent_phone && <span className='text-red-600 font-bold'>{state.errors.parent_phone}</span>}
              </div>
            </div>
          </div>

          {/* Form - sección urgencias */}  
          <div>
            <h2 className='font-bold my-4'>CONTACTO DE EMERGENCIA</h2>

            <label htmlFor="emergency_fullname" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPersonCircleCheck className='mr-2 inline-block w-3.5' />
              Nombre Contacto
            </label>
            <div className='mb-6'>
              <input type="text" id='emergency_fullname' name='emergency_fullname' defaultValue={state.emergency_fullname}  autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='Nombre completo' />
              {state.errors?.emergency_fullname && <span className='text-red-600 font-bold'>{state.errors.emergency_fullname}</span>}
            </div>

            <label htmlFor="emergency_relationship_type" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPeopleArrows className='mr-2 inline-block w-3.5' />
              Tipo de parentesco
            </label>
            <div className='mb-6'>
              <input type="text" id='emergency_relationship_type' name='emergency_relationship_type' defaultValue={state.emergency_relationship_type}  autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='indicar parentesco. Ej.: Tía, Abuelita, etc.' />
              {state.errors?.emergency_relationship_type && <span className='text-red-600 font-bold'>{state.errors.emergency_relationship_type}</span>}
            </div>

            <label htmlFor="emergency_phone" className='block text-gray-700 text-sm font-bold mb-2'>
              <FaPhone className='mr-2 inline-block w-3.5' />
              Teléfono
            </label>
            <div className='mb-6'>
              <input type="text" id='emergency_phone' name='emergency_phone' defaultValue={state.emergency_phone}  maxLength={15} autoComplete='off' className='shadown appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2' placeholder='+56998005529' />
              {state.errors?.emergency_phone && <span className='text-red-600 font-bold'>{state.errors.emergency_phone}</span>}
            </div>
            
          </div>
          </div>

          <div className='flex items-center justify-center'>
            <button type='submit' className={`bg-green-900 hover:bg-green-700 my-4 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 w-full md:w-48 lg:w-60 ${isLoading ? "disabled": ""}`}>
              Enviar
            </button>
          </div>
        </form>
      </div>

      </div>

      <div className='flex mb-8 items-center justify-center text-xl'>      
        <Link href="https://wa.me/c/56958005529" target='_blank' className='text-gray-600 hover:underline'>
          <Image src="/Whatsapp.svg" alt="Whatsapp" width={150} height={150} className='object-contain' />
        </Link>

        <Link href="https://wa.me/c/56958005529" target='_blank' className='text-gray-600 hover:underline'>
          <span>¿Tienes problemas con el formulario? escribenos a nuestro whatsapp <span className='font-extrabold'>+56958005529</span></span>
        </Link>
      </div>
    </div>
    </section>
  </div>
  )
}

export default Registration
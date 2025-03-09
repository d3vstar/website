import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa6';

type Props = {
    student_name: string;
    student_description: string;
    parent_name: string;
    parent_description: string;
    statement: string;
    image: string;
}

const ReviewCard = ( {student_name, student_description, parent_name, parent_description, statement, image}:Props) => {
  return (
    <div className='bg-[#f8fff9] shadow-md rounded px-8 lg:mx-8 md:mx-8 pt-6 pb-8 mb-8'>
        
        <div className='bg-green-100 grid grid-cols-1 lg:grid-cols-5 gap-6'>
            <div className='col-span-3 order-2 lg:order-1 mx-4'>
                <div className='mt-4'>
                    <FaQuoteLeft className='text-green-800' />
                </div>
                <p className='mt-8 text-green-800 text-justify text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]'>
                    {statement}
                </p>
                <div className='justify-items-end'>
                    <FaQuoteRight className='text-green-800' />
                </div>
                <div className='flex items-center mt-6'>
                    <FaStar className='text-green-500 w-6 h-6' />
                    <FaStar className='text-green-500 w-6 h-6' />
                    <FaStar className='text-green-500 w-6 h-6' />
                    <FaStar className='text-green-500 w-6 h-6' />
                    <FaStar className='text-green-500 w-6 h-6' />
                </div>
                <h1 className='text-xl  text-green-800 font-semibold mt-8'>{parent_name}</h1>
                <p className='mt-2 text-lg text-green-600 font-medium mb-6'>{parent_description}</p>
            </div>
            {/* Image */}
            <div className='bg-green-700 col-span-2 mx-auto order-1 lg:order-2 md:align-top items-start text-center'>
                <h1 className='text-xl font-semibold text-green-300 mt-8'>{student_name}</h1>
                <p className='mt-2 text-lg  text-green-500 font-medium mb-6'>{student_description}</p>
                <Image src={`/${image}`} alt={student_name} width={400} height={400} className='rounded shadow-sm' />
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
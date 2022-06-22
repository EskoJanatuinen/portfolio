import Image from 'next/image';
import React from 'react';
import circuit_img from '../public/assets/projects/Circuit.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const circuit = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={circuit_img}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>CIRCuIT Project</h2>
          <h3>Circular Construction in Regenerative Cities</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p className='mt-4'>
            EU project promoting circular economy in the construction industry.
          </p>
          <p className='my-4'>
            Coming soon...
          </p>
          <a
            href='https://www.circuit-project.eu/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Circuit</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Summary</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coming soon...
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coming soon...
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coming soon...
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coming soon...
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default circuit;
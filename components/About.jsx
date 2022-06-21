import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 sm:p-0 flex items-center py-16'> {/*p-8 sm:p-0 LAITA TÄÄMÄ MUIHIN OSIOIHIN MYÖS! */}
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 py-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / Coming soon...
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

          <Image className='rounded-xl' src='/../public/assets/Esko_Janatuinen.jpg' width='670' height='1000' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
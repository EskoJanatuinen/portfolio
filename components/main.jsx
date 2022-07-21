import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center max-h-[1240px]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S MAKE DIGITAL SALES GROW
          </p>
          <h1>
          <div className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Esko</span></div>
          
          <div className='py-2 text-gray-700'>An eCommerce Professional</div></h1>
          <p className='p-6 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m running and developing a neat, eco-friendly and fast-growing&nbsp;
            <a className='cursor-pointer underline hover:animate-pulse'
              href='https://kauppa.kierratyskeskus.fi/'
              target='_blank'
              rel='noreferrer noopener'
            >online store</a> 
              &nbsp;with my team. I strive to combine all my knowledge in digital sales, UI/UX design, logistics and (last but not least) 
              human behavior to create the best possible customer experience online. I love data and like to play with it! 
              My play tools include e.g. Python, SQL, GraphQL, PowerBI, and a curious mind with the ability to wonder. 🌹
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/esko-janatuinen/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a 
              href='https://github.com/EskoJanatuinen' 
              target='_blank' rel="noreferrer">
              <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
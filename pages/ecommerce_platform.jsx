import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import webstore from '../public/assets/projects/webstore2.png'

const ecommerce_platform = () => {
  return (
    <div id='test' className='w-full md:h-screen p-6 py-16'>
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]">
                <div className="col-span-2 pt-10 md:pt-16 px-6 md:pb-14"><h1 className='py-4'>New eCommerce platform</h1></div>
                <div className="p-6">
                    <h2 className='md:pt-10'>Introduction</h2>
                    <p className='py-8 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="col-start-2 px-6 pb-6 md:p-10 md:-m-10">
                    <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl md:rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <a href='https://kauppa.kierratyskeskus.fi/' target='_blank' rel='noreferrer noopener'>
                          <Image src={webstore} className='rounded-lg md:rounded-full' alt='Webshop front page' title='Kierrätyskeskus online store' />
                        </a>
                    </div>
                </div>
                <div className="col-span-2 p-6 md:-mt-16">
                <h2 className='py-4'>The Project</h2>
                    <p className='py-4 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className='text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className='pt-4 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col-span-2 p-6">
                  <h2 className='pb-4'>Project review</h2>
                    <p className='py-4 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link href='/#projects'>
                      <button className='underline cursor-pointer hover:animate-pulse'>back_nextjs</button>
                    </Link>
                    <br />
                    <a href='/#projects' className='underline cursor-pointer hover:animate-pulse'>back_html</a>
                    <br />
                    <div>
                      <Link href='/#projects' scroll={false}><a>test</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ecommerce_platform;
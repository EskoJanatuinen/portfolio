import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const products_wizard = () => {
  return (
    <div id='test' className='w-full md:h-screen p-6 py-16'>
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]">
                <div className="col-span-2 pt-10 md:pt-16 px-6 md:pb-14"><h1 className='py-4'>New products wizard</h1></div>
                <div className="p-6">
                    <h2 className='md:pt-10'>Coming soon...</h2>
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
                      {/* <Image src={productsWizard} className='rounded-lg md:rounded-full' alt='Drawn product pictures' title='New products wizard' /> */}
                      <Image src='/assets/projects/newProducts_large.svg' 
                        height={2500} 
                        width={2500}
                        alt='Drawn produt pictures' 
                        title='New products wizard'  
                        priority 
                      />
                    </div>
                </div>
                <div className="col-span-2 p-6">
                    <div>
                      <Link href='/#projects' scroll={false}><a className='underline cursor-pointer hover:animate-pulse'>back</a></Link> {/* scroll={false} is required for anchor links to work correctly */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default products_wizard;
import Head from 'next/head'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';


const products_wizard = () => {
  return (
    <div>
      <Head>
        <title>Esko Janatuinen | New products wizard</title>
        <meta name="description" content="Building our own customized tool for listing new products online." />
        <meta name="keywords" content="eCommerce" />
        <meta name="author" content="Esko Janatuinen" />
      </Head>
      <div id='test' className='w-full md:h-screen sm:p-6 py-16'>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]'>
            <div className='col-span-2 pt-10 md:pt-16 px-6 md:pb-14'><h1 className='py-4'>New products wizard</h1></div>
            <div className='p-6'>
              <h2 className='md:pt-10 md:pb-4'>Introduction</h2>
              <p className='py-8 lg:pr-10 text-gray-600'>
                Selling second-hand products online is challenging since there is only one piece of each product. The prerequisite 
                for profitability is making the process for listing new products as fast and lean as possible. Especially given 
                the lower selling prices on used items.
              </p>
              <p className='lg:pr-10 text-gray-600'>
                The UIs for listing new products on eCommerce platforms aren&#39;t generally optimized for speed, as it is not essential 
                for ordinary online stores. To overcome this deficiency, we decided to automate our process by building a customized 
                tool for adding new products.
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
            <div className='col-span-2 p-6 lg:-mt-12'>
              <h2 className='py-4 md:pb-4'>Coming soon...</h2>
              <p className='pt-8 text-gray-600 italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='px-6'>
              <p className='text-gray-600 italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='flex items-center justify-center px-6 md:-mt-6 md:mr-4'>
                      <iframe src='https://player.vimeo.com/video/318711230' 
                        title="A demo of our early prototype" 
                        loading="lazy" 
                        width="640" 
                        height="360" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                      >
                      </iframe>
                    </div>
            <div className='col-span-2 pb-4 pl-6 sm:pl-10 md:mt-6 lg:mt-0 xl:-mt-10'>
              <p className='font-bold pb-2'>Summary</p>
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
              <div className='px-6 pt-6 sm:pb-10'>
                <Link href='/#projects' scroll={false}><a className='underline cursor-pointer hover:animate-pulse'>back</a></Link> 
                {/* scroll={false} is required for anchor links to work correctly */}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products_wizard;
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
        <meta name="keywords" content="Ecommerce" />
        <meta name="author" content="Esko Janatuinen" />
      </Head>
      <div id='test' className='w-full md:h-screen sm:p-6 py-16'>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]'>
            <div className='col-span-2 pt-10 md:pt-16 px-6 md:pb-14'><h1 className='py-4'>New products wizard</h1></div>
            <div className='p-6'>
              <h2 className='md:pt-10 md:pb-4'>Introduction</h2>
              <p className='py-8 lg:pr-10 text-gray-600'>
                Selling second-hand products online is challenging since each item is unique. The prerequisite 
                for success is making the process of listing new products as fast and lean as possible. Especially if you consider 
                the lower selling prices on used items.
              </p>
              <p className='lg:pr-10 text-gray-600'>
                The user interfaces for listing new products on ecommerce platforms aren&#39;t generally optimized for speed, as that is not essential 
                for regular online stores. To overcome this deficiency, we decided to build our own customized tool for adding new products.
              </p>
            </div>
            <div className="col-start-2 px-6 pb-6 md:p-10 md:-m-10">
              <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl md:rounded-full flex items-center justify-center sm:p-4 hover:scale-105 ease-in duration-300'>
                <Image src='/assets/projects/newProducts_optimized.svg' 
                  height={2500} 
                  width={2500}
                  alt='Drawn produt pictures' 
                  title='New products wizard'  
                  priority 
                />
              </div>
            </div>
            <div className='col-span-2 p-6 lg:-mt-12'>
              <h2 className='py-4 md:pb-4'>The Project</h2>
              <p className='pt-8 text-gray-600'>
              Before building a production-ready application, we wanted to test our approach with a smaller-scale demo. This project was carried out 
              in collaboration with&nbsp;
                <a className='cursor-pointer underline hover:animate-pulse'
                href='https://futurice.com/'
                target='_blank'
                rel='noreferrer noopener'
                >Futurice
                </a>
              &nbsp;and a student group from Haaga-Helia. During this process, we carefully analyzed our workflow, listed various bottlenecks, and looked 
              for possible opportunities to automate tasks. At the end of four intensive sprints, we produced a working prototype showing what our 
              process for adding items could look like. Our concept utilized templates with default values for different product types and handled product 
              photos and measuring weight. You can read more about our demo project&nbsp; 
                <a className='cursor-pointer underline hover:animate-pulse'
                href='https://spiceprogram.org/chilicorn-fund/case-kierratyskeskus.html'
                target='_blank'
                rel='noreferrer noopener'
                >here
                </a>.        
              </p>
            </div>
            <div className='px-6'>
              <p className='text-gray-600'>
              Our current application, which is into production and integrated to our online store, was based on the ideas we tested with Futurice. However, 
              our tool has more features and allows us to handle all our inventory management through it. The application has been vital for our fast growth 
              and is still actively developed as we search for new ways to make our workflow more efficient. With the new products tool, we have increased our 
              products per day more than fivefold.
              </p>
            </div>
            <div className='flex items-center justify-center px-6 md:-mt-6 md:mr-4'>
              <iframe src='https://player.vimeo.com/video/318711230' 
                alt="A demo of our early prototype" 
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
                <RiRadioButtonFill className='pr-1' /> Tested the ideas first with a demo
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Increased products/day 5x
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> A crucial driver for our growth
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
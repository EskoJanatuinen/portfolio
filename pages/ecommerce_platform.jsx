import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import webstore from '../public/assets/projects/webstore3.png'


const ecommerce_platform = () => {
  return (
    <div id='test' className='w-full md:h-screen p-6 py-16'>
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]">
                <div className="col-span-2 pt-10 md:pt-16 px-6 md:pb-14"><h1 className='py-4'>New eCommerce platform</h1></div>
                <div className="p-6">
                    <h2 className='md:pt-10'>Introduction</h2>
                    <p className='py-8 lg:pr-10 text-gray-600'>
                    In 2020, the support for Magento 1 was ending, which meant we had to change our eCommerce platform. 
                    At the time, we had accumulated 5 years of experience in online sales, and it was clear that we were 
                    continuing with that path. However, as we sell second-hand items, our workflow differs greatly from 
                    the average online shop&#39;s, and finding a well-suited platform is not an easy task.  
                    </p>
                    <p className='lg:pr-10 text-gray-600'>
                    I was responsible for documenting the technical requirements, reviewing suitable platform 
                    options and organizing the competitive tenders. After a thorough evaluation process, we chose 
                    Nethit Omnisell to be our next platform. 
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
                  Migrating from Magento to Nethit proved to be a challenging process. Just getting the product 
                  data out from the old database and into the new platform was complicated, since we had already 
                  more than 100 000 products at the time. Also, this was in 2020, when the covid pandemic became 
                  global, and we had to close down most of our operations. My team was effectively reduced to 
                  me, one graphic designer and a copywriter. However, we were able to build the new platform in 
                  about four months. The launch itself was successful, without any significant technical setbacks.
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
                  <div className='py-4'>
                    <Image src='/assets/projects/Sales_2015-2021.svg' height={296} width={400} alt='Yearly sales chart' title='Sales growth during 2015-2021'/>
                  </div>
                  <div>
                    <Link href='/#projects' scroll={false}><a className='underline cursor-pointer hover:animate-pulse'>back</a></Link> 
                    {/* scroll={false} is required for anchor links to work correctly */}
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ecommerce_platform;
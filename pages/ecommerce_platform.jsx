import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import webstore from '../public/assets/projects/webstore3.png'
import { RiRadioButtonFill } from 'react-icons/ri';


const ecommerce_platform = () => {
  return (
    <div id='test' className='w-full md:h-screen sm:p-6 py-16'>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]'>
            <div className='col-span-2 pt-10 md:pt-16 px-6 md:pb-14'><h1 className='py-4'>New eCommerce platform</h1></div>
            <div className='p-6'>
                <h2 className='md:pt-10 md:pb-4'>Introduction</h2>
                <p className='py-8 lg:pr-10 text-gray-600'>
                  In 2020, the support for Magento 1 was ending, which meant we had to change our eCommerce platform. 
                  At the time, we had accumulated 5 years of experience in online sales, and it was clear that we were 
                  continuing with that path. However, as we sell second-hand items, our workflow differs greatly from 
                  the average online shop&#39;s, and finding a well-suited platform can be difficult.
                </p>
                <p className='lg:pr-10 text-gray-600'>
                  I was responsible for documenting the technical requirements, reviewing potential platform 
                  options and organizing the competitive tenders. After a thorough evaluation process, we chose 
                  Nethit Omnisell to be our next platform. 
                </p>
            </div>
            <div className='col-start-2 px-6 pb-6 md:p-10 md:-m-8'>
                <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl md:rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <a href='https://kauppa.kierratyskeskus.fi/' target='_blank' rel='noreferrer noopener'>
                      <Image src={webstore} className='rounded-lg md:rounded-full' alt='Webshop front page' title='Kierrätyskeskus online store' />
                    </a>
                </div>
            </div>
            <div className='col-span-2 p-6 lg:-mt-12'>
            <h2 className='py-4 md:pb-4'>The Project</h2>
              <p className='pt-8 text-gray-600'>
                Migrating from Magento to Nethit proved to be a challenging process. Just getting the product 
                data out from the old database into the new platform was complicated, since we already had more 
                than 100 000 products at the time. Also, this was in 2020, when the coronavirus pandemic became 
                global, and we had to close down most of our operations. My team was effectively reduced to 
                me, one graphic designer and a copywriter. However, we were able to build the new platform in 
                about four months. The launch itself was successful, without any significant technical setbacks.
              </p>
            </div>
            <div className='px-6'>
              <p className='text-gray-600'>
                Changing an eCommerce platform is always a risk, but so far, we have been satisfied with the results. 
                The impact on sales has been positive overall. Although, we did notice a significant drop in traffic, 
                despite all the measures taken to maintain the domain rankings (transferring all relevant content, 
                extensive redirects, SEO audits, etc.). At the same time, our conversion rate increased substantially, 
                resulting in better sales figures in general. In just two years we have already sold more on the current 
                platform than we did in five years with Magento.
              </p>
            </div>
            <div className='col-start-2 flex items-start md:justify-center px-6 md:px-0 py-8 md:py-0'>
              <Image src='/assets/projects/Sales_2015-2021.svg' height={296} width={400} alt='Yearly sales chart' title='Yearly sales 2015-2021'/>
            </div>
            <div className='col-span-2 pb-4 pl-8 md:mt-6 lg:mt-0 xl:-mt-10'>
              <p className='font-bold pb-2'>Summary</p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Significant positive impact on sales
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Average yearly sales growth: 47% &rarr; 93%
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Conversion rate up 1,3 percentage points
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Noticeable drop in traffic (recovered later)
              </p>
            </div>
              <div className='px-6 pt-6 sm:pb-10'>
                <Link href='/#projects' scroll={false}><a className='underline cursor-pointer hover:animate-pulse'>back</a></Link> 
                {/* scroll={false} is required for anchor links to work correctly */}
              </div>
            </div>
        </div>
    </div>
  );
};

export default ecommerce_platform;
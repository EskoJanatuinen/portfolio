import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import esko from '../public/assets/Esko_Janatuinen.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 py-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='pt-4 pb-8'>Who I Am</h2>

          <p className='py-2 text-gray-600'>
            I&#39;ve spent the last 7 years running a unique online store selling 
            second-hand items and environmental/circular economy services to consumers. 
            Selling used, one-of-the-kind items online is not a simple mission. Yet, 
            my team has achieved an average annual sales growth of 65 percent while maintaining profitability.
          </p>

          <p className='py-2 text-gray-600'>
            I&#39;ve learned through first-hand experience what is essential in digital sales. 
            From the grassroots tasks like customer support or picking and packing orders to the concepts 
            like strategic planning, digital marketing, content creation and technical SEO.
          </p>
            
          <p className='py-2 text-gray-600'>
            My academic background is in economics and business management, but I know my way around technical solutions also. In my current role, 
            I&#39;ve led several large-scale software development projects. Recent examples include changing our 
            eCommerce platform from Magento to Nethit Omnisell and building our own customized tool for creating 
            new products to the product database.
          </p>

          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer hover:animate-pulse'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

        <Image src={esko} className='rounded-lg' alt='A man holding an online store shipment' title='Esko Janatuinen' />
        </div>
      </div>
    </div>
  );
};

export default About;
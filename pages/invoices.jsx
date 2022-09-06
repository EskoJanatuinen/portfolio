import Head from 'next/head'
import Image from 'next/image';
import React from 'react';
import invoices_img from '../public/assets/projects/Invoices.png';
import Link from 'next/link';


const invoices = () => {
  return (
    <div>
    <Head>
      <title>Esko Janatuinen | Invoices script</title> 
      <meta name="description" content="Building A Python script that processes invoices from our logistics providers." />
      <meta name="keywords" content="eCommerce, Python, invoice automation" />
      <meta name="author" content="Esko Janatuinen" />
    </Head>
    <div id='test' className='w-full md:h-screen p-6 py-16'>
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]">
                <div className="col-span-2 pt-10 md:pt-16 px-6 md:pb-14"><h1 className='py-4'>Invoices script</h1></div>
                <div className="p-6">
                    <h2 className='md:pt-10'>Coming soon...</h2>
                    <p className='py-8 text-gray-600'>
                    Coming soon...
                    </p>
                </div>
                <div className="col-start-2 px-6 pb-6 md:p-10 md:-m-10">
                    <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl  md:rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <a href='https://github.com/EskoJanatuinen/invoice_reports' target='_blank' rel='noreferrer noopener'>
                          <Image src={invoices_img} className='rounded-lg md:rounded-full' 
                            alt='Invoices logo' 
                            title='A script for processing invoices' 
                            priority
                          />
                        </a>
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
    </div>
  );
};

export default invoices;
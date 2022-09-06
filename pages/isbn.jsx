import Head from 'next/head'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import isbnImg from '../public/assets/projects/ISBN_img.svg'


const isbn = () => {
  return (
    <div>
    <Head>
      <title>Esko Janatuinen | ISBN search tool</title>
      <meta name="description" content="Building a Python script to optimize our process for listing books for sale." />
      <meta name="keywords" content="eCommerce, Python, ISBN" />
      <meta name="author" content="Esko Janatuinen" />
    </Head>
    <div id='test' className='w-full md:h-screen p-6 py-16'>
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]">
                <div className="col-span-2 pt-10 md:pt-16 px-6 md:pb-14"><h1 className='py-4'>ISBN search tool</h1></div>
                <div className="p-6">
                    <h2 className='md:pt-10'>Coming soon...</h2>
                    <p className='py-8 text-gray-600'>
                    Coming soon...
                    </p>
                </div>
                <div className="col-start-2 px-6 pb-6 md:p-10 md:-m-10">
                    <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <a href='https://github.com/EskoJanatuinen/isbn_search' target='_blank' rel='noreferrer noopener' className='m-8'>
                           <Image src={isbnImg} height={444} width={600} alt='ISBN code' title='ISBN search tool' />
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

export default isbn;
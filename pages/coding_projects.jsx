import Head from 'next/head'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import coding from '../public/assets/projects/Coding_projects.svg'
import isbn_search from '../public/assets/projects/ISBN_search.png'
import invoices from '../public/assets/projects/Invoices.svg'
import { RiRadioButtonFill } from 'react-icons/ri';


const coding_projects = () => {
  return (
    <div>
      <Head>
        <title>Esko Janatuinen | Coding projects</title>
        <meta name="description" content="Work-related coding projects." />
        <meta name="keywords" content="Coding, Python, ISBN, Ecommerce" />
        <meta name="author" content="Esko Janatuinen" />
      </Head>
      <div id='test' className='w-full md:h-screen sm:p-6 py-16'>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='md:grid md:grid-cols-2 gap-4 w-full max-w-[1240px]'>
            <div className='col-span-2 pt-10 md:pt-16 px-6 md:pb-14'><h1 className='py-4'>Own coding projects</h1></div>
            <div className='p-6'>
              <h2 className='md:pt-10 md:pb-4'>Introduction</h2>
              <p className='py-8 lg:pr-10 text-gray-600'>
                Here is a brief introduction to some of my coding projects. I am, by no means, a professional programmer, but I have studied coding for 
                a few years now (in university and on my own), and I am excited about every opportunity I get to use my skills at work. I am most familiar 
                with Java as it was the first language we learned in university. However, most of my work-related projects are written in Python, as it has 
                excellent libraries for data manipulation. Naturally, SQL skills also come in handy in my line of work.
              </p>
              <p className='lg:pr-10 text-gray-600 pb-6'>
                Learning the basics of programming has proved to be very useful in the software development projects I lead. It makes it easier to 
                discuss with the coders and to understand the technical challenges related to the projects. 
              </p>
            </div>
            <div className='col-start-2 px-6 pb-6 md:pb-20 md:p-10 md:-m-8'>
              <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl md:rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <a href='https://github.com/eskojanatuinen' target='_blank' rel='noreferrer noopener'>
                    <Image src={coding} className='rounded-lg md:rounded-full' 
                      alt='Link to GitHub' 
                      title='GitHub'
                      priority 
                    />
                </a>
              </div>
            </div>
            <h2 className='px-6 col-span-2 py-14 pt-20 md:pb-12'>Inventory app for books</h2>
            <div className='md:grid md:grid-cols-3 gap-4 col-span-2'>
              <div className='px-12 pb-12 hover:scale-105 ease-in duration-300'>
                <a href='https://github.com/eskojanatuinen/books' target='_blank' rel='noreferrer noopener'>
                  <Image src={isbn_search} height={389} width={238} alt='Screenshot of an app scanning ISBNs' title='Inventory app for books'/>
                </a>
              </div>
              <div className='col-start-2 col-span-2 px-6 md:pr-20 pt-2'>
                <p className='text-gray-600'>
                  As a reuse center, our job is to find a new home for the items we get as donations. To keep the prices reasonable, we must do this 
                  as efficiently as possible. With books, we often get more copies of certain books than we can sell. This is a problem particularly 
                  in our online store where we have limited storage space available. To alleviate this problem, I created this program to optimize the 
                  sales channel for each book. It is written in Python and SQLite.
                  <br /><br />
                  The program allows scanning the book&#39;s ISBN to find out whether the book should go to the online store or physical store. This is 
                  decided based on the online store&#39;s inventory balance for the books with the same ISBN. The app also tells if the book needs a 
                  product photo or if we already have a photo for it. Additionally, the pricing history for the book is provided in case we have sold 
                  it before. Ultimately, this program saves up both time and inventory space.
                  <br /><br />
                  <text className='pl-4 pr-2'>&#8594;</text>
                  <a className='cursor-pointer underline hover:animate-pulse'
                    href='https://github.com/EskoJanatuinen/books'
                    target='_blank'
                    rel='noreferrer noopener'
                  >Code</a>
                </p>
              </div>
            </div>
            <h2 className='px-6 col-span-2 pt-20 md:pt-20'>Automated invoices processing</h2>
            <div className='px-6 pt-4'>
              <p className='text-gray-600 py-8'>
                In Finland, there are quite a lot of operators in the second-hand market. However, most of those sellers are smaller and would not 
                have the resources to build their own online store (not that many of them even wanted to). To promote the shared cause, we decided to 
                open our online store for selected partners, who also sell second-hand or upcycled products.  However, this turned out to be challenging 
                as our platform is not designed for multi-vendor purposes. One of the most complex and time-consuming tasks was to separate and allocate 
                expenses to each seller. Notably, the invoices from our logistics providers were difficult to process since there was no breakdown by 
                vendor available. 
              </p>
              <p className='text-gray-600 pb-6'>
                I solved this problem by building a script that automated the processing of invoices from the logistics providers. The program matches 
                the invoice data with the data from our orders database and produces a settlement report (Excel) as an output. The program is written 
                in Python and utilizes GraphQL for data queries. JWT authentication was also needed in this project.
              <br /><br />
              <text className='pl-4 pr-2'>&#8594;</text>
              <a className='cursor-pointer underline hover:animate-pulse'
                href='https://github.com/EskoJanatuinen/invoice_reports'
                target='_blank'
                rel='noreferrer noopener'
              >Code</a>
              </p>
            </div>
            <div className='col-start-2 flex items-start md:justify-center px-6 md:px-0 py-8 hover:scale-105 ease-in duration-300'>
              <a href='https://github.com/eskojanatuinen/invoice_reports' target='_blank' rel='noreferrer noopener'>
                <Image src={invoices} height={378} width={378} alt='Image of an invoice' title='Automated invoices processing'/>
              </a>
            </div>
            <div className='col-span-2 pb-4 pl-6 sm:pl-10 md:mt-6 lg:mt-0 xl:-mt-10'>
              <p className='font-bold pb-2 pt-20'>Summary</p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Still learning programming
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Yet, I can solve real-world problems
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> And coding is fun!
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> P.S. this website is also coded by me!
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

export default coding_projects;
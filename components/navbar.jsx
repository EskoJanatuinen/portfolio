import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import logo_b from '../public/assets/Janatuinen_logo.svg';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);  {/* !nav will toggle the value true/false when function is called */}
      };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

  return (
    <div
        style={{ backgroundColor: '#ecf0f3' }}
        className={
            shadow
            ? 'fixed w-full h-20 shadow-lg z-[100] ease-in-out duration-300'
            : 'fixed w-full h-20 z-[100]'
        }
    >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-12'>
            <Link href='/'>
                <a>
                    <div className='mt-2 hover:animate-pulse'>
                        <Image src={logo_b} alt='/' width='180' height='60' />
                    </div>
                </a>
            </Link>
        <div>
            <ul style={{ color: '#1f2937' }} className='hidden md:flex'>
                <li className='ml-10 text-sm uppercase hover:animate-pulse'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:animate-pulse'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:animate-pulse'>
                    <Link href='/#skills'>Skills</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:animate-pulse'>
                    <Link href='/#projects'>Projects</Link>
                </li>
                <li className='mr-4 ml-10 text-sm uppercase hover:animate-pulse'>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
            <div
                style={{ color: '#1f2937' }}
                onClick={handleNav}
                className='md:hidden mr-2'
            >
                <AiOutlineMenu size={25} />
            </div>
        </div>
        </div>
        <div 
            className={
                nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }
        >
        
        {/* Side Drawer Menu */}
        <div
            className={
                nav
                    ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
            }
        >
            <div>
                <div className='flex w-full items-center justify-between -my-6 -ml-4'>
                    <Image src={logo_b} width='180' height='60' alt='/' />
                    <div
                        onClick={handleNav}
                        className='-mr-9 rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'
                    >
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let&#39;s make digital sales grow</p>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Home
                            </li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                About
                            </li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Skills
                            </li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Projects
                            </li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div className='pt-20'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>
                            Let&#39;s Connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a
                                href='https://www.linkedin.com/in/esko-janatuinen/'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                            <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            </a>
                            <a
                                href='https://github.com/EskoJanatuinen'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                            <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            </a>
                            <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>
    
  );
};

export default Navbar;
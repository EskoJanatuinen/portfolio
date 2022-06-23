import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import logo_b from '../public/assets/Esko_b_540x180.png';
import logo_w from '../public/assets/Esko_w_540x180.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();
  const [logo, setLogoColor] = useState(logo_b);

  useEffect(() => {
    if (
      router.asPath === '/ecommerce_platform' ||
      router.asPath === '/products_wizard' ||
      router.asPath === '/inventory' ||
      router.asPath === '/isbn' ||
      router.asPath === '/invoices' ||
      router.asPath === '/learning_environment' ||
      router.asPath === '/circuit' ||
      router.asPath === '/portfolio'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
      setLogoColor(logo_w);
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
      setLogoColor(logo_b);
    }
  }, [router]);

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
        style={{ backgroundColor: `${navBg}` }}
        className={
            shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
            : 'fixed w-full h-20 z-[100]'
        }
    >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-12'>
            <Link href='/'>
                <a>
                    <div className='mt-2'>
                        <Image src={logo} alt='/' width='180' height='60' />
            </div>
            </a>
            </Link>
        <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                    <Link href='/#about'>About</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                    <Link href='/#skills'>Skills</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                    <Link href='/#projects'>Projects</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                    <Link href='/#contact'>Contact</Link>
                </li>
            </ul>
            <div
                style={{ color: `${linkColor}` }}
                onClick={handleNav}
                className='md:hidden'
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
                <div className='flex w-full items-center justify-end -my-4'>
                    <div
                        onClick={handleNav}
                        className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer'
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
                    <div className='pt-40'>
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
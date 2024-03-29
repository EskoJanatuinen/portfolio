import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Magento from '../public/assets/skills/magento.png';
import PowerBI from '../public/assets/skills/PowerBI.png';
import Python from '../public/assets/skills/Python.png';
import SQL from '../public/assets/skills/SQL.png';
import Google_seo from '../public/assets/skills/Google_seo.png';
import Google_analytics from '../public/assets/skills/Google_analytics.png';



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen pt-14 px-6 sm:p-6'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='pt-10 sm:pt-0 text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='md:pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8'> 
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Google_seo} width='64px' height='64px' alt='Google logo' title='Search engine optimization'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>SEO</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Google_analytics} width='64px' height='64px' alt='Google Analytics logo' title='Google Analytics'/>
              </div>
              <div className='sm:pl-3 flex flex-col items-center justify-center'>
                <h3>Google Analytics</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={PowerBI} width='64px' height='64px' alt='PowerBI logo' title='PowerBI'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>PowerBI</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Magento} width='64px' height='64px' alt='Magento logo' title='Magento'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>Magento</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={SQL} width='64px' height='64px' alt='PostgreSQL logo' title='SQL'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>SQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Python} width='64px' height='64px' alt='Python logo' title='Python'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='JavaScript logo' title='JavaScript'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Html} width='64px' height='64px' alt='HTML5 logo' title='HTML5'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='sm:pl-4 pr-1 m-auto'>
                <Image src={Css} width='64px' height='64px' alt='CSS3 logo' title='CSS3'/>
              </div>
              <div className='sm:pr-3 flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
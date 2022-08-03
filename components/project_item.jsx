import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='p-3 md:p-4 relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='py-4 sm:py-6 text-base md:text-2xl text-white tracking-wider text-center'>{title}</h3>
        <Link href={projectUrl}>
            <p className='text-center mx-2 pt-1 pb-2 sm:mx-0 sm:py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-110 ease-in duration-300'>Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem
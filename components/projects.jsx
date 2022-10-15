import React from 'react';
import webstore from '../public/assets/projects/webstore.png'
import productsWizard from '../public/assets/projects/NewProducts.png'
import coding from '../public/assets/projects/Coding_projects.svg'
import ProjectItem from './project_item';


const Projects = () => {
  return (
    <div id='projects' className='w-full pt-12 px-6'>
      <div className='max-w-[1240px] mx-auto py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>That I&apos;ve worked on</h2>
        <div className='pt-4 md:pt-8 select-none grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8'>
          
          <ProjectItem
            title='eCommerce Platform'
            backgroundImg={webstore}
            projectUrl='/ecommerce_platform'
          />

          <ProjectItem
            title='Products Wizard'
            backgroundImg={productsWizard}
            projectUrl='/products_wizard'
          />

          <ProjectItem
            title='Coding projects'
            backgroundImg={coding}
            projectUrl='/isbn'
          />

          <div className='invisible'>
            <ProjectItem
              title='Invoices Script'
              backgroundImg={coding}
              projectUrl='/invoices'
            />
          </div>
               
        </div>
      </div>
    </div>
  );
};

export default Projects;
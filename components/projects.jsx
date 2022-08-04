import React from 'react';
import webstore from '../public/assets/projects/webstore.png'
import productsWizard from '../public/assets/projects/NewProducts.png'
import inventoryTool from '../public/assets/projects/inventoryTool.png'
import isbnTool from '../public/assets/projects/ISBN_img.png'
import invoiceReports from '../public/assets/projects/Invoices.png'
import circuit from '../public/assets/projects/Circuit.png'
import ProjectItem from './project_item';



const Projects = () => {
  return (
    <div id='projects' className='w-full pt-10 px-6'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>That I&apos;ve worked on</h2>
        <div className='pt-4 md:pt-8 select-none grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8'>
          
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
            title='ISBN Search'
            backgroundImg={isbnTool}
            projectUrl='/isbn'
          />

          <ProjectItem
            title='Invoices Script'
            backgroundImg={invoiceReports}
            projectUrl='/invoices'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
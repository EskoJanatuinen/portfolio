import React from 'react';
import webstore from '../public/assets/Projects/webstore2.png'
import productsWizard from '../public/assets/Projects/NewProducts.png'
import inventoryTool from '../public/assets/Projects/inventoryTool.png'
import isbnTool from '../public/assets/Projects/ISBN_img.png'
import invoiceReports from '../public/assets/Projects/Invoices.png'
import portfolio from '../public/assets/Projects/portfolio.png'
import learning from '../public/assets/Projects/Learning.png'
import circuit from '../public/assets/Projects/Circuit.png'
import ProjectItem from './ProjectItem';



const Projects = () => {
  return (
    <div id='projects' className='w-full pt-10 px-6'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          
          <ProjectItem
            title='eCommerce Platform'
            backgroundImg={webstore}
            projectUrl='/ecommerce_platform'
            info=''
          />

          <ProjectItem
            title='Products Wizard'
            backgroundImg={productsWizard}
            projectUrl='/products_wizard'
            info=''
          />

          <ProjectItem
            title='Inventory Tool'
            backgroundImg={inventoryTool}
            projectUrl='/inventory'
            info=''
          />

          <ProjectItem
            title='ISBN Tool'
            backgroundImg={isbnTool}
            projectUrl='/isbn'
            info='Python, SQLite'
          />

          <ProjectItem
            title='Invoices Script'
            backgroundImg={invoiceReports}
            projectUrl='/invoices'
            info='Python'
          />

          <ProjectItem
            title='Learning Environment for Students'
            backgroundImg={learning}
            projectUrl='/learning_environment'
            info=''
          />

          <ProjectItem
            title='CIRCuIT Project'
            backgroundImg={circuit}
            projectUrl='/circuit'
            info=''
          />

          <ProjectItem
            title='Portfolio Website'
            backgroundImg={portfolio}
            projectUrl='/portfolio'
            info='Next.js, Tailwind'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
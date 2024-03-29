import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Contact = () => {

  return (
    <div id='contact' className='w-full h-screen px-6 flex align-middle py-16 md:py-0'>
      <div className='max-w-[800px] m-auto px-2 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] flex justify-center'>
          Contact
        </p>
        <h2 className='py-4 flex justify-center'>Get In Touch</h2>
        <p className='p-6 text-gray-600 sm:max-w-[70%] m-auto text-center md:text-lg'>
            Are you passionate about creating extraordinary online experiences? I&#39;d love to connect with you and share ideas on how to make digital sales
            {/* With link, when screen at least sm (640px) */}
            <span className='text-[#5651e5] animate-pulse hover:text-[green] hover:text-2xl hover:uppercase hover:font-extrabold hover:p-4 ease-in duration-500'>
              <a 
                className='hidden sm:inline' 
                href='https://www.linkedin.com/in/esko-janatuinen/'
                aria-label="open LinkedIn" 
                target='_blank' 
                rel='noreferrer noopener'> grow!</a>
            </span>
            {/* Without link in mobile */}
            <span className='sm:hidden text-[#5651e5] animate-pulse hover:text-[green] hover:text-2xl hover:uppercase hover:font-extrabold hover:p-4 ease-in duration-500'> grow!</span>
        </p>
        <div className='flex items-end justify-center pt-6'>
          <a
            href='https://www.linkedin.com/in/esko-janatuinen/'
            aria-label="open LinkedIn"
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href='https://github.com/EskoJanatuinen'
            aria-label="open GitHub"
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
          </a>
          <a
            href="mailto:esko.janatuinen@gmail.com"
            aria-label="send email"
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
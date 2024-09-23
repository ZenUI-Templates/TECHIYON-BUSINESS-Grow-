import { motion } from 'framer-motion';
import React from 'react';
import { footerNavigation, variants1, variants2 } from '../constant';
import brandImg from '/Logo.png';

const Footer = () => {
  return (
    <footer className='lg:pt-[150px] py-10 bg-[#161C28] pb-5 relative'>
      <div className='container overflow-hidden relative z-20'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants1}
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col items-center lg:pb-20 pb-10'
        >
          <h2 className='!text-white text-center'>
            People who are{' '}
            <span className='block leading-[1.3em]'>
              ready took these courses!
            </span>
          </h2>
          <a
            href=''
            className='btn primary_btn mt-7 !shadow-none'
          >
            Schedule demo
          </a>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants2}
          viewport={{ once: true, amount: 0.2 }}
          className='footer_widget_wrapper max-w-[1280px] mx-auto grid lg:grid-cols-4 gap-10  lg:pb-20 pb-10 sm:grid-cols-2 items-start'
        >
          <div>
            <img
              src={brandImg}
              alt='logo'
              className='w-[100px]'
            />
            <p className='text-white text-[14px] mt-5 font-Inter'>
              P2 09 Alhafeez Heights,
              <br />
              Main Blvd Lahore
            </p>
          </div>
          {footerNavigation?.map((item, index) => (
            <div key={index}>
              <span className='text-[1.375em] text-white mb-3 block font-medium font-Inter'>
                {item?.widget_title}
              </span>
              <ul className='flex flex-col gap-3'>
                {item?.links?.map((item, indexx) => (
                  <li key={indexx}>
                    <a
                      href={item?.link}
                      className='text-base text-white font-Inter font-normal'
                    >
                      {item?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <di>
            <span className='text-[1.375em] text-white mb-3 block font-Inter font-medium'>
              Get in touch
            </span>
            <address className='text-white text-base not-italic mb-3 font-Inter font-normal'>
              P2 09 Alhafeez Heights
              <br />
              Main Blvd Lahore
            </address>
            <a
              href='tel:92-300-8745564'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              className='text-white block text-base mb-3 font-Inter'
            >
              92-300-8745564
            </a>
            <a
              className='text-white block text-base font-Inter'
              href='mailto:info@techsolutions.net'
            >
              info@techsolutions.net
            </a>
          </di>
        </motion.div>
        <p className='text-center font-Inter text-base text-white'>
          Copyright @ ZenUI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import React from 'react';
import { variants3, variants4 } from '../../constant';
import card_1_img_2 from '/Hero_images/Group 1000001520.png';
import card_1_img_1 from '/Hero_images/Left images.png';

const BoostWork = () => {
  return (
    <section className='pb-10'>
      <div className='container grid lg:grid-cols-2 2xl:gap-28 lg:gap-10 gap-10 md:pt-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants3}
          viewport={{ once: true, amount: 0.5 }}
          className='left_content sm:mr-[-30px]'
        >
          <img
            src={card_1_img_1}
            alt=''
            className='w-full'
          />
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants4}
          viewport={{ once: true, amount: 0.5 }}
          className='right_content lg:mt-10'
        >
          <div>
            <span className='bg-[#E5F5EF] text-[#52BD95] px-5 lg:py-4 py-3 rounded-md lg:text-[1.125em] text-[1em] font-Inter font-medium'>
              Boost Your Work
            </span>
            <h3 className='lg:mt-10 mt-7'>Boost Your Productivity</h3>
            <p className='!font-normal mt-5 max-w-[500px]'>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded incommode. Why kept very ever home mrs. Considered
              sympathize ten uncommonly occasional assistance sufficient not.
              Letter of on become he tended active enable to. Vicinity relation
              sensible sociable surprise screened no up as.
            </p>
            <a
              href=''
              className='btn primary_btn lg:mt-10 mt-5'
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
      <div className='container grid lg:grid-cols-2 2xl:gap-28 lg:gap-10 gap-10 md:pt-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants3}
          viewport={{ once: true, amount: 0.3 }}
          className='left_content sm:mr-[-30px] max-lg:order-2 lg:mt-10'
        >
          <div>
            <span className='bg-[#E5F5EF] text-[#52BD95] px-5 lg:py-4 py-3 rounded-md lg:text-[1.125em] text-[1em] font-Inter font-medium'>
              Boost Your Work
            </span>
            <h3 className='lg:mt-10 mt-7'>Boost Your Productivity</h3>
            <p className='!font-normal mt-5 max-w-[500px]'>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded incommode. Why kept very ever home mrs. Considered
              sympathize ten uncommonly occasional assistance sufficient not.
              Letter of on become he tended active enable to. Vicinity relation
              sensible sociable surprise screened no up as.
            </p>
            <a
              href=''
              className='btn primary_btn lg:mt-10 mt-5'
            >
              Explore Features
            </a>
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants4}
          viewport={{ once: true, amount: 0.3 }}
          className='right_content max-lg:order-1'
        >
          <img
            src={card_1_img_2}
            alt=''
            className='w-full'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BoostWork;

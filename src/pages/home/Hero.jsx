import { motion } from 'framer-motion';
import React from 'react';
import { PiArrowRightFill } from 'react-icons/pi';
import { variants1, variants2 } from '../../constant';
import HeroImg3 from '/Hero_images/card (1).png';
import HeroImg1 from '/Hero_images/Card audience.png';
import HeroImg2 from '/Hero_images/card.png';
import HeroImg4 from '/Hero_images/Group 1000001510.png';

const Hero = () => {
  return (
    <section className='bg_1 pt-[200px] mb-28'>
      <div className='container flex flex-col items-center relative'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants1}
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col items-center gap-5 relative z-50 lg:mb-[-60px] mb-10'
        >
          <h1 className='xl:max-w-[870px] lg:max-w-[750px] sm:max-w-[500px] text-center capitalize max-w-[350px]'>
            We Help you to Grow Your BUSINESS
          </h1>
          <p className='text_regular xl:max-w-[700px] md:max-w-[500px] max-w-[450px]  text-center leading-relaxed'>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
          <a
            href=''
            className='btn primary_btn !text-[0.75em] tracking-[1px] flex items-center gap-3 !pr-3 !rounded-[10px] mt-3 !py-2'
          >
            GET STARTED
            <button className='size-[44px] flex items-center justify-center bg-white  text-[#52BD95] leading-none rounded-[10px]'>
              <PiArrowRightFill size={15} />
            </button>
          </a>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants2}
          viewport={{ once: true, amount: 0.3 }}
          className='mb-[-50px] flex items-end xl:ml-16 lg:ml-10 max-lg:flex-wrap relative z-20 max-lg:gap-5'
        >
          <div className='relative lg:max-w-[30%] w-full lg:block flex justify-center items-start max-sm:flex-wrap gap-5'>
            <div className='lg:absolute xl:left-0 lg:left-[-40px] lg:bottom-[100%] lg:mb-[20px] '>
              <img
                src={HeroImg1}
                alt=''
                className='object-contain w-full h-auto drop_shadow_1'
              />
            </div>
            <div className='xl:ml-10'>
              <img
                src={HeroImg2}
                alt=''
                className='object-contain w-full h-auto drop_shadow_1'
              />
            </div>
          </div>
          <div className='lg:max-w-[70%] w-full flex lg:items-end max-lg:justify-center max-sm:flex-wrap'>
            <div>
              <img
                src={HeroImg3}
                alt=''
                className='object-contain w-full h-auto drop_shadow_1 sm:mb-[-20px]'
              />
            </div>
            <div>
              <img
                src={HeroImg4}
                alt=''
                className='object-contain w-full lg:mb-12 drop_shadow_1'
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='size-[272px] bg-[#52AABD] absolute top-[-20px] left-[0px] blur-[200px] z-10'></div>
      <div className='size-[272px] bg-[#52BD95] absolute top-[250px] right-[0px] blur-[200px] z-10'></div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import {
  animationVariants1,
  pricingTableInfo,
  variants1,
} from '../../constant';

const Pricing = () => {
  return (
    <section>
      <div className='container py-10'>
        <motion.h4
          initial='hidden'
          whileInView='visible'
          variants={variants1}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center md:mb-10 mb-5'
        >
          Our Pricing Policy
        </motion.h4>
        <div className='pricing_table_wrappper  mx-auto grid sm:grid-cols-2 gap-10 items-start lg:w-[840px]'>
          {pricingTableInfo?.map((pricing, index) => (
            <motion.div
              initial='initial'
              whileInView='animate'
              variants={animationVariants1}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              custom={index}
              className='rounded-[40px] rounded-t-[12px] bg-white shadow_1  block'
              key={index}
            >
              <div className='lg:p-10 p-[30px] border-b border-[#F1F3F8] relative'>
                <h5 className='light_gray mb-1'>{pricing?.packageName}</h5>
                <div className='flex'>
                  <h2>{pricing?.discountPrice}</h2>
                  <span className='xl:text-[2.5rem] lg:text-[2rem] sm:text-[1.563rem] text-[#C6C6C6] leading-[1.1em] price relative z-20 ml-2 self-end'>
                    {pricing?.price}
                  </span>
                </div>
                {pricing?.offNow && (
                  <span className='absolute right-0 lg:bottom-[45px] bottom-[30px] p-3 bg-[#52BD95] font-Inter lg:text-[0.938em] text-[0.875em] rounded-tl-[100vmax] rounded-bl-[100vmax] text-white align-baseline leading-none'>
                    {pricing?.offNow}
                  </span>
                )}
              </div>
              <div className='lg:p-10 p-[30px]'>
                <span className='text-[0.875em] text-[#929292] font-medium font-Inter mb-3 block'>
                  WHAT’S INCLUDED:
                </span>
                <ul>
                  {pricing?.whatsIncluded?.map((included, indexx) => (
                    <li
                      key={indexx}
                      className='md:text-[1.125em] text-base text-[#393939] font-Inter font-medium mb-1'
                    >
                      {included}
                    </li>
                  ))}
                </ul>
              </div>

              {pricing?.extra.length > 0 && (
                <div className='lg:p-10 p-[30px] border-t border-[#F1F3F8]'>
                  <ul>
                    {pricing?.extra?.map((item, indexxx) => (
                      <li
                        className='md:text-[1.125em] text-base text-[#393939] font-Inter font-medium mb-1'
                        key={indexxx}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <a
                href={pricing?.link}
                className={`font-Inter text-[1.125em] w-full lg:h-[80px] md:h-[70px] h-[60px] rounded-[100vmax] flex items-center justify-between px-10 rounded-tr-none text-[#FBFBFB] transition-all duration-200 ease-linear ${
                  index === 0
                    ? 'bg-[#51CBFF] hover:bg-[#52BD95]'
                    : 'bg-[#52BD95] hover:bg-[#51CBFF]'
                }`}
              >
                Subscribe{' '}
                <span>
                  <HiArrowLongRight size={30} />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

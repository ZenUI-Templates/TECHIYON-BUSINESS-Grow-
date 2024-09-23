import { motion } from 'framer-motion';
import { useState } from 'react';
import { animationVariants2 } from '../constant';

const Accordion = ({ faq }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion == index ? null : index);
  };
  return (
    <div className='max-w-[1140px] mx-auto lg:columns-2 gap-[30px] accordion_wrapper columns-1'>
      {faq?.map((item, index) => (
        <motion.div
          initial='initial'
          whileInView='animate'
          variants={animationVariants2}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          custom={index}
          key={index}
          className='sm:pl-[50px] pl-[30px] pr-[20px]  py-4 mb-5 bg-white break-inside-avoid	 rounded-lg shadow-[0px_24px_32px_-17px_#95959540] relative'
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`md:text-lg text-base text-start font-semibold dark_purple question relative ${
              activeAccordion === index ? 'active' : ''
            }`}
          >
            {item?.question}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              activeAccordion === index
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            } `}
          >
            <div className='overflow-hidden'>
              <div className='py-3'>
                <p className='font-Inter text-[15px] !text-[#363049] font-normal'>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;

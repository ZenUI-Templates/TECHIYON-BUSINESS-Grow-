import { motion } from 'framer-motion';
import React from 'react';
import { clients, variants2 } from '../../constant';

const Clients = () => {
  return (
    <section className='pb-10'>
      <div className='container'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants2}
          viewport={{ once: true, amount: 1 }}
          className='flex gap-x-10 gap-y-5 items-center justify-center flex-wrap max-w-[1020px] mx-auto'
        >
          {clients?.map((client, index) => (
            <div
              className='sm:w-[150px] w-[100px]'
              key={index}
            >
              <img
                src={client}
                alt=''
                className='object-contain mx-auto'
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

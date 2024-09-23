import { motion } from 'framer-motion';
import Accordion from '../../components/Accordion';
import { faq, variants1 } from '../../constant';

const Faq = () => {
  return (
    <section className='pt-10 pb-20'>
      <div className='container'>
        <motion.h4
          initial='hidden'
          whileInView='visible'
          variants={variants1}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center md:mb-10 mb-5'
        >
          Frequently Ask Questions
        </motion.h4>
        <Accordion faq={faq} />
      </div>
    </section>
  );
};

export default Faq;

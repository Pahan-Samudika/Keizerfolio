import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../style';
import { services, interests } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { me } from '../assets';
import { Tech } from '../components';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="grow">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full red-orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="darkgray-gradient rounded-[20px] py-3 px-4 min-h-[50px] flex justify-evenly items-center flex-col"
        >
          <h5 className="text-white text-[16px] text-center tracking-wider z-10">{title}</h5>
          {/* <img src={icon} alt={title} className="absolute w-16 h-16 object-contain opacity-40" /> */}
        </div>
      </motion.div>
    </Tilt>
  );
};

const InterestCard = ({ index, title, icon }) => {
  return (
    <Tilt className="grow">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full red-orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="darkgray-gradient rounded-[20px] flex justify-evenly items-center flex-col"
        >
          <h5 className="text-white text-[16px] text-center tracking-wider z-10">{title}</h5>
          {/* <img src={icon} alt={title} className="absolute w-16 h-16 object-contain opacity-40" /> */}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-row xl:justify-between flex-wrap justify-center">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>
              About <span className="text-[#D84727]">Me</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[20px] xl:max-w-lg leading-[30px] tracking-wide text-justify">
            I'm <span className={styles.aboutHighlightText}>Pahan</span>, also known as <span className={styles.aboutHighlightText}>KEIZER</span>. I'm passionate about <span className={styles.aboutHighlightText}>UI/UX</span> engineering and development.
            I believe in working <span className={styles.aboutHighlightText}>smart</span>, not hard, and love being part of <span className={styles.aboutHighlightText}>innovative</span> and <span className={styles.aboutHighlightText}>creative</span> teams.
            I'm currently pursuing a BSc IT (Hons) in Software Engineering at SLIIT.
          </motion.p>
        </div>

        <motion.div variants={fadeIn('left', 'tween', 0.1, 1)}>
          <div className="inset-0 max-w-7xl mx-auto flex flex-row ">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-[250px] h-[300px] red-orange-gradient opacity-60 rounded-[80px] mb-10 ml-20 xs:mt-[12px]" />
              <img src={me} alt="me" className="w-[300px] absolute rounded-[50px]" />
            </div>
          </div>
        </motion.div>

        <div className='mt-8'>
          <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[24px] xl:max-w-56 leading-[30px] xl:ml-8 ">
            <span className='text-[32px] text-[#EF7B45]'>"</span>&nbsp;I'm always up for learning new things and growing my skills.
            Let's create something amazing together ! &nbsp;<span className='text-[32px] text-[#EF7B45]'>"</span>
          </motion.p>
        </div>
      </div>
      <div className='flex-row'>
        <div className="flex flex-wrap gap-5 mx-auto justify-between mt-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        {/* <Tech /> */}
        {/* <div className='mt-20 red-orange-gradient font-medium flex px-5 py-3 rounded-t-2xl max-w-[200px] justify-center'>
          <p className="text-white text-[24px]">Interests</p>
        </div>
        <div className='border px-12 py-10 rounded-tr-3xl rounded-b-3xl'>
          <div className="flex flex-wrap gap-5 mx-auto justify-between">
            {interests.map((service, index) => (
              <InterestCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');

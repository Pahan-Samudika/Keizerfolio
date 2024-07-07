import {motion} from 'framer-motion';
import {styles} from '../style';
import { useState, useEffect } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
  const formattedDate = currentTime.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[100px] flex justify-center items-center md:text-[800px] text-[200px]'>
          <p className={`hero-font mt-2 text-[#EF7B45] opacity-30`}>
            KEIZER
          </p>
        </div>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#D84727]'/>
          <div className='w-1 sm:h-80 h-40 red-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          HI, I'M <span className='text-[#D84727]'>PAHAN</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
          <span className='text-[#D84727]'>I'm a </span><Typewriter words={['UI/UX Designer', 'Web Developer', 'Mobile App Developer', 'Content Creator', 'Frontend Developer']} loop={Infinity}
    typeSpeed={50}
    deleteSpeed={30}
    delaySpeed={1000}/><span><Cursor /></span>
          </p>
        </div>
      </div>
      <div className={`${styles.paddingX} justify-end absolute inset-0 top-[440px] max-w-7xl mx-auto flex flex-row items-end gap-5`}>
      <div>
          <h1 className={`font-bold text-[54px] text-white flex justify-end`}>
            {formattedTime}
          </h1>
          <p className={`text-[28px] -mt-5 mb-12 text-white-100 flex justify-end`}>
            {formattedDate}
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 mb-12'>
          <div className='w-1 sm:h-80 h-40 red-gradient rotate-180'/>
          <div className='w-5 h-5 rounded-full bg-[#D84727]'/>
        </div>
      </div>
      <div className='absolute xs:bottom-4 bottom-45 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate = {{
                y: [0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
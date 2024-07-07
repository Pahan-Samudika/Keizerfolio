import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import {styles} from '../style';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  return (
    <>
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
    <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-[#141414] p-5 rounded-2xl xs:w-[360px] h-full w-full flex-grow'
      >
        <div className='w-full h-[200px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='inset-0 flex justify-end items-end mt-3 card-img_hover'>
            <div onClick={()=>window.open(source_code_link,"_blank")} className='black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className=''>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className=' mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2 items-end'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </Tilt>
      </motion.div>
    </>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          My <span className='text-[#D84727]'>Projects</span>
        </h2>
      </motion.div>

      <div className='w-full flex'>
      </div>
      <div className='mt-10 flex flex-wrap gap-7 justify-center'>
        {projects.map((project,index)=>(
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")
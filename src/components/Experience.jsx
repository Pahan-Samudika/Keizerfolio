import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import {styles} from '../style';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import {textVariant,slideIn} from '../utils/motion';

import GitHubCalendar from 'react-github-calendar';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{background:'#141414', color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>
        {experience.company_name}
      </p>
    </div>
    {/* <ul className="mt-5 list-disc space-y-2">
      {experience.points.map((point,index)=>(
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}

    </ul> */}
  </VerticalTimelineElement>
)

const customStyle = {
  color: 'white',
  fontSize: '20px',
};


const Experience = () => {
  return (
    <>
      <motion.div variance={textVariant()}>
      <p className={`${styles.sectionSubText} flex justify-end`}>
        Communities I've worked with
      </p>
      <h2 className={`${styles.sectionHeadText} flex justify-end`}>
        <span className='text-[#D84727]'>Work&nbsp;</span> Experience
      </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
      <motion.div
        variants={slideIn('up','tween',0.2,1)}
      >
      <div className="mt-16 p-5 flex flex-col items-center justify-center rounded-[20px] text-white">
        <p className="text-[30px] font-bold">Github Contributions</p>
        <span className="text-[#D84727] text-[20px] mb-8">(2023-2024)</span>
      <GitHubCalendar username="Pahan-Samudika" colorScheme="dark" style={customStyle} className={styles.calendar}/>
      </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience,"work")
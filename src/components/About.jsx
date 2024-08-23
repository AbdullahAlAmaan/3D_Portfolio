import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className="xs:w-[250px] w-full">
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//       >
//         <img
//           src={icon}
//           alt="web-development"
//           className="w-16 h-16 object-contain"
//         />

//         <h3 className="text-white text-[20px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='w-full flex'>
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-10 bg-black bg-opacity-75 text-white rounded-lg max-w-3xl'
  >
    <p className='text-secondary text-[17px] leading-[30px] font-bold'>
    I am a second-year Computer Engineering student at the University of Waterloo, specializing in full stack development with proficiency in C++ and Python. My technical skills enable me to create dynamic, responsive applications, and I am eager to integrate AI and ML features into my projects to enhance functionality and innovation. I am passionate about utilising my expertise to contribute to impactful and transformative projects in the tech industry.
    </p>
  </motion.p>
</div>

{/* 
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");

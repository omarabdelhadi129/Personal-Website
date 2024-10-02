import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fadeIn } from "../utils/motion";
const Contact = () => {
  return (
    <>
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
       
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
         
        <p className={styles.sectionSubText}>Get in touch. 😊</p> 
        <h3 className={styles.sectionHeadText}>Contact</h3> 
        <div className="flex flex-col items-start mt-6 space-y-4">
           
          <a
            href="https://github.com/omarabdelhadi129"
            className="flex items-center space-x-2"
            target="_blank"
          >
             
            <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span> 
          </a> 
          <a
            href="https://www.linkedin.com/in/omarabdelhadi129/"
            className="flex items-center space-x-2"
            target="_blank"
          >
             
            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span> 
          </a> 
          <a
            href="mailto:omarabdelhadi129@gmail.com"
            className="flex items-center space-x-2"
            target="_blank"
          >
             
            <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span> 
          </a> 
          <a
            href="./documents/resume.pdf"
            className="flex items-center space-x-2"
            target="_blank"
          >
             
            <FontAwesomeIcon icon={faFile} /> <span>Resume</span> 
          </a> 
        </div> 
      </motion.div> 
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
         
        <EarthCanvas /> 
      </motion.div> 
    </div>

    <div className= "flex justify-center mt-10"> 
    <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '
        >
          Copyright @ 2024 Omar Abdelhadi
        </motion.p>
        </div>
    </>
  );
};
export default SectionWrapper(Contact, "contact");

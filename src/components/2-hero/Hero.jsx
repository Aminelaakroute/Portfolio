import React from 'react'
import './Hero.css'
import Lottie from 'lottie-react';
import Laptop1 from "../../assets/animations/Computer Window Animation.json";
import { motion } from 'framer-motion';




const Hero = () => {
  
  const handleClick = (url) => {
    window.open(url, '_blank');
  };
  

  return (
    <section className='hero flex'>
      <div className='left-section'>

        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 9, type: "spring", stiffness: 100 }}
            src="./AMINE.png" className="avatar" />
          <div className='icon-verified' />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}

          className='title'>
          Full stack developer (M.E.R.N)<br />
          Cyber Security Student
        </motion.h1>
        <p className='subtitle'>
          I am a technology enthusiast,
          navigating the realms of cybersecurity while delving into the intricacies of Full Stack development.
          As a cybersecurity student, I immerse myself in the complexities of data and system protection,
          while honing my skills in MERN technologies (MongoDB, Express.js, React.js, Node.js).
          My diverse background allows me to approach projects with a holistic perspective,
          blending a deep understanding of security concepts with expertise in web development.
          I am committed to continuing my journey in these exciting fields to make meaningful
          contributions to the advancement of technology and digital security.
        </p>

        <div className="all-icons flex ">
          <div 
              className="icon icon-facebook2" 
              onClick={() => handleClick('https://www.facebook.com/amine.laakroute/')}
            />
          <div 
              className="icon icon-instagram" 
              onClick={() => handleClick('https://www.instagram.com/amine.laakroute/')}
            />
          <div 
              className="icon icon-github" 
              onClick={() => handleClick('https://github.com/Aminelaakroute')}
            />
          <div 
              className="icon icon-linkedin1" 
              onClick={() => handleClick('https://www.linkedin.com/in/amine-laakroute-a1344625b/')}
            />
        </div>

      </div>
      <div className='Right-section animation'>
        <Lottie
          animationData={Laptop1} />
      </div>
    </section>
  )
}
export default Hero;
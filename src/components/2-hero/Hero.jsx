import React from 'react'
import './Hero.css'
import Lottie from 'lottie-react';
import Laptop1 from "../../assets/animations/Computer Window Animation.json";
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
      
       <div className="parent-avatar flex">
        <motion.img
          initial = {{transform : "scale(0)"}}
          animate = {{transform : "scale(1.1)"}}
          transition={{damping : 9, type: "spring" , stiffness:100 }}
          src="./AMINE.png" className="avatar" />
        <div className='icon-verified'/>
       </div>

       <motion.h1 
       initial = {{opacity : 0}}
       animate = {{opacity : 1}}
       transition={{duration : 2}}

       className='title'>
        Full stack developer (M.E.R.N)<br />
        Cyber Security Student
       </motion.h1>
       <p className='subtitle'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione suscipit a velit necessitatibus aliquid. Esse, debitis error maiores officia repudiandae accusantium iste cupiditate architecto, impedit a suscipit eius atque perspiciatis?
       </p>

       <div className="all-icons flex ">
        <div className="icon icon-facebook2"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-github"></div>
        <div className="icon icon-linkedin1"></div>
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
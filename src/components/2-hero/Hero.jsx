import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
      
       <div className="parent-avatar flex">
        <img src="./AMINE.png" className="avatar" />
        <div className='icon-verified'/>
       </div>

       <h1 className='title'>
        Full stack developer (M.E.R.N)<br />
        Cyber Security Student
       </h1>
       <p className='subtitle'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione suscipit a velit necessitatibus aliquid. Esse, debitis error maiores officia repudiandae accusantium iste cupiditate architecto, impedit a suscipit eius atque perspiciatis?
       </p>

       <div className="all-icons flex ">
        <div className="icon icon-facebook2" ></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-github"></div>
        <div className="icon icon-linkedin1"></div>
       </div>

      </div>
      <div className='Right-section animation border'>right

      </div>
    </section>
  )
}
export default Hero;
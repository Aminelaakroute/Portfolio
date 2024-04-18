import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
  <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
         Contact Us
      </h1>
      <p className='subtitle'>Tempora ptio repelltborios nam voluptatibus vero consequuntur iste nesciunt perferendis, doloribus quia sit dolorem minus?</p>


    <div className="flex">
      <form >
        <div className='flex'>
              <label htmlFor="email">Email Address:</label>
              <input required type="email" name="" id="email"  />
        </div>

        <div  className='flex' style={{marginTop:"24px"}}>
              <label htmlFor="message">Your Message:</label>
              <textarea required name="text" id="message" ></textarea>
        </div>

        <button className='submit'>Submit</button>
      </form>
      <div className="animation border">animation</div>
    </div>

  </section>

  )
}
export default Contact ;
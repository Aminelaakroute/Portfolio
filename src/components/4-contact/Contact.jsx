import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
  const [state, handleSubmit] = useForm("xnqelpqw");
  
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p className='subtitle'>
      Get in touch for inquiries, collaborations, or just to say hello! We're here to assist and eagerly await your message. <br />Thank you for considering us, and we're excited to hear from you soon!
      </p>


      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input autoComplete='off' required type="email" name="" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="text" id="message" ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          

          <button type="submit" disabled={state.submitting} className='submit'>
            {
              state.submitting ? "Submitting ..." : "Submit"
            }
          </button>
          {
               state.succeeded  && (
               <p className='resp' style={{fontSize: "16px", marginTop:"1.7rem"}} >Your message has been sent successfully 👌</p>
                              )
          }
        </form>
        <div className="animation border">animation</div>
      </div>

    </section>

  )
}
export default Contact;
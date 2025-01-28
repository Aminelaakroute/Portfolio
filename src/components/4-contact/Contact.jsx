import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneAnnimation from "../../assets/animations/Smooth Success Check Animation.json";
import Mail from "../../assets/animations/mail.json";


const Contact = () => {
  const [state, handleSubmit] = useForm("xnqelpqw");
  
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Me
      </h1>
      <p className='subtitle'>
      Feel free to reach out for any inquiries, collaborations, or simply to say hello! 
      I&apos;m here to assist and eagerly await your message. Thank you for considering me, 
      and I&apos;m excited to hear from you soon!
      </p>


      <div style={{justifyContent : "space-between"}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input autoComplete='off' required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message" ></textarea>
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
                <p className='flex resp' style={{fontSize: "16px", marginTop:"1.7rem"}} >
                  <Lottie loop={false} style={{height:35}} animationData={DoneAnnimation}/>
                  Your message has been sent successfully 👌
                </p>
                
              )
          }
        </form>

        <div className="animation">
          <Lottie className='Contact-Anim' style={{ height : 350}} animationData={Mail}/>
        </div>
      </div>

    </section>

  )
}
export default Contact;
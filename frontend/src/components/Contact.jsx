import React, { useRef } from "react";
import '../../public/Contacts.css';
import emailjs from '@emailjs/browser';




const Contact=()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    
    emailjs
      .sendForm("service_4smb6dv", "template_elvs81i", form.current, {
        publicKey:"tT7bmypSG8LQP72tl",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email successfully has been sent!");
          e.target.reset();
         

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }


    return (
        <section id="contact-section">
          <div className="contact">
            <h1 className="contact-heading">
                Contact Me
            </h1>
            <span className="contact-description">Please fill out the given form to contact me or For any book Recommendation!</span>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input className="name" type="text" placeholder="Your Name" name="your_name" required/>
                <input type="email" className="email" placeholder="Enter your e-mail" name="your_email" required/>
                <textarea name="message" className="msg" rows={5} placeholder="Enter your message" required/>
                <button type="submit" value="send" className="submit-btn">Submit</button>
            </form>
          </div>
        </section>
    );
}
export default Contact;
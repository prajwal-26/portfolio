import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ja4yw3e',          
      'template_ofqqabd',         
      form.current,
      '_ikZriU3iIEmitmLZ'           
    ).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        form.current.reset(); 
      },
      (error) => {
        console.error(error.text);
        alert("Something went wrong. Try again.");
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Let's connect! Feel free to reach out 🚀
      </p>

      {!submitted ? (
        <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-up" data-aos-delay="200">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="thank-you-message" data-aos="zoom-in">
          <h3>🎉 Thank you! Your message has been sent.</h3>
        </div>
      )}
    </section>
  );
};

export default Contact;

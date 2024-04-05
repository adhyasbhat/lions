import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.user_phone.value;
    const message = form.current.message.value;

    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone number format (optional)
    // You can adjust the phone number regex based on your requirements
    const phoneRegex = /^[0-9]{10}$/; // Example regex for a 10-digit phone number
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    emailjs
      .sendForm('service_u6w773p', 'template_l7fkptp', form.current, {
        publicKey: 'PYQGL3fI0i4CLVEVY',
      })
      .then(
        () => {
          alert('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='wrapper'>
     <div className='formContainer'>
      <h4>Contact Us</h4>
      <hr />
      <form ref={form} onSubmit={sendEmail} className='contactFrom'>
      <label><h6>Name</h6></label>
      <input type="text" name="user_name"className='mb-1 inputBox' />
      <label><h6>Email</h6></label>
      <input type="email" name="user_email" className='mb-1 inputBox' />
      <label><h6>Phone number</h6></label>
      <input type="number" name="user_phone"className='mb-1 inputBox' />
      <label><h6>Message</h6></label>
      <textarea name="message"className='mb-1 inputBox' />
      <div className='col-12 send'>
      <input type="submit" value="Send" className='sendBtn' />
      </div>
    </form>
      </div>
    </div>
    
  );
};

export default Contact;

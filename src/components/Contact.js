// Contact.js
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { FiSend, FiMail, FiPhone } from 'react-icons/fi';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9k30dzu', 'template_xtdfzgw', e.target, 'ivExCRuil7Yt76rIs')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Error sending message. Please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-container">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <FiSend className="icon" />
            </button>
          </form>

          <div className="contact-details">
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span>farhanakthar99@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+91 8287713161</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
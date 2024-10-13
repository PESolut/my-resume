import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoItem = ({ icon, title, content }) => (
  <div className="info-item d-flex" data-aos="fade-up">
    <i className={`bi bi-${icon} flex-shrink-0`}></i>
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: '',
    success: false
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, error: '', success: false });

    // Simulating form submission
    try {
      // Replace this with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ loading: false, error: 'An error occurred. Please try again.', success: false });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <InfoItem icon="geo-alt" title="Address" content="A108 Adam Street, New York, NY 535022" />
            <InfoItem icon="telephone" title="Call Us" content="+1 5589 55488 55" />
            <InfoItem icon="envelope" title="Email Us" content="info@example.com" />
          </div>

          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleInputChange} />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {formStatus.loading && <div className="loading">Loading</div>}
                  {formStatus.error && <div className="error-message">{formStatus.error}</div>}
                  {formStatus.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                  <button type="submit" disabled={formStatus.loading}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
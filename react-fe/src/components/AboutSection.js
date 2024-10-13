import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I'm a 25-year-old software engineer with a background in sales, now turning my passion for technology into a career. After working in sales, I made the leap into software development to pursue more challenging and impactful work. Currently, I'm focused on AI development and exploring its applications in financial markets. I aim to leverage cutting-edge technology to solve complex problems in this space.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/headshot1JPF.jpg" className="img-fluid" alt="Jahaad Petty" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineer &amp; Web Developer</h2>
            <p className="fst-italic py-3">
              Proficient Full Stack Engineer able to produce fullstack web applications as well as mobile native applications.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://jp-tech.dev" target="_blank" rel="noopener noreferrer">jp-tech.dev</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(347) 885-7115</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:admin@jp-tech.dev">admin@jp-tech.dev</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I'm a 25-year-old software engineer with a background in sales, now turning my passion for technology into a career. After working in sales, I made the leap into software development to pursue more challenging and impactful work. Currently, I'm focused on AI development and exploring its applications in financial markets. I aim to leverage cutting-edge technology to solve complex problems in this space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

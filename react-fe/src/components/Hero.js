import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Software Engineer', 'Developer', 'Freelancer', 'Artist'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <img src="assets/img/hero-bg.png" alt="Hero background" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Jahaad Petty</h2>
            <p>I'm a <span ref={typedRef}></span></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jahaad-petty-321066249/">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

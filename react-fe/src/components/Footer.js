import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const phrases = [
  "Building innovative software solutions from front to back.",
  "Creating software that connects people and drives progress.",
  "Turning complex challenges into elegant, practical solutions.",
  "Coding the future, one line at a time.",
  "Committed to continuous learning and improvement.",
  "Crafting seamless digital experiences.",
  "Bringing ideas to life with clean code.",
  "Delivering user-centric solutions that make an impact.",
  "Focused on performance, scalability, and security.",
  "Simplifying the complex through thoughtful engineering.",
  "Passionate about problem-solving and technology.",
  "Striving for excellence in every line of code.",
  "Building solutions that scale with the future in mind.",
  "Coding with a purpose: to inspire and innovate.",
  "Transforming ideas into functional, scalable products.",
  "Collaborating to create meaningful digital solutions.",
  "Driven by curiosity and the love for innovation.",
  "Delivering reliable, well-tested software products.",
  "Crafting technology to enhance everyday life.",
  "Engineering solutions for real-world challenges.",
  "Designing with both aesthetics and functionality in mind.",
  "Empowering users through thoughtful software design.",
];

const Footer = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: phrases,
      typeSpeed: 40,
      backSpeed: 30,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      shuffle: true,
      smartBackspace: false,
    };

    const typed = new Typed(typedRef.current, options);

    const changeInterval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000; // Random delay between 10-20 seconds
      setTimeout(() => {
        typed.reset();
      }, randomDelay);
    }, 15000);

    return () => {
      typed.destroy();
      clearInterval(changeInterval);
    };
  }, []);

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">Jahaad Petty</h3>
        <p><span ref={typedRef}></span></p>
        <div className="social-links d-flex justify-content-center">
          <a href=""><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> 
            <strong className="px-1 sitename">Jahaad Petty 2024</strong> 
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

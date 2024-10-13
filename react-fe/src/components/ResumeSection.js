import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResumeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>My professional experience and educational background in software development and technology.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
   

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Full Stack Web Development Fellow</h4>
              <h5>May 2022 - May 2026</h5>
              <p><em>Pursuit, New York</em></p>
              <p>12-month, Google-funded software engineering fellowship with a 9% acceptance rate. Hands-on experience with JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data Structures, Algorithms, Agile, and more.</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Science - BS, Computer Science</h4>
              <h5>May 2023 - May 2024</h5>
              <p><em>Borough of Manhattan Community College</em></p>
              <p>Relevant coursework: Computer Programming I, Introduction to Programming, Principles in Information Technology and Computation, Critical Thinking, Introduction to Politics, Introduction to Communication Studies, Introduction to Marketing</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Sales Associate</h4>
              <h5>Sep 2023 - Present</h5>
              <p><em>Micro Center, Queens, New York</em></p>
              <ul>
                <li>Utilize relationship building and consultative selling skills to assist customers</li>
                <li>Provide expert advice on a wide range of technology products</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Fulfillment Associate</h4>
              <h5>Aug 2022 - Feb 2023</h5>
              <p><em>Amazon, Maryland, United States</em></p>
              <ul>
                <li>Managed inventory and maintained inventory control</li>
                <li>Ensured efficient processing and fulfillment of customer orders</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Intern</h4>
              <h5>May 2018 - Sep 2018</h5>
              <p><em>Supreme Court - County of Queens, Kew Gardens, New York</em></p>
              <ul>
                <li>Gained valuable experience in the legal system and court operations</li>
                <li>Assisted with various administrative tasks and document management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
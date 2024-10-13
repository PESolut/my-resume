import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', icon: 'bi bi-filetype-html' },
  { name: 'CSS', icon: 'bi bi-filetype-css' },
  { name: 'JavaScript', icon: 'bi bi-filetype-js' },
  { name: 'SQL', icon: 'assets/img/iconSql.svg' },
  { name: 'React', icon: 'assets/img/reacticon.svg' },
  { name: 'Node.js', icon: 'assets/img/node-js.svg' },
  { name: 'Heroku', icon: 'bi bi-cloud' },
  { name: 'React Native', icon: 'assets/img/reacticon.svg' },
  { name: 'Python', icon: 'assets/img/pythonicon.svg' },
];

const SkillItem = ({ name, icon }) => (
  <div className="col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
    <div className="icon-box">
      {icon.startsWith('bi') ? (
        <i className={icon}></i>
      ) : (
        <img src={icon} alt={name} className="skill-icon" />
      )}
      <h3>{name}</h3>
    </div>
  </div>
);

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>My technical expertise includes a range of programming languages and technologies</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">
          <div className="col-lg-12">
            <div className="row justify-content-center">
              {skills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


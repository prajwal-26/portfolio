import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">
          I'm a passionate DevOps Engineer with hands-on experience in automating infrastructure, 
          implementing CI/CD pipelines, and managing cloud-native deployments using tools like Docker, 
          Kubernetes, and Terraform. I love solving problems and building scalable systems that boost 
          developer productivity and system reliability.
        </p>
        <div className="skills-grid">
          <div className="skill-card">Docker</div>
          <div className="skill-card">Kubernetes</div>
          <div className="skill-card">Jenkins</div>
          <div className="skill-card">GitLab</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">Terraform</div>
          <div className="skill-card">Ansible</div>
          <div className="skill-card">Grafana</div>
        </div>
      </div>
    </section>
  );
};

export default About;

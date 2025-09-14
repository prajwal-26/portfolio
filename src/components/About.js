import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
<p className="about-text">
  DevOps Engineer with 1+ year of experience in AWS Cloud, Infrastructure as Code (IaC), and CI/CD automation. 
  Skilled in delivering secure, automated, and production-ready deployments.
</p>

<p className="about-text">
  Proficient in automating cloud provisioning, building robust CI/CD pipelines using Jenkins, 
  and implementing GitOps workflows with ArgoCD and Helm. 
  Experienced in monitoring and observability using Prometheus, Grafana, and AWS CloudWatch.
</p>

<p className="about-text">
  Special interests include cost optimization, automation, security, and scripting with Python and Bash. 
  Passionate about driving continuous improvement to build scalable, high-availability cloud environments. 
</p>

        <div className="skills-grid">
          {/* <div className="skill-card">Docker</div>
          <div className="skill-card">Kubernetes</div>
          <div className="skill-card">Jenkins</div>
          <div className="skill-card">GitLab</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">Terraform</div>
          <div className="skill-card">Ansible</div>
          <div className="skill-card">Grafana</div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

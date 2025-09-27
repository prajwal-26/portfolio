import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>

      <div
        className="experience-card"
        ref={el => (cardsRef.current[0] = el)}
      >
        <div className="experience-header">
          <h4>NITCO Inc.</h4>
          <span>June 2022 – Present</span>
        </div>
        <h5 className="experience-role">DevOps Engineer</h5>
        <ul className="experience-details">
          <li>Managing CI/CD pipelines using Jenkins & GitLab.</li>
          <li>Deployed microservices on EKS with Prometheus & Grafana.</li>
          <li>Implemented IaC using Terraform across environments.</li>
          <li>Managing CI/CD pipelines using Jenkins & GitLab.</li>
          <li>Deployed microservices on EKS with Prometheus & Grafana.</li>
          <li>Implemented IaC using Terraform across environments.</li>
        </ul>
      </div>

      <div
        className="experience-card"
        ref={el => (cardsRef.current[1] = el)}
      >
        <div className="experience-header">
          <h4>ABC Software Pvt. Ltd.</h4>
          <span>Jan 2021 – May 2022</span>
        </div>
        <h5 className="experience-role">DevOps Intern</h5>
        <ul className="experience-details">
          <li>Built Docker-based pipelines for staging.</li>
          <li>Created dashboards using Grafana and alerts in Slack.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

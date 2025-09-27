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
          <h4>Nitco Inc.</h4>
          <span>Oct 2024 - Present</span>
        </div>
        <h5 className="experience-role">DevOps Engineer</h5>
        <ul className="experience-details">
          <li>Manage cloud infrastructure with Terraform and AWS, enhancing reliability and automating provisioning.</li>
          <li>Implemented Bash scripts for automated daily backups of application data, databases, and logs, improving recovery time and reducing data loss risk.</li>
          <li>Enhanced CI/CD pipelines in the staging environment using Jenkins, optimizing workflow efficiency and reducing deployment time by 40%.</li>
          <li>Monitored application and infrastructure health with Prometheus, Grafana, and AWS CloudWatch, reducing incident response time by 30%.</li>
          <li>Collaborated with developers to troubleshoot build and deployment issues, improving pipeline stability.</li>
        </ul>
      </div>

      <div
        className="experience-card"
        ref={el => (cardsRef.current[1] = el)}
      >
        <div className="experience-header">
          <h4>Helper4U.in Services LLP </h4>
          <span>Dec 2023 – June 2024</span>
        </div>
        <h5 className="experience-role">DevOps Intern</h5>
        <ul className="experience-details">
          <li>Assisted in migrating an on-premises application running manual deployments on servers to Jenkins CI/CD on AWS EKS, ensuring high availability and scalability.</li>
          <li>Deployed containerized web app with Docker, ECR, and VPC for scalable infrastructure.</li>
          <li>Automated database updates and deployments via cron jobs, saving 10 hours/week manual effort.</li>
          <li>Reduced manual intervention by 80% and downtime by 70% using automated rollbacks and Kubernetes health checks.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

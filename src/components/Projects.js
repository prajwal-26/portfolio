import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import ProofModal from './ProofModal';

const projects = [
  {
    title: 'CI/CD Pipeline Setup',
    description: (
  <>
    Developed a robust <strong>CI/CD pipeline</strong> using <strong>Jenkins</strong>, integrated with <strong>GitHub</strong> and <strong>Docker</strong>.<br />
    Enabled <strong>automated testing</strong>, building, and deployment to <strong>AWS EC2</strong>.<br />
    Implemented <strong>multi-branch pipeline</strong> configuration for microservices.<br />
    Monitored deployments using <strong>Prometheus</strong> and <strong>Grafana</strong>.<br />
    Secured credentials using <strong>Jenkins Credentials Manager</strong>.
  </>
)
,
    github: 'https://github.com/prajwal/example-ci-cd',
    images: [
      '/assets/ci1.png',
      '/assets/ci2.png',
      '/assets/ci3.png'
    ]
  },
  {
    title: 'Infrastructure as Code with Terraform',
    description: `
      Created reusable Terraform modules for setting up AWS infrastructure.
      Automated VPC, Subnets, EC2, S3, and RDS provisioning.
      Version-controlled infrastructure setup with Git.
      Integrated Terraform with GitLab pipelines.
      Used remote backends and workspaces for environment separation.
    `,
    github: 'https://github.com/prajwal/example-terraform',
    images: [
      '/assets/tf1.png',
      '/assets/tf2.png'
    ]
  },
  {
    title: 'Single Image Demo',
    description: `Test project to show a single image proof modal.`,
    github: 'https://github.com/prajwal/demo-project',
    images: ['/assets/a.png','/assets/a.png','/assets/a.png']
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const openModal = (images) => {
    setCurrentImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImages([]);
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <button className="proof-btn" onClick={() => openModal(project.images)}>
                📸 Project Snapshot
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <ProofModal images={currentImages} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Projects;

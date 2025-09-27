import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import ProofModal from './ProofModal';
import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'
import P4 from '../assets/P4.jpg'
import P5 from '../assets/P5.jpg'
import P6 from '../assets/P6.png'
import P11 from '../assets/P11.png'
import P22 from '../assets/P22.png'
import P33 from '../assets/P33.png'
import P44 from '../assets/P44.png'
import P55 from '../assets/P55.png'
import P111 from '../assets/P111.png'
import P222 from '../assets/P222.png'
import P333 from '../assets/P333.png'
import P444 from '../assets/P444.png'
import A1 from '../assets/A1.png'
import A2 from '../assets/A2.png'
import A3 from '../assets/A3.png'
import A4 from '../assets/A4.png'

const projects = [
  {
    title: 'Cloud Infrastructure Automation and CI/CD with AWS and GitOps',
    description: (
<>
  Built a <strong>secure AWS infrastructure</strong> with <strong>Terraform</strong>, <strong>Ansible</strong>, and a highly available <strong>EKS cluster</strong>.<br />
  Automated <strong>Docker workflows</strong> with <strong>Trivy</strong> and pushed to <strong>ECR</strong>.<br />
  Implemented <strong>GitOps</strong> with <strong>ArgoCD & Helm</strong>, configured <strong>Nginx Ingress</strong> and <strong>Prometheus/Grafana</strong> monitoring.<br />
  Applied <strong>auto-scaling</strong> and removed idle resources to improve <strong>reliability</strong>.<br />
</>

    ),
    github: 'https://github.com/prajwal-26/infra-to-deploy-3tier.git',
    images: [P1,P2,P3,P4,P5,P6]
  },
  {
    title: 'Infrastructure Provisioning to Deployment in One Command!',
    description: (
     <>
  Automated <strong>web app deployment</strong> using <strong>Terraform</strong>, <strong>Ansible</strong>, and <strong>PM2</strong>.<br />
  Provisioned <strong>VPC</strong>, <strong>subnets</strong>, and <strong>EC2 instances</strong> with Terraform.<br />
  Configured servers with <strong>Ansible</strong> (Node.js, Nginx, app deployment).<br />
  Integrated into a <strong>single shell script</strong> for one-command provisioning and deployment.<br />
</>
    ),
    github: 'https://github.com/prajwal-26/Terraform-ansible.git',
    images: [P11,P22,P33,P44,P55]
  },
  {
    title: 'Cloud-Native Deployment on Amazon EKS',
    description: (
    <>
  Deployed a <strong>containerized web application</strong> on <strong>Amazon EKS</strong>.<br />
  Used <strong>Kubernetes</strong> for <strong>scaling</strong>, <strong>high availability</strong>, and <strong>auto-healing</strong>.<br />
  Leveraged <strong>EKS</strong> for <strong>secure</strong>, <strong>reliable orchestration</strong> and simplified management.<br />
  Ensured <strong>smooth rollouts</strong> and easier <strong>lifecycle management</strong> of the application.<br />
</>
    ),
    github: 'https://github.com/prajwal-26/java-boardgame.git',
    images: [P111,P222,P333,P444]
  },
  {
    title: 'Go Web App Deployment with Kubernetes, Helm & GitHub Actions',
    description: (
     <>
  
  Built and pushed <strong>Docker images</strong> to <strong>Docker Hub</strong>.<br />
  Provisioned an <strong>EKS cluster</strong> on <strong>AWS</strong>.<br />
  Packaged app using <strong>Helm charts</strong> for <strong>Dev / Staging / Prod</strong> configs.<br />
  Created a <strong>CI pipeline</strong> in <strong>GitHub Actions</strong> for build, test, and push.<br />
  Enabled <strong>GitOps delivery</strong> with <strong>ArgoCD</strong> to Kubernetes.<br />
</>

    ),
    github: 'https://github.com/prajwal-26/go-webapp.git',
    images: [A1,A2,A3,A4]
  },
  // {
  //   title: 'Demo App',
  //   description: <>Small demo to show proof modal & images.</>,
  //   github: 'https://github.com/prajwal/demo-project',
  //   images: ['/assets/a.png']
  // }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const containerRef = useRef(null);
  const scrollbarRef = useRef(null);

  const openModal = (images) => {
    setCurrentImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImages([]);
  };

  useEffect(() => {
    const container = containerRef.current;
    const scrollbar = scrollbarRef.current;
    if (!container || !scrollbar) return;

    const inner = scrollbar.querySelector('.scrollbar-inner');
    if (!inner) return;

    // Set inner width to the scrollWidth of the container so the scrollbar shows proportionally
    const updateInnerWidth = () => {
      // Ensure at least slightly larger than clientWidth to show scrollbar when overflowing
      inner.style.width = `${container.scrollWidth}px`;
    };

    // Small delay to catch layout/images loading
    updateInnerWidth();
    const t = setTimeout(updateInnerWidth, 150);

    // Sync scroll positions (avoid small feedback loop with a flag)
    let isSyncing = false;
    const onContainerScroll = () => {
      if (isSyncing) return;
      isSyncing = true;
      scrollbar.scrollLeft = container.scrollLeft;
      requestAnimationFrame(() => (isSyncing = false));
    };
    const onScrollbarScroll = () => {
      if (isSyncing) return;
      isSyncing = true;
      container.scrollLeft = scrollbar.scrollLeft;
      requestAnimationFrame(() => (isSyncing = false));
    };

    container.addEventListener('scroll', onContainerScroll);
    scrollbar.addEventListener('scroll', onScrollbarScroll);
    window.addEventListener('resize', updateInnerWidth);

    // ----- drag-to-scroll for mouse ----------
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDown = true;
      container.classList.add('active'); // for cursor style
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      container.classList.remove('active');
    };
    const onMouseUp = () => {
      isDown = false;
      container.classList.remove('active');
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.6; // drag speed
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    // cleanup
    return () => {
      clearTimeout(t);
      container.removeEventListener('scroll', onContainerScroll);
      scrollbar.removeEventListener('scroll', onScrollbarScroll);
      window.removeEventListener('resize', updateInnerWidth);

      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, [projects.length]); // rerun if projects count changes

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <FaGithub /> GitHub
              </a>
              <button
                className="proof-btn"
                onClick={() => openModal(project.images)}
              >
                📸 Project Snapshot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visible synced scrollbar */}
      <div className="projects-scrollbar" ref={scrollbarRef} aria-hidden="true">
        <div className="scrollbar-inner" />
      </div>

      {modalOpen && <ProofModal images={currentImages} closeModal={closeModal} />}
    </section>
  );
};

export default Projects;

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
    images: ['/assets/tf1.png', '/assets/tf2.png']
  },
  {
    title: 'Kubernetes Deployment',
    description: (
      <>
        Deployed microservices on <strong>Kubernetes</strong> with <strong>Helm</strong> and <strong>Ingress</strong>.<br />
        Implemented HPA and secured secrets.
      </>
    ),
    github: 'https://github.com/prajwal/example-k8s',
    images: ['/assets/k8s1.png', '/assets/k8s2.png']
  },
  {
    title: 'Monitoring & Logging Stack',
    description: (
      <>
        Centralized logging & monitoring using <strong>ELK</strong> and <strong>Prometheus/Grafana</strong>.<br />
        Created dashboards and alerts.
      </>
    ),
    github: 'https://github.com/prajwal/example-monitoring',
    images: ['/assets/mon1.png', '/assets/mon2.png']
  },
  {
    title: 'Demo App',
    description: <>Small demo to show proof modal & images.</>,
    github: 'https://github.com/prajwal/demo-project',
    images: ['/assets/a.png']
  }
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

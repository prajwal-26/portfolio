import React, { useState, useRef, useEffect } from 'react';
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
    ),
    github: 'https://github.com/prajwal/example-ci-cd',
    images: ['/assets/ci1.png', '/assets/ci2.png', '/assets/ci3.png']
  },
  {
    title: 'Infrastructure as Code with Terraform',
    description: (
      <>
        Created reusable <strong>Terraform modules</strong> for setting up AWS infrastructure.<br />
        Automated provisioning of <strong>VPC, Subnets, EC2, S3, and RDS</strong>.<br />
        Integrated Terraform with <strong>GitLab pipelines</strong> and remote backends.
      </>
    ),
    github: 'https://github.com/prajwal/example-terraform',
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
      <h2 className="section-title">🚀 My Projects</h2>

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

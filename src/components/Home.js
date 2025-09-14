import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDocker, FaAws, FaGitlab } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiGrafana, SiTerraform, SiNginx } from 'react-icons/si';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <section id="home" className="home-section text-light">
  <div className="container-fluid h-100 d-flex justify-content-center align-items-center home-content">
    <div className="d-flex align-items-center justify-content-between w-100 flex-wrap tools-layout">
      
      {/* Left tools */}
      <div className="tools-col left-tools" data-aos="fade-right">
        <div className="tool-icon"><FaDocker /></div>
        <div className="tool-icon"><SiKubernetes /></div>
        <div className="tool-icon"><SiJenkins /></div>
        <div className="tool-icon"><SiNginx /></div>
      </div>

      {/* Center Text */}
      <div className="text-center main-text" data-aos="fade-up">
        <h1 className="display-4 fw-bold">Hi, I'm Prajwal</h1>
        <p className="lead text-secondary">DevOps Engineer specializing in cloud platforms, automation, and scalable deployments</p>
      </div>

      {/* Right tools */}
      <div className="tools-col right-tools" data-aos="fade-left">
        <div className="tool-icon"><FaAws /></div>
        <div className="tool-icon"><SiTerraform /></div>
        <div className="tool-icon"><FaGitlab /></div>
        <div className="tool-icon"><SiGrafana /></div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Home;

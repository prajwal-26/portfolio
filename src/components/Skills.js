import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { FaDocker, FaAws, FaGitAlt, FaLinux, FaJenkins, FaPython, FaReact } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const skills = [
  { name: 'Docker', icon: <FaDocker /> },
{ name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Jenkins', icon: <FaJenkins /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'React', icon: <FaReact /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

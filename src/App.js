// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialIcons />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

// App.css








// Similarly, wrap each other section with its own unique id:
// Home.jsx => <section id="home">
// Skills.jsx => <section id="skills">
// Experience.jsx => <section id="experience">
// Projects.jsx => <section id="projects">
// Contact.jsx => <section id="contact">
// SocialIcons.jsx can stay outside section as it's a floating/side UI

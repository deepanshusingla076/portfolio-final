'use client';

import Navigation from './components/Navigation';
import GalaxyBackground from './components/GalaxyBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function Page() {
  return (
    <>
      <GalaxyBackground />
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><Education /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><TechStack /></ScrollReveal>
        <ScrollReveal><Achievements /></ScrollReveal>
        <ScrollReveal><Resume /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <ScrollReveal><Footer /></ScrollReveal>
    </>
  );
}


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import EducationSection from '@/app/components/EducationSection';
import ContactSection from '@/app/components/ContactSection';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import BackgroundMusic from '@/app/components/BackgroundMusic';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ScrollRevealInit />
      <BackgroundMusic />
    </main>
  );
}
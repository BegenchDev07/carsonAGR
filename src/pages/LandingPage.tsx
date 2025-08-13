import React from 'react';
import HeroSection from '../components/HeroSection';
import UseCasesSection from '../components/UseCasesSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <UseCasesSection />
      <ProjectsSection />
      <AchievementsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
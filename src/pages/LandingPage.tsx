import React from 'react';
import HeroSection from '../components/HeroSection';
import UseCasesSection from '../components/UseCasesSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import BestSalesSection from '../components/BestSalesSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <BestSalesSection/>
      <UseCasesSection />
      <ProjectsSection />
      <AchievementsSection />      
      <Footer />
    </div>
  );
};

export default LandingPage;
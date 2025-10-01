"use client"
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import {
  useTheme
} from '@mui/material';

const MuiComingSoon = () => {
  const theme = useTheme();
 
  return (
    <div className="min-h-screen bg-background">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
  </div>
  );
};

export default MuiComingSoon;
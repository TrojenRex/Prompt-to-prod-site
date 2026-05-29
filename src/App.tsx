/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import ScheduleSection from './components/ScheduleSection';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import RegistrationSection from './components/RegistrationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [referredTrack, setReferredTrack] = useState('');

  // Intersection Observer to dynamically update the active navbar state based on scrolling position
  useEffect(() => {
    const sections = ['home', 'about', 'events', 'schedule', 'team', 'registration', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header accuracy
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTrackAndRegister = (trackId: string) => {
    setReferredTrack(trackId);
    setActiveSection('registration');
    // Elements dynamic scroll to is performed internally inside registration useEffect is triggered
  };

  return (
    <div className="min-h-screen bg-[#FAFDFF] text-slate-800 flex flex-col justify-between selection:bg-[#4285F4]/20 selection:text-slate-900">
      {/* Sticky GDG Header Menu */}
      <Header activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Pages / Sections Sections */}
      <main className="flex-1">
        <HeroSection
          onRegisterClick={() => handleNavigation('registration')}
          onExploreTracksClick={() => handleNavigation('events')}
        />
        
        <AboutSection />
        
        <EventsSection onSelectTrack={handleSelectTrackAndRegister} />
        
        <ScheduleSection />
        
        <TeamSection />
        
        <GallerySection />
        
        <RegistrationSection preselectedTrackId={referredTrack} />
        
        <ContactSection />
      </main>

      {/* Footer block */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

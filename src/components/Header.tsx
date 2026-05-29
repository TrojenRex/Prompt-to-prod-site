/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Terminal, Flame } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Tracks' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'registration', label: 'Register' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo element */}
          <div
            id="header-logo"
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            {/* Custom Google Style GDG bracket illustration inside SVG */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Blue segment */}
                <path d="M4 12C4 7.58 7.58 4 12 4" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
                {/* Red segment */}
                <path d="M12 4C16.42 4 20 7.58 20 12" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" />
                {/* Yellow segment */}
                <path d="M20 12C20 16.42 16.42 20 12 20" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" />
                {/* Green segment */}
                <path d="M12 20C7.58 20 4 16.42 4 12" stroke="#34A853" strokeWidth="3" strokeLinecap="round" />
                {/* Center dot */}
                <circle cx="12" cy="12" r="2.5" fill="#4285F4" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-display font-extrabold text-lg tracking-tight text-slate-900">GDG</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-200">On Campus</span>
              </div>
              <p className="text-[10px] font-mono text-slate-500 font-bold tracking-wider uppercase">Budge Budge Inst. of Tech.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span
                      id={`active-pill-bg-${item.id}`}
                      className="absolute inset-0 rounded-full bg-[#4285F4]"
                      style={{
                        boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)'
                      }}
                    />
                  )}
                </button>
              );
            })}
            <button
              id="cta-register-header"
              onClick={() => handleNavClick('registration')}
              className="ml-4 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#EA4335] hover:bg-[#d63022] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              Claim E-Ticket
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-4 space-y-1 animate-fadeIn"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-[#4285F4]/10 text-[#4285F4] font-bold border-l-4 border-[#4285F4]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#4285F4] shadow-sm animate-pulse" />
                )}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100 px-4">
            <button
              id="mobile-cta-register"
              onClick={() => handleNavClick('registration')}
              className="w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold uppercase tracking-widest text-white bg-[#EA4335] hover:bg-[#d63022] shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Rocket className="w-4 h-4" />
              Register Now (Free)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

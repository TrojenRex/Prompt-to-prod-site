/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Terminal, Heart, Rocket, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About P2P' },
    { id: 'events', label: 'Tracks info' },
    { id: 'schedule', label: 'Timeline' },
    { id: 'team', label: 'BBIT Crew' },
    { id: 'registration', label: 'Get Tickets' },
    { id: 'gallery', label: 'Gallery Moments' },
    { id: 'contact', label: 'Support Contacts' }
  ];

  return (
    <footer id="app-footer" className="relative bg-slate-900 text-slate-400 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      {/* Visual top border indicator with Google colors */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] " />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
          {/* Col 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm">
                <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12C4 7.58 7.58 4 12 4" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
                  <path d="M12 4C16.42 4 20 7.58 20 12" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" />
                  <path d="M20 12C20 16.42 16.42 20 12 20" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" />
                  <path d="M12 20C7.58 20 4 16.42 4 12" stroke="#34A853" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="2.5" fill="#4285F4" />
                </svg>
              </div>
              <div>
                <span className="font-display font-black text-white text-base tracking-tight leading-none block">GDG On Campus</span>
                <span className="text-[10px] font-mono font-black text-[#FBBC05] uppercase tracking-wider block">Budge Budge Institute of Technology</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              GDG On Campus Budge Budge Institute of Technology is an active community of undergraduate student innovators pursuing algorithmic engineering, rapid full-stack architectures, and core prompt strategies.
            </p>

            <div className="flex gap-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 text-[10px] max-w-xs font-mono">
              <Rocket className="w-4 h-4 text-[#FBBC05] shrink-0" />
              <p className="leading-tight">
                Prompt-to-Product Challenge offline campus sprint rolled out successfully on <span className="text-white font-bold">27th May 2026</span>.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Useful Portal Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-slate-400 hover:text-white hover:underline transition-all cursor-pointer font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Disclaimer/Partners */}
          <div className="md:col-span-3 space-y-4 text-xs font-medium">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Independent Community</h4>
            <p className="leading-relaxed">
              GDG On Campus BBIT is an independent student group; our on-campus activities, workshops, and challenges are not directly endorsed by Google Inc.
            </p>
            <div className="pt-2 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#4285F4]">
              <Globe className="w-4.5 h-4.5" />
              <span>Google Developer Groups</span>
            </div>
          </div>
        </div>

        {/* Copywrite bottom banner */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-[10px] font-mono tracking-wide">
          <p>© 2026 GDG On Campus Budge Budge Institute of Technology. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            by the BBIT Web Core Developers
          </p>
        </div>
      </div>
    </footer>
  );
}

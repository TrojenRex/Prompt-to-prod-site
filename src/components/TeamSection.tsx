/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TEAM } from '../data';
import { TeamMember } from '../types';
import { Github, Linkedin, ExternalLink, Mail, User2 } from 'lucide-react';

export default function TeamSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'tech' | 'design' | 'management'>('all');

  const filteredTeam = TEAM.filter((member) => {
    if (selectedCategory === 'all') return true;
    return member.category === selectedCategory || (selectedCategory === 'core' && member.category === 'advisors');
  });

  const getBorderTheme = (theme: string) => {
    switch (theme) {
      case 'blue':
        return 'hover:border-[#4285F4] focus:border-[#4285F4] border-slate-100 ring-[#4285F4]/10';
      case 'red':
        return 'hover:border-[#EA4335] focus:border-[#EA4335] border-slate-100 ring-[#EA4335]/10';
      case 'yellow':
        return 'hover:border-[#FBBC05] focus:border-[#FBBC05] border-slate-100 ring-[#FBBC05]/10';
      default:
        return 'hover:border-[#34A853] focus:border-[#34A853] border-slate-100 ring-[#34A853]/10';
    }
  };

  const getPillTheme = (theme: string) => {
    switch (theme) {
      case 'blue':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'red':
        return 'bg-red-50 text-red-600 border-red-200';
      case 'yellow':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  return (
    <section id="team" className="py-24 bg-[#FAFDFF] border-b border-slate-100 relative">
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#EA4335]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#4285F4] text-xs font-mono font-bold tracking-widest uppercase">
            MEET THE CAPTAINS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            GDG BBIT <span className="text-[#4285F4]">Organizing Crew</span>
          </h2>
          <p className="text-base text-slate-600">
            The dream team from Budge Budge Institute of Technology responsible for planning, promoting, and building the Prompt-to-Product Challenge 2026.
          </p>
        </div>

        {/* Filter Selection Row */}
        <div id="team-category-filters" className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Crew' },
            { id: 'core', label: 'Core / Mentors' },
            { id: 'tech', label: 'Web & AI Tech' },
            { id: 'design', label: 'UI / UX Design' },
            { id: 'management', label: 'Logistics' },
          ].map((cat) => (
            <button
              key={cat.id}
              id={`team-cat-btn-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4.5 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4285F4] border-[#4285F4] text-white shadow-md shadow-blue-200'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className={`bg-white rounded-2xl p-6 border-2 transition-all hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between ${getBorderTheme(member.colorTheme)}`}
            >
              <div className="space-y-4">
                {/* Image and role pill */}
                <div className="flex justify-between items-start">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover shadow-md border border-slate-100 group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-slate-100 shadow flex items-center justify-center">
                      <span className={`w-2.5 h-2.5 rounded-full ${member.colorTheme === 'blue' ? 'bg-[#4285F4]' : member.colorTheme === 'red' ? 'bg-[#EA4335]' : member.colorTheme === 'yellow' ? 'bg-[#FBBC05]' : 'bg-[#34A853]'}`} />
                    </span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold uppercase border ${getPillTheme(member.colorTheme)}`}>
                    {member.role}
                  </span>
                </div>

                {/* Name & Details */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-slate-950">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
                    {member.category} dept
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Channels footer */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-50">
                {member.githubLink && (
                  <a
                    href={member.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                    aria-label={`${member.name} GitHub profile`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.linkedinLink && (
                  <a
                    href={member.linkedinLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-[#4285F4] hover:bg-blue-50 transition-colors"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                <span className="ml-auto text-[10px] font-mono text-slate-400 flex items-center gap-1 font-bold">
                  Budge Budge, KOL
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

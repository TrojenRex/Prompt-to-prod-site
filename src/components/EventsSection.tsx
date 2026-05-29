/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRACKS } from '../data';
import { Track } from '../types';
import { Cpu, Layers, Palette, ShieldAlert, BadgeCheck, CheckCircle, Award } from 'lucide-react';

interface EventsSectionProps {
  onSelectTrack: (trackId: string) => void;
}

export default function EventsSection({ onSelectTrack }: EventsSectionProps) {
  const [selectedTrack, setSelectedTrack] = useState<string>(TRACKS[0].id);

  const getIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className={`w-8 h-8 ${colorClass}`} />;
      case 'Layers':
        return <Layers className={`w-8 h-8 ${colorClass}`} />;
      case 'Palette':
        return <Palette className={`w-8 h-8 ${colorClass}`} />;
      default:
        return <Cpu className={`w-8 h-8 ${colorClass}`} />;
    }
  };

  const getColors = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50/50',
          border: 'border-blue-100 hover:border-[#4285F4]',
          accent: 'bg-[#4285F4]',
          text: 'text-[#4285F4]',
          textMuted: 'text-blue-600',
          shadow: 'shadow-blue-100'
        };
      case 'red':
        return {
          bg: 'bg-red-50/50',
          border: 'border-red-100 hover:border-[#EA4335]',
          accent: 'bg-[#EA4335]',
          text: 'text-[#EA4335]',
          textMuted: 'text-red-600',
          shadow: 'shadow-red-100'
        };
      case 'yellow':
        return {
          bg: 'bg-amber-50/50',
          border: 'border-amber-100 hover:border-[#FBBC05]',
          accent: 'bg-[#FBBC05]',
          text: 'text-amber-600',
          textMuted: 'text-amber-500',
          shadow: 'shadow-amber-100'
        };
      default:
        return {
          bg: 'bg-emerald-50/50',
          border: 'border-emerald-100 hover:border-emerald-500',
          accent: 'bg-emerald-500',
          text: 'text-emerald-600',
          textMuted: 'text-emerald-500',
          shadow: 'shadow-emerald-100'
        };
    }
  };

  return (
    <section id="events" className="py-24 bg-[#FAFDFF] relative">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#4285F4]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#4285F4] text-xs font-mono font-bold tracking-widest uppercase">
            EXPLORE THE CHAMPION TRACKS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Choose Your <span className="text-[#4285F4]">Hackathon Domain</span>
          </h2>
          <p className="text-base text-slate-600">
            Select one of the specialized competition tracks designed to challenge your technical and rapid prompt compilation skills on May 27th, 2026.
          </p>
        </div>

        {/* Tab Selection Row for Desktop / Screen */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {TRACKS.map((track) => {
            const colors = getColors(track.color);
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                id={`track-tab-btn-${track.id}`}
                onClick={() => setSelectedTrack(track.id)}
                className={`flex-1 text-left px-6 py-4 rounded-xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? `bg-white border-2 shrink-0 ${track.color === 'blue' ? 'border-[#4285F4] shadow-md' : track.color === 'red' ? 'border-[#EA4335] shadow-md' : 'border-[#FBBC05] shadow-md'}`
                    : 'bg-white border-slate-100 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${isSelected ? colors.bg : 'bg-slate-50'}`}>
                    {getIcon(track.icon, isSelected ? colors.text : 'text-slate-400')}
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-sm ${isSelected ? 'text-slate-950' : 'text-slate-600'}`}>
                      {track.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                      Max Teams: {track.maxTeams}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Focused Track Card Panel */}
        {TRACKS.map((track) => {
          if (track.id !== selectedTrack) return null;
          const colors = getColors(track.color);
          return (
            <div
              key={track.id}
              id={`focused-track-panel-${track.id}`}
              className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 animate-fadeIn"
            >
              {/* Left Column: Domain Overviews */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3.5 rounded-2xl ${colors.bg}`}>
                    {getIcon(track.icon, colors.text)}
                  </div>
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${colors.text}`}>
                      Track Theme
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-none">
                      {track.name}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {track.description}
                </p>

                {/* Requirements Tech stack bullets */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold font-mono">Suggested Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold ${colors.bg} ${colors.text}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prompt-to-Product Action CTA */}
                <div className="pt-4">
                  <button
                    id={`track-select-cta-${track.id}`}
                    onClick={() => onSelectTrack(track.id)}
                    className={`px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 ${colors.accent}`}
                  >
                    Select this Domain & Register
                    <CheckCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Judging Criteria */}
              <div className="lg:col-span-5 bg-slate-50/50 p-6 sm:p-8 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold flex items-center gap-1.5 border-b border-slate-200/60 pb-3">
                    <Award className={`w-4 h-4 ${colors.text}`} />
                    Evaluation Standards (100 Points)
                  </h4>

                  <div className="space-y-4">
                    {track.criteria.map((crt, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <span className={`w-6 h-6 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5`}>
                          0{index + 1}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-800 leading-tight">
                            {crt}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                            Judges grade each item out of 25. High fidelity layouts and robust prompt blueprints get top tier tier-marks.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] text-slate-400 font-medium leading-relaxed">
                  📢 Note: Mock client API models are accepted! Focus primarily on visual state feedback, design layouts, and responsive components.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

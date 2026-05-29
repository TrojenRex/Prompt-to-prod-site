/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SCHEDULE } from '../data';
import { ScheduleItem } from '../types';
import { Clock, UserRound, ArrowDownCircle, CheckSquare, Sparkles, Pin } from 'lucide-react';

export default function ScheduleSection() {
  const [selectedType, setSelectedType] = useState<'all' | 'coding' | 'pitch' | 'general'>('all');

  const filteredItems = SCHEDULE.filter((item) => {
    if (selectedType === 'all') return true;
    if (selectedType === 'coding') return item.type === 'coding' || item.type === 'mentoring';
    if (selectedType === 'pitch') return item.type === 'pitch';
    return item.type === 'general' || item.type === 'closing';
  });

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'coding':
        return 'bg-blue-100 text-[#4285F4] border border-blue-200';
      case 'mentoring':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'pitch':
        return 'bg-red-100 text-[#EA4335] border border-red-200';
      case 'closing':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  return (
    <section id="schedule" className="py-24 bg-white border-b border-slate-50 relative">
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#FBBC05]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-mono font-bold tracking-widest uppercase">
            ON-CAMPUS TIMELINES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Event <span className="text-[#FBBC05]">Schedule & Progress</span>
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Wednesday, 27th May 2026 • The total timeline breakdown of the Prompt-to-Product Challenge offline sprint.
          </p>
        </div>

        {/* Live Progress Stage Tracker Indicator */}
        <div className="mb-14 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/60 pb-4 mb-4">
            <div>
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm font-display">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335] animate-ping" />
                <span>Lifecycle Tracker Status</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Check out the successful offline rollout stats of Wednesday, May 27th.</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#EA4335] text-white font-mono font-bold text-[10px] tracking-wider uppercase">
              100% SPRINT COMPLETED
            </span>
          </div>

          {/* Graphical Pipeline Bar */}
          <div className="relative pt-2 pb-6">
            <div className="absolute top-[28px] left-3.5 right-3.5 h-1.5 bg-slate-200 -translate-y-1/2 rounded-full -z-10" />
            <div className="absolute top-[28px] left-3.5 right-3.5 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] -translate-y-1/2 rounded-full -z-10 w-full" />

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              <div className="text-center space-y-1">
                <span className="w-7 h-7 mx-auto rounded-full bg-[#4285F4] text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">✓</span>
                <p className="text-[10px] font-bold text-slate-800">Check-In</p>
                <p className="text-[9px] text-slate-400 font-mono">09:00 AM</p>
              </div>
              <div className="text-center space-y-1">
                <span className="w-7 h-7 mx-auto rounded-full bg-[#4285F4] text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">✓</span>
                <p className="text-[10px] font-bold text-slate-800">Briefing</p>
                <p className="text-[9px] text-slate-400 font-mono">10:00 AM</p>
              </div>
              <div className="text-center space-y-1">
                <span className="w-7 h-7 mx-auto rounded-full bg-[#EA4335] text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">✓</span>
                <p className="text-[10px] font-bold text-slate-800">Phase 1</p>
                <p className="text-[9px] text-slate-400 font-mono">10:45 AM</p>
              </div>
              <div className="text-center space-y-1">
                <span className="w-7 h-7 mx-auto rounded-full bg-[#EA4335] text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">✓</span>
                <p className="text-[10px] font-bold text-slate-800">Lunch</p>
                <p className="text-[9px] text-slate-400 font-mono">01:30 PM</p>
              </div>
              <div className="text-center space-y-1 hidden sm:block">
                <span className="w-7 h-7 mx-auto rounded-full bg-[#FBBC05] text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">✓</span>
                <p className="text-[10px] font-bold text-slate-800">Phase 2</p>
                <p className="text-[9px] text-slate-400 font-mono">02:30 PM</p>
              </div>
              <div className="text-center space-y-1 hidden sm:block">
                <span className="w-7 h-7 mx-auto rounded-full bg-[#FBBC05] text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">✓</span>
                <p className="text-[10px] font-bold text-slate-800">Pitches</p>
                <p className="text-[9px] text-slate-400 font-mono">04:30 PM</p>
              </div>
              <div className="text-center space-y-1 hidden sm:block">
                <span className="w-7 h-7 mx-auto rounded-full bg-emerald-500 text-white font-bold font-mono text-xs flex items-center justify-center shadow-md">🏆</span>
                <p className="text-[10px] font-bold text-slate-800">Awards</p>
                <p className="text-[9px] text-slate-400 font-mono">05:45 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Event Cards */}
        <div id="schedule-filters" className="flex justify-center gap-2 mb-8">
          {(['all', 'coding', 'pitch', 'general'] as const).map((filter) => (
            <button
              key={filter}
              id={`filter-sched-btn-${filter}`}
              onClick={() => setSelectedType(filter)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                selectedType === filter
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Linear Vertical Timeline Layout */}
        <div className="max-w-3xl mx-auto space-y-6 relative">
          {/* Vertical dash line */}
          <div className="absolute top-2 bottom-2 left-6 md:left-1/2 w-[2px] bg-slate-100 -translate-x-1/2 -z-10" />

          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                id={`schedule-item-card-${item.id}`}
                className={`flex flex-col md:flex-row items-start md:items-center relative gap-6 md:gap-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#FBBC05] -translate-x-1/2 shadow z-10" />

                {/* Card side wrapper */}
                <div className="w-full md:w-[45%] md:px-6 pl-12 md:pl-0">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all hover:scale-[1.01]">
                    {/* Time pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono font-semibold">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.time}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${getBadgeStyle(item.type)}`}>
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {item.speaker && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                            <UserRound className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-950 font-display leading-none">{item.speaker}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-none">{item.speakerRole}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-[#FBBC05] font-mono">GUEST</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="hidden md:block w-[10%] shrink-0" />
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

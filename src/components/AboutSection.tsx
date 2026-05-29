/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Lightbulb, Users, ShieldAlert, Sparkles, Send, Zap } from 'lucide-react';

export default function AboutSection() {
  const coreValues = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#4285F4]" />,
      title: 'Prompt-Driven Engineering',
      desc: 'Coding of tomorrow is design-driven. We encourage students to synthesize structural prompts that control runtime layouts, APIs, and business states.',
      color: 'bg-[#4285F4]/10 border-[#4285F4]/20'
    },
    {
      icon: <Target className="w-6 h-6 text-[#EA4335]" />,
      title: 'Real-World Problem Focus',
      desc: 'No theoretical sandboxes. Every team addresses critical regional problems (agronomy, local health tracking, grid automation, or clean language-translation access).',
      color: 'bg-[#EA4335]/10 border-[#EA4335]/20'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FBBC05]" />,
      title: 'Rapid Prototyping Speed',
      desc: 'Building functional web software in hours. Break the cycle of long, tedious architectural debates and validate direct user layouts from client-side execution.',
      color: 'bg-[#FBBC05]/10 border-[#FBBC05]/20'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-50 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#EA4335]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#EA4335] text-xs font-mono font-bold tracking-widest uppercase">
            LEARN THE MISSION
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            What is <span className="text-[#EA4335]">Prompt-to-Product?</span>
          </h2>
          <p className="text-base text-slate-600">
            The traditional boundaries of coding are shifting. Google Developer Groups (GDG) Budge Budge Institute of Technology aims to bridge the gap between abstract human ideas and concrete software solutions through prompt orchestration.
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-800 tracking-tight">
              An intense sprint where design thinkers, developers, and AI prompt strategists combine forces.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Organized by the official Chapter of GDG On Campus – BBIT, the challenge poses a single objective: construct fully customized, functional digital software using modern AI assistant frameworks within a limited timeframe.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Instead of traditional code-heavy software development, participants learn to act as System Architects—devising structural blueprints, framing precision prompts, testing user experience criteria, and presenting high-impact pitches to domain experts.
            </p>

            {/* Quote Block */}
            <div className="border-l-4 border-[#FBBC05] bg-[#FBBC05]/5 p-5 rounded-r-2xl">
              <p className="text-sm font-semibold italic text-slate-700 leading-relaxed">
                "Our vision at Budge Budge Institute of Technology is to ignite an algorithmic yet creative mindset in every student. Generative AI allows us to test complex designs within hours instead of traditional weeks!"
              </p>
              <p className="text-xs font-bold text-slate-900 mt-2 font-mono uppercase tracking-wider">
                — GDG On Campus Board of Counselors, BBIT Kolkata
              </p>
            </div>
          </div>

          {/* Right Image/Cards Detail */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all hover:shadow-md flex gap-4 ${val.color}`}
                >
                  <div className="shrink-0 pt-0.5">{val.icon}</div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-slate-900">{val.title}</h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

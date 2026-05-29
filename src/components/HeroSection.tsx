/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, MapPin, Award, Users, Terminal, Play, ArrowRight, CheckCircle2, ChevronRight, Check } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onExploreTracksClick: () => void;
}

export default function HeroSection({ onRegisterClick, onExploreTracksClick }: HeroSectionProps) {
  // Sandbox Simulator State
  const [selectedDomain, setSelectedDomain] = useState('agrilink');
  const [customPrompt, setCustomPrompt] = useState('A voice-enabled smart agronomy system that diagnostics plant diseases from pixel leaf inputs and suggests organic fertilizer components in Bengali.');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedMVP, setSimulatedMVP] = useState<any | null>(null);

  const domains = [
    {
      id: 'agrilink',
      label: '🌱 Agri-Tech diagnostics',
      prompt: 'A voice-enabled smart agronomy system that diagnostics plant diseases from pixel leaf inputs and suggests organic fertilizer components in Bengali.'
    },
    {
      id: 'medsync',
      label: '💊 Health Copilot',
      prompt: 'A real-time medicine intake assistant for local seniors that uses image recognition on pillboxes and sends Whatsapp nudges with custom audio voice guidance.'
    },
    {
      id: 'solarflow',
      label: '☀️ Renewable Grid',
      prompt: 'An offline smart solar sharing dashboard for remote West Bengal villages using mesh networking to distribute power and track battery bank health.'
    }
  ];

  const handleDomainChange = (id: string) => {
    setSelectedDomain(id);
    const domainObj = domains.find(d => d.id === id);
    if (domainObj) {
      setCustomPrompt(domainObj.prompt);
    }
    setSimulatedMVP(null);
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulatedMVP(null);
    setTimeout(() => {
      setIsSimulating(false);
      // Create interesting mocked product outputs depending on selected domain
      if (selectedDomain === 'agrilink') {
        setSimulatedMVP({
          title: 'Krishi-Chokshu AI',
          description: 'Intelligent Crop Sentinel & Bengali Speech Diagnostic Client',
          status: 'BUILD STABLE (100% Client-Side)',
          features: [
            'Bengal-Speech Audio synthesizer voice generator',
            'Surgical leaf disease pixel classification logic Matrix',
            'Standard SQLite localized crop database index'
          ],
          primaryColor: 'border-l-4 border-emerald-500 bg-emerald-50/50',
          textColor: 'text-emerald-700'
        });
      } else if (selectedDomain === 'medsync') {
        setSimulatedMVP({
          title: 'Aayu-Nudge Bot',
          description: 'Visual Pill Identifier & Senior Safety Dial Routine',
          status: 'DEPLOYED TO EDGE (Vite App ready)',
          features: [
            'Vite-based webcam pill box crop bounding frame',
            'SMS Whatsapp scheduled cron alert hooks',
            'Warm high-contrast UI mode with 18px text sizing'
          ],
          primaryColor: 'border-l-4 border-rose-500 bg-rose-50/50',
          textColor: 'text-rose-700'
        });
      } else {
        setSimulatedMVP({
          title: 'Gram-Solar Mesh Grid',
          description: 'Mesh Node Battery Monitor & P2P Energy Exchange',
          status: 'PROTOTYPE COMPILED SUCCESSFULLY',
          features: [
            'Localized WebSockets mesh telemetry logger',
            'Interactive real-time voltage flow SVG chart dashboard',
            'Direct peer transaction log and safety warnings'
          ],
          primaryColor: 'border-l-4 border-amber-500 bg-amber-50/50',
          textColor: 'text-amber-700'
        });
      }
    }, 1500);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#4285F4]/5 via-white to-white"
    >
      {/* Background colorful elements of Google */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#4285F4]/5 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FBBC05]/5 blur-3xl -z-10" />
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-[#EA4335]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#4285F4] border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">GDG On Campus • BBIT</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.1]">
              Prompt to Product <br />
              <span className="google-text-gradient">Challenge 2026</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              An elite, fast-paced innovation hackathon where your prompt-engineering strategy directly targets building fully operational, visual tech prototypes in a matter of hours.
            </p>

            {/* Quick Event Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-700">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <Calendar className="w-4 h-4 text-[#EA4335]" />
                <span className="text-sm font-semibold">Wed, 27th May 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <MapPin className="w-4 h-4 text-[#4285F4]" />
                <span className="text-sm font-semibold">BBIT Campus, Kolkata</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                <Award className="w-4 h-4 text-[#FBBC05]" />
                <span className="text-sm font-semibold">Cash Prizes & Badges</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                id="hero-cta-register"
                onClick={onRegisterClick}
                className="px-8 py-4 bg-[#4285F4] hover:bg-[#2b71df] text-white font-bold text-sm tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                Claim Entry Ticket
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-tracks"
                onClick={onExploreTracksClick}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm tracking-wider uppercase rounded-full shadow-md border border-slate-200 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                Inspect Event Tracks
              </button>
            </div>

            {/* Micro Stats Row */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-slate-100">
              <div>
                <p className="text-2xl font-display font-black text-slate-900">150+</p>
                <p className="text-xs text-slate-500 font-medium">Participants</p>
              </div>
              <div className="border-x border-slate-100 px-4">
                <p className="text-2xl font-display font-black text-slate-900">40+</p>
                <p className="text-xs text-slate-500 font-medium">Custom MVPs</p>
              </div>
              <div>
                <p className="text-2xl font-display font-black text-slate-900">₹25K+</p>
                <p className="text-xs text-slate-500 font-medium">Bounty Pool</p>
              </div>
            </div>
          </div>

          {/* Hero Right: Interactive Prompt-to-Product Simulator Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 text-slate-300">
              {/* Terminal frame headers */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-[#34A853]" />
                  <span className="text-xs font-mono font-medium text-slate-500 ml-2">PROMPT_ENGINEER.TXT</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">
                  GDG CORE
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-[#4285F4] font-mono leading-relaxed">
                  // EXPERIENCE THE PITCH: Select a track challenge sector to mock compile a product interface instantly using generative logical prompts!
                </p>

                {/* Grid domain selector */}
                <div className="grid grid-cols-3 gap-2">
                  {domains.map((dom) => (
                    <button
                      key={dom.id}
                      onClick={() => handleDomainChange(dom.id)}
                      className={`px-2 py-2 text-left rounded-lg text-xs font-semibold border transition-all ${
                        selectedDomain === dom.id
                          ? 'border-[#4285F4] bg-[#4285F4]/10 text-white'
                          : 'border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {dom.label.split(' ')[0]} {dom.label.substring(dom.label.indexOf(' ') + 1)}
                    </button>
                  ))}
                </div>

                {/* Prompt box */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-mono font-bold">Input Prompt Logic</label>
                  <textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    rows={3}
                    className="w-full bg-slate-950 rounded-lg p-3 text-xs text-slate-200 border border-slate-800 focus:outline-none focus:border-[#4285F4] transition-all font-mono leading-relaxed resize-none"
                  />
                </div>

                {/* Simulate Button */}
                <button
                  id="sandbox-simulate-btn"
                  onClick={handleSimulate}
                  disabled={isSimulating || !customPrompt.trim()}
                  className="w-full py-3 bg-gradient-to-r from-[#4285F4] to-[#ea4335] text-white text-xs font-mono font-bold tracking-widest uppercase rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSimulating ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                      COMPILING MVP ENVIRONMENT...
                    </>
                  ) : (
                    <>
                      <Terminal className="w-3.5 h-3.5" />
                      SIMULATE PROMPT-TO-PRODUCT
                    </>
                  )}
                </button>

                {/* Result output window */}
                {simulatedMVP && (
                  <div className={`mt-4 rounded-xl p-4 border ${simulatedMVP.primaryColor} animate-fadeIn`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-1.5 leading-none">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {simulatedMVP.title}
                        </h4>
                        <p className="text-xs text-slate-600 font-medium mt-1">{simulatedMVP.description}</p>
                      </div>
                      <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 text-[9px] font-mono font-bold uppercase shrink-0">
                        SUCCESS
                      </span>
                    </div>

                    <div className="space-y-1.5 mt-3 pt-2 border-t border-slate-200">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">Generated Features:</p>
                      {simulatedMVP.features.map((feat: string, index: number) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-slate-700">
                          <ChevronRight className="w-3.5 h-3.5 text-[#4285F4]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[9px] font-mono text-emerald-600 font-semibold mt-3 text-right">
                      {simulatedMVP.status}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* GDG Float badges */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EA4335]/15 flex items-center justify-center text-[#EA4335]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold">Event organized by</p>
                <p className="text-sm font-display font-bold text-slate-900">GDG Campus BBIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

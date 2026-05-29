/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TRACKS } from '../data';
import { Registration } from '../types';
import { Sparkles, QrCode, ClipboardCheck, ArrowLeft, Heart, Flame, Printer, Ticket, CheckSquare, Search } from 'lucide-react';

interface RegistrationSectionProps {
  preselectedTrackId: string;
}

export default function RegistrationSection({ preselectedTrackId }: RegistrationSectionProps) {
  // Local storage check for existing ticket
  const [ticketLoaded, setTicketLoaded] = useState<Registration | null>(null);
  const [formDone, setFormDone] = useState(false);

  // Form Fields
  const [teamName, setTeamName] = useState('');
  const [collegeName, setCollegeName] = useState('Budge Budge Institute of Technology');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(TRACKS[0].id);
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'expert'>('intermediate');
  const [m2Name, setM2Name] = useState('');
  const [m2Email, setM2Email] = useState('');
  const [m3Name, setM3Name] = useState('');
  const [m4Name, setM4Name] = useState('');

  // Tickets Search query for retrieving
  const [searchEmail, setSearchEmail] = useState('');
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    // If tracks are preselected from preceding parent triggers (EventsSection tab click)
    if (preselectedTrackId) {
      setSelectedTrack(preselectedTrackId);
      // Smoothly scroll to the registration zone to keep context
      const elem = document.getElementById('registration');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [preselectedTrackId]);

  useEffect(() => {
    // Check if user has an active ticket already
    const savedReg = localStorage.getItem('gdg_p2p_active_registration');
    if (savedReg) {
      try {
        const parsed = JSON.parse(savedReg);
        setTicketLoaded(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleRegisterInput = (e: React.FormEvent) => {
    e.preventDefault();

    // Verification check strings
    if (!teamName || !leadName || !leadEmail || !leadPhone) {
      alert('Must fill in all lead participant details!');
      return;
    }

    const customTicketNo = 'GDG-P2P-' + Math.floor(Math.random() * 900000 + 100000);
    const customSeatNo = 'SEAT-LAB-' + String.fromCharCode(65 + Math.floor(Math.random() * 4)) + Math.floor(Math.random() * 20 + 1);

    const newRegistration: Registration = {
      id: 'reg-' + Date.now(),
      teamName,
      collegeName,
      leadName,
      leadEmail,
      leadPhone,
      trackId: selectedTrack,
      experienceLevel,
      member2Name: m2Name || undefined,
      member2Email: m2Email || undefined,
      member3Name: m3Name || undefined,
      member4Name: m4Name || undefined,
      registeredAt: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }),
      ticketNumber: customTicketNo,
      seatNumber: customSeatNo
    };

    // Stashing to localStorage
    localStorage.setItem('gdg_p2p_active_registration', JSON.stringify(newRegistration));
    
    // Save to indexing list for lookup search queries
    const listSaved = localStorage.getItem('gdg_p2p_registrations_list') || '[]';
    try {
      const listParsed = JSON.parse(listSaved);
      listParsed.push(newRegistration);
      localStorage.setItem('gdg_p2p_registrations_list', JSON.stringify(listParsed));
    } catch (_) {}

    setTicketLoaded(newRegistration);
    setFormDone(true);
  };

  const handleClearRegistration = () => {
    if (confirm('Are you sure you want to dismiss this ticket and register a new team?')) {
      localStorage.removeItem('gdg_p2p_active_registration');
      setTicketLoaded(null);
      setFormDone(false);
      // Reset fields
      setTeamName('');
      setLeadName('');
      setLeadEmail('');
      setLeadPhone('');
      setM2Name('');
      setM2Email('');
      setM3Name('');
      setM4Name('');
    }
  };

  const handleTicketSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    if (!searchEmail.trim()) return;

    const listSaved = localStorage.getItem('gdg_p2p_registrations_list') || '[]';
    try {
      const listParsed: Registration[] = JSON.parse(listSaved);
      const matched = listParsed.find(
        (reg) => reg.leadEmail.toLowerCase() === searchEmail.trim().toLowerCase()
      );
      if (matched) {
        localStorage.setItem('gdg_p2p_active_registration', JSON.stringify(matched));
        setTicketLoaded(matched);
        setSearchEmail('');
      } else {
        setSearchError('No ticket registration listed for this email. Send registration details below!');
      }
    } catch (_) {
      setSearchError('Error accessing lookup indices.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getTrackName = (id: string) => {
    const tr = TRACKS.find(t => t.id === id);
    return tr ? tr.name : 'Rapid Full-Stack MVP';
  };

  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-[#FAFDFF] to-white border-b border-slate-50 relative">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#EA4335]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1px.5 px-3 py-1 rounded-full bg-red-50 text-[#EA4335] text-xs font-mono font-bold tracking-widest uppercase">
            RESERVE ACCESS SPOTS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Claim Your <span className="text-[#EA4335]">Digital Entry Ticket</span>
          </h2>
          <p className="text-base text-slate-600">
            Submit team parameters for Budge Budge Institute of Technology offline campus challenges and enjoy direct seat reservation index vectors.
          </p>
        </div>

        {/* Outer Split Wrapper - Form on left, ticket generator on right or fallback view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT PANEL */}
          <div className="lg:col-span-7">
            {ticketLoaded ? (
              /* Already Registered Show / Success E-Ticket Render */
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <ClipboardCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Squad Registration Approved</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Your laboratory seat was locked successfully.</p>
                    </div>
                  </div>
                  <button
                    id="new-registration-btn"
                    onClick={handleClearRegistration}
                    className="px-4 py-2 border border-emerald-200 hover:border-emerald-300 text-emerald-700 bg-emerald-100/40 hover:bg-emerald-100/80 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer"
                  >
                    New Registration
                  </button>
                </div>

                {/* Simulated SVG Graphic Card representing GDG Board E-Ticket */}
                <div id="gdg-printed-ticket" className="relative border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-900 via-[#101b33] to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                  {/* Colorful Google border top */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] " />

                  {/* Top Ticket header banner */}
                  <div className="flex justify-between items-start border-b border-slate-800 pb-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 leading-none">
                        <span className="font-display font-extrabold text-white text-base tracking-tight">GDG On Campus</span>
                        <span className="text-[9px] font-semibold py-0.5 px-1 bg-amber-500 rounded text-slate-950 border border-amber-400">P2P</span>
                      </div>
                      <p className="text-[10px] font-mono text-[#4285F4] font-bold uppercase tracking-wider">Budge Budge Inst. of Tech.</p>
                    </div>

                    <div className="text-right space-y-1">
                      <span className="text-[9px] px-2 py-0.5 rounded bg-[#EA4335]/30 text-[#EA4335] border border-[#EA4335]/40 font-mono font-bold uppercase">
                        Lab Voucher
                      </span>
                      <p className="text-[10px] text-slate-400 font-mono font-bold mt-1 uppercase tracking-widest">{ticketLoaded.ticketNumber}</p>
                    </div>
                  </div>

                  {/* Middle Ticket content fields */}
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-6 text-xs border-b border-slate-800/60 font-medium">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Squad Squad Name</span>
                      <p className="text-sm font-display font-bold text-white uppercase">{ticketLoaded.teamName}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Laboratory Seat</span>
                      <p className="text-sm font-display font-bold text-[#FBBC05]">{ticketLoaded.seatNumber}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Lead Captain</span>
                      <p className="text-sm text-slate-200">{ticketLoaded.leadName}</p>
                    </div>
                    <div className="space-y-1 col-span-2 sm:col-span-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Assigned Track</span>
                      <p className="text-xs text-[#4285F4] font-semibold leading-relaxed truncate">{getTrackName(ticketLoaded.trackId)}</p>
                    </div>
                    <div className="space-y-1 col-span-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">College Organization / campus</span>
                      <p className="text-xs text-slate-300 italic">{ticketLoaded.collegeName}</p>
                    </div>
                  </div>

                  {/* Ticket footer with Mock QR Graphic Scanner */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5">
                    <div className="space-y-1 text-center sm:text-left self-start">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">HACKATHON SCHEDULE TIMING</span>
                      <p className="text-xs font-bold text-slate-200">Wednesday, 27th May 2026 • 09:00 AM IST</p>
                      <p className="text-[10px] text-slate-500">BBIT Computer Lab Annex, Central Auditorium Kolkata</p>
                    </div>

                    <div className="shrink-0 bg-white p-2.5 rounded-lg border border-slate-700 shadow flex items-center justify-center">
                      <svg className="w-16 h-16 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6H13V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5zm13-2h3v1h-3v-1zm1 3h3v3h-3v-3zm-2-2h1v4h-1v-4zm-2 2h2v1h-2v-1zm4-6h1v3h-1V7zm-2 2h1v1h-1V9zm-2-2h1v1h-1V7zm2-4h2v1h-2V3zm-2 4h1v1h-1V7zm-3 7h1v1h-1v-1zm1 2h1v1h-1v-1zm-2-1h1v3h-1v-3zm10 5h1v1h-1v-1zm-2-1h1v1h-1v-1zm-2 1h1v1h-1v-1z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                  <button
                    id="print-ticket-btn"
                    onClick={handlePrint}
                    className="flex-1 py-3 px-5 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 hover:shadow text-slate-800 text-xs font-mono font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-slate-500" />
                    Print / Save PDF
                  </button>

                  <a
                    href="https://bbit.edu.in"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all text-center cursor-pointer"
                  >
                    <span>Read Campus Guidelines</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Core Input Registration Form */
              <form
                onSubmit={handleRegisterInput}
                className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl space-y-6 animate-fadeIn"
              >
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display font-black text-xl text-slate-900">Registration Details</h3>
                  <p className="text-xs text-slate-400 mt-1">Provide your lead member details and associate squad coordinates.</p>
                </div>

                {/* College selection defaults */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label id="lbl-lead-name" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">Lead Captain Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Dey"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label id="lbl-team-name" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">Squad Team Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Matrix Hackers"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label id="lbl-lead-email" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">Lead Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. captain@gmail.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label id="lbl-lead-phone" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">Lead Whatsapp Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label id="lbl-college" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">College Affiliation / Campus *</label>
                  <input
                    type="text"
                    required
                    placeholder="Budge Budge Institute of Technology, Kolkata"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all font-mono"
                  />
                </div>

                {/* Select track & skill Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label id="lbl-track" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">Assign Track Theme *</label>
                    <select
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all font-sans cursor-pointer"
                    >
                      {TRACKS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label id="lbl-skill" className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-mono">AI Prompt Skill Level *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {([
                        { id: 'beginner', label: 'Beginner' },
                        { id: 'intermediate', label: 'Mid' },
                        { id: 'expert', label: 'Pro' }
                      ] as const).map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          id={`skill-btn-${lvl.id}`}
                          onClick={() => setExperienceLevel(lvl.id)}
                          className={`py-2 px-1 text-center font-mono font-bold text-xs rounded-xl border transition-all cursor-pointer ${
                            experienceLevel === lvl.id
                              ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-800 text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Collapsible Squad member details */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-150 space-y-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Include Squad Associates (Up to 4 total)</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-bold text-slate-400">Member #2 Name</label>
                      <input
                        type="text"
                        placeholder="Optional associate name"
                        value={m2Name}
                        onChange={(e) => setM2Name(e.target.value)}
                        className="w-full bg-white rounded-lg px-3 py-2 text-xs border border-slate-200 focus:outline-none focus:border-[#4285F4] transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase font-bold text-slate-400">Member #3 Name</label>
                      <input
                        type="text"
                        placeholder="Optional associate name"
                        value={m3Name}
                        onChange={(e) => setM3Name(e.target.value)}
                        className="w-full bg-white rounded-lg px-3 py-2 text-xs border border-slate-200 focus:outline-none focus:border-[#4285F4] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Action submit button */}
                <button
                  type="submit"
                  id="form-submit-reg-btn"
                  className="w-full py-4 bg-[#EA4335] hover:bg-[#d63022] text-white font-mono font-bold tracking-widest text-sm uppercase rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Ticket className="w-5 h-5" />
                  GENERATE OFFICIAL CAMPUS E-TICKET
                </button>
              </form>
            )}
          </div>

          {/* RIGHT PANEL: Search retrieval / Quick Info details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Search Check-In Ticket retrieve widget */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md space-y-4">
              <h4 className="font-display font-semibold text-sm text-slate-900 flex items-center gap-2">
                <Search className="w-4.5 h-4.5 text-[#4285F4]" />
                Retrieve Pre-booked E-Tickets
              </h4>
              <p className="text-xs text-slate-500 leading-normal">
                Registered previously? Simply type your lead participant's email to fetch and print your assigned ticket from the database indices immediately.
              </p>

              <form onSubmit={handleTicketSearch} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="e.g. captain@gmail.com"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="flex-1 bg-slate-50 rounded-xl px-3 py-2.5 text-xs text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  id="search-ticket-submit-btn"
                  className="px-4 bg-[#4285F4] hover:bg-blue-600 text-white text-xs font-mono font-bold uppercase rounded-xl shadow transition-all cursor-pointer"
                >
                  Search
                </button>
              </form>
              {searchError && (
                <p className="text-[10px] text-red-500 font-semibold">{searchError}</p>
              )}
            </div>

            {/* Quick Campus Rules Information Card */}
            <div className="bg-gradient-to-br from-[#4285F4]/5 to-[#FBBC05]/5 p-6 rounded-2xl border border-blue-50 space-y-4">
              <h4 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2 leading-none">
                <Flame className="w-5 h-5 text-[#EA4335]" />
                Event General Instructions
              </h4>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-slate-100 font-bold font-mono text-[9px] shrink-0 mt-0.5 text-slate-800">1</div>
                  <p className="leading-relaxed">Bring your college identity card and physical entry voucher copy for entry checks.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-slate-100 font-bold font-mono text-[9px] shrink-0 mt-0.5 text-slate-800">2</div>
                  <p className="leading-relaxed">Report at the laboratory lounge at exactly 09:00 AM IST on Wednesday, 27th May 2026.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-slate-100 font-bold font-mono text-[9px] shrink-0 mt-0.5 text-slate-800">3</div>
                  <p className="leading-relaxed">Complimentary high-speed WiFi networks, breakfast wraps, and afternoon meals will be provided completely free of charge.</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-bold font-mono">
                <span>TOTAL SPOTS: 150</span>
                <span className="text-[#EA4335] animate-pulse">138 LAB SEATS RESERVED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

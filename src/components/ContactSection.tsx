/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS } from '../data';
import { Mail, Phone, MapPin, Send, CheckSquare, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactSection() {
  // Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentMessage, setSentMessage] = useState<ContactMessage | null>(null);

  const handleToggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      const msg: ContactMessage = {
        name,
        email,
        subject,
        message,
        sentAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setSentMessage(msg);
      // Reset inputs
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#4285F4]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#4285F4] text-xs font-mono font-bold tracking-widest uppercase">
            HAVE QUESTIONS FOR THE CREW?
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Get in Touch & <span className="text-[#4285F4]">Resolve Queries</span>
          </h2>
          <p className="text-base text-slate-600">
            Read standard FAQs or drop custom inquiry messages. Our student coordinators will reach back with swift updates.
          </p>
        </div>

        {/* FAQs Accordion Row */}
        <div className="max-w-4xl mx-auto mb-20 space-y-4">
          <h3 className="font-display font-bold text-center text-xl text-slate-900 flex items-center justify-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-[#FBBC05]" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  id={`faq-${index}`}
                  className="bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden transition-all hover:bg-slate-50"
                >
                  <button
                    onClick={() => handleToggleFaq(index)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100/50 leading-relaxed animate-slideDown">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact info cards and Form splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left panel: Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-950">Campus Operations & Addresses</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Budge Budge Institute of Technology (BBIT) is a premium engineering college in Kolkata. The GDG On Campus unit organizes rapid sprints inside the main campus laboratory infrastructure.
            </p>

            {/* Address cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <MapPin className="w-5 h-5 text-[#EA4335] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900 font-display text-sm">BBIT Main Buildings</p>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Nischintapur, Budge Budge, Kolkata, West Bengal 700137
                  </p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 font-mono mt-1">Computer Lab Annex 3</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <Mail className="w-5 h-5 text-[#4285F4] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900 font-display text-sm">GDG BBIT Official Emails</p>
                  <p className="text-slate-500 mt-1 select-all">officialabhradeep@gmail.com</p>
                  <p className="text-slate-400 mt-0.5">gdg.campus.bbit@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <Phone className="w-5 h-5 text-[#34A853] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900 font-display text-sm">Operations Helpline Contacts</p>
                  <p className="text-slate-500 mt-1 font-mono">+91 33 2482 0643 / +91 91234 56789</p>
                  <p className="text-slate-400 mt-0.5">Contact during schedule hours (09:00 AM - 06:00 PM)</p>
                </div>
              </div>
            </div>

            {/* Simulated Map vector mockup */}
            <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
              {/* Fake Map graphic */}
              <div className="relative text-center space-y-2 z-10">
                <div className="w-8 h-8 rounded-full bg-[#EA4335]/25 text-[#EA4335] mx-auto flex items-center justify-center animate-bounce">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <p className="text-xs font-bold text-slate-800">Kolkata Regional Route Tracker</p>
                <p className="text-[10px] text-slate-400 font-mono">22.4820° N, 88.1818° E • Budge Budge WB</p>
                <a
                  href="https://maps.google.com/?q=Budge+Budge+Institute+of+Technology"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider bg-white rounded-md border border-slate-200 px-2 py-1 hover:bg-slate-50 shadow-sm text-[#4285F4] cursor-pointer"
                >
                  Locate on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Message form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-slate-150 shadow-inner">
              {sentMessage ? (
                /* Success feedback panel */
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-base text-slate-900">Inquiry Received</h4>
                    <p className="text-xs text-slate-500 mt-1">Thanks, {sentMessage.name}! Our team logged your submission at {sentMessage.sentAt}.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-100 max-w-md mx-auto">
                    <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">Submitted Subject:</span>
                    <p className="text-xs font-bold font-display text-slate-800 mt-0.5">{sentMessage.subject || 'General inquiry details'}</p>
                    <p className="text-xs text-slate-600 font-medium italic mt-1.5 border-t border-slate-200/60 pt-1.5">
                      "{sentMessage.message}"
                    </p>
                  </div>
                  <button
                    id="new-inquiry-btn"
                    onClick={() => setSentMessage(null)}
                    className="px-5 py-2.5 bg-[#4285F4] hover:bg-blue-600 text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Main message input fields */
                <form onSubmit={handleSendMessage} className="space-y-4 font-sans">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-slate-950">Inquiry Mailbox</h4>
                    <p className="text-xs text-slate-500">Provide contacts below and our web leads will reach back shortly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label id="lbl-contact-name" className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400">FullName *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abhradeep Sen"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white rounded-xl px-4 py-3 text-xs text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label id="lbl-contact-email" className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400">Email Contact *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. hello@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white rounded-xl px-4 py-3 text-xs text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label id="lbl-contact-subject" className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400">Mail Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Traveling details to BBIT Campus"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white rounded-xl px-4 py-3 text-xs text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label id="lbl-contact-message" className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400">Message Content *</label>
                    <textarea
                      required
                      placeholder="Write your brief inquiries here..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white rounded-xl px-4 py-3 text-xs text-slate-800 border border-slate-200 focus:outline-none focus:border-[#4285F4] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSending}
                    className="w-full py-3.5 bg-[#4285F4] hover:bg-blue-600 disabled:opacity-50 text-white font-mono font-bold tracking-widest text-xs uppercase rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/55 border-t-white rounded-full animate-spin" />
                        SENDING TRANSMISSION...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        SEND ENQUIRY MAILBOX
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

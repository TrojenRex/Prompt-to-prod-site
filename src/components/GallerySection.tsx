/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';
import { ZoomIn, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

export default function GallerySection() {
  const [selectedTag, setSelectedTag] = useState<'all' | 'briefing' | 'coding' | 'pitching' | 'winners'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = GALLERY.filter((item) => {
    if (selectedTag === 'all') return true;
    return item.category === selectedTag;
  });

  const handleOpenLightbox = (itemId: string) => {
    const idx = GALLERY.findIndex(item => item.id === itemId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < GALLERY.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white border-b border-slate-50 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#FBBC05]/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-mono font-bold tracking-widest uppercase">
            EVENT MOMENTS & ARCHIVES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Photo <span className="text-[#FBBC05]">Highlights Gallery</span>
          </h2>
          <p className="text-base text-slate-600">
            A visual overview of the intensive hours, presentation grids, mentorship checks, and celebrations of Prompt-to-Product Challenge 2026.
          </p>
        </div>

        {/* Gallery Filters */}
        <div id="gallery-category-filters" className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'briefing', label: 'Opening Briefs' },
            { id: 'coding', label: 'Coding Lab' },
            { id: 'pitching', label: 'Pitches' },
            { id: 'winners', label: 'Ceremonies' },
          ].map((tag) => (
            <button
              key={tag.id}
              id={`gallery-tag-btn-${tag.id}`}
              onClick={() => setSelectedTag(tag.id as any)}
              className={`px-4.5 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => handleOpenLightbox(item.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-zoom-in"
            >
              {/* Image box with Zoom overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-905">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm text-[9px] font-mono font-black uppercase tracking-wider text-slate-800">
                  {item.category}
                </span>
              </div>

              {/* Text metadata */}
              <div className="p-5 space-y-1.5">
                <h3 className="font-display font-bold text-sm text-slate-950 group-hover:text-[#FBBC05] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informative fallback */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12 p-8 border border-dashed border-slate-200 rounded-2xl max-w-sm mx-auto">
            <Image className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-sm text-slate-500 font-medium">No highlights matched this filter category.</p>
          </div>
        )}

        {/* Lighbox Modal View */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox-modal"
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
          >
            {/* Top Bar inside Lightbox */}
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-slate-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Photo {lightboxIndex + 1} of {GALLERY.length}
              </span>
              <button
                id="lightbox-close-btn"
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full hover:bg-white/10 text-white hover:text-slate-200 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Container (Image + Arrows) */}
            <div className="flex-1 max-w-6xl mx-auto w-full flex items-center justify-between gap-4">
              {/* Left trigger */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* The Image box */}
              <div
                id="lightbox-img-wrapper"
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[70vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center. border border-white/5"
              >
                <img
                  src={GALLERY[lightboxIndex].url}
                  alt={GALLERY[lightboxIndex].title}
                  className="max-h-[70vh] max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right trigger */}
              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Bar Details */}
            <div className="w-full max-w-3xl mx-auto text-center text-slate-300 pb-2 space-y-1">
              <h4 className="font-display font-extrabold text-[#FBBC05] text-lg">
                {GALLERY[lightboxIndex].title}
              </h4>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                {GALLERY[lightboxIndex].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

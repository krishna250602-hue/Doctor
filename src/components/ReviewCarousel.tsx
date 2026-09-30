import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../data/clinicData';

export const ReviewCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const current = reviewsData[activeIndex];

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 md:p-10 text-slate-800 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700">
            <ShieldCheck size={14} />
            Verified Google Reviews (5.0 ★ Rating)
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Real Patient Recoveries &amp; Surgical Outcomes
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Read verified testimonials from patients who underwent keyhole arthroscopy, robotic joint replacement, and trauma surgery.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevReview}
            aria-label="Previous review"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-all hover:bg-sky-600 hover:text-white focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold text-slate-500">
            {activeIndex + 1} / {reviewsData.length}
          </span>
          <button
            onClick={nextReview}
            aria-label="Next review"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-all hover:bg-sky-600 hover:text-white focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Featured Active Card */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-200/80 bg-gradient-to-r from-sky-50/70 via-sky-50/30 to-white p-6 md:p-8 shadow-md">
        <Quote className="absolute right-6 top-6 h-24 w-24 text-sky-200/40 pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 font-bold text-white text-base shadow-md">
              {current.initials}
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-900">{current.author}</h4>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 size={13} className="text-sky-600" />
                <span>{current.source}</span>
                <span>•</span>
                <span>{current.date}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Treatment Badge */}
        <div className="mb-4 inline-block rounded-lg bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 border border-sky-200">
          Procedure: {current.treatment}
        </div>

        {/* Snippet / Full Text */}
        <div className="text-sm md:text-base leading-relaxed text-slate-700 font-medium italic">
          "{expandedReviews[current.id] ? current.fullReview : current.snippet}"
        </div>

        {/* Toggle Read Full */}
        <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between">
          <button
            onClick={() => toggleExpand(current.id)}
            className="text-xs font-bold text-sky-600 hover:underline focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            {expandedReviews[current.id] ? 'Show Less' : 'Read Full Patient Case Experience →'}
          </button>
          <span className="text-[11px] text-slate-500">Restored Pain-Free Mobility</span>
        </div>
      </div>

      {/* Mini Thumbnails Strip */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        {reviewsData.map((rev, idx) => (
          <button
            key={rev.id}
            onClick={() => setActiveIndex(idx)}
            className={`rounded-xl border p-2.5 text-left transition-all ${
              activeIndex === idx
                ? 'border-sky-500 bg-sky-50 shadow-xs ring-1 ring-sky-500'
                : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-600'
            }`}
          >
            <div className="text-xs font-bold text-slate-800 truncate">{rev.author}</div>
            <div className="text-[10px] text-sky-600 font-semibold truncate">{rev.treatment.split(' ')[0]}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

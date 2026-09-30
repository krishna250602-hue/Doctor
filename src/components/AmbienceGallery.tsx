import React, { useState } from 'react';
import { ambienceImages, surgicalWorkImages } from '../data/clinicData';
import { X, ZoomIn, Building2, Award } from 'lucide-react';

export const AmbienceGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ambience' | 'surgical'>('ambience');
  const [activeModalImage, setActiveModalImage] = useState<{ image: string; title: string } | null>(null);

  const displayList = activeTab === 'ambience' ? ambienceImages : surgicalWorkImages;

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 md:p-10 text-slate-800 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700">
            <Building2 size={14} />
            CLINICAL EXCELLENCE &amp; AMBIENCE
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Inside Dr. Shashidhar's Ortho Clinic
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Aseptic surgical environments, comfortable patient lounges, and advanced orthopaedic technology.
          </p>
        </div>

        {/* Gallery Tab Switcher */}
        <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('ambience')}
            className={`rounded-lg px-3.5 py-1.5 transition-all ${
              activeTab === 'ambience' ? 'bg-sky-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Clinic Ambience ({ambienceImages.length})
          </button>
          <button
            onClick={() => setActiveTab('surgical')}
            className={`rounded-lg px-3.5 py-1.5 transition-all ${
              activeTab === 'surgical' ? 'bg-sky-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Surgical Cases ({surgicalWorkImages.length})
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displayList.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalImage(item)}
            className="group relative h-48 overflow-hidden rounded-2xl border border-sky-100 bg-slate-50 cursor-pointer shadow-sm transition-all duration-300 hover:scale-103 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-xs font-bold text-white truncate drop-shadow-md">
                {item.title}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <ZoomIn size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              onClick={() => setActiveModalImage(null)}
              aria-label="Close image lightbox"
              className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-sky-600 transition-colors"
            >
              <X size={20} />
            </button>

            <img
              src={activeModalImage.image}
              alt={activeModalImage.title}
              className="max-h-[75vh] w-auto rounded-2xl border-2 border-sky-400 shadow-2xl object-contain bg-slate-900"
            />
            <div className="mt-4 rounded-xl bg-slate-900/80 px-5 py-2 text-sm font-bold text-white backdrop-blur-md border border-sky-400/30 shadow-lg">
              {activeModalImage.title} &bull; Dr. Shashidhar's Ortho Clinic
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

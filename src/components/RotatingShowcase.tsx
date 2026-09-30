import React, { useState } from 'react';
import { ArrowRight, Sparkles, X, CheckCircle2, Stethoscope, ChevronRight } from 'lucide-react';

interface OrbitPod {
  id: string;
  name: string;
  badge: string;
  image: string;
  caption: string;
  description: string;
  procedures: string[];
  angleDeg: number;
}

const pods: OrbitPod[] = [
  {
    id: 'knee',
    name: 'Knee Arthroscopy & ACL',
    badge: 'Keyhole Sports Care',
    image: '/assets/images/knee-anatomy-clean.jpg',
    caption: 'ACL/PCL keyhole repair, Meniscal preservation & Cartilage restoration',
    description: 'Minimally invasive 4mm keyhole procedures for ligament tears, meniscal damage, and cartilage preservation.',
    procedures: ['All-Inside ACL/PCL Reconstruction', 'Meniscal Repair & Preservation', 'MPFL Patellar Stabilization', 'OATS Cartilage Restoration'],
    angleDeg: 0
  },
  {
    id: 'joint-replacement',
    name: 'Robotic Joint Replacement',
    badge: 'Sub-Millimeter CUVIS / MAKO',
    image: '/assets/images/joint-replacement-clean.jpg',
    caption: 'Kinematic alignment, walk in 4 hours & 25-30 year implant longevity',
    description: 'Robotic-assisted joint replacement for knee and hip ensuring personalized kinematic alignment and zero muscle cutting.',
    procedures: ['Robotic Total Knee Replacement', 'Robotic Partial Knee Replacement', 'Ceramic Total Hip Arthroplasty', 'Reverse Shoulder Replacement'],
    angleDeg: 90
  },
  {
    id: 'shoulder',
    name: 'Shoulder Arthroscopy',
    badge: 'Rotational Freedom',
    image: '/assets/images/shoulder-anatomy-clean.jpg',
    caption: 'Rotator cuff repair, Bankart labrum stabilization & frozen shoulder release',
    description: 'Keyhole restoration of shoulder stability, overhead mobility, and pain-free sleep using double-row suture bridge technology.',
    procedures: ['Rotator Cuff Double-Row Repair', 'Bankart Labral Stabilization', 'Latarjet Bone Block Transfer', '360° Capsular Release'],
    angleDeg: 180
  },
  {
    id: 'trauma',
    name: '3D Fracture & Bone Alignment',
    badge: '24/7 Trauma Care',
    image: '/assets/images/trauma-fracture-clean.jpg',
    caption: 'Rigid anatomical fixation, tendon repair & early kinetic sports rehabilitation',
    description: 'Emergency and elective biological fracture fixation with low-contact titanium locking compression plates (MIPO).',
    procedures: ['Minimally Invasive Plating (MIPO)', 'Geriatric Hip PFN-A Nailing', 'Complex Intra-Articular Repair', 'Non-Union Bone Grafting'],
    angleDeg: 270
  }
];

interface RotatingShowcaseProps {
  onOpenBooking: (subject: string) => void;
}

export const RotatingShowcase: React.FC<RotatingShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedPod, setSelectedPod] = useState<OrbitPod | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none">
      {/* Caption Beacon */}
      <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-sky-50 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm backdrop-blur-md">
        <span className="h-2.5 w-2.5 rounded-full bg-sky-600 animate-ping" />
        <span>Clockwise 3D Anatomical Explorer • Click Any Joint</span>
      </div>

      {/* Orbit Arena Stage */}
      <div className="relative flex h-[380px] w-[380px] sm:h-[420px] sm:w-[420px] items-center justify-center group">
        {/* Halo Background Glows */}
        <div className="absolute h-[360px] w-[360px] rounded-full bg-radial from-sky-400/20 via-sky-200/20 to-transparent pointer-events-none blur-xl" />
        
        {/* Dashed Orbital Rings */}
        <div className="absolute h-[320px] w-[320px] sm:h-[350px] sm:w-[350px] rounded-full border-2 border-dashed border-sky-300/70 pointer-events-none animate-spin-slow" />
        <div className="absolute h-[240px] w-[240px] rounded-full border border-sky-200/80 pointer-events-none" />

        {/* Central Hub Emblem */}
        <div className="relative z-10 flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border-2 border-white bg-gradient-to-tr from-sky-600 via-sky-500 to-sky-400 shadow-xl shadow-sky-500/30">
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse pointer-events-none" />
          <Stethoscope size={28} className="text-white drop-shadow-md" />
          <span className="text-[9px] font-black uppercase tracking-wider text-white mt-0.5 text-center px-1 leading-none">
            DR. SHASHI
          </span>
          <span className="text-[8px] font-bold text-sky-100">ORTHOCARE</span>
        </div>

        {/* Orbit Rotating Track */}
        <div className="absolute h-[320px] w-[320px] sm:h-[350px] sm:w-[350px] rounded-full animate-rotateClockwise group-hover:[animation-play-state:paused]">
          {pods.map((pod, idx) => {
            let posClass = '';
            if (idx === 0) posClass = 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'; // Top
            if (idx === 1) posClass = 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2'; // Right
            if (idx === 2) posClass = 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'; // Bottom
            if (idx === 3) posClass = 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'; // Left

            return (
              <div key={pod.id} className={`absolute ${posClass}`}>
                {/* Counter-rotating container keeps content upright */}
                <div className="animate-counterRotate group-hover:[animation-play-state:paused]">
                  <button
                    onClick={() => setSelectedPod(pod)}
                    className="relative flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-2xl border-2 border-sky-200/90 bg-white p-1.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/30 focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    <img
                      src={pod.image}
                      alt={pod.name}
                      className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover border border-sky-100"
                    />
                    <div className="mt-1 max-w-[85px] truncate text-[10px] font-bold text-slate-800">
                      {pod.name.split(' ')[0]}
                    </div>
                    <div className="text-[8px] font-semibold text-sky-600">
                      Click to View
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helper text below orbit */}
      <div className="mt-4 text-center text-xs text-slate-500">
        Hover over any joint orb to pause rotation &bull; Tap to view 3D clinical details
      </div>

      {/* Interactive Pod Lightbox Dialog */}
      {selectedPod && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl rounded-3xl border border-sky-100 bg-white p-6 md:p-8 text-slate-800 shadow-2xl">
            <button
              onClick={() => setSelectedPod(null)}
              aria-label="Close dialog"
              className="absolute right-5 top-5 rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-5 mb-5 border-b border-slate-100 pb-5">
              <img
                src={selectedPod.image}
                alt={selectedPod.name}
                className="h-28 w-28 rounded-2xl object-cover border-2 border-sky-400 shadow-md"
              />
              <div className="text-center sm:text-left">
                <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-700 border border-sky-200">
                  {selectedPod.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedPod.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {selectedPod.caption}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-3.5 text-slate-700 leading-relaxed">
                {selectedPod.description}
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Keyhole &amp; Robotic Interventions:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPod.procedures.map((proc, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 font-semibold text-slate-700 border border-slate-200/60">
                      <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedPod(null);
                  onOpenBooking(`Consultation for ${selectedPod.name}`);
                }}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 hover:bg-sky-500"
              >
                Schedule Consultation for {selectedPod.name.split(' ')[0]} <ArrowRight size={15} />
              </button>
              <button
                onClick={() => setSelectedPod(null)}
                className="w-full sm:w-auto rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Cpu, CheckCircle2, XCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { roboticComparisonData } from '../data/clinicData';

interface RoboticComparatorProps {
  onOpenBooking: (subject: string) => void;
}

export const RoboticComparator: React.FC<RoboticComparatorProps> = ({ onOpenBooking }) => {
  const [activeView, setActiveView] = useState<'both' | 'robotic' | 'conventional'>('both');

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 md:p-10 text-slate-800 shadow-xl">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700">
            <Cpu size={14} />
            MAKO 2.0 &amp; CUVIS Robotic Surgical Suite
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Robotic vs. Conventional Joint Replacement
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Compare sub-millimeter robotic accuracy versus traditional manual instrumentation for knee &amp; hip replacement.
          </p>
        </div>

        {/* View Filter */}
        <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveView('both')}
            className={`rounded-lg px-3 py-1.5 transition-all ${
              activeView === 'both' ? 'bg-sky-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setActiveView('robotic')}
            className={`rounded-lg px-3 py-1.5 transition-all ${
              activeView === 'robotic' ? 'bg-sky-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Robotic Only
          </button>
          <button
            onClick={() => setActiveView('conventional')}
            className={`rounded-lg px-3 py-1.5 transition-all ${
              activeView === 'conventional' ? 'bg-slate-700 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Conventional
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Robotic Column */}
        {(activeView === 'both' || activeView === 'robotic') && (
          <div className="relative overflow-hidden rounded-2xl border-2 border-sky-400 bg-gradient-to-b from-sky-50/80 via-sky-50/40 to-white p-6 shadow-lg">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-200/40 blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                <Sparkles size={13} /> RECOMMENDED
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Robotic-Assisted Surgery
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Sub-Millimeter Robotic Precision
            </h4>

            <div className="space-y-4">
              {roboticComparisonData.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-sky-200 bg-white p-3.5 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                    {item.feature}
                  </div>
                  <div className="mt-1 flex items-start gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 size={16} className="text-sky-600 shrink-0 mt-0.5" />
                    <span>{item.robotic}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-sky-200">
              <button
                onClick={() => onOpenBooking('Robotic Knee Replacement Candidacy Consultation')}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-500 hover:scale-[1.02]"
              >
                Check My Robotic Surgery Candidacy <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Conventional Column */}
        {(activeView === 'both' || activeView === 'conventional') && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                Traditional Method
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Conventional Manual
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-800 mb-4">
              Manual Instrumentation
            </h4>

            <div className="space-y-4">
              {roboticComparisonData.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {item.feature}
                  </div>
                  <div className="mt-1 flex items-start gap-2 text-xs text-slate-600">
                    <XCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
                    <span>{item.conventional}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-500 p-2">
                <ShieldCheck size={16} className="text-slate-400 shrink-0" />
                <span>Conventional techniques are still utilized for specific emergency trauma and simple reconstructions.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

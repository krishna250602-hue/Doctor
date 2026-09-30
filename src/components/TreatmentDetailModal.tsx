import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, Activity, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { TreatmentItem, SpecialtyCategory, clinicInfo } from '../data/clinicData';

interface TreatmentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: TreatmentItem | null;
  specialty: SpecialtyCategory | null;
  onBookAppointment: (treatmentName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  isOpen,
  onClose,
  treatment,
  specialty,
  onBookAppointment
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-sky-100 bg-white p-6 md:p-8 text-slate-800 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-sky-500"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700">
            <Activity size={14} />
            {specialty?.shortTitle || 'Orthopaedic Specialty'}
          </div>
          <h3 id="modal-treatment-title" className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
            {treatment.title}
          </h3>
          <div className="mt-1 text-xs font-semibold text-slate-500">
            {treatment.type}
          </div>
        </div>

        {/* Main Description */}
        <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4.5 text-xs md:text-sm leading-relaxed text-slate-700">
          {treatment.description}
        </div>

        {/* Indications */}
        <div className="mt-5 space-y-4 text-xs">
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-800">
              <Zap size={15} /> Clinical Indications &amp; Symptoms
            </div>
            <p className="mt-1.5 text-slate-700 leading-relaxed font-medium">
              {treatment.indications}
            </p>
          </div>

          {/* Surgical Technique */}
          {treatment.technique && (
            <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sky-700">
                <ShieldCheck size={15} /> Surgical / Interventional Technique
              </div>
              <p className="mt-1.5 text-slate-700 leading-relaxed">
                {treatment.technique}
              </p>
            </div>
          )}

          {/* Recovery Time */}
          {treatment.recoveryTime && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-slate-800">
                <Clock size={15} className="text-sky-600" /> Expected Recovery &amp; Rehabilitation Timeline
              </div>
              <p className="mt-1.5 text-slate-600 leading-relaxed">
                {treatment.recoveryTime}
              </p>
            </div>
          )}
        </div>

        {/* Surgeon Note */}
        <div className="mt-5 flex items-center gap-3 rounded-xl border border-sky-100 bg-sky-50/50 p-3 text-xs text-slate-700">
          <CheckCircle2 size={16} className="text-sky-600 shrink-0" />
          <span>
            Performed by <strong>Dr. Shashikumar M S</strong> (MBBS, MS Orthopaedics, FIAS, FIJR).
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={() => {
              onClose();
              onBookAppointment(`Consultation for ${treatment.title}`);
            }}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-500 hover:scale-105"
          >
            Book Consultation for this Procedure <ArrowRight size={15} />
          </button>
          <a
            href={`${clinicInfo.whatsappUrl}&text=Hello%20Dr.%20Shashi%27s%20Clinic,%20I%20would%20like%20details%20on%20${encodeURIComponent(treatment.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 text-xs md:text-sm font-semibold text-slate-700 hover:bg-slate-200 text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

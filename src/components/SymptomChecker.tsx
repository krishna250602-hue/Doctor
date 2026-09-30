import React, { useState } from 'react';
import { HelpCircle, ArrowRight, RotateCcw, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { symptomTriageSteps, clinicInfo } from '../data/clinicData';

interface SymptomCheckerProps {
  onOpenBooking: (subject: string) => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({ onOpenBooking }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selections, setSelections] = useState<{ [key: number]: string }>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelect = (optionId: string) => {
    const updated = { ...selections, [currentStep]: optionId };
    setSelections(updated);

    if (currentStep < symptomTriageSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setSelections({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const getTriageResult = () => {
    const loc = selections[0] || 'knee';
    const dur = selections[1] || 'moderate';
    const imp = selections[2] || 'walking';

    let specialty = 'Orthopaedic Consultation & Diagnostic Evaluation';
    let urgency = 'Standard Consultation (Book in 1-2 Days)';
    let primaryRecommendation = 'Physical Clinical Joint Exam + Weight-Bearing Digital X-Ray';
    let subDetail = 'A personalized physical evaluation will establish whether joint preservation, keyhole arthroscopy, or regenerative PRP is optimal.';

    if (loc === 'trauma' || dur === 'acute') {
      specialty = 'Emergency Trauma & Fracture Assessment';
      urgency = 'Immediate / Same-Day Clinical Evaluation';
      primaryRecommendation = 'Urgent Orthopedic X-Ray & Rigid Stabilization';
      subDetail = 'Acute injuries require immediate bone and ligament integrity assessment to prevent secondary displacement or joint stiffness.';
    } else if (loc === 'knee') {
      if (dur === 'chronic' || imp === 'walking') {
        specialty = 'Robotic Joint Replacement & Knee Preservation';
        primaryRecommendation = 'Knee Alignment Assessment & Robotic Suitability Check';
        subDetail = 'Evaluation for Robotic-Assisted Knee Replacement (CUVIS/MAKO) or Biologic Cartilage / PRP therapy.';
      } else {
        specialty = 'Knee Arthroscopy & Sports Medicine';
        primaryRecommendation = 'Keyhole Ligament / Meniscal MRI Evaluation';
        subDetail = 'Minimally invasive keyhole arthroscopy can repair torn ligaments and meniscal tears through tiny 4mm portals.';
      }
    } else if (loc === 'shoulder') {
      specialty = 'Shoulder Arthroscopy & Rotator Cuff Clinic';
      primaryRecommendation = 'Shoulder Ultrasound / MRI + Range of Motion Analysis';
      subDetail = 'Specialized arthroscopic double-row repair for rotator cuff tears or Bankart stabilization for recurrent dislocations.';
    } else if (loc === 'spine') {
      specialty = 'Conservative Spine & Disc Care Pathway';
      primaryRecommendation = 'Non-Surgical Spine Decompression & Core Rehabilitation';
      subDetail = 'Over 90% of disc and sciatica issues resolve without open surgery via our targeted conservative spine care protocol.';
    }

    return { specialty, urgency, primaryRecommendation, subDetail, loc, dur, imp };
  };

  const currentStepData = symptomTriageSteps[currentStep];
  const triage = isCompleted ? getTriageResult() : null;

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 md:p-10 text-slate-800 shadow-xl">
      {/* Title & Progress Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700">
            <HelpCircle size={14} />
            Quick Clinical Triage
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            Joint Pain &amp; Symptom Self-Assessment
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Answer 3 clinical questions to identify the recommended orthopedic pathway for your symptoms.
          </p>
        </div>

        {!isCompleted ? (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span>Step {currentStep + 1} of {symptomTriageSteps.length}</span>
            <div className="flex gap-1.5">
              {symptomTriageSteps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 w-7 rounded-full transition-all duration-300 ${
                    i <= currentStep ? 'bg-sky-500' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200"
          >
            <RotateCcw size={14} /> Retake Assessment
          </button>
        )}
      </div>

      {/* Interactive Step Content */}
      {!isCompleted ? (
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {currentStepData.title}
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
              {currentStepData.question}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {currentStepData.options.map((opt) => {
              const isSelected = selections[currentStep] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`group relative flex flex-col text-left rounded-2xl border p-4.5 transition-all duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-sky-500 ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/80 shadow-md shadow-sky-500/10 ring-1 ring-sky-500'
                      : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className={`h-5 w-5 rounded-full border flex items-center justify-center text-[10px] ${
                      isSelected ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-300 text-slate-400 group-hover:border-sky-500 group-hover:text-sky-600'
                    }`}>
                      {isSelected ? '✓' : '→'}
                    </span>
                  </div>
                  <div className="font-bold text-sm text-slate-900 group-hover:text-sky-600">
                    {opt.label}
                  </div>
                  <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {opt.sub}
                  </div>
                </button>
              );
            })}
          </div>

          {currentStep > 0 && (
            <div className="pt-2">
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                ← Back to previous question
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Completed Triage Result Card */
        <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/80 to-white p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <CheckCircle2 size={16} /> Recommended Triage Assessment Complete
          </div>

          <h4 className="text-2xl font-bold text-slate-900 mt-2">
            Recommended Care: {triage?.specialty}
          </h4>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-sky-100 bg-white p-4 shadow-2xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Next Diagnostic Step
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                {triage?.primaryRecommendation}
              </div>
              <div className="mt-2 text-xs text-slate-600">
                {triage?.subDetail}
              </div>
            </div>

            <div className="rounded-xl border border-sky-100 bg-white p-4 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  Recommended Timeframe
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {triage?.urgency}
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Consultation with Dr. Shashikumar M S (MBBS, MS Orthopaedics, FIAS, FIJR).
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={() => onOpenBooking(`Symptom Triage: ${triage?.specialty}`)}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-500 hover:scale-105"
            >
              Book Priority Consultation <ArrowRight size={15} />
            </button>
            <a
              href={`${clinicInfo.whatsappUrl}&text=Hi%20Dr.%20Shashi%27s%20Clinic,%20I%20completed%20the%20symptom%20triage%20for%20${encodeURIComponent(triage?.specialty || 'Orthopaedic Care')}.%20Please%20guide%20me.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-4 py-3 text-xs md:text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-100"
            >
              <MessageSquare size={16} /> Send Triage to WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

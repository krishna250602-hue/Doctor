import React, { useState } from 'react';
import { Activity, Shield, Compass, Cpu, Zap, ArrowRight, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface JointAnatomy {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
  icon: any;
  overview: string;
  structures: string[];
  commonConditions: string[];
  treatmentOptions: string[];
  recoveryHighlight: string;
  accentColor: string;
}

const anatomyJoints: JointAnatomy[] = [
  {
    id: 'knee',
    name: 'Knee Joint Complex',
    category: 'Arthroscopy & Robotic Care',
    badge: 'High Precision Keyhole',
    image: '/assets/images/knee-anatomy-clean.jpg',
    icon: Activity,
    overview: 'The knee is a complex weight-bearing hinge joint supported by cruciate ligaments (ACL/PCL), collateral ligaments, meniscal shock-absorbers, and articular cartilage.',
    structures: ['Anterior Cruciate Ligament (ACL)', 'Medial & Lateral Meniscus', 'Articular Hyaline Cartilage', 'Medial Patellofemoral Ligament (MPFL)'],
    commonConditions: ['ACL / PCL Sports Tears', 'Torn Meniscus & Knee Locking', 'Osteoarthritis & Bow-Leg Deformity', 'Cartilage Wear & Defect'],
    treatmentOptions: ['Keyhole All-Inside ACL Reconstruction', 'Meniscal Repair & Preservation', 'Robotic-Assisted Total / Partial Knee Replacement (CUVIS/MAKO)', 'Targeted PRP Biologic Infiltration'],
    recoveryHighlight: 'Walk within 4 hours with robotic precision; return to competitive sports within 6 months with keyhole ACL repair.',
    accentColor: '#0284c7'
  },
  {
    id: 'shoulder',
    name: 'Shoulder Ball & Socket',
    category: 'Arthroscopy & Reconstruction',
    badge: 'Rotational Freedom',
    image: '/assets/images/shoulder-anatomy-clean.jpg',
    icon: Shield,
    overview: 'The human shoulder offers the widest range of motion in the body, relying on the rotator cuff tendon group and the glenoid labrum for dynamic stability.',
    structures: ['Supraspinatus & Infraspinatus Tendons', 'Glenoid Labrum (Cartilage Ring)', 'Biceps Anchor Complex', 'Subacromial Bursa'],
    commonConditions: ['Rotator Cuff Tendon Tears', 'Recurrent Shoulder Dislocation (Bankart Lesion)', 'Frozen Shoulder (Adhesive Capsulitis)', 'Subacromial Impingement'],
    treatmentOptions: ['Arthroscopic Double-Row SutureBridge Repair', 'Keyhole Labral Reconstruction (Bankart)', 'Latarjet Bone Block for Recurrent Dislocation', '360° Minimally Invasive Capsular Release'],
    recoveryHighlight: 'Restores complete overhead reach and painless sleeping with micro-anchor keyhole techniques.',
    accentColor: '#0284c7'
  },
  {
    id: 'spine',
    name: 'Spine & Intervertebral Discs',
    category: 'Conservative & Keyhole Spine',
    badge: 'Evidence-Based Care',
    image: '/assets/images/spine-anatomy-clean.jpg',
    icon: Compass,
    overview: 'The vertebral column protects the central spinal cord while providing flexible torso mobility, cushioned by fibrous intervertebral shock-absorbing discs.',
    structures: ['Intervertebral Discs (L4-L5, L5-S1)', 'Sciatic & Lumbar Nerve Roots', 'Facet Joints & Ligamentum Flavum', 'Paraspinal Muscular Core'],
    commonConditions: ['Lumbar Disc Herniation & Prolapse', 'Sciatica (Radiating Leg Pain & Tingling)', 'Cervical Spondylosis & Neck Strain', 'Lumbar Spinal Canal Stenosis'],
    treatmentOptions: ['Multi-Modal Non-Surgical Spine Decompression (90% success)', 'Fluoroscopy-Guided Transforaminal Nerve Root Blocks', 'Micro-Endoscopic Discectomy (MED) for severe disc herniation', 'Postural Dynamic Core Rehabilitation'],
    recoveryHighlight: '90%+ of patients recover with targeted conservative spine protocols without needing open spine surgery.',
    accentColor: '#0284c7'
  },
  {
    id: 'hip',
    name: 'Joint Replacement & Hip Complex',
    category: 'Arthroplasty & Preservation',
    badge: 'Sub-Millimeter MAKO/CUVIS',
    image: '/assets/images/joint-replacement-clean.jpg',
    icon: Cpu,
    overview: 'High-precision replacement of arthritic knee and hip joint surfaces using personalized robotic 3D CT mapping.',
    structures: ['Femoral Head & Acetabular Cup', 'Articular Joint Surfaces', 'Subchondral Bone Plates', 'Kinematic Joint Axes'],
    commonConditions: ['End-Stage Tricompartmental Arthritis', 'Avascular Necrosis (AVN)', 'Severe Varus/Valgus Bowing', 'Post-Traumatic Arthritis'],
    treatmentOptions: ['Robotic Total Knee Replacement', 'Robotic Partial Knee Replacement', 'Ceramic-on-Poly Total Hip Arthroplasty', 'Kinematic Patient-Specific Balancing'],
    recoveryHighlight: 'Sub-millimeter robotic alignment extends joint implant longevity beyond 25–30 years.',
    accentColor: '#0284c7'
  },
  {
    id: 'trauma-fracture',
    name: 'Fractures & Skeletal Trauma',
    category: '24/7 Emergency Trauma',
    badge: 'Rigid Anatomical Fixation',
    image: '/assets/images/trauma-fracture-clean.jpg',
    icon: Zap,
    overview: 'Urgent anatomical realignment and biologic stabilization of broken bones to preserve soft-tissue vascularity and allow early kinetic loading.',
    structures: ['Cortical & Cancellous Bone Matrix', 'Periosteal Blood Supply', 'Articular Joint Facets', 'Connecting Tendons & Ligaments'],
    commonConditions: ['Compound & Complex Fractures', 'Intra-Articular Joint Surface Shattering', 'Non-Union & Delayed Bone Healing', 'Geriatric Fragility Fractures'],
    treatmentOptions: ['Minimally Invasive Plate Osteosynthesis (MIPO)', 'Titanium Anatomical Locking Plates (LCP)', 'Intramedullary Interlocking Nailing', 'Autologous Bone Grafting for Non-Unions'],
    recoveryHighlight: 'Biologic fixation preserves natural blood supply for faster bone union and minimal scarring.',
    accentColor: '#0284c7'
  },
  {
    id: 'ankle',
    name: 'Ankle & Foot Injuries',
    category: 'Sports & Trauma',
    badge: 'Kinetic Stability',
    image: '/assets/images/ankle-foot-clean.jpg',
    icon: Activity,
    overview: 'Ligamentous ankle stabilization and Achilles tendon repair to regain full sports agility and weight-bearing comfort.',
    structures: ['Anterior Talofibular Ligament (ATFL)', 'Calcaneofibular Ligament (CFL)', 'Achilles Tendon', 'Plantar Fascia'],
    commonConditions: ['Recurrent Ankle Sprains & Instability', 'Achilles Tendon Ruptures & Tendonitis', 'Plantar Fasciitis Heel Spur Pain', 'Malleolar Fractures'],
    treatmentOptions: ['Brostrom-Gould Ankle Ligament Repair', 'Minimally Invasive Achilles Repair', 'Ultrasound-Guided PRP for Plantar Fasciitis', 'Rigid Bi-Malleolar Fixation'],
    recoveryHighlight: 'Restores rapid agility and dynamic stability for athletes and runners.',
    accentColor: '#0284c7'
  }
];

interface AnatomyExplorerProps {
  onSelectTreatment: (jointId: string) => void;
  onOpenBooking: (preferredSubject: string) => void;
}

export const AnatomyExplorer: React.FC<AnatomyExplorerProps> = ({ onSelectTreatment, onOpenBooking }) => {
  const [selectedId, setSelectedId] = useState<string>('knee');
  const activeJoint = anatomyJoints.find((j) => j.id === selectedId) || anatomyJoints[0];

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 md:p-10 shadow-xl">
      {/* Header Bar */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-600" />
            Interactive 3D Anatomical Explorer
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Explore Joint &amp; Spine Anatomy
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Select an anatomical region to discover underlying structures, conditions, and micro-invasive surgical solutions.
          </p>
        </div>

        {/* Joint Selector Pills */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Anatomical Joints">
          {anatomyJoints.map((joint) => {
            const isSelected = joint.id === selectedId;
            return (
              <button
                key={joint.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(joint.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs md:text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-500 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20 scale-105 font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <span>{joint.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        {/* Left Column: Visual Joint Card with Clean Real Image */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative overflow-hidden rounded-2xl border border-sky-200/80 bg-gradient-to-b from-sky-50/80 to-white p-6 text-slate-800 shadow-md">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700 border border-sky-200">
                {activeJoint.badge}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {activeJoint.category}
              </span>
            </div>

            {/* Real Anatomy Photo */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-sky-200 mb-5 shadow-md group">
              <img
                src={activeJoint.image}
                alt={activeJoint.name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 rounded-lg bg-sky-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                {activeJoint.name}
              </div>
            </div>

            {/* Overview */}
            <h4 className="text-xl font-bold text-slate-900">{activeJoint.name}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {activeJoint.overview}
            </p>

            {/* Recovery Stat Card */}
            <div className="mt-5 rounded-xl border border-sky-200 bg-sky-100/50 p-3.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
                Rapid Recovery Benchmark
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-800">
                {activeJoint.recoveryHighlight}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Clinical Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Anatomical Structures */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
              Critical Anatomical Structures
            </h5>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeJoint.structures.map((struct, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-xs text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50/50"
                >
                  <CheckCircle2 size={15} className="text-sky-600 shrink-0" />
                  <span>{struct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Pathologies / Symptoms */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Frequently Diagnosed Conditions
            </h5>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeJoint.commonConditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-3 text-xs text-slate-700"
                >
                  <span className="font-semibold text-slate-900">⚠️ {cond}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Surgical & Conservative Interventions */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
              Super-Specialized Treatments Offered
            </h5>
            <div className="mt-3 space-y-2">
              {activeJoint.treatmentOptions.map((treat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-sky-100 bg-sky-50/60 p-3 text-xs font-medium text-slate-800"
                >
                  <ChevronRight size={16} className="text-sky-600 shrink-0 mt-0.5" />
                  <span>{treat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking(`Consultation for ${activeJoint.name}`)}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-500 hover:scale-105 active:scale-95"
            >
              Consult Dr. Shashi for {activeJoint.name.split(' ')[0]} <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onSelectTreatment(activeJoint.id)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs md:text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:text-sky-700"
            >
              View Detailed Clinical Protocols
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Activity,
  Shield,
  Cpu,
  Compass,
  Zap,
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  Clock3,
  Calendar,
  Award,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Stethoscope,
  Building2,
  Eye,
  Star
} from 'lucide-react';

import {
  clinicInfo,
  specialtiesData,
  fellowshipsData,
  facilitiesData,
  SpecialtyCategory,
  TreatmentItem
} from './data/clinicData';

import { RotatingShowcase } from './components/RotatingShowcase';
import { AnatomyExplorer } from './components/AnatomyExplorer';
import { RoboticComparator } from './components/RoboticComparator';
import { SymptomChecker } from './components/SymptomChecker';
import { AmbienceGallery } from './components/AmbienceGallery';
import { AppointmentModal } from './components/AppointmentModal';
import { ReviewCarousel } from './components/ReviewCarousel';
import { FaqAccordion } from './components/FaqAccordion';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { CustomPreloader } from './components/CustomPreloader';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentSubject, setAppointmentSubject] = useState('');
  
  // Interactive Tools Tab Switcher: 'orbit' | 'anatomy' | 'robotic' | 'triage'
  const [activeToolTab, setActiveToolTab] = useState<'orbit' | 'anatomy' | 'robotic' | 'triage'>('orbit');
  
  // Treatment Detail Modal State
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyCategory | null>(null);
  const [treatmentModalOpen, setTreatmentModalOpen] = useState(false);

  // Active filter for specialties section
  const [activeSpecialtyFilter, setActiveSpecialtyFilter] = useState<string>('all');

  useEffect(() => {
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const nodes = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const openBooking = (subject = '') => {
    setAppointmentSubject(subject);
    setAppointmentModalOpen(true);
    setMobileMenuOpen(false);
  };

  const openTreatmentDetail = (treatment: TreatmentItem, specialty: SpecialtyCategory) => {
    setSelectedTreatment(treatment);
    setSelectedSpecialty(specialty);
    setTreatmentModalOpen(true);
  };

  const filteredSpecialties = activeSpecialtyFilter === 'all'
    ? specialtiesData
    : specialtiesData.filter((s) => s.id === activeSpecialtyFilter);

  const heroConditionTags = [
    'Robotic Knee Replacement',
    'ACL / PCL Ligament',
    'Rotator Cuff Repair',
    'Slipped Disc',
    'Sciatica & Spine',
    'Knee Arthritis',
    'Shoulder Dislocation',
    'Fracture Trauma',
    'PRP Biologics'
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-sky-500 selection:text-white">
      {/* Custom Clinical Initial Preloader */}
      <CustomPreloader />

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
          {/* Brand Logo & Doctor Title */}
          <a
            href="#top"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-sky-500 rounded-xl"
            data-testid="link-brand-home"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 shadow-md shadow-sky-500/30 border border-sky-100">
              <Stethoscope className="h-6 w-6 text-white" />
              <div className="absolute -inset-0.5 rounded-2xl bg-sky-400/30 blur-sm -z-10 animate-pulse-ring" />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-tight text-slate-900 leading-tight">
                {clinicInfo.brandName}
              </span>
              <span className="text-[11px] font-semibold text-sky-600">
                {clinicInfo.doctorName} • {clinicInfo.degrees}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 text-xs lg:text-sm font-semibold text-slate-600 xl:flex" aria-label="Primary Navigation">
            <a href="#specialties" className="transition-colors hover:text-sky-600">Specialties</a>
            <a href="#interactive-suite" className="transition-colors hover:text-sky-600">3D Orbit &amp; Tools</a>
            <a href="#doctor-profile" className="transition-colors hover:text-sky-600">About Dr. Shashi</a>
            <a href="#facilities" className="transition-colors hover:text-sky-600">Facilities</a>
            <a href="#gallery" className="transition-colors hover:text-sky-600">Ambience</a>
            <a href="#reviews" className="transition-colors hover:text-sky-600">Reviews</a>
            <a href="#faqs" className="transition-colors hover:text-sky-600">FAQs</a>
            <a href="#contact" className="transition-colors hover:text-sky-600">Contact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50/80 px-3.5 py-2.5 text-xs font-semibold text-sky-800 transition-colors hover:bg-sky-100"
              data-testid="link-header-phone"
            >
              <Phone size={14} className="text-sky-600" />
              <span>{clinicInfo.displayPhone}</span>
            </a>

            <button
              onClick={() => openBooking('Header Priority Consultation')}
              className="button-lift inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4.5 py-2.5 text-xs lg:text-sm font-bold text-white shadow-md shadow-sky-600/25 transition-all hover:bg-sky-500 active:scale-95"
              data-testid="button-header-book"
            >
              <span>Book Appointment</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-700 xl:hidden focus-visible:outline-2 focus-visible:outline-sky-500"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-sky-100 bg-white px-6 py-5 shadow-2xl xl:hidden animate-fadeIn">
            <nav className="flex flex-col space-y-3.5 text-sm font-medium text-slate-700">
              <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">Specialties &amp; Procedures</a>
              <a href="#interactive-suite" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">3D Orbit &amp; Diagnostic Tools</a>
              <a href="#doctor-profile" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">About Dr. Shashikumar</a>
              <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">Diagnostic Facilities</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">Clinic Photos &amp; Cases</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">Patient Reviews (5.0 ★)</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">Frequently Asked Questions</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-600">Location &amp; Timings</a>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => openBooking('Mobile Navigation Booking')}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-bold text-white shadow-md shadow-sky-600/20"
                >
                  Book Appointment <ArrowRight size={16} />
                </button>
                <a
                  href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-sky-200 bg-sky-50 py-2.5 text-sm font-semibold text-sky-800"
                >
                  <Phone size={15} className="text-sky-600" /> Call {clinicInfo.displayPhone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO SECTION WITH 3D VISUAL & SKY & WHITE PALETTE */}
        <section className="relative overflow-hidden clinical-mesh-bg subtle-mesh-pattern pt-12 pb-24 md:pt-16 md:pb-28 border-b border-sky-100">
          {/* Animated Background Glows */}
          <div className="hero-bg-glow" />
          <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Left Column with Cascading Animations */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Hero Badge */}
                <div className="animate-fadeInUp">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/70 px-4 py-1.5 text-xs font-bold text-sky-800 shadow-sm shadow-sky-100">
                    <span className="h-2 w-2 rounded-full bg-sky-600 animate-ping" />
                    <span>Advanced Orthopaedic &amp; Spine Excellence</span>
                  </div>
                </div>

                {/* Main Hero Title */}
                <h1 className="animate-fadeInUp delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                  Precision Orthopaedic &amp;<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400">
                    Spine Care
                  </span> for a Pain-Free Life
                </h1>

                {/* Subtitle */}
                <p className="animate-fadeInUp delay-200 text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Advanced treatment, keyhole arthroscopy, robotic joint replacement, and modern spine rehabilitation tailored for every patient. Led by <strong>{clinicInfo.doctorName}</strong> in Mysuru.
                </p>

                {/* Animated Condition Tags Strip */}
                <div className="animate-fadeInUp delay-300 flex flex-wrap gap-2 pt-1">
                  {heroConditionTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-sky-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                <div className="animate-fadeInUp delay-400 flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => openBooking('Hero Priority Consultation')}
                    className="button-lift inline-flex items-center gap-2.5 rounded-xl bg-sky-600 px-6 py-3.5 text-sm md:text-base font-extrabold text-white shadow-lg shadow-sky-600/25 transition-all hover:bg-sky-500"
                  >
                    <Calendar size={18} />
                    <span>Book Appointment</span>
                  </button>

                  <a
                    href="#interactive-suite"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm md:text-base font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 hover:text-sky-600"
                  >
                    <span>Explore Treatments</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Animated Hero Stats Row */}
                <div className="animate-fadeInUp delay-500 pt-4 border-t border-sky-100 grid grid-cols-3 gap-4 max-w-lg">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-600">
                      15+
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-sky-600">
                      2,000+
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Surgeries Done</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 flex items-center gap-1">
                      5.0 <Star size={16} className="fill-amber-400 text-amber-400 inline" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Google Rating</div>
                  </div>
                </div>
              </div>

              {/* Hero Right Column: Floating 3D Spine & Surgeon Badge */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Glowing Backdrop */}
                  <div className="hero-spine-glow" />

                  {/* Floating 3D Spine Graphic Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-4">
                    <img
                      src="/assets/images/spine_3d.png"
                      alt="Premium 3D Spine Visualization"
                      className="h-80 sm:h-96 w-auto object-contain drop-shadow-[0_20px_40px_rgba(14,165,233,0.3)] animate-float"
                    />

                    {/* Floating Doctor Snapshot Card Overlay */}
                    <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-sky-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md flex items-center gap-3.5">
                      <img
                        src={clinicInfo.portraitImage}
                        alt={clinicInfo.doctorName}
                        className="h-14 w-14 rounded-xl object-cover border-2 border-sky-500 shadow"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {clinicInfo.doctorName}
                        </div>
                        <div className="text-[11px] text-sky-600 font-semibold truncate">
                          {clinicInfo.degrees}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          Consultant Orthopaedic &amp; Spine Surgeon
                        </div>
                      </div>
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Info Ribbon Strip */}
          <div className="mt-16 border-t border-b border-sky-100 bg-white/95 py-3.5 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <MapPin size={18} className="text-sky-600 shrink-0" />
                  <span>
                    <strong>19, 10th Cross, Opp. MORE Supermarket</strong>, JP Nagar, Mysuru
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Phone size={18} className="text-sky-600 shrink-0" />
                  <span>
                    <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-sky-700 hover:underline">
                      {clinicInfo.displayPhone}
                    </a> &bull; <a href={`tel:${clinicInfo.secondaryPhone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                      {clinicInfo.secondaryPhone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Clock3 size={18} className="text-sky-600 shrink-0" />
                  <span>
                    Mon - Sat: <strong>5:30 PM - 8:30 PM</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP SECTION */}
        <section className="border-b border-sky-100 bg-sky-50/70 py-10">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {clinicInfo.stats.map((stat, idx) => (
                <div key={idx} className="relative flex flex-col items-center justify-center p-4 reveal">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-sky-600 to-sky-500">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500 leading-snug max-w-[200px]">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE CLINICAL INNOVATION SUITE */}
        <section id="interactive-suite" className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-4 py-1 text-xs font-bold text-sky-700">
                <Activity size={14} />
                INTERACTIVE PATIENT SUITE
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-3">
                Clockwise 3D Anatomy Orbit &amp; Diagnostic Tools
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2">
                Explore rotating joint structures, compare robotic precision, or triage your joint symptoms.
              </p>

              {/* Tool Switcher Tabs */}
              <div className="mt-8 inline-flex flex-wrap justify-center rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/80" role="tablist">
                <button
                  role="tab"
                  aria-selected={activeToolTab === 'orbit'}
                  onClick={() => setActiveToolTab('orbit')}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs md:text-sm font-bold transition-all ${
                    activeToolTab === 'orbit'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles size={16} /> 3D Rotating Orbit Showcase
                </button>
                <button
                  role="tab"
                  aria-selected={activeToolTab === 'anatomy'}
                  onClick={() => setActiveToolTab('anatomy')}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs md:text-sm font-bold transition-all ${
                    activeToolTab === 'anatomy'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Activity size={16} /> Joint Anatomy Explorer
                </button>
                <button
                  role="tab"
                  aria-selected={activeToolTab === 'robotic'}
                  onClick={() => setActiveToolTab('robotic')}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs md:text-sm font-bold transition-all ${
                    activeToolTab === 'robotic'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Cpu size={16} /> Robotic Surgery Comparator
                </button>
                <button
                  role="tab"
                  aria-selected={activeToolTab === 'triage'}
                  onClick={() => setActiveToolTab('triage')}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs md:text-sm font-bold transition-all ${
                    activeToolTab === 'triage'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Compass size={16} /> Symptom Triage Checker
                </button>
              </div>
            </div>

            {/* Interactive Tool Output Container */}
            <div className="reveal">
              {activeToolTab === 'orbit' && (
                <div className="rounded-3xl border border-sky-100 bg-white p-6 md:p-10 shadow-xl backdrop-blur-xl">
                  <RotatingShowcase onOpenBooking={(subject) => openBooking(subject)} />
                </div>
              )}

              {activeToolTab === 'anatomy' && (
                <AnatomyExplorer
                  onSelectTreatment={(jointId) => {
                    const el = document.getElementById('specialties');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setActiveSpecialtyFilter(jointId);
                  }}
                  onOpenBooking={(subject) => openBooking(subject)}
                />
              )}

              {activeToolTab === 'robotic' && (
                <RoboticComparator
                  onOpenBooking={(subject) => openBooking(subject)}
                />
              )}

              {activeToolTab === 'triage' && (
                <SymptomChecker
                  onOpenBooking={(subject) => openBooking(subject)}
                />
              )}
            </div>
          </div>
        </section>

        {/* SPECIALTIES & PROCEDURES SECTION */}
        <section id="specialties" className="py-20 bg-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-3.5 py-1 text-xs font-bold text-sky-700">
                  <Stethoscope size={14} />
                  COMPREHENSIVE CLINICAL DIVISIONS
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-3">
                  Specialized Orthopaedic Care &amp; Procedures
                </h2>
                <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl">
                  From keyhole arthroscopic ligament restoration to precision robotic joint replacements and non-surgical spine therapies.
                </p>
              </div>

              {/* Specialty Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveSpecialtyFilter('all')}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    activeSpecialtyFilter === 'all'
                      ? 'bg-sky-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  All Specialties
                </button>
                {specialtiesData.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setActiveSpecialtyFilter(spec.id)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      activeSpecialtyFilter === spec.id
                        ? 'bg-sky-600 text-white font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {spec.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialties Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecialties.map((specialty) => (
                <div
                  key={specialty.id}
                  className="group flex flex-col justify-between rounded-3xl border border-sky-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 reveal"
                >
                  <div>
                    {/* Card Top Image & Badge */}
                    <div className="relative overflow-hidden rounded-2xl border border-sky-100 mb-4 group-hover:border-sky-300 transition-colors">
                      <img
                        src={specialty.image}
                        alt={specialty.name}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5">
                        <span className="rounded-lg bg-sky-600 px-2.5 py-1 text-[11px] font-bold text-white shadow">
                          {specialty.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {specialty.summary}
                    </p>

                    {/* Key Highlights List */}
                    <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {specialty.keyHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Procedures Strip */}
                    <div className="mt-5 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Procedures &amp; Treatments:
                      </div>
                      {specialty.treatments.slice(0, 3).map((tr, idx) => (
                        <button
                          key={idx}
                          onClick={() => openTreatmentDetail(tr, specialty)}
                          className="w-full flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-left text-xs font-medium text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-700"
                        >
                          <span className="truncate">{tr.title}</span>
                          <ChevronRight size={14} className="text-sky-600 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => openBooking(`Consultation: ${specialty.name}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:underline"
                    >
                      Book Specialist Visit →
                    </button>
                    <button
                      onClick={() => openTreatmentDetail(specialty.treatments[0], specialty)}
                      className="rounded-lg bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-700 hover:bg-sky-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR BIO & SURGICAL FELLOWSHIPS */}
        <section id="doctor-profile" className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Doctor Profile & Credentials */}
              <div className="lg:col-span-5 space-y-6 reveal-left">
                <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 md:p-8 shadow-xl">
                  <div className="flex items-center gap-4">
                    <img
                      src={clinicInfo.portraitImage}
                      alt={clinicInfo.doctorName}
                      className="h-20 w-20 rounded-2xl object-cover border-2 border-sky-500 shadow-md"
                    />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                        Lead Surgeon &amp; Founder
                      </span>
                      <h3 className="text-2xl font-black text-slate-900">
                        {clinicInfo.doctorName}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600">
                        {clinicInfo.degrees}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-xs md:text-sm leading-relaxed text-slate-600">
                    Dr. Shashikumar M S (Dr. Shashidhar) is a high-volume, fellowship-trained Orthopaedic &amp; Robotic Surgeon with over 15 years of clinical and surgical expertise. Having trained at prestigious medical institutions (JSS Medical College, Mysore and AJIMS, Mangalore), he completed specialized super-fellowships in Arthroscopy, Robotic Arthroplasty, and Reconstructive Hand Trauma.
                  </p>

                  <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/70 p-4 space-y-2 text-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Award size={15} className="text-amber-500" /> Academic &amp; Clinical Affiliations
                    </div>
                    <ul className="space-y-1.5 text-slate-600 pl-4 list-disc">
                      <li>Chief Consultant, Dr. Shashidhar's Ortho Clinic, JP Nagar</li>
                      <li>Consultant Orthopaedic Surgeon, JSS Hospital, Mysore</li>
                      <li>Life Member: Indian Orthopaedic Association (IOA)</li>
                      <li>Life Member: Karnataka Orthopaedic Association (KOA)</li>
                      <li>Member: Indian Arthroscopy Society (IAS)</li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => openBooking('Consultation with Dr. Shashikumar')}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 hover:bg-sky-500"
                    >
                      Book 1-on-1 Consultation with Dr. Shashi <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Super-Specialized Fellowships */}
              <div className="lg:col-span-7 space-y-6 reveal-right">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-3.5 py-1 text-xs font-bold text-sky-700">
                    <Award size={14} />
                    ADVANCED SURGICAL FELLOWSHIPS
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
                    Super-Specialized International &amp; National Training
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    Dr. Shashi has completed dedicated post-doctoral surgical fellowships ensuring modern micro-invasive and robotic techniques.
                  </p>
                </div>

                <div className="space-y-4">
                  {fellowshipsData.map((f, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition-all hover:border-sky-300 hover:bg-sky-50/30"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="rounded-md bg-sky-600 px-2.5 py-1 text-xs font-black text-white">
                          {f.code}
                        </span>
                        <span className="rounded-full bg-sky-100 px-3 py-0.5 text-[11px] font-bold text-sky-700 border border-sky-200">
                          {f.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900">
                        {f.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 mb-2">
                        {f.institution}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {f.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                        {f.highlights.map((hl, i) => (
                          <span key={i} className="inline-flex items-center gap-1 rounded-lg bg-sky-50 px-2.5 py-1 text-[11px] text-sky-800 border border-sky-100">
                            <CheckCircle2 size={12} className="text-sky-600" /> {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES & TECHNOLOGY */}
        <section id="facilities" className="py-20 bg-slate-50/60 border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-3.5 py-1 text-xs font-bold text-sky-700">
                <Building2 size={14} />
                CLINICAL INFRASTRUCTURE
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-3">
                Cutting-Edge Diagnostic &amp; Clinical Facilities
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2">
                Equipped with hospital-grade digital diagnostics and modern procedural suites.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilitiesData.map((fac) => (
                <div
                  key={fac.id}
                  className="group rounded-3xl border border-sky-100 bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl reveal flex flex-col justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden rounded-2xl border border-sky-100 mb-4">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold text-white shadow">
                          {fac.badge}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-sky-600 uppercase tracking-wider font-semibold">
                      {fac.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {fac.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLINIC AMBIENCE & SURGICAL GALLERY */}
        <section id="gallery" className="py-20 bg-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8 reveal">
            <AmbienceGallery />
          </div>
        </section>

        {/* PATIENT REVIEWS & STORIES */}
        <section id="reviews" className="py-20 bg-slate-50/60 border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8 reveal">
            <ReviewCarousel />
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faqs" className="py-20 bg-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8 reveal">
            <FaqAccordion />
          </div>
        </section>

        {/* CLINIC LOCATION, HOURS & EMERGENCY CONTACT */}
        <section id="contact" className="py-20 bg-gradient-to-b from-sky-50 via-sky-100/40 to-white border-b border-sky-100">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Contact Information Card */}
              <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-sky-200/80 bg-white p-6 md:p-8 shadow-xl reveal">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-3.5 py-1 text-xs font-bold text-sky-700">
                    <MapPin size={14} />
                    VISIT OUR CLINIC
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-3">
                    Clinic Location &amp; Timings
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    Centrally located in JP Nagar, Mysuru, with dedicated parking and rapid wheelchair access.
                  </p>

                  <div className="mt-6 space-y-4 text-xs md:text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                      <MapPin size={20} className="text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Clinic Address</div>
                        <div className="text-slate-600 mt-0.5">
                          {clinicInfo.address.full}
                        </div>
                        <a
                          href={clinicInfo.address.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:underline"
                        >
                          Get Google Maps Driving Directions <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                      <Clock3 size={20} className="text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Consultation Hours</div>
                        <div className="text-slate-600 mt-0.5">
                          <strong>Evening Clinic:</strong> {clinicInfo.timings.weekdays}
                        </div>
                        <div className="text-slate-500 text-xs mt-1">
                          {clinicInfo.timings.morningNote}
                        </div>
                      </div>
                    </div>

                    {/* Phone & WhatsApp */}
                    <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                      <Phone size={20} className="text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900">Direct Clinical Desk</div>
                        <div className="text-slate-600 mt-0.5 flex flex-wrap gap-3">
                          <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-sky-600 hover:underline">
                            {clinicInfo.displayPhone}
                          </a>
                          <span>•</span>
                          <a href={`tel:${clinicInfo.secondaryPhone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                            {clinicInfo.secondaryPhone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                  <button
                    onClick={() => openBooking('Clinic Visit Booking')}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-xs md:text-sm font-bold text-white shadow-md shadow-sky-600/20 hover:bg-sky-500"
                  >
                    <Calendar size={15} /> Book Appointment
                  </button>
                  <a
                    href={clinicInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-5 py-3 text-xs md:text-sm font-bold text-sky-700 hover:bg-sky-100"
                  >
                    <MessageSquare size={15} /> WhatsApp Desk
                  </a>
                </div>
              </div>

              {/* Fast Consultation Triage Card */}
              <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-sky-200/80 bg-white p-6 md:p-8 shadow-xl reveal">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-700">
                    <Zap size={14} />
                    FAST CLINICAL INQUIRY
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-3">
                    Need Immediate Advice or Second Opinion?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    Upload MRI/X-Ray scans or describe your joint pain for a direct expert assessment from Dr. Shashikumar.
                  </p>

                  <div className="mt-6 space-y-3.5">
                    <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
                      <div className="font-bold text-xs md:text-sm text-slate-900 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-sky-600" /> Free WhatsApp Pre-Triage
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Share prior MRI reports, digital X-rays, or surgery recommendations to get an unbiased surgical vs conservative opinion.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
                      <div className="font-bold text-xs md:text-sm text-slate-900 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-sky-600" /> 24/7 Fracture Emergency Triage
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        In case of sudden falls, vehicular injuries, or acute joint dislocations, contact our emergency desk immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={`${clinicInfo.whatsappUrl}&text=Hello%20Dr.%20Shashidhar%27s%20Clinic,%20I%20would%20like%20to%20send%20my%20MRI/X-Ray%20reports%20for%20a%20second%20opinion.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 py-3.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-sky-600/20 hover:from-sky-500 hover:to-sky-600"
                  >
                    <MessageSquare size={16} /> Send Reports via WhatsApp Desk <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 py-14 text-slate-400 text-xs">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Col */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 text-white">
                  <Stethoscope size={18} />
                </div>
                <span className="font-black text-sm text-white">
                  {clinicInfo.brandName}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Super-specialized robotic joint replacement, keyhole arthroscopic ligament reconstruction, sports medicine, trauma, and non-surgical spine care in Mysuru.
              </p>
              <div className="text-[11px] text-sky-400 font-semibold">
                {clinicInfo.doctorName} ({clinicInfo.degrees})
              </div>
            </div>

            {/* Specialties Links */}
            <div>
              <div className="font-bold text-xs uppercase tracking-wider text-white mb-3">
                Clinical Specialties
              </div>
              <ul className="space-y-2">
                <li><a href="#specialties" className="hover:text-sky-300 transition-colors">Knee Arthroscopy (ACL/Meniscus)</a></li>
                <li><a href="#specialties" className="hover:text-sky-300 transition-colors">Robotic Knee Replacement (MAKO/CUVIS)</a></li>
                <li><a href="#specialties" className="hover:text-sky-300 transition-colors">Shoulder Arthroscopy &amp; Rotator Cuff</a></li>
                <li><a href="#specialties" className="hover:text-sky-300 transition-colors">Conservative Spine &amp; Sciatica Care</a></li>
                <li><a href="#specialties" className="hover:text-sky-300 transition-colors">Fracture &amp; Complex Trauma Fixation</a></li>
                <li><a href="#specialties" className="hover:text-sky-300 transition-colors">Regenerative PRP Therapy</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-bold text-xs uppercase tracking-wider text-white mb-3">
                Patient Resources
              </div>
              <ul className="space-y-2">
                <li><a href="#interactive-suite" className="hover:text-sky-300 transition-colors">3D Clockwise Rotating Orbit</a></li>
                <li><a href="#interactive-suite" className="hover:text-sky-300 transition-colors">Robotic vs Conventional Surgery</a></li>
                <li><a href="#interactive-suite" className="hover:text-sky-300 transition-colors">Symptom Self-Assessment Triage</a></li>
                <li><a href="#gallery" className="hover:text-sky-300 transition-colors">Clinic Ambience &amp; Facilities</a></li>
                <li><a href="#reviews" className="hover:text-sky-300 transition-colors">Verified Patient Recoveries (5.0 ★)</a></li>
                <li><a href="#faqs" className="hover:text-sky-300 transition-colors">Clinical FAQs &amp; Insurance</a></li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <div className="font-bold text-xs uppercase tracking-wider text-white mb-3">
                Clinic Coordinates
              </div>
              <div className="space-y-2 text-xs">
                <div>{clinicInfo.address.full}</div>
                <div className="text-white font-semibold">
                  Phone: <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-sky-400 hover:underline">{clinicInfo.displayPhone}</a>
                </div>
                <div>Email: {clinicInfo.email}</div>
                <div className="text-emerald-400 font-medium">
                  {clinicInfo.timings.weekdays}
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Disclaimer & Copyright */}
          <div className="pt-8 border-t border-slate-800 text-[11px] leading-relaxed text-slate-500 space-y-2">
            <p>
              <strong>Medical Disclaimer:</strong> The information on this website is for educational and guidance purposes only and does not substitute professional in-person medical diagnosis, physical examination, or treatment. Consult Dr. Shashikumar M S (Dr. Shashidhar) or a qualified healthcare specialist for any medical condition.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div>
                © {new Date().getFullYear()} {clinicInfo.brandName}. All rights reserved.
              </div>
              <div className="flex gap-4">
                <span>WCAG 2.2 AA Compliant</span>
                <span>•</span>
                <span>Dr. Shashikumar M S Orthopaedic Practice</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* APPOINTMENT MODAL */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialSubject={appointmentSubject}
      />

      {/* TREATMENT DETAIL MODAL */}
      <TreatmentDetailModal
        isOpen={treatmentModalOpen}
        onClose={() => setTreatmentModalOpen(false)}
        treatment={selectedTreatment}
        specialty={selectedSpecialty}
        onBookAppointment={(treatmentName) => openBooking(`Consultation for ${treatmentName}`)}
      />
    </div>
  );
}

export default App;

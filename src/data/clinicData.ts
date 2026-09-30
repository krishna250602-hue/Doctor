export interface TreatmentItem {
  title: string;
  description: string;
  indications: string;
  type: string;
  recoveryTime?: string;
  technique?: string;
}

export interface SpecialtyCategory {
  id: string;
  name: string;
  shortTitle: string;
  badge: string;
  icon: string;
  image: string;
  tagline: string;
  summary: string;
  bgGradient: string;
  treatments: TreatmentItem[];
  keyHighlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  initials: string;
  source: string;
  rating: number;
  date: string;
  treatment: string;
  snippet: string;
  fullReview: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge: string;
}

export interface FellowshipItem {
  code: string;
  title: string;
  institution: string;
  description: string;
  highlights: string[];
  badge: string;
}

export const clinicInfo = {
  brandName: "Dr. Shashidhar's Ortho Clinic",
  subtitle: "Advanced Orthopaedic & Spine Care",
  doctorName: "Dr. Shashikumar M S (Dr. Shashidhar)",
  displayName: "Dr. Shashikumar M S",
  degrees: "MBBS, MS Orthopaedics",
  designation: "Consultant Orthopaedic, Spine & Robotic Joint Replacement Surgeon",
  fellowships: "FIAS (Arthroscopy & Sports Med), FIJR (Joint Replacement), FIHS (Hand Trauma)",
  portraitImage: "/assets/images/dr-shashi-portrait.jpg",
  logoImage: "/assets/images/ortho-loader-emblem.png",
  phone: "+91-6361446411",
  displayPhone: "+91 63614 46411",
  secondaryPhone: "+91 92053 95221",
  email: "care@drshashiorthoclinic.com",
  secondaryEmail: "shashikumar859@gmail.com",
  whatsappNumber: "916361446411",
  whatsappUrl: "https://wa.me/916361446411?text=Hello%20Dr.%20Shashidhar%27s%20Ortho%20Clinic,%20I%20would%20like%20to%20consult%20regarding%20an%20orthopedic%20appointment.",
  address: {
    line1: "19, 10th Cross, Opp. MORE Supermarket",
    line2: "C-Block, JP Nagar",
    city: "Mysuru",
    state: "Karnataka",
    pincode: "570008",
    full: "19, 10th Cross, Opp. MORE Supermarket, C-Block, JP Nagar, Mysuru, Karnataka 570008",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=19+10th+cross+Opp+MORE+Supermarket+C-Block+JP+Nagar+Mysuru+Karnataka+570008"
  },
  timings: {
    weekdays: "Monday – Saturday: 5:30 PM – 8:30 PM",
    morningNote: "Morning consultations & surgeries at JSS Hospital / Partner Hospitals (By Prior Appointment)",
    emergency: "24/7 Emergency Trauma & Fracture Support Available"
  },
  stats: [
    { value: "15+", label: "Years of Surgical Expertise", desc: "Advanced keyhole & joint replacement procedures" },
    { value: "2,000+", label: "Successful Surgeries", desc: "Arthroscopic, robotic & complex trauma cases" },
    { value: "20,000+", label: "Happy Patients Treated", desc: "Restoring active, pain-free mobility across Karnataka" },
    { value: "99.2%", label: "Patient Satisfaction", desc: "Patient-centric care and rapid recovery protocols" }
  ]
};

export const specialtiesData: SpecialtyCategory[] = [
  {
    id: "knee",
    name: "Knee Arthroscopy & Sports Medicine",
    shortTitle: "Knee Arthroscopy",
    badge: "Keyhole Precision",
    icon: "Activity",
    image: "/assets/images/knee-anatomy-clean.jpg",
    tagline: "Minimally invasive keyhole procedures with sub-millimeter precision",
    summary: "Dedicated arthroscopic treatments for ligament tears, meniscal damage, and cartilage preservation, enabling rapid return to sports and daily walking without major open incisions.",
    bgGradient: "from-[#0b1f3a] to-[#071326]",
    keyHighlights: [
      "No large incision — 4mm keyhole portals",
      "Same-day or next-day hospital discharge",
      "Anatomical graft positioning for longevity",
      "Accelerated kinetic rehab protocols"
    ],
    treatments: [
      {
        title: "ACL / PCL Reconstruction",
        description: "Anatomical reconstruction of torn anterior or posterior cruciate ligaments using autologous hamstring/quadriceps tendon grafts with anatomical tunnel placement.",
        indications: "Sports pivoting injuries, knee giving way, athletic instability, popping sensation in knee.",
        type: "Arthroscopic Keyhole Surgery",
        recoveryTime: "Walking with brace next day; jogging in 3-4 months; full sports return in 6 months.",
        technique: "All-Inside anatomical fixation with bio-composite interference screws"
      },
      {
        title: "Meniscus Repair & Preservation",
        description: "Advanced all-inside and inside-out meniscal repair techniques to preserve natural shock-absorbing fibrocartilage and prevent premature joint arthritis.",
        indications: "Meniscal tears, joint line tenderness, knee catching or locking during movement.",
        type: "Joint Preservation Surgery",
        recoveryTime: "Protected weight bearing for 4 weeks; normal walking thereafter.",
        technique: "FiberTape suture anchors & Meniscal Viper devices"
      },
      {
        title: "Multi-Ligament Knee Injury Reconstruction",
        description: "Complex single-stage or staged reconstruction of multi-ligament knee dislocations involving ACL, PCL, MCL, LCL, and posterolateral corner (PLC).",
        indications: "High-velocity road traffic accidents, severe sporting dislocations.",
        type: "Complex Knee Arthroplasty",
        recoveryTime: "Gradual step-wise physiotherapy over 6-9 months.",
        technique: "Multi-tunnel reconstruction with rigid titanium button suspensory fixation"
      },
      {
        title: "MPFL Reconstruction for Patella Instability",
        description: "Medial Patellofemoral Ligament reconstruction for recurrent kneecap dislocations to restore normal patellar tracking and stop joint degradation.",
        indications: "Recurrent kneecap dislocation, patella subluxation, apprehension on knee bending.",
        type: "Patellar Stabilization",
        recoveryTime: "6 weeks brace stabilization with progressive quad strengthening.",
        technique: "Gracilis tendon autograft with aperture fixation"
      },
      {
        title: "Cartilage Restoration & OATS Procedure",
        description: "Osteochondral Autograft Transfer System (OATS) and microfracture biologic stem cell stimulation to replace isolated cartilage wear with healthy living osteochondral plugs.",
        indications: "Full-thickness cartilage defects, focal chondral lesions in younger active adults.",
        type: "Biologic Joint Regeneration",
        recoveryTime: "6-8 weeks non-weight bearing followed by low-impact cycling.",
        technique: "Single-stage mosaicplasty / autologous chondrocyte harvesting"
      }
    ]
  },
  {
    id: "shoulder",
    name: "Shoulder Arthroscopy & Reconstruction",
    shortTitle: "Shoulder Surgery",
    badge: "Mobility & Stability",
    icon: "Shield",
    image: "/assets/images/shoulder-anatomy-clean.jpg",
    tagline: "Restoring overhead reach, rotational power, and pain-free sleep",
    summary: "Advanced arthroscopic procedures for rotator cuff tears, recurrent shoulder dislocations (Bankart lesions), frozen shoulder release, and SLAP repairs.",
    bgGradient: "from-[#082846] to-[#041224]",
    keyHighlights: [
      "Ultra-low post-operative pain protocols",
      "High-strength bio-composite anchor fixation",
      "Complete restoration of overhead range of motion",
      "Safe targeted regional nerve block anesthesia"
    ],
    treatments: [
      {
        title: "Rotator Cuff Tendon Repair",
        description: "Double-row suture bridge arthroscopic re-attachment of torn supraspinatus and infraspinatus tendons to the humeral head footprint.",
        indications: "Inability to lift arm, severe night pain in shoulder, weakness with overhead tasks.",
        type: "Arthroscopic Shoulder Surgery",
        recoveryTime: "Sling for 4-6 weeks; active assisted range of motion at 6 weeks.",
        technique: "Double-Row SutureBridge repair with knotless bio-composite anchors"
      },
      {
        title: "Bankart Repair & Labral Stabilization",
        description: "Keyhole anatomical fixation of torn glenoid labrum and capsular plication for patients suffering from recurrent shoulder subluxation or dislocation.",
        indications: "Shoulder popping out of socket, feeling of apprehension during throwing motions.",
        type: "Joint Stabilization",
        recoveryTime: "Immobilization for 3-4 weeks; full sports throwing return at 5-6 months.",
        technique: "All-suture 1.5mm anchors with circumferential capsule-labral tensioning"
      },
      {
        title: "Latarjet Procedure for Bone Loss",
        description: "Coracoid bone block transfer to the anterior glenoid rim with conjoint tendon sling for high-demand athletes with critical glenoid bone deficiency.",
        indications: "Recurrent dislocations with >15% glenoid bone loss or failed prior Bankart repair.",
        type: "Open Bone Reconstruction",
        recoveryTime: "Protected recovery for 6 weeks; heavy contact sports return at 6 months.",
        technique: "Congruent-arc coracoid transfer with cannulated titanium screws"
      },
      {
        title: "Frozen Shoulder Arthroscopic Capsular Release",
        description: "Controlled release of thickened, fibrotic joint capsule combined with gentle manipulation under anesthesia to instantly regain lost shoulder movement.",
        indications: "Severe stiffness lasting >6 months, severe pain unresponsive to physiotherapy.",
        type: "Minimally Invasive Capsular Release",
        recoveryTime: "Immediate same-day active physiotherapy to maintain gained motion.",
        technique: "360-degree radiofrequency capsular release preserving axillary nerve"
      }
    ]
  },
  {
    id: "joint-replacement",
    name: "Robotic & Conventional Joint Replacement",
    shortTitle: "Joint Replacement",
    badge: "Robotic MAKO & CUVIS",
    icon: "Cpu",
    image: "/assets/images/joint-replacement-clean.jpg",
    tagline: "Sub-millimeter implant alignment for lifetime joint longevity",
    summary: "Specialized total and partial joint replacement for knees, hips, and shoulders utilizing next-generation robotic-assisted navigation platforms and minimally invasive surgical exposures.",
    bgGradient: "from-[#0a2f58] to-[#061930]",
    keyHighlights: [
      "Sub-millimeter implant placement accuracy",
      "Preserves natural cruciate ligaments and healthy bone",
      "Rapid Mobilization: Walk within 4 hours post-surgery",
      "Expected implant lifespan exceeding 25–30 years"
    ],
    treatments: [
      {
        title: "Robotic Total Knee Replacement (TKR)",
        description: "CT-based or image-free real-time 3D optical tracking robotic surgery ensuring exact bone cuts, perfect gap balancing, and zero misalignment.",
        indications: "End-stage tricompartmental osteoarthritis, severe bow-leg (varus/valgus) deformity, bone-on-bone pain.",
        type: "Robotic-Assisted Arthroplasty",
        recoveryTime: "Independent walking on day of surgery; stairs in 3-5 days; driving in 4 weeks.",
        technique: "CUVIS / MAKO Robotic Surgical Suite with personalized kinematic alignment"
      },
      {
        title: "Robotic Partial / Unicompartmental Knee Replacement (PKR)",
        description: "Replacing only the worn medial or lateral compartment of the knee while preserving 100% of the patient's healthy ACL, PCL, and opposite joint cartilage.",
        indications: "Isolated single-compartment arthritis with intact cruciate ligaments.",
        type: "Robotic Joint Preservation",
        recoveryTime: "Fastest recovery: Discharge within 24 hours; back to routine life in 2 weeks.",
        technique: "Micro-precision robotic burring with high-flexion fixed or mobile bearings"
      },
      {
        title: "Total Hip Replacement (Conventional & Direct Anterior)",
        description: "Replacing arthritic hip joint with ultra-low wear ceramic-on-highly-crosslinked-polyethylene bearings for lifetime pain relief and full hip flexibility.",
        indications: "Avascular Necrosis (AVN) of femoral head, advanced osteoarthritis, ankylosing spondylitis.",
        type: "Total Hip Arthroplasty",
        recoveryTime: "Walking unassisted in 1-2 weeks; no permanent restriction on sitting or bending.",
        technique: "Muscle-sparing mini-posterior or direct anterior approach with titanium cementless stem"
      },
      {
        title: "Reverse & Total Shoulder Replacement",
        description: "Anatomical or reverse delta ball-and-socket prosthesis designed for complex shoulder arthritis and irreparable rotator cuff tear arthropathy.",
        indications: "Severe shoulder arthritis with torn non-repairable rotator cuff tendons.",
        type: "Shoulder Arthroplasty",
        recoveryTime: "Active functional use within 4-6 weeks.",
        technique: "Glenosphere center-of-rotation medialization for deltoid-powered lift"
      }
    ]
  },
  {
    id: "spine",
    name: "Spine Care & Back Pain Management",
    shortTitle: "Spine & Disc Care",
    badge: "Conservative & Minimally Invasive",
    icon: "Compass",
    image: "/assets/images/spine-anatomy-clean.jpg",
    tagline: "Evidence-based spine care avoiding unnecessary open spine surgery",
    summary: "Comprehensive evaluation and treatment of herniated discs, sciatica nerve compression, cervical spondylosis, lumbar canal stenosis, and postural spinal disorders.",
    bgGradient: "from-[#08203c] to-[#041020]",
    keyHighlights: [
      "90%+ patients recover with non-surgical protocols",
      "Targeted transforaminal epidural nerve root blocks",
      "Micro-endoscopic disc decompression when surgery is needed",
      "Ergonomic postural rehabilitation and core strengthening"
    ],
    treatments: [
      {
        title: "Conservative Sciatica & Disc Care Pathway",
        description: "Structured multimodal spine therapy combining targeted neuro-protective medication, physical spinal decompression, and dynamic core stabilization.",
        indications: "Shooting leg pain, radiating numbness, lower back spasms, lumbar disc bulge.",
        type: "Non-Surgical Spine Treatment",
        recoveryTime: "Significant symptom reduction in 2-4 weeks with continuous physical maintenance.",
        technique: "McKenzie mechanical diagnosis & therapy combined with clinical anti-inflammatory protocol"
      },
      {
        title: "Targeted Spine Epidural & Facet Joint Injections",
        description: "Fluoroscopy (C-Arm) guided high-precision transforaminal nerve root block delivering targeted anti-inflammatory medicine right to the compressed spinal nerve.",
        indications: "Acute intractable sciatica, disc extrusion pain, facet arthropathy resistant to oral medications.",
        type: "Image-Guided Interventional Spine Procedure",
        recoveryTime: "Immediate relief; return to work next day.",
        technique: "Real-time contrast-enhanced C-arm needle guidance"
      },
      {
        title: "Micro-Endoscopic Discectomy (MED)",
        description: "Ultra-minimally invasive tubular endoscopic removal of the herniated disc fragment through an 18mm tubular retractor, sparing spinal muscles and ligaments.",
        indications: "Progressive motor weakness (foot drop), cauda equina compression, persistent severe pain >8 weeks.",
        type: "Minimally Invasive Spine Surgery",
        recoveryTime: "Walking 2 hours post-procedure; home discharge next morning.",
        technique: "High-definition 4K endoscopic visual canal decompression"
      }
    ]
  },
  {
    id: "trauma",
    name: "Fracture & Complex Trauma Care",
    shortTitle: "Trauma & Fracture",
    badge: "24/7 Emergency",
    icon: "Zap",
    image: "/assets/images/trauma-fracture-clean.jpg",
    tagline: "Anatomical bone alignment, rigid fixation & rapid weight bearing",
    summary: "Expert emergency and elective management of simple and complex fractures, intra-articular injuries, non-unions, and malunited bones using modern titanium locking implants.",
    bgGradient: "from-[#092644] to-[#051426]",
    keyHighlights: [
      "24/7 emergency fracture stabilization",
      "Biologic minimally invasive plate osteosynthesis (MIPO)",
      "High-grade titanium anatomically contoured locking plates",
      "Specialized management of geriatric hip fractures"
    ],
    treatments: [
      {
        title: "Minimally Invasive Plate Osteosynthesis (MIPO)",
        description: "Biological fracture fixation through small skin punctures, sliding contoured locking plates beneath the muscles without stripping the periosteal blood supply.",
        indications: "Tibia, femur, and humerus shaft fractures, comminuted bone breaks.",
        type: "Advanced Trauma Surgery",
        recoveryTime: "Rapid bone union with minimal scar; early joint motion.",
        technique: "Low-contact titanium locking compression plates (LCP)"
      },
      {
        title: "Geriatric Hip Fracture Quick-Fixation (PFN-A)",
        description: "Urgent within-24-hour closed reduction and intramedullary proximal femoral nailing (PFN) for elderly hip fractures to prevent bedridden complications.",
        indications: "Intertrochanteric and subtrochanteric hip fractures in senior citizens.",
        type: "Urgent Geriatric Trauma Care",
        recoveryTime: "Patient seated in chair on day 1; standing with walker on day 2.",
        technique: "Anti-rotation helical blade cephalomedullary nailing"
      },
      {
        title: "Complex Intra-Articular Reconstruction & Non-Union Repair",
        description: "Sub-millimeter anatomical reconstruction of joint surface fractures (knee tibial plateau, distal radius, pilon, elbow) and bone grafting for delayed non-unions.",
        indications: "Crush injuries, neglected fractures, non-healing bones.",
        type: "Reconstructive Trauma Surgery",
        recoveryTime: "Monitored staging with periodic digital X-rays.",
        technique: "Autologous bone graft harvesting + dual-column angular stable plating"
      }
    ]
  },
  {
    id: "regenerative",
    name: "Regenerative Orthopaedics & PRP Therapy",
    shortTitle: "Regenerative PRP",
    badge: "Biologic Healing",
    icon: "Sparkles",
    image: "/assets/images/arthritis-clean.jpg",
    tagline: "Harnessing the body's natural growth factors to heal joints and tendons",
    summary: "Evidence-based biological therapies including high-concentration Platelet-Rich Plasma (PRP), hyaluronic acid visco-supplementation, and collagen matrix injections.",
    bgGradient: "from-[#09294a] to-[#041528]",
    keyHighlights: [
      "100% autologous biological treatment (zero allergy risk)",
      "Performed in outpatient clinic in under 45 minutes",
      "Delays or eliminates need for surgical joint replacement in early arthritis",
      "Promotes tissue regeneration in chronic tendonitis"
    ],
    treatments: [
      {
        title: "Platelet-Rich Plasma (PRP) Joint Therapy",
        description: "Concentrating healing growth factors from the patient's own blood and injecting directly into the affected joint under ultrasound guidance to reduce inflammation and stimulate cartilage cells.",
        indications: "Grade 1-3 Knee Osteoarthritis, early cartilage wear, chronic joint stiffness.",
        type: "Autologous Biologic Infiltration",
        recoveryTime: "Zero downtime; resume regular non-strenuous activities same day.",
        technique: "Dual-spin leukocyte-poor centrifugation system"
      },
      {
        title: "PRP for Tennis Elbow, Plantar Fasciitis & Tendonitis",
        description: "Targeted biological infiltration to stimulate micro-vascular repair in chronic degenerative tendon tissue unresponsive to standard physiotherapy.",
        indications: "Tennis elbow (lateral epicondylitis), golfer's elbow, Achilles tendonitis, severe heel pain (plantar fasciitis).",
        type: "Targeted Tendon Regeneration",
        recoveryTime: "2-3 weeks gradual tendon remodeling with durable relief.",
        technique: "Ultrasound-guided fenestration with concentrated growth factors"
      },
      {
        title: "Hyaluronic Acid Viscosupplementation",
        description: "High-molecular-weight hyaluronic acid lubrication injections to replenish depleted synovial fluid, providing smooth gliding and shock absorption in the knee.",
        indications: "Mild to moderate knee arthritis with friction and clicking sounds.",
        type: "Joint Lubrication Therapy",
        recoveryTime: "Immediate reduction in joint friction lasting 6 to 12 months.",
        technique: "Single-injection high cross-linked sodium hyaluronate"
      }
    ]
  }
];

export const fellowshipsData: FellowshipItem[] = [
  {
    code: "FIAS",
    title: "Fellowship in Arthroscopy & Sports Medicine",
    institution: "Advanced Sports Medicine & Joint Center",
    description: "Dedicated super-specialized clinical and surgical training in keyhole knee and shoulder reconstruction, multiligament repair, and athletic injury restoration.",
    highlights: [
      "Keyhole ACL/PCL/Meniscus preservation",
      "Advanced rotator cuff & Bankart labral repair",
      "Comprehensive sports injury kinetic rehabilitation"
    ],
    badge: "Keyhole & Sports Surgery"
  },
  {
    code: "FIJR",
    title: "Fellowship in Joint Replacement (Conventional & Robotic)",
    institution: "Premier Arthroplasty Institute, Bangalore",
    description: "Specialized in sub-millimeter joint replacement for knee, hip, and shoulder using both conventional precision instrumentation and advanced robotic platforms including MAKO 2.0 & CUVIS.",
    highlights: [
      "Robotic & conventional total knee replacement",
      "Total hip replacement for AVN & severe arthritis",
      "Reverse and anatomical shoulder arthroplasty"
    ],
    badge: "Robotic Precision Arthroplasty"
  },
  {
    code: "FIHS",
    title: "Fellowship in Hand Trauma Surgery",
    institution: "Specialized Hand & Micro-Surgery Center",
    description: "Formal advanced surgical training in complex traumatic hand and wrist injuries, soft-tissue restoration, micro-tendon repair, and reconstructive hand osteosynthesis.",
    highlights: [
      "Complex hand and wrist fracture fixation",
      "Tendon and micro-ligament restoration",
      "Reconstructive hand trauma surgery"
    ],
    badge: "Trauma & Reconstruction"
  }
];

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Charan Kattemane",
    initials: "CK",
    source: "Google Verified Review",
    rating: 5,
    date: "Verified Patient",
    treatment: "Right Arthroscopic Meniscal Repair with PRP",
    snippet: "Honest opinion and conservative approach helped avoid unnecessary knee replacement surgery.",
    fullReview: "Warm greetings and positive recovery update. I would like to express our sincere gratitude for your expert guidance provided to my father (70 years). Today he is walking properly, driving a car, and has resumed his routine activities comfortably. Initially we had consulted another hospital where knee replacement was advised immediately. However, upon careful evaluation Dr. Shashi suggested and performed Right Arthroscopic Medial Meniscal Repair with Intra-Articular PRP Infiltration, which proved to be the most appropriate treatment. Honest opinion, precise diagnosis, and conservative approach helped avoid unnecessary major surgery."
  },
  {
    id: "rev-2",
    author: "Pragati Chaudhary",
    initials: "PC",
    source: "Google Verified Review",
    rating: 5,
    date: "Verified Patient",
    treatment: "Bilateral Robotic Total Knee Replacement (TKR)",
    snippet: "Deformity completely corrected; straight and healthy legs with painless walking.",
    fullReview: "I had been suffering with severe osteoarthritis in both knees for nearly a decade and finally decided to undergo bilateral robotic total knee replacement. Thanks to Dr. Shashi's remarkable expertise in robotic TKR and his precision in managing complex joint cases, the severe bow-leg deformity has been completely corrected. These days I often receive compliments on how healthy and straight my legs look, and I am walking completely pain-free."
  },
  {
    id: "rev-3",
    author: "Bhane Singh",
    initials: "BS",
    source: "Google Verified Review",
    rating: 5,
    date: "Verified Patient",
    treatment: "Knee PCL & Ligament Reconstruction",
    snippet: "Incredibly skilled and compassionate surgical execution with outstanding recovery.",
    fullReview: "Three months ago, I had the privilege of having my knee PCL ligament reconstruction performed by Dr. Shashikumar, and it was truly an exceptional experience. The doctor is incredibly skilled, attentive, and compassionate. His clinical team provided immense support through every phase of post-operative physiotherapy. I am back on my feet with full knee stability."
  },
  {
    id: "rev-4",
    author: "Shaik Siddik",
    initials: "SS",
    source: "Google Verified Review",
    rating: 5,
    date: "Verified Patient",
    treatment: "Complex Tibia & Fibula Fracture Fixation",
    snippet: "Guiding with great patience, clarity, and extraordinary trauma surgery skill.",
    fullReview: "I am truly grateful for the exceptional care I received after a severe tibia and fibula fracture from a vehicular accident. From the very first consultation, the doctor explained every detail of my treatment options. The surgery was performed with remarkable skill using titanium locking plates, and my bone union and recovery was surprisingly smooth. The personal encouragement made all the difference."
  },
  {
    id: "rev-5",
    author: "Shanawaz Khan",
    initials: "SK",
    source: "Google Verified Review",
    rating: 5,
    date: "Verified Patient",
    treatment: "Robotic Partial Knee Replacement",
    snippet: "Walking comfortably within days without needing a walker.",
    fullReview: "My grandfather underwent robotic partial knee replacement surgery. The operation went exceptionally well, and he was able to walk properly within days without needing a walker. Partial knee surgery is tricky, but Dr. Shashi performed it with absolute perfection. He and his team patiently addressed all concerns and supported us through rehabilitation."
  },
  {
    id: "rev-6",
    author: "Suzana Princy",
    initials: "SP",
    source: "Google Verified Review",
    rating: 5,
    date: "Verified Patient",
    treatment: "Shoulder Arthroscopy & Rotator Cuff Repair",
    snippet: "Walked us through the whole procedure with regular post-op follow ups.",
    fullReview: "The doctor was extremely helpful during my brother's shoulder arthroscopy. He made sure to walk our family through the procedure and gave regular updates. Even after discharge, he personally followed up to monitor pain relief and exercise adherence. Truly an exceptional orthopedic surgeon whom I strongly recommend."
  }
];

export const facilitiesData: FacilityItem[] = [
  {
    id: "consultation",
    title: "Consultation & Clinical Exam Chamber",
    category: "OPD Consultation",
    description: "Private, state-of-the-art orthopaedic consultation suite for physical joint exams, kinematic gait evaluation, and treatment planning.",
    image: "/assets/images/facilities/consultation.jpg",
    badge: "Specialist OPD"
  },
  {
    id: "digital-xray",
    title: "High-Resolution Digital X-Ray Suite",
    category: "Instant Diagnostics",
    description: "Ultra-low radiation, high-definition digital musculoskeletal imaging for instant weight-bearing alignment assessment.",
    image: "/assets/images/facilities/digital-xray.jpg",
    badge: "Immediate Results"
  },
  {
    id: "physiotherapy",
    title: "Orthopaedic Physiotherapy & Rehab Unit",
    category: "Kinetic Recovery",
    description: "Targeted clinical post-surgical mobilization, muscle balance retraining, and sports injury conditioning under certified physiotherapists.",
    image: "/assets/images/facilities/physiotherapy.jpg",
    badge: "Active Rehab"
  },
  {
    id: "plaster-pop",
    title: "Plaster & Fracture Immobilization POP Room",
    category: "Fracture Care",
    description: "Dedicated sterile plaster room equipped with fiberglass casts, removable orthotic splints, and traction equipment for rapid bone stabilization.",
    image: "/assets/images/facilities/plaster-pop.jpg",
    badge: "24/7 Fracture Casts"
  },
  {
    id: "dressing",
    title: "Sterile Minor Procedure & Dressing Room",
    category: "Wound & Biologics",
    description: "Ultra-clean surgical suite for sterile dressing changes, suture removals, and image-guided joint / PRP biologic infiltrations.",
    image: "/assets/images/facilities/dressing.jpg",
    badge: "Aseptic Environment"
  }
];

export const ambienceImages = [
  { id: "amb-1", image: "/assets/images/ambience/ambience-1.jpg", title: "Clinic Exterior & Reception" },
  { id: "amb-2", image: "/assets/images/ambience/ambience-2.jpg", title: "Patient Waiting Lounge" },
  { id: "amb-3", image: "/assets/images/ambience/ambience-3.jpg", title: "Doctor's Consultation Suite" },
  { id: "amb-4", image: "/assets/images/ambience/ambience-4.jpg", title: "Digital Diagnostic Room" },
  { id: "amb-5", image: "/assets/images/ambience/ambience-5.jpg", title: "Dedicated Physiotherapy Wing" },
  { id: "amb-6", image: "/assets/images/ambience/ambience-6.jpg", title: "Sterile POP & Plaster Facility" },
  { id: "amb-7", image: "/assets/images/ambience/ambience-7.jpg", title: "Minor Procedure Suite" },
  { id: "amb-8", image: "/assets/images/ambience/ambience-8.jpg", title: "Patient Care Desk" }
];

export const surgicalWorkImages = [
  { id: "w-1", image: "/assets/images/work/work-1.jpg", title: "Robotic Knee Replacement Alignment" },
  { id: "w-2", image: "/assets/images/work/work-2.jpg", title: "Keyhole 4K Arthroscopy Visualization" },
  { id: "w-3", image: "/assets/images/work/work-3.jpg", title: "ACL All-Inside Ligament Reconstruction" },
  { id: "w-4", image: "/assets/images/work/work-4.jpg", title: "Rotator Cuff SutureBridge Repair" },
  { id: "w-5", image: "/assets/images/work/work-5.jpg", title: "Complex Fracture Locking Plate Fixation" },
  { id: "w-6", image: "/assets/images/work/work-6.jpg", title: "Biologic PRP Joint Preservation" }
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How do I book an appointment at Dr. Shashidhar's Ortho Clinic?",
    answer: "You can easily schedule a consultation by clicking the 'Book Appointment' button on this website, calling our clinic directly at +91-6361446411, or messaging us on WhatsApp. Evening consultations run Monday to Saturday from 5:30 PM to 8:30 PM at our JP Nagar, Mysuru clinic."
  },
  {
    id: "faq-2",
    category: "Robotic Surgery",
    question: "What are the key benefits of Robotic Knee Replacement over traditional surgery?",
    answer: "Robotic knee replacement uses CT-guided or real-time 3D optical tracking to create a personalized surgical plan tailored to your exact anatomy. Key benefits include sub-millimeter precision implant placement, preservation of healthy bone and ligaments, significantly less blood loss and post-operative pain, and faster recovery—most patients walk within hours of surgery."
  },
  {
    id: "faq-3",
    category: "Arthroscopy",
    question: "What is Keyhole Arthroscopy and how long is the hospital stay?",
    answer: "Arthroscopy is a minimally invasive procedure where a small 4mm camera (arthroscope) and specialized micro-instruments are inserted through tiny keyhole punctures. It allows Dr. Shashi to repair torn ligaments (ACL/PCL), meniscus tears, or rotator cuff tendons without cutting open large muscles. Most arthroscopy patients go home either the same day or within 24 hours."
  },
  {
    id: "faq-4",
    category: "Conservative Spine",
    question: "Can back pain and sciatica be treated without undergoing spine surgery?",
    answer: "Yes! Over 90% of back pain and sciatica cases can be successfully resolved without open spine surgery. We prioritize structured conservative treatments including targeted spinal anti-inflammatory medications, physical core stabilization, ergonomic posture retraining, and image-guided epidural nerve root injections for instant relief."
  },
  {
    id: "faq-5",
    category: "Insurance & Payment",
    question: "Is cashless health insurance and TPA accepted for surgeries?",
    answer: "Yes, cashless hospitalization and insurance claims are supported across all major health insurance companies, corporate TPAs, and government health schemes through our accredited hospital surgical partner facilities in Mysuru."
  },
  {
    id: "faq-6",
    category: "Regenerative PRP",
    question: "How does Platelet-Rich Plasma (PRP) therapy work for knee arthritis?",
    answer: "PRP is an autologous biologic therapy where a small sample of your own blood is centrifuged to concentrate healing platelets and growth factors. When injected into an arthritic joint or damaged tendon, PRP reduces chronic inflammation, lubricates the joint, and stimulates cellular repair, offering prolonged pain relief without foreign chemicals or steroids."
  }
];

export const roboticComparisonData = [
  {
    feature: "Surgical Planning",
    robotic: "Personalized 3D CT/Optical kinematic map down to 0.5mm",
    conventional: "Standard 2D static X-ray estimates",
    winner: "robotic"
  },
  {
    feature: "Bone & Ligament Preservation",
    robotic: "Maximum preservation; removes only damaged micro-layer",
    conventional: "Standardized bone cuts with generic guide blocks",
    winner: "robotic"
  },
  {
    feature: "First Walking Time",
    robotic: "Within 3 to 5 hours post-surgery (Same day)",
    conventional: "Typically 24 to 48 hours post-surgery",
    winner: "robotic"
  },
  {
    feature: "Post-Operative Pain",
    robotic: "Substantially reduced due to minimal soft-tissue trauma",
    conventional: "Moderate to high surgical site soreness",
    winner: "robotic"
  },
  {
    feature: "Implant Fit & Longevity",
    robotic: "Optimal physiological balance lasting 25–30+ years",
    conventional: "Standard alignment with 15–20 year average life",
    winner: "robotic"
  },
  {
    feature: "Hospital Discharge",
    robotic: "1 to 2 days average stay",
    conventional: "4 to 6 days average stay",
    winner: "robotic"
  }
];

export const symptomTriageSteps = [
  {
    step: 1,
    title: "Select Pain Location",
    question: "Where are you feeling discomfort or limited mobility?",
    options: [
      { id: "knee", label: "Knee Joint", sub: "Twisting injury, clicking, pain on stairs, bow-leg", icon: "🦵" },
      { id: "shoulder", label: "Shoulder & Arm", sub: "Cannot lift arm, sleep pain, stiffness, dislocation", icon: "💪" },
      { id: "spine", label: "Back & Neck (Spine)", sub: "Sciatica, lower back spasm, radiating leg numbness", icon: "⚡" },
      { id: "trauma", label: "Fracture / Sudden Injury", sub: "Sudden fall, accident, acute swelling, unable to bear weight", icon: "🚨" },
      { id: "general", label: "Multiple Joints / Arthritis", sub: "Morning stiffness, finger/hip joints, chronic ache", icon: "🦴" }
    ]
  },
  {
    step: 2,
    title: "Pain Characteristics & Duration",
    question: "How long have you experienced this, and how severe is it?",
    options: [
      { id: "acute", label: "Acute / Sudden (Under 2 weeks)", sub: "Recent sports injury, slip, or traumatic impact", icon: "⏱️" },
      { id: "moderate", label: "Persistent (1 to 3 months)", sub: "Gradually worsening, impacting work and exercise", icon: "📈" },
      { id: "chronic", label: "Chronic (More than 6 months)", sub: "Long-standing arthritis, difficulty walking or sleeping", icon: "🔄" }
    ]
  },
  {
    step: 3,
    title: "Main Functional Impact",
    question: "What is your biggest daily challenge?",
    options: [
      { id: "walking", label: "Difficulty Walking or Climbing Stairs", sub: "Knee giving way, locking, or bone-on-bone friction", icon: "🚶" },
      { id: "overhead", label: "Inability to Raise Hand or Reach Back", sub: "Shoulder weakness, tearing pain during night sleep", icon: "✋" },
      { id: "radiating", label: "Shooting Nerve Pain Down Leg / Arm", sub: "Sciatica tingling, electric shock sensation", icon: "⚡" },
      { id: "instability", label: "Feeling of Joint Instability or Giving Out", sub: "Fear of dislocation or ligament laxity", icon: "🎯" }
    ]
  }
];

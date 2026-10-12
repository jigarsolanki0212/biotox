export interface ServiceItem {
  icon: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
}

export interface StepItem {
  title: string;
  desc: string;
}

export interface AdvantageItem {
  icon: string;
  img: string;
  title: string;
  desc: string;
}

export interface DeviceItem {
  icon: string;
  img: string;
  tag: string;
  title: string;
  desc: string;
}

export interface StandardItem {
  tag: string;
  img: string;
  title: string;
  desc: string;
  icon: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const services: ServiceItem[] = [
  {
    icon: 'flask',
    tag: 'ISO 10993-1:2025',
    title: 'Biocompatibility Evaluation',
    desc: 'Full biological safety assessment per ISO 10993-1:2025 for all device risk classes and patient contact types — from skin contact to long-term implants.',
    img: 'https://images.unsplash.com/photo-1748261348213-62f4c399bb72?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: 'document',
    tag: 'Regulatory Compliance',
    title: 'BEP / BER Preparation & Review',
    desc: 'End-to-end Biological Evaluation Plans and Reports — regulator-ready, audit-proof, and globally accepted by notified bodies and regulatory authorities.',
    img: 'https://images.pexels.com/photos/8730987/pexels-photo-8730987.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'target',
    tag: 'TRA · PDE',
    title: 'Toxicological Risk Assessment',
    desc: 'Science-based TRA with quantitative exposure estimates, toxicological thresholds, Margin of safety, and comprehensive conclusions per ISO 10993-18 and 10993-17.',
    img: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'cpu',
    tag: 'No Animal Testing',
    title: 'In-silico Safety Assessment',
    desc: 'Computational toxicology tools for rapid, cost-effective chemical safety profiling without animal testing — fully aligned with regulatory expectations.',
    img: 'https://images.pexels.com/photos/34804005/pexels-photo-34804005.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'molecule',
    tag: 'E&L · Impurities',
    title: 'QSAR Analysis',
    desc: 'Quantitative structure-activity relationship modelling for impurity and extractable & leachable safety profiling — reducing costly testing.',
    img: 'https://images.pexels.com/photos/8325713/pexels-photo-8325713.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'dna',
    tag: 'Without Testing',
    title: 'Genotoxicity Prediction',
    desc: 'QSAR-based genotoxicity prediction without animal testing — faster, more economical, and scientifically robust with full regulatory justification.',
    img: 'https://images.pexels.com/photos/8540595/pexels-photo-8540595.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'globe',
    tag: 'Multi-Market',
    title: 'Global Regulatory Compliance',
    desc: 'FDA, OECD GLP, ISO 17025, NABL, EU MDR, CDSCO, Gulf & ASEAN regulatory alignment — one partner for all your target markets.',
    img: 'https://images.pexels.com/photos/8828607/pexels-photo-8828607.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'shield',
    tag: 'ISO 14971',
    title: 'Risk Assessment & Management',
    desc: 'Full ISO 14971 risk management file preparation integrated with your biological safety documentation — from hazard identification to residual risk.',
    img: 'https://images.pexels.com/photos/8413288/pexels-photo-8413288.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'lungs',
    tag: 'Active Devices',
    title: 'ISO 18562-1:2024 Compliance',
    desc: 'We provide expert support for ISO 18562 compliance of breathing gas pathway medical devices, including biological evaluation planning, test strategy development, chemical characterization review and toxicological risk assessment.',
    img: 'https://images.pexels.com/photos/4416539/pexels-photo-4416539.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'tooth',
    tag: 'Dental · Oral',
    title: 'ISO 7405:2025 Compliance',
    desc: 'Expert support for ISO 7405 compliance of dental materials and devices. Biological evaluation, toxicological risk assessment, and regulatory documentation. Helping manufacturers meet ISO 7405, ISO 10993, and global regulatory requirements.',
    img: 'https://images.pexels.com/photos/3946838/pexels-photo-3946838.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const bepSteps: StepItem[] = [
  {
    title: 'Device Description & Clinical Use Analysis',
    desc: 'Characterisation of intended use, patient contact, exposure duration and device risk class.',
  },
  {
    title: 'Material & Chemical Composition Review',
    desc: 'Review of all materials, coatings, adhesives and processing aids in patient contact zones.',
  },
  {
    title: 'ISO 10993-1:2025 Endpoint Mapping',
    desc: 'Mapping of all required biological endpoints per the latest ISO 10993-1:2025 framework.',
  },
  {
    title: 'Risk-Based Worst-Case Sample Selection',
    desc: 'Identification of worst-case materials and samples for targeted, efficient biological testing.',
  },
  {
    title: 'Biological Test Strategy & Waiver Justifications',
    desc: 'Science-backed test waivers to reduce testing cost while maintaining full regulatory compliance.',
  },
  {
    title: 'Gap Analysis of Available Data',
    desc: 'Systematic review of existing literature, manufacturer data, and historical safety records.',
  },
  {
    title: 'Risk-Based Testing Recommendations',
    desc: 'Final prioritised testing plan with clear rationale and full regulatory alignment strategy.',
  },
];

export const berSteps: StepItem[] = [
  {
    title: 'Material / Chemical Characterisation Interpretation',
    desc: 'Interpretation of E&L data and chemical characterisation results from accredited laboratories.',
  },
  {
    title: 'Toxicological Risk Assessment (TRA)',
    desc: 'Full quantitative TRA with exposure estimation, toxicological thresholds and safety margins.',
  },
  {
    title: 'Biological Testing Results Evaluation',
    desc: 'Critical scientific review and interpretation of all biological test results from accredited labs.',
  },
  {
    title: 'Justification for Borderline / Failed Tests',
    desc: 'Expert scientific rationale and contextual justification for out-of-specification results.',
  },
  {
    title: 'Mitigations for Residual Risks',
    desc: 'Risk mitigation strategies, labelling recommendations and post-market surveillance inputs.',
  },
  {
    title: 'Literature Review & Clinical Background',
    desc: 'Comprehensive scientific literature review supporting the biological safety conclusion.',
  },
  {
    title: 'Final Safety Conclusion for Intended Use',
    desc: 'Definitive biological safety conclusion structured for direct submission to FDA, EU MDR or CDSCO.',
  },
];

export const advantages: AdvantageItem[] = [
  {
    icon: 'award',
    img: 'https://images.pexels.com/photos/4031692/pexels-photo-4031692.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Internationally Certified Experts',
    desc: 'DABT, ERT & UKRT certified toxicologists — recognised for regulatory submissions in USA, UK, EU and other global regulatory authorities.',
  },
  {
    icon: 'windgauge',
    img: 'https://images.pexels.com/photos/8978610/pexels-photo-8978610.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Faster Regulatory Approvals',
    desc: 'Structured, audit-ready documentation significantly reduces regulatory queries and compresses your time to market across all major jurisdictions.',
  },
  {
    icon: 'droplet',
    img: 'https://images.pexels.com/photos/8532824/pexels-photo-8532824.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Minimises Testing Cost',
    desc: 'Risk-based test waiver justifications eliminate unnecessary biological testing — saving significant budget without compromising scientific or regulatory compliance.',
  },
  {
    icon: 'globe',
    img: 'https://images.pexels.com/photos/8939052/pexels-photo-8939052.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Multi-Market Compliance',
    desc: 'EU MDR, US FDA, CDSCO, Gulf & ASEAN — one expert partner covering all your target regulatory markets with a single cohesive documentation strategy.',
  },
  {
    icon: 'layers',
    img: 'https://images.pexels.com/photos/8442366/pexels-photo-8442366.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'All Device Risk Classes',
    desc: 'Full biocompatibility support for Class I, II, and III medical devices across all contact types, exposure durations, and clinical applications.',
  },
  {
    icon: 'users',
    img: 'https://images.pexels.com/photos/29267512/pexels-photo-29267512.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Large Expert Team',
    desc: 'A multidisciplinary team delivering fast, reliable, and scalable toxicology and regulatory compliance services with the capacity to support global manufacturers.',
  },
];

export const devices: DeviceItem[] = [
  {
    icon: 'bone',
    img: 'https://images.pexels.com/photos/7789615/pexels-photo-7789615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class II · III',
    title: 'Orthopaedic Implants',
    desc: 'Bone, joint, spinal and fixation implant biocompatibility and regulatory compliance.',
  },
  {
    icon: 'heartpulse',
    img: 'https://images.pexels.com/photos/9243372/pexels-photo-9243372.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class III',
    title: 'Cardiovascular Devices',
    desc: 'Stents, catheters, valves and critical cardiac device safety evaluation.',
  },
  {
    icon: 'target',
    img: 'https://images.pexels.com/photos/35147278/pexels-photo-35147278.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class I · II',
    title: 'Wearable & Homecare',
    desc: 'Continuous-contact wearables and home monitoring device compliance.',
  },
  {
    icon: 'flask',
    img: 'https://images.pexels.com/photos/9574556/pexels-photo-9574556.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'IVD · Class II',
    title: 'Diagnostic & IVD',
    desc: 'In-vitro diagnostic kits, reagents and diagnostic instrument evaluation.',
  },
  {
    icon: 'tooth',
    img: 'https://images.pexels.com/photos/3845737/pexels-photo-3845737.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class II · III',
    title: 'Dental Devices',
    desc: 'Implants, restorative materials and orthodontic device biocompatibility.',
  },
  {
    icon: 'droplet',
    img: 'https://images.pexels.com/photos/8531343/pexels-photo-8531343.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class I · II',
    title: 'Wound Care & Dressings',
    desc: 'Biocompatibility assessment for wound management and dressing products.',
  },
  {
    icon: 'syringe',
    img: 'https://images.pexels.com/photos/32082430/pexels-photo-32082430.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class II · III',
    title: 'Catheters & Tubing',
    desc: 'Cannulas, infusion sets, drainage tubes and fluid delivery system compliance.',
  },
  {
    icon: 'clipboard',
    img: 'https://images.pexels.com/photos/24193873/pexels-photo-24193873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class I · II',
    title: 'Surgical Instruments',
    desc: 'Reusable and single-use surgical device regulatory compliance support.',
  },
  {
    icon: 'lungs',
    img: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Class I · II',
    title: 'Respiratory & Gas Pathway',
    desc: 'Inhalation devices, nebulizers, oxygen delivery systems and respiratory tract biocompatibility assessment.',
  },
];

export const standards: StandardItem[] = [
  {
    tag: 'FDA',
    img: 'https://images.pexels.com/photos/10347152/pexels-photo-10347152.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'U.S. Food & Drug Administration',
    desc: '510(k), PMA & De Novo submission support',
    icon: 'shield',
  },
  {
    tag: 'OECD GLP',
    img: 'https://images.pexels.com/photos/8636606/pexels-photo-8636606.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'OECD Good Laboratory Practice',
    desc: 'GLP-compliant study design & documentation',
    icon: 'clipboard',
  },
  {
    tag: 'ISO 10993',
    img: 'https://images.pexels.com/photos/7651804/pexels-photo-7651804.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Biological Evaluation of Medical Devices',
    desc: 'Full series including ISO 10993-1:2025 updates',
    icon: 'flask',
  },
  {
    tag: 'ISO 17025',
    img: 'https://images.pexels.com/photos/31709069/pexels-photo-31709069.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Testing & Calibration Laboratories',
    desc: 'Accredited laboratory selection & data review',
    icon: 'target',
  },
  {
    tag: 'NABL',
    img: 'https://images.pexels.com/photos/7876755/pexels-photo-7876755.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'National Accreditation Board for Labs',
    desc: 'India-specific accredited laboratory network',
    icon: 'award',
  },
  {
    tag: 'EU MDR',
    img: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'EU Medical Device Regulation 2017/745',
    desc: 'CE marking biological safety documentation',
    icon: 'globe',
  },
];

export const faqs: FaqItem[] = [
  {
    q: 'What is a Biological Evaluation Plan (BEP)?',
    a: 'A BEP is a complete biocompatibility strategy that defines materials, device categorisation, and the biological testing required per ISO 10993-1:2025 — covering device description, material and chemical composition review, endpoint mapping, worst-case sample selection, test strategy, gap analysis, and risk-based testing recommendations.',
  },
  {
    q: 'What is a Biological Evaluation Report (BER)?',
    a: 'A BER is the final biological safety assessment submitted to regulatory bodies after characterisation and testing are complete. It includes chemical characterisation interpretation, toxicological risk assessment, test results evaluation, justification for borderline results, risk mitigation, literature review, and the final safety conclusion for submission to FDA, EU MDR or CDSCO.',
  },
  {
    q: 'Do you offer alternatives to animal testing?',
    a: 'Yes. Our in-silico safety assessment and QSAR analysis provide computational toxicology and genotoxicity prediction without animal testing — faster, more economical, and scientifically robust with full regulatory justification.',
  },
  {
    q: 'Which device risk classes and regions do you support?',
    a: 'We support Class I, II and III medical devices across all contact types and exposure durations, with multi-market compliance for FDA, OECD GLP, ISO 17025, NABL, EU MDR, CDSCO, and Gulf & ASEAN regulatory frameworks.',
  },
  {
    q: 'How do you help reduce biological testing costs?',
    a: 'Through risk-based test waiver justifications that eliminate unnecessary biological testing while maintaining full scientific and regulatory compliance, backed by ISO 14971 risk management integration from the start of engagement.',
  },
];

export const ICONS: Record<string, string> = {
  flask: '<path d="M9 3h6M10 3v6l-5.5 9.2A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M7.5 14.5h9"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M7 3v3M12 3v3M17 3v3M7 18v3M12 18v3M17 18v3M3 7h3M3 12h3M3 17h3M18 7h3M18 12h3M18 17h3"/>',
  molecule: '<circle cx="6" cy="7" r="2"/><circle cx="17" cy="6" r="2"/><circle cx="10" cy="16" r="2.4"/><circle cx="19" cy="17" r="2"/><path d="m7.7 8.3 2 6M15.3 7.2l-3.7 7.2M12.3 16.7l4.9.6"/>',
  dna: '<path d="M6 3c0 6 12 12 12 18M18 3c0 6-12 12-12 18M7 8h10M7 16h10"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
  chart: '<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5M3 17l9 5 9-5"/>',
  clipboard: '<rect x="6" y="4" width="12" height="17" rx="1.5"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h6"/>',
  bone: '<path d="M6 12c-1.5-1-1.5-3.5.5-4.2C6.6 6 8 4.6 9.4 4.4c1.7-.2 3.2 1.5 2.2 3.1L9.8 10 14.2 14l2.4-2.4c-1.4-2.1.4-3.6 2.1-3.5 1.3.1 2.5 1.5 2.1 3-.7 2 1.7 2.7.7 4.2-1 1.5-3.5 1.5-4.2-.5-.4 1.4-1.8 2.9-3.4 3.1-1.7.2-3.2-1.5-2.2-3.1l1.8-2.4-4.4-4.4-2.4 2.4c1.4 2.1-.4 3.6-2.1 3.5-1.3-.1-2.5-1.5-2.1-3C3 8.9.6 8.2 6 12Z"/>',
  heartpulse: '<path d="M12 20s-7.5-4.4-9.5-9C1 7 3 4 6 4c2 0 3.5 1 4.5 2.3C11.5 5 13 4 15 4c3 0 5 3 3.5 7-.4 1-1 1.9-1.7 2.7"/><path d="M4 13h3l1.5-3 2 5 1.5-3H21"/>',
  droplet: '<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',
  tooth: '<path d="M12 4c-2 0-3 1-4.5.7C5.5 4.3 4 5.5 4 8c0 2 .8 3 1 5 .2 2 .6 5 2 5 1.3 0 1.3-3 2.2-3.4.7-.3 1.3.4 1.4 1C10.8 17 11 20 12 20s1.2-3 1.4-4.4c.1-.6.7-1.3 1.4-1 .9.4.9 3.4 2.2 3.4 1.4 0 1.8-3 2-5 .2-2 1-3 1-5 0-2.5-1.5-3.7-3.5-3.3C15 5 14 4 12 4Z"/>',
  lungs: '<path d="M12 3v9"/><path d="M12 12c-1-3-4-3-5.5-1.5C4.5 12.5 4 15 4 17c0 2.5 2 3.5 3.5 2.5C9 18.5 9 15.5 9 14M12 12c1-3 4-3 5.5-1.5 2 2 2.5 4.5 2.5 6.5 0 2.5-2 3.5-3.5 2.5-1.5-1-1.5-4-1.5-5.5"/>',
  syringe: '<path d="m18 2 4 4M8.5 13.5 3 19l2 2 5.5-5.5M15 5l4 4M6 14l4 4M9.5 10.5 14 15M13 6.5 17.5 11"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6"/><circle cx="17" cy="8" r="2.5"/><path d="M17.5 14c2.7.3 4.5 2.6 4.5 6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14 -1.5 7 5-2.5 5 2.5-1.5-7"/>',
  windgauge: '<circle cx="12" cy="12" r="9"/><path d="M12 12 7 9"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>',
  document: '<path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
};

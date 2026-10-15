import { services, type ServiceItem, type FaqItem, type StepItem } from './data';

export interface ServiceDetail {
  /** Short line shown under the page title */
  headline: string;
  /** Long-form overview paragraphs */
  overview: string[];
  /** Photo used beside the overview */
  sideImg: string;
  /** Situations where manufacturers typically need the service */
  whenNeeded: string[];
  /** What the client receives */
  deliverables: string[];
  /** How we run the engagement */
  approach: StepItem[];
  /** Standards and guidance the work is aligned with */
  standards: string[];
  /** Key outcomes, shown as highlight tiles */
  outcomes: { value: string; label: string }[];
  faqs: FaqItem[];
  related: string[];
}

const IMG = {
  lab: 'https://images.pexels.com/photos/7651804/pexels-photo-7651804.jpeg?auto=compress&cs=tinysrgb&w=1200',
  docs: 'https://images.pexels.com/photos/7550538/pexels-photo-7550538.jpeg?auto=compress&cs=tinysrgb&w=1200',
  accredited: 'https://images.pexels.com/photos/31709069/pexels-photo-31709069.jpeg?auto=compress&cs=tinysrgb&w=1200',
  glp: 'https://images.pexels.com/photos/8636606/pexels-photo-8636606.jpeg?auto=compress&cs=tinysrgb&w=1200',
  expert: 'https://images.pexels.com/photos/4031692/pexels-photo-4031692.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fast: 'https://images.pexels.com/photos/8978610/pexels-photo-8978610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cost: 'https://images.pexels.com/photos/8532824/pexels-photo-8532824.jpeg?auto=compress&cs=tinysrgb&w=1200',
  global: 'https://images.pexels.com/photos/8939052/pexels-photo-8939052.jpeg?auto=compress&cs=tinysrgb&w=1200',
  classes: 'https://images.pexels.com/photos/8442366/pexels-photo-8442366.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/29267512/pexels-photo-29267512.jpeg?auto=compress&cs=tinysrgb&w=1200',
  respiratory: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1200',
  dental: 'https://images.pexels.com/photos/3845737/pexels-photo-3845737.jpeg?auto=compress&cs=tinysrgb&w=1200',
  eu: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fda: 'https://images.pexels.com/photos/10347152/pexels-photo-10347152.jpeg?auto=compress&cs=tinysrgb&w=1200',
  nabl: 'https://images.pexels.com/photos/7876755/pexels-photo-7876755.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'biocompatibility-evaluation': {
    headline: 'A complete, risk-based biological safety assessment for every device class and contact type.',
    overview: [
      'Every medical device that touches a patient or user must be shown to be biologically safe. ISO 10993-1:2025 makes that evaluation a risk management activity, carried out within the framework of ISO 14971, rather than a checklist of tests.',
      'Our certified toxicologists categorise your device by nature and duration of contact, map the biological endpoints that apply, and decide where existing data, chemical characterisation or literature can answer a question before any new testing is commissioned.',
      'The result is a defensible biological safety case that notified bodies, the US FDA and CDSCO can follow from first principles, from skin-contact accessories to long-term implants.',
    ],
    sideImg: IMG.lab,
    whenNeeded: [
      'New device development or a first regulatory submission',
      'Change of material, supplier, colourant, sterilisation or manufacturing process',
      'EU MDR transition and technical documentation remediation',
      'Notified body or FDA deficiency letters on biological safety',
      'Periodic re-evaluation under your post-market surveillance plan',
    ],
    deliverables: [
      'Device categorisation by contact type and exposure duration',
      'Biological endpoint matrix per ISO 10993-1:2025',
      'Material and process review of all patient-contacting components',
      'Test strategy with scientific waiver justifications',
      'Laboratory selection support and protocol review',
      'Biological safety conclusion for your technical file',
    ],
    approach: [
      { title: 'Device & clinical use review', desc: 'Intended use, patient population, contact type, duration and foreseeable misuse.' },
      { title: 'Material & chemical review', desc: 'Formulations, additives, processing aids and residues in every patient-contacting part.' },
      { title: 'Endpoint mapping', desc: 'Each biological endpoint assessed against existing evidence and identified data gaps.' },
      { title: 'Targeted testing', desc: 'Only the tests that add information, run at accredited ISO 17025 and GLP laboratories.' },
      { title: 'Safety conclusion', desc: 'An integrated conclusion that ties every endpoint back to the risk management file.' },
    ],
    standards: ['ISO 10993-1:2025', 'ISO 10993-5 / -10 / -23', 'ISO 10993-18', 'ISO 14971:2019', 'FDA ISO 10993-1 guidance', 'EU MDR Annex I'],
    outcomes: [
      { value: 'I–III', label: 'All device risk classes' },
      { value: '100%', label: 'Endpoints addressed' },
      { value: '↓', label: 'Fewer unnecessary tests' },
    ],
    faqs: [
      { q: 'What changed in ISO 10993-1:2025?', a: 'The 2025 revision ties the biological evaluation more closely to ISO 14971 risk management, clarifies how exposure duration is counted for repeated or intermittent use, and expects reasonably foreseeable misuse to be considered. Existing evaluations should be gap-assessed against the new edition.' },
      { q: 'Do I always need animal testing?', a: 'No. Many endpoints can be addressed through chemical characterisation, toxicological risk assessment, literature and equivalence to marketed materials. We justify waivers scientifically so that testing is only performed where it adds information.' },
      { q: 'Can you work with my existing test reports?', a: 'Yes. We review existing reports for relevance and quality, identify any gaps for the current standard, and build them into the overall evaluation.' },
    ],
    related: ['bep-ber-preparation', 'toxicological-risk-assessment', 'risk-management-iso-14971'],
  },

  'bep-ber-preparation': {
    headline: 'Regulator-ready Biological Evaluation Plans and Reports, written to be accepted the first time.',
    overview: [
      'The Biological Evaluation Plan (BEP) is your roadmap: it defines the device, its materials and categorisation, and the evidence required to demonstrate biological safety. The Biological Evaluation Report (BER) is the final scientific argument that the evidence supports safe use.',
      'We prepare both documents end-to-end, or review and remediate documents you already have. Each is structured the way reviewers read them, with clear traceability from device description to endpoint, evidence and conclusion.',
      'Our BEPs and BERs are written for EU MDR notified bodies, US FDA 510(k), De Novo and PMA submissions, CDSCO and other global authorities.',
    ],
    sideImg: IMG.docs,
    whenNeeded: [
      'Preparing a technical file or regulatory submission',
      'Responding to notified body or FDA questions on biocompatibility',
      'Upgrading legacy documentation to ISO 10993-1:2025',
      'Combining test data, chemistry and literature into one conclusion',
      'Independent review before an audit',
    ],
    deliverables: [
      'Biological Evaluation Plan (BEP)',
      'Biological Evaluation Report (BER)',
      'Endpoint matrix with evidence traceability',
      'Test waiver and worst-case justifications',
      'Toxicological risk assessment summary',
      'Response support for regulator questions',
    ],
    approach: [
      { title: 'Kick-off & data collection', desc: 'Device description, drawings, bill of materials, processing and existing reports.' },
      { title: 'Plan (BEP)', desc: 'Categorisation, endpoint mapping, gap analysis and the testing strategy.' },
      { title: 'Evidence generation', desc: 'Coordination of chemical characterisation and biological testing at accredited labs.' },
      { title: 'Report (BER)', desc: 'Interpretation, toxicological risk assessment and the final safety conclusion.' },
      { title: 'Submission support', desc: 'Responses to deficiency letters and notified body questions.' },
    ],
    standards: ['ISO 10993-1:2025', 'ISO 10993-17:2023', 'ISO 10993-18', 'ISO 14971:2019', 'EU MDR 2017/745', 'FDA 510(k) / PMA / De Novo'],
    outcomes: [
      { value: '7 + 7', label: 'Structured BEP & BER steps' },
      { value: 'Audit', label: 'Ready documentation' },
      { value: 'Global', label: 'Regulator acceptance' },
    ],
    faqs: [
      { q: 'What is the difference between a BEP and a BER?', a: 'The BEP is written before testing and defines what evidence is needed and why. The BER is written after testing and characterisation, and concludes whether the evidence demonstrates biological safety for the intended use.' },
      { q: 'Can you update a BER written by someone else?', a: 'Yes. We regularly gap-assess and remediate third-party BERs, especially for EU MDR transition and ISO 10993-1:2025 updates.' },
      { q: 'How long does a BEP or BER take?', a: 'It depends on device complexity and the data available. A plan for a simple device can be turned around quickly; complex implants with extensive chemistry take longer. We confirm a timeline after reviewing your documents.' },
    ],
    related: ['biocompatibility-evaluation', 'toxicological-risk-assessment', 'global-regulatory-compliance'],
  },

  'toxicological-risk-assessment': {
    headline: 'Quantitative, science-based assessment of every chemical your device can release.',
    overview: [
      'Chemical characterisation tells you what can leach from a device. A toxicological risk assessment (TRA) tells you whether it matters. Following ISO 10993-17:2023, we compare the estimated exposure to each constituent with a tolerable intake derived from the best available toxicity data.',
      'For each extractable or leachable we derive toxicological thresholds, calculate the margin of safety (MoS), and apply the threshold of toxicological concern (TTC) where compound-specific data are missing.',
      'A well-argued TRA can replace systemic toxicity and other biological tests, saving time and cost while giving reviewers the quantitative evidence they increasingly expect.',
    ],
    sideImg: IMG.accredited,
    whenNeeded: [
      'Interpreting extractables & leachables (E&L) data',
      'Justifying waivers for systemic, subchronic or chronic toxicity testing',
      'Assessing colourants, additives, residues or process changes',
      'Answering FDA or notified body questions on chemical safety',
      'Evaluating impurities, degradants and sterilant residues',
    ],
    deliverables: [
      'Exposure estimation for each constituent',
      'Tolerable intake (TI) and tolerable contact level derivations',
      'Margin of safety calculations',
      'TTC and analytical evaluation threshold review',
      'Risk conclusion and recommendations',
      'Report formatted for direct inclusion in the BER',
    ],
    approach: [
      { title: 'Data review', desc: 'Assessment of the E&L study design, extraction conditions and analytical evaluation threshold.' },
      { title: 'Hazard identification', desc: 'Literature, databases and in-silico tools for every identified compound.' },
      { title: 'Dose–response', desc: 'Point-of-departure selection and tolerable intake derivation with justified modifying factors.' },
      { title: 'Exposure & MoS', desc: 'Worst-case exposure estimation and margin of safety for each constituent.' },
      { title: 'Conclusion', desc: 'Clear risk characterisation and next steps where an MoS is below 1.' },
    ],
    standards: ['ISO 10993-17:2023', 'ISO 10993-18', 'ISO/TS 21726 (TTC)', 'ICH M7', 'ICH Q3D', 'FDA CDRH guidance'],
    outcomes: [
      { value: 'MoS', label: 'Calculated for every compound' },
      { value: 'TTC', label: 'Applied where data are limited' },
      { value: '↓', label: 'Biological tests waived' },
    ],
    faqs: [
      { q: 'What is a margin of safety?', a: 'The margin of safety is the ratio of the tolerable intake of a compound to the estimated patient exposure. A value of 1 or greater generally indicates the exposure is acceptable.' },
      { q: 'What if a compound has no toxicity data?', a: 'We use read-across from structurally similar compounds, in-silico predictions and the threshold of toxicological concern approach in ISO/TS 21726 to reach a justified conclusion.' },
      { q: 'Do you perform the chemical testing?', a: 'We design and review the chemistry and coordinate it with accredited ISO 17025 laboratories, then interpret the data independently.' },
    ],
    related: ['qsar-analysis', 'in-silico-safety-assessment', 'bep-ber-preparation'],
  },

  'in-silico-safety-assessment': {
    headline: 'Computational toxicology that answers safety questions without animal testing.',
    overview: [
      'In-silico toxicology uses validated computer models, chemical databases and expert knowledge to predict the hazards of a compound from its structure. It is fast, cost-effective and increasingly accepted by regulators as part of a weight-of-evidence approach.',
      'We use in-silico tools to profile extractables, leachables, impurities and degradants, to fill data gaps in toxicological risk assessments, and to prioritise what genuinely needs to be tested.',
      'Every prediction is reviewed by a certified toxicologist and documented so that reviewers can follow the reasoning, in line with the 3Rs principle of replacing, reducing and refining animal use.',
    ],
    sideImg: IMG.fast,
    whenNeeded: [
      'Compounds identified in E&L studies with little or no toxicity data',
      'Early screening of new materials and suppliers',
      'Supporting test waivers within a biological evaluation',
      'Reducing time and cost of a regulatory programme',
      'Corporate commitments to non-animal approaches',
    ],
    deliverables: [
      'Structure-based hazard profiling',
      'Read-across justification to analogue compounds',
      'Prediction of key toxicity endpoints',
      'Expert review of every model output',
      'Weight-of-evidence conclusion',
      'Regulatory-ready report',
    ],
    approach: [
      { title: 'Structure confirmation', desc: 'Verification of identity and structure for every compound to be assessed.' },
      { title: 'Model selection', desc: 'Selection of fit-for-purpose models and databases for each endpoint.' },
      { title: 'Prediction & read-across', desc: 'Model runs, applicability domain checks and analogue identification.' },
      { title: 'Expert review', desc: 'Toxicologist review of every prediction and conflicting result.' },
      { title: 'Reporting', desc: 'Clear documentation for inclusion in your TRA or BER.' },
    ],
    standards: ['ISO 10993-1:2025', 'ISO 10993-17:2023', 'ICH M7', 'OECD QSAR principles', 'ISO/TS 21726'],
    outcomes: [
      { value: '0', label: 'Animals used' },
      { value: 'Days', label: 'Not months to answers' },
      { value: '3Rs', label: 'Replace · Reduce · Refine' },
    ],
    faqs: [
      { q: 'Do regulators accept in-silico data?', a: 'Yes, when used appropriately within a weight-of-evidence approach and with expert review. ICH M7 explicitly accepts two complementary QSAR methodologies for mutagenicity assessment.' },
      { q: 'Can in-silico replace all testing?', a: 'Not always. It is most powerful for filling data gaps, screening and supporting waivers. We are clear about where testing is still needed.' },
      { q: 'Which endpoints can be predicted?', a: 'Commonly mutagenicity, carcinogenicity alerts, sensitisation and systemic toxicity indicators, depending on the models and the chemistry involved.' },
    ],
    related: ['qsar-analysis', 'genotoxicity-prediction', 'toxicological-risk-assessment'],
  },

  'qsar-analysis': {
    headline: 'Quantitative structure–activity modelling for impurities, extractables and leachables.',
    overview: [
      'QSAR (quantitative structure–activity relationship) models predict a compound’s biological activity from its chemical structure. They are a cornerstone of modern impurity and E&L assessment.',
      'Following ICH M7, we run complementary expert rule-based and statistical QSAR methodologies, check each prediction against the model’s applicability domain, and resolve conflicts through expert review.',
      'This lets you classify impurities, set acceptable limits and avoid unnecessary testing, all with documentation that stands up to regulatory scrutiny.',
    ],
    sideImg: IMG.glp,
    whenNeeded: [
      'Classifying impurities and degradants for mutagenic potential',
      'Evaluating E&L compounds without experimental data',
      'Supporting toxicological risk assessments',
      'Responding to regulator questions on impurities',
      'Screening new materials or formulations',
    ],
    deliverables: [
      'Expert rule-based QSAR predictions',
      'Statistical QSAR predictions',
      'Applicability domain assessment',
      'Expert review and conflict resolution',
      'ICH M7 class assignment',
      'Summary report with recommendations',
    ],
    approach: [
      { title: 'Compound list', desc: 'Confirmation of structures and SMILES for every compound.' },
      { title: 'Dual-model QSAR', desc: 'Expert rule-based and statistical models run for each structure.' },
      { title: 'Domain check', desc: 'Confirmation that each compound sits within the model’s applicability domain.' },
      { title: 'Expert review', desc: 'Resolution of positive, equivocal and out-of-domain results.' },
      { title: 'Classification', desc: 'ICH M7 classification and control recommendations.' },
    ],
    standards: ['ICH M7', 'OECD QSAR validation principles', 'ISO 10993-17:2023', 'ISO 10993-18'],
    outcomes: [
      { value: '2', label: 'Complementary methodologies' },
      { value: 'M7', label: 'ICH-aligned classification' },
      { value: '↓', label: 'Testing cost' },
    ],
    faqs: [
      { q: 'Why are two QSAR models needed?', a: 'ICH M7 recommends one expert rule-based and one statistical methodology because they are complementary. Agreement between them gives greater confidence; disagreement is resolved by expert review.' },
      { q: 'What is the applicability domain?', a: 'It is the chemical space a model was built on. Predictions for compounds outside it are less reliable, so we check every compound and flag those needing further assessment.' },
      { q: 'Is QSAR useful for medical devices?', a: 'Yes. It is widely used to assess extractables and leachables identified during chemical characterisation under ISO 10993-18.' },
    ],
    related: ['genotoxicity-prediction', 'in-silico-safety-assessment', 'toxicological-risk-assessment'],
  },

  'genotoxicity-prediction': {
    headline: 'Robust genotoxicity conclusions, faster and without animal testing.',
    overview: [
      'Genotoxicity is one of the most scrutinised biological endpoints. Traditionally it requires a battery of in-vitro tests, but in many cases a well-argued, prediction-based assessment can address the endpoint.',
      'We combine QSAR predictions, structural alert analysis, chemical characterisation data and literature to reach a defensible genotoxicity conclusion, and identify clearly when confirmatory testing such as an Ames test is still warranted.',
      'The outcome is a faster, more economical route to the same regulatory confidence, with full scientific justification.',
    ],
    sideImg: IMG.cost,
    whenNeeded: [
      'Addressing the genotoxicity endpoint in a biological evaluation',
      'Assessing compounds identified in extractables studies',
      'Justifying a test waiver under ISO 10993-3',
      'Following up equivocal or positive test results',
      'Material or supplier changes',
    ],
    deliverables: [
      'Structural alert analysis',
      'QSAR mutagenicity predictions',
      'Weight-of-evidence assessment',
      'Waiver justification or test recommendation',
      'Follow-up strategy for positive alerts',
      'Report for the BER',
    ],
    approach: [
      { title: 'Chemistry review', desc: 'Identification of all compounds relevant to genotoxicity.' },
      { title: 'Alert screening', desc: 'Structural alerts and QSAR predictions for each compound.' },
      { title: 'Exposure context', desc: 'Comparison with TTC and compound-specific limits.' },
      { title: 'Weight of evidence', desc: 'Integration of predictions, data and literature.' },
      { title: 'Conclusion', desc: 'A justified waiver or a targeted test plan.' },
    ],
    standards: ['ISO 10993-3', 'ISO 10993-1:2025', 'ICH M7', 'ISO/TS 21726', 'OECD TG 471'],
    outcomes: [
      { value: 'Faster', label: 'Than a full test battery' },
      { value: '0', label: 'Animals used' },
      { value: 'Full', label: 'Regulatory justification' },
    ],
    faqs: [
      { q: 'Can genotoxicity testing be waived?', a: 'Often, yes, where chemical characterisation and prediction show no concern at the expected exposure. The waiver must be scientifically justified, which is what we provide.' },
      { q: 'What happens if an alert is found?', a: 'We assess its relevance, compare exposure with acceptable limits and, if needed, recommend a targeted confirmatory test such as a bacterial reverse mutation (Ames) assay.' },
      { q: 'Is this accepted by the FDA and notified bodies?', a: 'Yes, when presented as part of a weight-of-evidence approach with expert review and clear documentation.' },
    ],
    related: ['qsar-analysis', 'in-silico-safety-assessment', 'biocompatibility-evaluation'],
  },

  'global-regulatory-compliance': {
    headline: 'One partner, one documentation strategy, every market you sell in.',
    overview: [
      'Regulators around the world share the same scientific foundation in ISO 10993, but each has its own expectations, templates and areas of focus. Preparing separate documentation for every market is slow and expensive.',
      'We build one coherent biological safety strategy that satisfies the US FDA, EU MDR notified bodies, CDSCO in India, and authorities across the Gulf and ASEAN regions, and adapt it to each submission.',
      'Our work aligns with OECD GLP, ISO 17025 and NABL so that the laboratory data underpinning your submission is accepted wherever you file.',
    ],
    sideImg: IMG.global,
    whenNeeded: [
      'Expanding a product into new markets',
      'Harmonising documentation across regions',
      'EU MDR transition from the Medical Device Directive',
      'FDA 510(k), De Novo or PMA biocompatibility sections',
      'CDSCO registration and Indian MDR 2017 requirements',
    ],
    deliverables: [
      'Market-by-market requirements analysis',
      'Harmonised biological safety strategy',
      'Submission-ready biocompatibility sections',
      'GLP, ISO 17025 and NABL laboratory alignment',
      'Gap assessment of existing documentation',
      'Regulator query response support',
    ],
    approach: [
      { title: 'Market mapping', desc: 'Target markets, device classification and regional expectations.' },
      { title: 'Gap assessment', desc: 'Existing evidence reviewed against each market’s requirements.' },
      { title: 'Harmonised strategy', desc: 'One evidence package designed to satisfy all markets.' },
      { title: 'Regional adaptation', desc: 'Documents tailored to each authority’s format and focus.' },
      { title: 'Ongoing support', desc: 'Query responses, renewals and post-market updates.' },
    ],
    standards: ['US FDA', 'EU MDR 2017/745', 'CDSCO · Indian MDR 2017', 'OECD GLP', 'ISO 17025', 'NABL', 'Gulf & ASEAN'],
    outcomes: [
      { value: '7+', label: 'Regulatory frameworks' },
      { value: '1', label: 'Cohesive strategy' },
      { value: '↓', label: 'Duplicate work' },
    ],
    faqs: [
      { q: 'Can one dossier serve the FDA and EU MDR?', a: 'The core science can be shared, but each authority has its own expectations. We build one evidence package and adapt the documentation for each submission.' },
      { q: 'Do you support CDSCO submissions?', a: 'Yes. We support biological safety documentation for CDSCO registration under the Indian Medical Device Rules, 2017.' },
      { q: 'Which other regions do you cover?', a: 'In addition to the US, EU, UK and India, we support submissions across the Gulf and ASEAN regions.' },
    ],
    related: ['bep-ber-preparation', 'risk-management-iso-14971', 'biocompatibility-evaluation'],
  },

  'risk-management-iso-14971': {
    headline: 'Biological risk fully integrated into your ISO 14971 risk management file.',
    overview: [
      'ISO 10993-1:2025 positions biological evaluation firmly within the ISO 14971 risk management process. Regulators now expect to see a clear link between biological hazards, their risk controls and the overall benefit–risk conclusion.',
      'We prepare and update risk management files that connect material characterisation, toxicological evaluation and clinical use, from hazard identification through to the evaluation of residual risk.',
      'Biological risk then becomes part of a single, consistent risk story across your technical documentation.',
    ],
    sideImg: IMG.classes,
    whenNeeded: [
      'Building a risk management file for a new device',
      'Aligning biological evaluation with ISO 14971',
      'Notified body findings on risk management',
      'Design, material or process changes',
      'Post-market surveillance updates',
    ],
    deliverables: [
      'Risk management plan',
      'Biological hazard identification',
      'Risk analysis and evaluation',
      'Risk control measures and verification',
      'Residual risk and benefit–risk evaluation',
      'Risk management report',
    ],
    approach: [
      { title: 'Plan', desc: 'Scope, risk acceptability criteria and responsibilities.' },
      { title: 'Hazard identification', desc: 'Biological, chemical and use-related hazards.' },
      { title: 'Risk analysis', desc: 'Estimation of probability and severity for each hazardous situation.' },
      { title: 'Risk control', desc: 'Control measures, verification and labelling recommendations.' },
      { title: 'Residual risk', desc: 'Overall residual risk and benefit–risk conclusion.' },
    ],
    standards: ['ISO 14971:2019', 'ISO/TR 24971', 'ISO 10993-1:2025', 'EU MDR Annex I', 'FDA QMSR'],
    outcomes: [
      { value: '1', label: 'Integrated risk story' },
      { value: 'Full', label: 'Hazard-to-residual traceability' },
      { value: 'Audit', label: 'Ready file' },
    ],
    faqs: [
      { q: 'Why link biological evaluation to ISO 14971?', a: 'ISO 10993-1:2025 requires the biological evaluation to be carried out within a risk management process, so regulators expect clear traceability between the two.' },
      { q: 'Do you prepare the entire risk management file?', a: 'We can prepare the full file or integrate biological risk into the file you already maintain.' },
      { q: 'How often should it be updated?', a: 'Whenever the device, its materials, processes or post-market data change in a way that could affect risk.' },
    ],
    related: ['biocompatibility-evaluation', 'global-regulatory-compliance', 'bep-ber-preparation'],
  },

  'iso-18562-breathing-gas-pathway': {
    headline: 'Biocompatibility for devices that deliver gas to the patient’s airway.',
    overview: [
      'Ventilators, anaesthesia systems, oxygen concentrators, CPAP devices, nebulisers and their accessories can release particulates and volatile organic compounds into the gas a patient breathes. ISO 18562 is the series that governs how this risk is evaluated.',
      'We support the full ISO 18562 programme: biological evaluation planning, test strategy development, review of particulate, VOC and condensate leachable data, and toxicological risk assessment of every emitted substance.',
      'Our assessments are aligned with ISO 18562-1:2024 and integrated with your ISO 10993 evaluation for components with other patient contact.',
    ],
    sideImg: IMG.respiratory,
    whenNeeded: [
      'Ventilators, anaesthesia and respiratory therapy equipment',
      'Oxygen concentrators and gas delivery systems',
      'CPAP, BiPAP and sleep therapy devices',
      'Masks, tubing, humidifiers and nebulisers',
      'Material or design changes in the gas pathway',
    ],
    deliverables: [
      'Gas pathway categorisation and evaluation plan',
      'Test strategy for particulates, VOCs and leachables',
      'Review of laboratory protocols and data',
      'Toxicological risk assessment of emitted substances',
      'Patient population and exposure scenarios',
      'ISO 18562 biological evaluation report',
    ],
    approach: [
      { title: 'Pathway mapping', desc: 'Identification of all components in the breathing gas pathway.' },
      { title: 'Evaluation plan', desc: 'Exposure scenarios for adult, paediatric and neonatal patients.' },
      { title: 'Test strategy', desc: 'Particulate (-2), VOC (-3) and condensate leachable (-4) testing.' },
      { title: 'Risk assessment', desc: 'TRA of every substance detected above threshold.' },
      { title: 'Reporting', desc: 'Integrated ISO 18562 and ISO 10993 conclusion.' },
    ],
    standards: ['ISO 18562-1:2024', 'ISO 18562-2', 'ISO 18562-3', 'ISO 18562-4', 'ISO 10993-1:2025', 'ISO 10993-17:2023'],
    outcomes: [
      { value: 'PM', label: 'Particulate assessment' },
      { value: 'VOC', label: 'Emission assessment' },
      { value: 'TRA', label: 'Every substance' },
    ],
    faqs: [
      { q: 'Which devices need ISO 18562?', a: 'Any medical device, part or accessory that provides gas to a patient’s respiratory tract, such as ventilators, anaesthesia equipment, oxygen therapy devices and their tubing and masks.' },
      { q: 'Does ISO 18562 replace ISO 10993?', a: 'No. ISO 18562 addresses the gas pathway. Components with other patient contact, such as a mask touching the skin, are still evaluated under ISO 10993.' },
      { q: 'What is tested under ISO 18562?', a: 'Emissions of particulate matter (part 2), volatile organic compounds (part 3) and leachables in condensate (part 4), followed by a toxicological risk assessment.' },
    ],
    related: ['toxicological-risk-assessment', 'biocompatibility-evaluation', 'bep-ber-preparation'],
  },

  'iso-7405-dental-devices': {
    headline: 'Biological evaluation of dental materials and devices per ISO 7405:2025.',
    overview: [
      'Dental materials sit in a unique environment: in contact with teeth, pulp, gingiva and oral mucosa, often for years. ISO 7405 sets out the dentistry-specific tests and evaluations that complement the ISO 10993 series.',
      'We support manufacturers of restorative materials, cements, adhesives, implants, orthodontic appliances and aligners, prosthetics and endodontic materials, from evaluation planning to toxicological risk assessment and regulatory documentation.',
      'The result is a biological safety case that meets ISO 7405, ISO 10993 and global regulatory expectations for dental products.',
    ],
    sideImg: IMG.dental,
    whenNeeded: [
      'Restorative materials, cements and adhesives',
      'Dental implants and abutments',
      'Orthodontic appliances and clear aligners',
      'Endodontic and pulp-capping materials',
      'Dentures, crowns, bridges and 3D-printed dental resins',
    ],
    deliverables: [
      'Dental device categorisation',
      'ISO 7405 and ISO 10993 endpoint mapping',
      'Test strategy, including pulp and dentine usage tests where required',
      'Toxicological risk assessment of residual monomers and leachables',
      'Biological evaluation plan and report',
      'Regulatory documentation support',
    ],
    approach: [
      { title: 'Material review', desc: 'Composition, curing, residual monomers and processing.' },
      { title: 'Categorisation', desc: 'Oral contact type, site and duration of use.' },
      { title: 'Endpoint mapping', desc: 'ISO 7405-specific tests alongside ISO 10993 endpoints.' },
      { title: 'Risk assessment', desc: 'TRA of leachables in the oral environment.' },
      { title: 'Reporting', desc: 'A complete, submission-ready biological safety case.' },
    ],
    standards: ['ISO 7405:2025', 'ISO 10993-1:2025', 'ISO 10993-17:2023', 'ISO 10993-18', 'EU MDR 2017/745', 'FDA dental guidance'],
    outcomes: [
      { value: 'Oral', label: 'Environment-specific' },
      { value: 'Dual', label: 'ISO 7405 + ISO 10993' },
      { value: 'Global', label: 'Submission ready' },
    ],
    faqs: [
      { q: 'How is ISO 7405 different from ISO 10993?', a: 'ISO 7405 adds dentistry-specific evaluations, such as pulp and dentine usage tests and endodontic usage tests, and guidance on test methods suited to dental materials. It is used together with ISO 10993.' },
      { q: 'Do you support 3D-printed dental resins?', a: 'Yes. We assess post-processing, residual monomers and leachables, which are key concerns for printed dental devices.' },
      { q: 'Can you help with aligners and orthodontic devices?', a: 'Yes. We evaluate long-term mucosal and enamel contact for aligners, brackets, wires and related products.' },
    ],
    related: ['biocompatibility-evaluation', 'toxicological-risk-assessment', 'bep-ber-preparation'],
  },
};

export function getService(slug: string): (ServiceItem & ServiceDetail) | undefined {
  const base = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!base || !detail) return undefined;
  return { ...base, ...detail };
}

export function serviceHref(slug: string) {
  return `/expertise/${slug}`;
}

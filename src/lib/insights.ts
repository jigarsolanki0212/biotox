import type { FaqItem } from './data';
import { isLiveSite } from './seo-config';

/**
 * Insights articles. An article appears on the live site only when `published` is true; drafts show on preview
 * deployments (the main branch) so a toxicologist can review them first. To publish: set published: true and release.
 */

export type Block = { h2: string } | { p: string } | { ul: string[] };

export interface Insight {
  slug: string;
  title: string;
  /** Meta description and listing summary, under 160 characters */
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  tags: string[];
  img: string;
  published: boolean;
  /** Points the reviewing toxicologist should confirm before publishing (shown on drafts only) */
  reviewNotes?: string[];
  body: Block[];
  faqs?: FaqItem[];
  relatedServices: string[];
}

export const insights: Insight[] = [
  {
    slug: 'bep-vs-ber-biological-evaluation-plan-report',
    title: 'BEP vs BER: the Biological Evaluation Plan and Report explained',
    description: 'What goes into a Biological Evaluation Plan and a Biological Evaluation Report, how they differ, and why regulators expect both.',
    date: '2026-10-16',
    readMinutes: 5,
    tags: ['BEP / BER', 'ISO 10993-1'],
    img: 'https://images.pexels.com/photos/7550538/pexels-photo-7550538.jpeg?auto=compress&cs=tinysrgb&w=1600',
    published: false,
    reviewNotes: ['Confirm the BEP/BER contents list matches how BIOTOX structures its documents.'],
    body: [
      { p: 'Every medical device that contacts the body needs a documented biological evaluation. Under ISO 10993-1 that evaluation is a planned, risk-based process, and it is usually captured in two documents: a Biological Evaluation Plan (BEP) written before any testing, and a Biological Evaluation Report (BER) written once the evidence is in.' },
      { h2: 'What is a Biological Evaluation Plan (BEP)?' },
      { p: 'The BEP is the strategy. It describes the device, sets out how the biological risks will be assessed, and explains which evidence will be used to address each one. A good BEP is written early, ideally during design, so that material choices and test plans are made with the biological evaluation in mind.' },
      { p: 'A typical BEP covers:' },
      { ul: [
        'Device description, intended use and the materials of every patient-contacting component',
        'Categorisation by nature of body contact and duration of exposure',
        'The biological endpoints relevant to that category',
        'Existing data that can be used: material history, previous testing, literature and equivalence to marketed devices',
        'The chemical characterisation plan (ISO 10993-18) and toxicological risk assessment approach (ISO 10993-17)',
        'Any biological tests still needed, with a scientific justification for each endpoint that is not tested',
      ] },
      { h2: 'What is a Biological Evaluation Report (BER)?' },
      { p: 'The BER is the conclusion. It brings together everything gathered under the plan, interprets it, and states whether the device is biologically safe for its intended use. Reviewers at notified bodies, the US FDA and CDSCO read the BER to understand how the manufacturer reached that conclusion.' },
      { ul: [
        'Results of chemical characterisation, extractables and leachables studies',
        'The toxicological risk assessment of identified compounds',
        'Biological test results and their interpretation, including any borderline findings',
        'Literature and clinical or post-market data used as evidence',
        'Residual risks, how they are controlled, and the overall biological safety conclusion',
      ] },
      { h2: 'How the BEP and BER differ' },
      { ul: [
        'Timing: the BEP is written before evidence is generated; the BER after it is complete.',
        'Purpose: the BEP justifies the strategy; the BER justifies the conclusion.',
        'Audience: the BEP guides your own team and test laboratories; the BER is written for the regulator.',
      ] },
      { p: 'Both documents are living records. A change of material, supplier, sterilisation method or manufacturing process can mean the plan and report need updating, and post-market data should feed back into them.' },
      { h2: 'Why regulators expect both' },
      { p: 'Submitting test reports alone rarely satisfies a reviewer. What they want to see is the reasoning: why each endpoint was addressed the way it was, and why the evidence is enough. A clear BEP and BER make that reasoning easy to follow, which shortens review cycles and reduces deficiency questions.' },
    ],
    faqs: [
      { q: 'Is a BEP mandatory?', a: 'ISO 10993-1 requires the biological evaluation to be planned and documented. Regulators such as EU notified bodies and the US FDA expect to see that plan, and a BEP is the usual way to provide it.' },
      { q: 'Can the BEP and BER be combined into one document?', a: 'Some manufacturers combine them, but keeping them separate makes the strategy and the conclusion easier to review and to update after a device change.' },
    ],
    relatedServices: ['bep-ber-preparation', 'biocompatibility-evaluation', 'toxicological-risk-assessment'],
  },
  {
    slug: 'reduce-biocompatibility-testing-chemical-characterisation',
    title: 'Can you reduce biocompatibility testing? The role of chemical characterisation and risk assessment',
    description: 'How chemical characterisation (ISO 10993-18) and toxicological risk assessment (ISO 10993-17) can justify fewer animal tests.',
    date: '2026-10-16',
    readMinutes: 6,
    tags: ['Toxicological Risk Assessment', 'ISO 10993-17', 'ISO 10993-18'],
    img: 'https://images.pexels.com/photos/7651804/pexels-photo-7651804.jpeg?auto=compress&cs=tinysrgb&w=1600',
    published: false,
    reviewNotes: ['Confirm wording on which endpoints can typically be addressed by chemistry and risk assessment.'],
    body: [
      { p: 'Biocompatibility testing used to mean running a fixed list of biological tests. Today ISO 10993-1 asks for a risk-based evaluation instead, and that opens the door to answering some biological questions with chemistry and toxicology rather than animal studies.' },
      { h2: 'Start with what is already known' },
      { p: 'Before planning any test, gather the existing evidence: the materials and their history of safe use, prior test data, published literature, and similarity to devices already on the market. Where this evidence is strong and relevant, some endpoints may need little or no new data.' },
      { h2: 'Chemical characterisation (ISO 10993-18)' },
      { p: 'Chemical characterisation identifies what could come out of a device during use. Extractables studies use exaggerated conditions to find what could be released; leachables studies look at what actually is released under conditions closer to clinical use. The result is a list of compounds and the amounts a patient could be exposed to.' },
      { h2: 'Toxicological risk assessment (ISO 10993-17)' },
      { p: 'Each identified compound is then assessed by a toxicologist. Its estimated exposure is compared with a tolerable level derived from toxicological data, giving a margin of safety. Where data are limited, recognised approaches such as the threshold of toxicological concern can be applied.' },
      { ul: [
        'If every compound has an acceptable margin of safety, that evidence can support the safety case for systemic toxicity endpoints.',
        'If a compound raises concern, the assessment shows exactly which risk needs further work, so any testing is targeted.',
      ] },
      { h2: 'Where this approach helps most' },
      { ul: [
        'Material, supplier or process changes to a device that is already on the market',
        'Long-term implants, where systemic and chronic endpoints would otherwise need lengthy studies',
        'Programmes aiming to reduce animal testing in line with the 3Rs principle',
      ] },
      { p: 'Some endpoints, such as cytotoxicity, sensitisation and irritation, are still commonly addressed by testing, and the right mix always depends on the device. The value of a well-reasoned evaluation is that every test you do run has a clear purpose.' },
      { h2: 'What reviewers look for' },
      { p: 'A testing reduction is only accepted when the justification is clear: the chemistry must be adequate for the device, the exposure estimates must be conservative, and the toxicological conclusions must be traceable. That reasoning belongs in the Biological Evaluation Plan and is concluded in the Biological Evaluation Report.' },
    ],
    faqs: [
      { q: 'Does chemical characterisation replace all biological testing?', a: 'No. It can support or replace some endpoints, particularly systemic ones, but the right combination of chemistry, risk assessment and testing depends on the device and must be justified case by case.' },
      { q: 'What is a margin of safety?', a: 'It is the ratio between a tolerable exposure level for a compound and the estimated patient exposure from the device. A margin above one indicates the exposure is below the tolerable level.' },
    ],
    relatedServices: ['toxicological-risk-assessment', 'in-silico-safety-assessment', 'biocompatibility-evaluation'],
  },
  {
    slug: 'iso-10993-1-device-categorisation',
    title: 'How medical devices are categorised for biological evaluation under ISO 10993-1',
    description: 'Nature of body contact and duration of exposure decide which biological endpoints apply to your device. Here is how categorisation works.',
    date: '2026-10-16',
    readMinutes: 5,
    tags: ['ISO 10993-1', 'Biocompatibility'],
    img: 'https://images.pexels.com/photos/8442366/pexels-photo-8442366.jpeg?auto=compress&cs=tinysrgb&w=1600',
    published: false,
    reviewNotes: [
      'Check contact categories and duration bands against the current ISO 10993-1:2025 wording and update terminology if it changed.',
    ],
    body: [
      { p: 'The first technical step in any biological evaluation is categorising the device. The category decides which biological endpoints must be considered, so getting it right shapes the whole evaluation and every test that follows.' },
      { h2: 'Nature of body contact' },
      { p: 'ISO 10993-1 groups devices by where and how they contact the body:' },
      { ul: [
        'Surface-contacting devices: in contact with intact skin, mucosal membranes, or breached or compromised surfaces',
        'Externally communicating devices: connecting the inside of the body to the outside, for example through the blood path, tissue, bone or dentin, or circulating blood',
        'Implant devices: placed within tissue, bone or blood',
      ] },
      { h2: 'Duration of exposure' },
      { p: 'Duration is grouped into three bands, and for devices used repeatedly the cumulative exposure counts:' },
      { ul: [
        'Limited: up to 24 hours',
        'Prolonged: more than 24 hours and up to 30 days',
        'Long-term: more than 30 days',
      ] },
      { h2: 'From category to endpoints' },
      { p: 'Together, contact and duration point to the endpoints that need to be addressed, such as cytotoxicity, sensitisation, irritation, systemic toxicity, genotoxicity, implantation effects and haemocompatibility. A long-term implant needs far more endpoints considered than a surface device used for a few minutes.' },
      { h2: 'Common mistakes' },
      { ul: [
        'Categorising the device as a whole when different components have different contact types',
        'Ignoring indirect contact, such as fluids that pass through the device before reaching the patient',
        'Underestimating cumulative exposure for devices used daily or repeatedly',
        'Treating the endpoint list as a test list, instead of deciding how each endpoint is best addressed',
      ] },
      { p: 'Categorisation should be recorded in the Biological Evaluation Plan with the reasoning behind it, so reviewers can follow it and the evaluation can be updated if the device or its use changes.' },
    ],
    faqs: [
      { q: 'How is duration counted for devices used many times?', a: 'For repeated use, the total cumulative contact time across all uses is considered, which can move a device into a longer duration category.' },
      { q: 'Does every endpoint for my category need a test?', a: 'No. Each endpoint must be addressed, but existing data, chemical characterisation and toxicological risk assessment can often address an endpoint without new testing, with a documented justification.' },
    ],
    relatedServices: ['biocompatibility-evaluation', 'bep-ber-preparation', 'risk-management-iso-14971'],
  },
];

/** Articles visible on this deployment: published ones on the live site, everything on previews. */
export const visibleInsights = insights
  .filter((a) => a.published || !isLiveSite)
  .sort((a, b) => b.date.localeCompare(a.date));

export const getInsight = (slug: string) => visibleInsights.find((a) => a.slug === slug);
export const insightHref = (slug: string) => `/insights/${slug}`;

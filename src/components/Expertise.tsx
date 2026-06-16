export const Expertise = () => {
  return (
    <section id="expertise">
      <div className="container">
        <div className="sec-label reveal">Core Services</div>
        <div className="sec-title reveal">Our <em>Expertise</em></div>
        <div className="sec-sub reveal">
          Smarter toxicology for better regulatory decisions — covering the full spectrum of biological safety for medical devices worldwide.
        </div>
        <div className="exp-grid">

          {/* Card 1 */}
          <div className="exp-card reveal d1">
            <div className="ec-banner banner-bio">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <circle cx="320" cy="65" r="80" fill="#1a6aff" opacity="0.08" className="shape-circles" />
                <circle cx="80" cy="30" r="50" fill="#1a6aff" opacity="0.06" />
                <circle cx="200" cy="100" r="35" fill="#0047cc" opacity="0.06" />
                <line x1="0" y1="65" x2="400" y2="65" stroke="#1a6aff" strokeWidth="1" opacity="0.1" />
                <line x1="200" y1="0" x2="200" y2="130" stroke="#1a6aff" strokeWidth="1" opacity="0.1" />
                <polygon points="180,40 220,40 240,75 220,110 180,110 160,75" fill="none" stroke="#1a6aff" strokeWidth="1.5" opacity="0.15" />
              </svg>
              <i className="ti ti-shield-check ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">01</span>
                <span className="ec-badge b">ISO 10993-1:2025</span>
              </div>
              <div className="ec-title">Biocompatibility Evaluation</div>
              <div className="ec-desc">
                Full biological safety assessment per ISO 10993-1:2025 for all device risk classes and patient contact types — from skin contact to long-term implants.
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="exp-card reveal d2">
            <div className="ec-banner banner-bep">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <rect x="20" y="20" width="60" height="80" rx="6" fill="#ff6b1a" opacity="0.1" />
                <rect x="100" y="35" width="60" height="65" rx="6" fill="#ff6b1a" opacity="0.08" />
                <rect x="180" y="15" width="60" height="85" rx="6" fill="#ff6b1a" opacity="0.12" />
                <rect x="260" y="30" width="60" height="70" rx="6" fill="#e85500" opacity="0.08" />
                <rect x="340" y="20" width="40" height="80" rx="6" fill="#ff6b1a" opacity="0.06" />
                <polyline points="50,80 130,65 210,40 290,55 360,35" fill="none" stroke="#ff6b1a" strokeWidth="2" opacity="0.25" />
              </svg>
              <i className="ti ti-file-text ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">02</span>
                <span className="ec-badge o">Regulatory Compliance</span>
              </div>
              <div className="ec-title">BEP / BER Preparation & Review</div>
              <div className="ec-desc">
                End-to-end Biological Evaluation Plans and Reports — regulator-ready, audit-proof, and globally accepted by notified bodies and regulatory authorities.
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="exp-card reveal d3">
            <div className="ec-banner banner-tra">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <circle cx="60" cy="90" r="8" fill="#0080ff" opacity="0.4" />
                <circle cx="120" cy="60" r="8" fill="#0080ff" opacity="0.4" />
                <circle cx="180" cy="40" r="8" fill="#0080ff" opacity="0.4" />
                <circle cx="240" cy="70" r="8" fill="#0080ff" opacity="0.4" />
                <circle cx="300" cy="45" r="8" fill="#0080ff" opacity="0.4" />
                <circle cx="360" cy="30" r="8" fill="#0080ff" opacity="0.4" />
                <polyline points="60,90 120,60 180,40 240,70 300,45 360,30" fill="none" stroke="#0080ff" strokeWidth="2.5" opacity="0.3" />
                <polygon points="60,90 60,130 120,130 120,60" fill="#0080ff" opacity="0.07" />
                <polygon points="120,60 120,130 180,130 180,40" fill="#0080ff" opacity="0.05" />
                <polygon points="180,40 180,130 240,130 240,70" fill="#0080ff" opacity="0.07" />
                <polygon points="240,70 240,130 300,130 300,45" fill="#0080ff" opacity="0.05" />
                <polygon points="300,45 300,130 360,130 360,30" fill="#0080ff" opacity="0.07" />
              </svg>
              <i className="ti ti-chart-bar ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">03</span>
                <span className="ec-badge b">TRA · PDE</span>
              </div>
              <div className="ec-title">Toxicological Risk Assessment</div>
              <div className="ec-desc">
                Science-based TRA with quantitative exposure estimates, toxicological thresholds, Margin of safety, and comprehensive conclusions per ISO 10993-18 and 10993-17.
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="exp-card reveal d1">
            <div className="ec-banner banner-insilico">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <rect x="30" y="25" width="100" height="70" rx="8" fill="none" stroke="#e85500" strokeWidth="1.5" opacity="0.2" />
                <rect x="40" y="35" width="80" height="10" rx="3" fill="#e85500" opacity="0.15" />
                <rect x="40" y="52" width="60" height="8" rx="3" fill="#e85500" opacity="0.1" />
                <rect x="40" y="66" width="70" height="8" rx="3" fill="#e85500" opacity="0.1" />
                <circle cx="280" cy="50" r="35" fill="none" stroke="#e85500" strokeWidth="1.5" opacity="0.2" />
                <circle cx="280" cy="50" r="20" fill="#e85500" opacity="0.07" />
                <line x1="150" y1="65" x2="240" y2="60" stroke="#e85500" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.25" />
                <polygon points="235,55 245,60 235,65" fill="#e85500" opacity="0.3" />
              </svg>
              <i className="ti ti-cpu ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">04</span>
                <span className="ec-badge o">No Animal Testing</span>
              </div>
              <div className="ec-title">In-silico Safety Assessment</div>
              <div className="ec-desc">
                Computational toxicology tools for rapid, cost-effective chemical safety profiling without animal testing — fully aligned with regulatory expectations.
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="exp-card reveal d2">
            <div className="ec-banner banner-qsar">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <circle cx="100" cy="65" r="30" fill="none" stroke="#0047cc" strokeWidth="1.5" opacity="0.2" />
                <circle cx="155" cy="65" r="30" fill="none" stroke="#0047cc" strokeWidth="1.5" opacity="0.2" />
                <circle cx="127" cy="65" r="18" fill="#0047cc" opacity="0.07" />
                <circle cx="270" cy="50" r="22" fill="none" stroke="#0047cc" strokeWidth="1.2" opacity="0.2" />
                <circle cx="310" cy="75" r="18" fill="none" stroke="#0047cc" strokeWidth="1.2" opacity="0.18" />
                <line x1="200" y1="65" x2="248" y2="55" stroke="#0047cc" strokeWidth="1.2" opacity="0.2" />
                <line x1="200" y1="65" x2="244" y2="78" stroke="#0047cc" strokeWidth="1.2" opacity="0.2" />
                <circle cx="200" cy="65" r="6" fill="#0047cc" opacity="0.3" />
              </svg>
              <i className="ti ti-search ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">05</span>
                <span className="ec-badge b">E&amp;L · Impurities</span>
              </div>
              <div className="ec-title">QSAR Analysis</div>
              <div className="ec-desc">
                Quantitative structure-activity relationship modelling for impurity and extractable & leachable safety profiling — reducing costly testing.
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="exp-card reveal d1">
            <div className="ec-banner banner-geno">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <path d="M80,20 Q120,65 80,110" fill="none" stroke="#1a4aff" strokeWidth="2.5" opacity="0.25" />
                <path d="M100,20 Q60,65 100,110" fill="none" stroke="#1a4aff" strokeWidth="2.5" opacity="0.2" />
                <line x1="82" y1="38" x2="98" y2="43" stroke="#1a4aff" strokeWidth="1.8" opacity="0.3" />
                <line x1="74" y1="58" x2="106" y2="63" stroke="#1a4aff" strokeWidth="1.8" opacity="0.3" />
                <line x1="78" y1="78" x2="102" y2="82" stroke="#1a4aff" strokeWidth="1.8" opacity="0.3" />
                <line x1="83" y1="96" x2="97" y2="100" stroke="#1a4aff" strokeWidth="1.8" opacity="0.3" />
                <circle cx="250" cy="55" r="25" fill="none" stroke="#1a4aff" strokeWidth="1.5" opacity="0.2" />
                <circle cx="300" cy="75" r="20" fill="none" stroke="#1a4aff" strokeWidth="1.2" opacity="0.18" />
                <circle cx="340" cy="45" r="15" fill="#1a4aff" opacity="0.06" />
                <line x1="155" y1="65" x2="220" y2="58" stroke="#1a4aff" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.22" />
              </svg>
              <i className="ti ti-dna ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">06</span>
                <span className="ec-badge b">Without Testing</span>
              </div>
              <div className="ec-title">Genotoxicity Prediction</div>
              <div className="ec-desc">
                QSAR-based genotoxicity prediction without animal testing — faster, more economical, and scientifically robust with full regulatory justification.
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="exp-card reveal d2">
            <div className="ec-banner banner-global">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <ellipse cx="200" cy="65" rx="70" ry="55" fill="none" stroke="#cc4400" strokeWidth="1.5" opacity="0.2" />
                <ellipse cx="200" cy="65" rx="35" ry="55" fill="none" stroke="#cc4400" strokeWidth="1" opacity="0.15" />
                <line x1="130" y1="65" x2="270" y2="65" stroke="#cc4400" strokeWidth="1" opacity="0.18" />
                <line x1="200" y1="10" x2="200" y2="120" stroke="#cc4400" strokeWidth="1" opacity="0.18" />
                <ellipse cx="200" cy="65" rx="70" ry="20" fill="none" stroke="#cc4400" strokeWidth="1" opacity="0.12" />
                <circle cx="140" cy="42" r="5" fill="#ff6b1a" opacity="0.5" />
                <circle cx="260" cy="55" r="5" fill="#ff6b1a" opacity="0.5" />
                <circle cx="185" cy="88" r="5" fill="#ff6b1a" opacity="0.5" />
                <circle cx="230" cy="38" r="4" fill="#ff6b1a" opacity="0.4" />
              </svg>
              <i className="ti ti-world ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">07</span>
                <span className="ec-badge o">Multi-Market</span>
              </div>
              <div className="ec-title">Global Regulatory Compliance</div>
              <div className="ec-desc">
                FDA, OECD GLP, ISO 17025, NABL, EU MDR, CDSCO, Gulf & ASEAN regulatory alignment — one partner for all your target markets.
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="exp-card reveal d3">
            <div className="ec-banner banner-risk">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <polygon points="200,15 370,110 30,110" fill="none" stroke="#1a6aff" strokeWidth="1.5" opacity="0.18" />
                <polygon points="200,35 330,110 70,110" fill="none" stroke="#1a6aff" strokeWidth="1.2" opacity="0.12" />
                <polygon points="200,55 290,110 110,110" fill="#1a6aff" opacity="0.06" />
                <line x1="200" y1="15" x2="200" y2="110" stroke="#1a6aff" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.2" />
                <text x="195" y="90" textAnchor="middle" fontSize="10" fill="#1a6aff" opacity="0.4" fontFamily="Poppins">RISK</text>
                <circle cx="200" cy="15" r="5" fill="#1a6aff" opacity="0.4" />
              </svg>
              <i className="ti ti-trending-up ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">08</span>
                <span className="ec-badge b">ISO 14971</span>
              </div>
              <div className="ec-title">Risk Assessment & Management</div>
              <div className="ec-desc">
                Full ISO 14971 risk management file preparation integrated with your biological safety documentation — from hazard identification to residual risk.
              </div>
            </div>
          </div>

          {/* Card 9 */}
          <div className="exp-card reveal d1">
            <div className="ec-banner banner-bio">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <rect x="50" y="30" width="80" height="70" rx="8" fill="none" stroke="#1a6aff" strokeWidth="1.5" opacity="0.2" />
                <rect x="60" y="40" width="60" height="10" rx="3" fill="#1a6aff" opacity="0.15" />
                <rect x="60" y="55" width="50" height="8" rx="3" fill="#1a6aff" opacity="0.1" />
                <circle cx="280" cy="65" r="30" fill="none" stroke="#1a6aff" strokeWidth="1.5" opacity="0.2" />
                <circle cx="280" cy="65" r="15" fill="#1a6aff" opacity="0.07" />
                <line x1="150" y1="65" x2="240" y2="65" stroke="#1a6aff" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.25" />
              </svg>
              <i className="ti ti-shield ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">09</span>
                <span className="ec-badge b">Active Devices</span>
              </div>
              <div className="ec-title">ISO 18562-1:2024 Compliance</div>
              <div className="ec-desc">
                We provide expert support for ISO 18562 compliance of breathing gas pathway medical devices, including biological evaluation planning, test strategy development, chemical characterization review and toxicological risk assessment.
              </div>
            </div>
          </div>

          {/* Card 10 */}
          <div className="exp-card reveal d2">
            <div className="ec-banner banner-bep">
              <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                <rect x="40" y="25" width="100" height="80" rx="8" fill="none" stroke="#ff6b1a" strokeWidth="1.5" opacity="0.2" />
                <circle cx="280" cy="50" r="35" fill="none" stroke="#ff6b1a" strokeWidth="1.5" opacity="0.2" />
                <circle cx="280" cy="50" r="18" fill="#ff6b1a" opacity="0.07" />
                <line x1="160" y1="65" x2="235" y2="50" stroke="#ff6b1a" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.25" />
                <line x1="160" y1="65" x2="235" y2="80" stroke="#ff6b1a" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.25" />
              </svg>
              <i className="ti ti-test-pipe ec-banner-icon"></i>
            </div>
            <div className="ec-body">
              <div className="ec-tag-row">
                <span className="ec-num">10</span>
                <span className="ec-badge o">Dental · Oral</span>
              </div>
              <div className="ec-title">ISO 7405:2025 Compliance</div>
              <div className="ec-desc">
                Expert support for ISO 7405 compliance of dental materials and devices. Biological evaluation, toxicological risk assessment, and regulatory documentation. Helping manufacturers meet ISO 7405, ISO 10993, and global regulatory requirements.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

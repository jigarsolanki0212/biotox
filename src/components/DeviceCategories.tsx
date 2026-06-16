export const DeviceCategories = () => {
  return (
    <section id="devices">
      <div className="container">
        <div className="sec-label reveal">Device Categories We Support</div>
        <div className="sec-title reveal">Medical Device Types <em>We Cover</em></div>
        <div className="sec-sub reveal">
          Biocompatibility and regulatory compliance support across all major medical device categories — from Class I to Class III.
        </div>
        <div className="dev-grid">
          
          {/* Card 1 */}
          <div className="dev-card reveal d1">
            <div className="dev-banner b">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle cx="160" cy="50" r="55" fill="#1a6aff" opacity="0.07" />
                <circle cx="30" cy="20" r="30" fill="#1a6aff" opacity="0.05" />
              </svg>
              <i className="ti ti-bone" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--blue)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Orthopaedic Implants</div>
              <div className="dev-desc">Bone, joint, spinal and fixation implant biocompatibility and regulatory compliance.</div>
              <div className="dev-pill b">Class II · III</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="dev-card reveal d2">
            <div className="dev-banner o">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle cx="150" cy="50" r="50" fill="#ff6b1a" opacity="0.08" />
                <path d="M40,50 Q60,30 80,50 Q100,70 120,50" fill="none" stroke="#ff6b1a" strokeWidth="2" opacity="0.2" />
              </svg>
              <i className="ti ti-heart-rate-monitor" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--orange)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Cardiovascular Devices</div>
              <div className="dev-desc">Stents, catheters, valves and critical cardiac device safety evaluation.</div>
              <div className="dev-pill o">Class III</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="dev-card reveal d3">
            <div className="dev-banner b">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <rect x="120" y="10" width="70" height="80" rx="35" fill="#1a6aff" opacity="0.06" />
                <circle cx="50" cy="50" r="25" fill="#1a6aff" opacity="0.07" />
              </svg>
              <i className="ti ti-device-watch" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--blue)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Wearable & Homecare</div>
              <div className="dev-desc">Continuous-contact wearables and home monitoring device compliance.</div>
              <div className="dev-pill b">Class I · II</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="dev-card reveal d4">
            <div className="dev-banner o">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle cx="100" cy="50" r="45" fill="#ff6b1a" opacity="0.06" />
                <line x1="60" y1="30" x2="140" y2="70" stroke="#ff6b1a" strokeWidth="1.5" opacity="0.15" />
                <line x1="60" y1="70" x2="140" y2="30" stroke="#ff6b1a" strokeWidth="1.5" opacity="0.15" />
              </svg>
              <i className="ti ti-test-pipe" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--orange)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Diagnostic & IVD</div>
              <div className="dev-desc">In-vitro diagnostic kits, reagents and diagnostic instrument evaluation.</div>
              <div className="dev-pill o">IVD · Class II</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="dev-card reveal d1">
            <div className="dev-banner b">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="100,10 170,90 30,90" fill="#1a6aff" opacity="0.06" />
                <circle cx="100" cy="60" r="20" fill="#1a6aff" opacity="0.06" />
              </svg>
              <i className="ti ti-tooth" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--blue)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Dental Devices</div>
              <div className="dev-desc">Implants, restorative materials and orthodontic device biocompatibility.</div>
              <div className="dev-pill b">Class II · III</div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="dev-card reveal d2">
            <div className="dev-banner o">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <rect x="20" y="20" width="160" height="60" rx="30" fill="#ff6b1a" opacity="0.06" />
                <line x1="40" y1="50" x2="160" y2="50" stroke="#ff6b1a" strokeWidth="2" opacity="0.12" />
              </svg>
              <i className="ti ti-bandage" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--orange)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Wound Care & Dressings</div>
              <div className="dev-desc">Biocompatibility assessment for wound management and dressing products.</div>
              <div className="dev-pill o">Class I · II</div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="dev-card reveal d3">
            <div className="dev-banner b">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <line x1="100" y1="5" x2="100" y2="95" stroke="#1a6aff" strokeWidth="3" opacity="0.1" strokeLinecap="round" />
                <ellipse cx="100" cy="50" rx="40" ry="12" fill="#1a6aff" opacity="0.06" />
              </svg>
              <i className="ti ti-needle" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--blue)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Catheters & Tubing</div>
              <div className="dev-desc">Cannulas, infusion sets, drainage tubes and fluid delivery system compliance.</div>
              <div className="dev-pill b">Class II · III</div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="dev-card reveal d4">
            <div className="dev-banner o">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <rect x="30" y="30" width="55" height="55" rx="6" fill="none" stroke="#ff6b1a" strokeWidth="1.5" opacity="0.18" />
                <rect x="115" y="15" width="55" height="55" rx="6" fill="#ff6b1a" opacity="0.06" />
                <line x1="85" y1="57" x2="115" y2="45" stroke="#ff6b1a" strokeWidth="1.5" opacity="0.2" />
              </svg>
              <i className="ti ti-tools" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--orange)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Surgical Instruments</div>
              <div className="dev-desc">Reusable and single-use surgical device regulatory compliance support.</div>
              <div className="dev-pill o">Class I · II</div>
            </div>
          </div>

          {/* Card 9 */}
          <div className="dev-card reveal d1">
            <div className="dev-banner b">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
                <path d="M60,80 Q80,40 100,80 Q120,40 140,80" fill="none" stroke="#1a6aff" strokeWidth="2" opacity="0.15" />
                <circle cx="60" cy="35" r="12" fill="#1a6aff" opacity="0.1" />
                <circle cx="140" cy="35" r="12" fill="#1a6aff" opacity="0.1" />
              </svg>
              <i className="ti ti-wind" style={{ position: 'relative', zIndex: 2, fontSize: '40px', color: 'var(--blue)' }}></i>
            </div>
            <div className="dev-body">
              <div className="dev-title">Respiratory & Gas Pathway</div>
              <div className="dev-desc">Inhalation devices, nebulizers, oxygen delivery systems and respiratory tract biocompatibility assessment.</div>
              <div className="dev-pill b">Class I · II</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

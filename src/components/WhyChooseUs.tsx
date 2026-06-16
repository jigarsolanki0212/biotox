export const WhyChooseUs = () => {
  return (
    <section id="advantages">
      <div className="container">
        <div className="adv-layout">
          <div className="adv-left reveal">
            <div className="sec-label">Why Choose Us</div>
            <div className="sec-title">Key<br /><em>Advantages</em><br />of BIOTOX<br />by <span className="o">MedReg</span></div>
            <p className="sec-sub" style={{ marginBottom: 0, fontSize: '16px' }}>
              Expert guidance at every step — from first documentation to final submission worldwide.
            </p>
            <div className="adv-big">WHY<br />US</div>
          </div>
          <div className="adv-grid">
            
            {/* Card 1 */}
            <div className="adv-card reveal d1">
              <div className="adv-top-bar b"></div>
              <div className="adv-bg-num" style={{ color: 'var(--blue)' }}>01</div>
              <div className="adv-icon-w b"><i className="ti ti-certificate" aria-hidden="true"></i></div>
              <div className="adv-title">Internationally Certified Experts</div>
              <div className="adv-desc">DABT, ERT & UKRT certified toxicologists — recognised for regulatory submissions in USA, UK, EU and other global regulatory authorities.</div>
            </div>

            {/* Card 2 */}
            <div className="adv-card reveal d2">
              <div className="adv-top-bar o"></div>
              <div className="adv-bg-num" style={{ color: 'var(--orange)' }}>02</div>
              <div className="adv-icon-w o"><i className="ti ti-clock" aria-hidden="true"></i></div>
              <div className="adv-title">Faster Regulatory Approvals</div>
              <div className="adv-desc">Structured, audit-ready documentation significantly reduces regulatory queries and compresses your time to market across all major jurisdictions.</div>
            </div>

            {/* Card 3 */}
            <div className="adv-card reveal d3">
              <div className="adv-top-bar b"></div>
              <div className="adv-bg-num" style={{ color: 'var(--blue)' }}>03</div>
              <div className="adv-icon-w b"><i className="ti ti-coin" aria-hidden="true"></i></div>
              <div className="adv-title">Minimises Testing Cost</div>
              <div className="adv-desc">Risk-based test waiver justifications eliminate unnecessary biological testing — saving significant budget without compromising scientific or regulatory compliance.</div>
            </div>

            {/* Card 4 */}
            <div className="adv-card reveal d4">
              <div className="adv-top-bar o"></div>
              <div className="adv-bg-num" style={{ color: 'var(--orange)' }}>04</div>
              <div className="adv-icon-w o"><i className="ti ti-world" aria-hidden="true"></i></div>
              <div className="adv-title">Multi-Market Compliance</div>
              <div className="adv-desc">EU MDR, US FDA, CDSCO, Gulf & ASEAN — one expert partner covering all your target regulatory markets with a single cohesive documentation strategy.</div>
            </div>

            {/* Card 5 */}
            <div className="adv-card reveal d1">
              <div className="adv-top-bar b"></div>
              <div className="adv-bg-num" style={{ color: 'var(--blue)' }}>05</div>
              <div className="adv-icon-w b"><i className="ti ti-device-analytics" aria-hidden="true"></i></div>
              <div className="adv-title">All Device Risk Classes</div>
              <div className="adv-desc">Full biocompatibility support for Class I, II, and III medical devices across all contact types, exposure durations, and clinical applications.</div>
            </div>

            {/* Card 6 */}
            <div className="adv-card reveal d2">
              <div className="adv-top-bar o"></div>
              <div className="adv-bg-num" style={{ color: 'var(--orange)' }}>06</div>
              <div className="adv-icon-w o"><i className="ti ti-users" aria-hidden="true"></i></div>
              <div className="adv-title">Large Expert Team</div>
              <div className="adv-desc">A multidisciplinary team delivering fast, reliable, and scalable toxicology and regulatory compliance services with the capacity to support global manufacturers.</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

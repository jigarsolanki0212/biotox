export const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-dots"></div>
      <div className="hero-blob1"></div>
      <div className="hero-blob2"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow-row">
            <div className="eyebrow-pill">ISO 10993 · FDA · EU MDR · CDSCO</div>
          </div>
          <h1 className="hero-title">
            Expert<br />
            <span className="blue">Toxicology.</span><br />
            <span className="orange">Ensuring Safety.</span><br />
            Enabling Compliance.
          </h1>
          <p className="hero-sub">
            Smarter toxicology for better regulatory decisions — delivering comprehensive biological safety evaluation for medical devices worldwide, backed by 20+ years of expertise, global recognition, and regulator-compliance solutions.
          </p>
          <div className="hero-tags">
            <div className="htag b">DABT · ERT · UKRT Certified toxicologist</div>
            <div className="htag o">ISO 10993-1:2025</div>
            <div className="htag b">FDA · OECD GLP</div>
            <div className="htag o">EU MDR · NABL</div>
            <div className="htag b">20+ Years Expertise</div>
            <div className="htag o">ISO 18562-1:2024</div>
            <div className="htag b">ISO 7405:2025</div>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <div className="hstat-n">20+</div>
              <div className="hstat-l">Years of Expertise</div>
            </div>
            <div className="hstat">
              <div className="hstat-n">DABT</div>
              <div className="hstat-l">Certified Toxicologist</div>
            </div>
            <div className="hstat">
              <div className="hstat-n">Class I–III</div>
              <div className="hstat-l">All Device Types</div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn-blue">Get in Touch</a>
            <a href="#process" className="btn-orange">Our Process →</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hv-ring1"></div>
            <div className="hv-ring2"></div>
            <div className="hv-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '5px' }}>
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
                <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2" fill="#fff" />
              </svg>
              <div className="hvc-label">BIOTOX<br />by MedReg</div>
            </div>
            <div className="orbit-node" style={{ top: '12px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="on-chip b"><i className="ti ti-shield-check"></i></div>
              <div className="on-lbl">Biocompatibility</div>
            </div>
            <div className="orbit-node" style={{ top: '50%', left: '4px', transform: 'translateY(-50%)' }}>
              <div className="on-chip o"><i className="ti ti-file-text"></i></div>
              <div className="on-lbl">BEP / BER</div>
            </div>
            <div className="orbit-node" style={{ top: '50%', right: '4px', transform: 'translateY(-50%)' }}>
              <div className="on-chip b"><i className="ti ti-chart-bar"></i></div>
              <div className="on-lbl">Risk Assessment</div>
            </div>
            <div className="orbit-node" style={{ bottom: '22px', left: '22px' }}>
              <div className="on-chip o"><i className="ti ti-microscope"></i></div>
              <div className="on-lbl">In-silico</div>
            </div>
            <div className="orbit-node" style={{ bottom: '22px', right: '22px' }}>
              <div className="on-chip b"><i className="ti ti-dna"></i></div>
              <div className="on-lbl">QSAR · PDE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

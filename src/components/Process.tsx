export const Process = () => {
  return (
    <section id="process">
      <div className="container">
        <div className="sec-label reveal" style={{ justifyContent: 'center', marginBottom: '10px' }}>Our Process</div>
        <div className="sec-title reveal" style={{ textAlign: 'center' }}>BEP + BER <em>Solutions</em> for Medical Devices</div>
        <p className="sec-sub reveal" style={{ textAlign: 'center', margin: '14px auto 48px' }}>
          End-to-end biological safety compliance as per ISO 10993 & global regulations — from planning to final submission.
        </p>
        <div className="process-cols">
          
          {/* BEP Plan column */}
          <div className="pc reveal d1">
            <div className="pc-head b">
              <div className="pc-head-icon"><i className="ti ti-map" aria-hidden="true"></i></div>
              <div>
                <div className="pc-label">Biological Evaluation Plan</div>
                <div className="pc-title">BEP — Your Roadmap for Biological Safety</div>
                <div className="pc-sub">A complete biocompatibility strategy defining materials, device categorisation, and required testing per ISO 10993-1:2025.</div>
              </div>
            </div>
            <div className="pc-body">
              <div className="step-row">
                <div className="step-badge b">01</div>
                <div>
                  <div className="step-t">Device Description & Clinical Use Analysis</div>
                  <div className="step-d">Characterisation of intended use, patient contact, exposure duration and device risk class.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge b">02</div>
                <div>
                  <div className="step-t">Material & Chemical Composition Review</div>
                  <div className="step-d">Review of all materials, coatings, adhesives and processing aids in patient contact zones.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge b">03</div>
                <div>
                  <div className="step-t">ISO 10993-1:2025 Endpoint Mapping</div>
                  <div className="step-d">Mapping of all required biological endpoints per the latest ISO 10993-1:2025 framework.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge b">04</div>
                <div>
                  <div className="step-t">Risk-Based Worst-Case Sample Selection</div>
                  <div className="step-d">Identification of worst-case materials and samples for targeted, efficient biological testing.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge b">05</div>
                <div>
                  <div className="step-t">Biological Test Strategy & Waiver Justifications</div>
                  <div className="step-d">Science-backed test waivers to reduce testing cost while maintaining full regulatory compliance.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge b">06</div>
                <div>
                  <div className="step-t">Gap Analysis of Available Data</div>
                  <div className="step-d">Systematic review of existing literature, manufacturer data, and historical safety records.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge b">07</div>
                <div>
                  <div className="step-t">Risk-Based Testing Recommendations</div>
                  <div className="step-d">Final prioritised testing plan with clear rationale and full regulatory alignment strategy.</div>
                </div>
              </div>
            </div>
            <div className="outcome-pill b">
              <i className="ti ti-award op-icon b" aria-hidden="true"></i>
              <div>
                <div className="op-label b">Key Outcome</div>
                <div className="op-text">A complete, audit-ready biological evaluation strategy that reduces testing costs and accelerates your path to regulatory compliance.</div>
              </div>
            </div>
          </div>

          {/* BER Report column */}
          <div className="pc reveal d2">
            <div className="pc-head o">
              <div className="pc-head-icon"><i className="ti ti-file-certificate" aria-hidden="true"></i></div>
              <div>
                <div className="pc-label">Biological Evaluation Report</div>
                <div className="pc-title">BER — Regulator-Ready Biological Safety</div>
                <div className="pc-sub">The final biological safety assessment submitted to regulatory bodies after characterisation and testing is complete.</div>
              </div>
            </div>
            <div className="pc-body">
              <div className="step-row">
                <div className="step-badge o">01</div>
                <div>
                  <div className="step-t">Material / Chemical Characterisation Interpretation</div>
                  <div className="step-d">Interpretation of E&L data and chemical characterisation results from accredited laboratories.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge o">02</div>
                <div>
                  <div className="step-t">Toxicological Risk Assessment (TRA)</div>
                  <div className="step-d">Full quantitative TRA with exposure estimation, toxicological thresholds and safety margins.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge o">03</div>
                <div>
                  <div className="step-t">Biological Testing Results Evaluation</div>
                  <div className="step-d">Critical scientific review and interpretation of all biological test results from accredited labs.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge o">04</div>
                <div>
                  <div className="step-t">Justification for Borderline / Failed Tests</div>
                  <div className="step-d">Expert scientific rationale and contextual justification for out-of-specification results.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge o">05</div>
                <div>
                  <div className="step-t">Mitigations for Residual Risks</div>
                  <div className="step-d">Risk mitigation strategies, labelling recommendations and post-market surveillance inputs.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge o">06</div>
                <div>
                  <div className="step-t">Literature Review & Clinical Background</div>
                  <div className="step-d">Comprehensive scientific literature review supporting the biological safety conclusion.</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-badge o">07</div>
                <div>
                  <div className="step-t">Final Safety Conclusion for Intended Use</div>
                  <div className="step-d">Definitive biological safety conclusion structured for direct submission to FDA, EU MDR or CDSCO.</div>
                </div>
              </div>
            </div>
            <div className="outcome-pill o">
              <i className="ti ti-certificate op-icon o" aria-hidden="true"></i>
              <div>
                <div className="op-label o">Deliverable</div>
                <div className="op-text">Complete, regulator-ready BERs that satisfy notified body and worldwide regulatory requirements, ensuring a smooth submission process from the outset.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

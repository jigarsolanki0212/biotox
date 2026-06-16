export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-bg-dots"></div>
      <div className="contact-blob1"></div>
      <div className="contact-blob2"></div>
      <div className="contact-inner">
        <div className="contact-eyebrow reveal">Get In Touch</div>
        <h2 className="contact-title reveal">Do You Have<br />an <em>Enquiry?</em></h2>
        <p className="contact-sub reveal">
          We are here to support your safety, compliance & success.<br />
          Reach out to our certified toxicology experts today.
        </p>
        <div className="contact-cards reveal">
          <a href="mailto:enquiry@medregbiotox.com" className="cc">
            <div className="cc-icon b"><i className="ti ti-mail" aria-hidden="true"></i></div>
            <div>
              <div className="cc-label">Email Us</div>
              <div className="cc-val">enquiry@medregbiotox.com</div>
            </div>
          </a>
          <a href="tel:+918866461989" className="cc">
            <div className="cc-icon o"><i className="ti ti-phone" aria-hidden="true"></i></div>
            <div>
              <div className="cc-label">Call Us</div>
              <div className="cc-val">+91 88664 61989</div>
            </div>
          </a>
          <a href="tel:+919409406215" className="cc">
            <div className="cc-icon o"><i className="ti ti-phone" aria-hidden="true"></i></div>
            <div>
              <div className="cc-label">Call Us</div>
              <div className="cc-val">+91 94094 06215</div>
            </div>
          </a>
          <a href="https://www.medreg.in" className="cc" target="_blank" rel="noopener noreferrer">
            <div className="cc-icon b"><i className="ti ti-world" aria-hidden="true"></i></div>
            <div>
              <div className="cc-label">Website</div>
              <div className="cc-val">www.medreg.in</div>
            </div>
          </a>
        </div>
        <div className="final-strip reveal">
          <div className="fs-top">Let's Decode The Regulations Together</div>
          <div className="fs-bot">Expert Toxicology Solutions for Safe · Compliant · Successful Products</div>
        </div>
      </div>
    </section>
  );
};

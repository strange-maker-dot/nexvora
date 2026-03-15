import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  Services: ['Web Applications', 'Dashboards', 'Automation', 'College Systems', 'Business Portals'],
  Company: ['About Us', 'Our Process', 'Case Studies', 'Careers', 'Blog'],
  Support: ['Contact', 'FAQ', 'Pricing', 'Privacy Policy', 'Terms'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <a href="#" className="nav-logo" style={{ fontSize: 24 }}>
              Nex<span style={{ color: '#22D3EE', WebkitTextFillColor: '#22D3EE' }}>vora</span>
            </a>
            <p className="footer-brand-desc">
              A software micro-agency building custom digital tools
              for colleges and small businesses. We solve real problems
              with purposeful software.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="footer-title">{title}</div>
              <ul className="footer-links">
                {links.map(l => (
                  <li key={l}><a href="#contact">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Nexvora. All rights reserved.</p>
          <div className="footer-socials">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="social-btn" aria-label="Social">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

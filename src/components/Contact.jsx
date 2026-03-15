import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ─── HOW TO SET UP ───────────────────────────────────────────────
// 1. Go to https://docs.google.com/forms and create your form
// 2. Click Send → Embed ( </> icon ) → Copy the src URL from the iframe
// 3. Paste that URL below replacing YOUR_GOOGLE_FORM_EMBED_URL
// Responses appear in Google Forms under "Responses" tab (also links to Sheets)
// ─────────────────────────────────────────────────────────────────
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSegIq1T5s-IKH-yD6awSTez7NLIbiLNPavOH5OnqmSJIe6fng/viewform?embedded=true';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something<br />
            <span className="gradient-text">That Actually Works</span>
          </h2>
          <p className="section-sub">
            Tell us about your problem. We'll respond with a clear plan for solving it — no sales pitch, no commitment required.
          </p>
        </motion.div>

        <div className="contact-inner">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gform-wrap">
              <iframe
                src={GOOGLE_FORM_URL}
                className="gform-iframe"
                title="Contact Form"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 700, color: '#F0F0F8', marginBottom: 12 }}>
              Why Work With Us?
            </h3>
            <p style={{ color: '#8B8BA7', fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
              We're a focused team that specializes in solving operational problems for
              colleges and small businesses. No bloated enterprise packages — just
              clean, purposeful software that solves your actual problem.
            </p>

            {[
              { icon: '⚡', title: 'Fast Turnaround', desc: 'MVPs in 2–4 weeks. Full projects in 6–12 weeks.' },
              { icon: '📱', title: 'Mobile-First Always', desc: 'Every tool we build works perfectly on phone.' },
              { icon: '🎯', title: 'Problem-First Thinking', desc: 'We understand your workflow before writing a line of code.' },
              { icon: '🔧', title: 'Transparent Process', desc: 'Regular updates, clear pricing, no hidden costs.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                style={{
                  display: 'flex', gap: 16, marginBottom: 20,
                  padding: 18,
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ borderColor: 'rgba(99,102,241,0.25)', backgroundColor: 'rgba(99,102,241,0.04)' }}
              >
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, color: '#F0F0F8', fontSize: 14, marginBottom: 3 }}>{item.title}</div>
                  <div style={{ color: '#8B8BA7', fontSize: 13 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    text: "Nexvora built our student fee management portal in 3 weeks. It replaced our entire Excel-based system and the staff couldn't be happier.",
    name: 'Dr. Priya Menon',
    role: 'Principal, Apex College',
    initials: 'PM',
    color: '#6366F1',
  },
  {
    text: "Our inventory tracking used to take half a day every week. Now it's automatic. The dashboard is beautiful and easy to use on mobile.",
    name: 'Ravi Kumar',
    role: 'Owner, Kumar Electronics',
    initials: 'RK',
    color: '#8B5CF6',
  },
  {
    text: "The attendance automation they built saves our admin team 10 hours weekly. Parents get SMS updates instantly — no more manual calls.",
    name: 'Farida Hussain',
    role: 'Admin Director, Bright Future School',
    initials: 'FH',
    color: '#22D3EE',
  },
  {
    text: "We needed a customer portal that was simple and robust. Nexvora delivered beyond expectations, with ongoing support that actually responds.",
    name: 'Sanjay Pillai',
    role: 'Founder, ClearCraft Interiors',
    initials: 'SP',
    color: '#EC4899',
  },
  {
    text: "Our data used to live in 4 different spreadsheets. Now we have one dashboard that shows everything in real time. Absolute game changer.",
    name: 'Aruna Sharma',
    role: 'Operations Head, Sunrise Logistics',
    initials: 'AS',
    color: '#F59E0B',
  },
  {
    text: "From first call to launch in under a month. The team understood exactly what our business needed without lengthy explanations. Highly recommend.",
    name: 'Thomas George',
    role: 'CEO, Agile Trade Co.',
    initials: 'TG',
    color: '#10B981',
  },
];

// Duplicate for infinite loop
const allTestis = [...testimonials, ...testimonials];

function TestiCard({ t }) {
  return (
    <div className="testi-card">
      <div className="testi-stars">
        {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
      </div>
      <p className="testi-text">"{t.text}"</p>
      <div className="testi-author">
        <div className="testi-avatar" style={{ background: t.color }}>
          {t.initials}
        </div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 18px' }}>Client Stories</div>
          <h2 className="section-title">Results That Speak</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Don't just take our word for it. Hear from the colleges and businesses we've helped.
          </p>
        </motion.div>
      </div>

      <div className="testimonials-track" style={{ marginTop: 56 }}>
        <div className="marquee-inner">
          {allTestis.map((t, i) => (
            <TestiCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

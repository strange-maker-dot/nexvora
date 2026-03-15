import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, LayoutDashboard, Zap, GraduationCap, Store, Headphones } from 'lucide-react';

const services = [
  {
    icon: Globe,
    name: 'Web Applications',
    desc: 'Full-stack web apps built to handle your real workflows — from intake forms to internal portals, built fast and built right.',
    tags: ['React', 'Node.js', 'Databases'],
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.12)',
  },
  {
    icon: LayoutDashboard,
    name: 'Analytics Dashboards',
    desc: 'Turn your messy data into clear, actionable dashboards. See everything in one place, in real time — no more spreadsheet chaos.',
    tags: ['Data Viz', 'Real-time', 'Reports'],
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Zap,
    name: 'Automation Tools',
    desc: 'Eliminate repetitive manual work. We automate scheduling, notifications, reporting, and data entry — saving you hours every week.',
    tags: ['Workflows', 'Scheduling', 'APIs'],
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.12)',
  },
  {
    icon: GraduationCap,
    name: 'College Systems',
    desc: 'Student management, attendance tracking, fee portals, exam results, and internal communication tools built for educational institutions.',
    tags: ['Student Mgmt', 'Fees', 'Attendance'],
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.12)',
  },
  {
    icon: Store,
    name: 'Business Portals',
    desc: 'Customer portals, inventory systems, order management, and CRM tools tailored to small businesses that are tired of generic software.',
    tags: ['CRM', 'Inventory', 'Orders'],
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
  },
  {
    icon: Headphones,
    name: 'Ongoing Support',
    desc: 'We don\'t disappear after launch. Hosting setup, bug fixes, feature updates, and tech guidance — your development partner for the long run.',
    tags: ['Hosting', 'Maintenance', 'Updates'],
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="service-icon-wrap"
        style={{ background: service.bg }}
      >
        <Icon size={22} color={service.color} />
      </div>
      <div className="service-name">{service.name}</div>
      <p className="service-desc">{service.desc}</p>
      <div className="service-tag">
        {service.tags.map(t => <span key={t}>{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="services" id="services">
      <div className="container">
        <motion.div
          ref={ref}
          className="services-head"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">What We Build</div>
          <h2 className="section-title">
            Solving Real Problems With<br />
            <span className="gradient-text">Purposeful Software</span>
          </h2>
          <p className="section-sub">
            Every tool we build starts with a specific problem. We design lean, powerful solutions
            that fit exactly what colleges and small businesses actually need.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

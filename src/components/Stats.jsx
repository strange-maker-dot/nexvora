import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { val: 50, suffix: '+', label: 'Projects Delivered' },
  { val: 98, suffix: '%', label: 'Client Satisfaction' },
  { val: 40, suffix: 'h+', label: 'Hours Saved Weekly (avg.)' },
  { val: 100, suffix: '%', label: 'Mobile-First Builds' },
];

function CountUp({ val, suffix }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, val, { duration: 2, ease: 'easeOut' });
    }
  }, [inView, val, count]);

  return (
    <div ref={ref} className="stat-val">
      <motion.span>{rounded}</motion.span>{suffix}
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="stats" id="stats">
      <div className="container">
        <motion.div
          ref={ref}
          className="stats-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <CountUp val={s.val} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

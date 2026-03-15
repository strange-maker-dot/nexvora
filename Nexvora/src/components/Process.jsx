import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Pencil, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    desc: 'We listen first. You explain the problem, we ask smart questions, and together we define exactly what needs to be built.',
  },
  {
    num: '02',
    icon: Pencil,
    title: 'Design & Plan',
    desc: 'We map your user flows, design wireframes, and send you a clear project plan — no surprises, no scope creep.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Build & Review',
    desc: 'We develop in short sprints and share progress regularly. You see the product taking shape and give feedback in real time.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Launch & Support',
    desc: 'We handle deployment, testing, and training. Then we stay close — monitoring, fixing, and improving as you grow.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="process" id="process">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ margin: '0 auto 18px' }}>How We Work</div>
          <h2 className="section-title">From Idea to Live Product</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            A transparent, collaborative process that keeps you informed and in control at every step.
          </p>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <motion.div
                  className="step-num"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {step.num}
                </motion.div>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const phrases = [
  'Web Applications',
  'Smart Dashboards',
  'Automation Tools',
  'College Systems',
  'Business Portals',
];

const chartHeights = [35, 55, 45, 75, 60, 85, 70, 90, 65, 80];

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      // draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    let timeout;
    if (!deleting && text === phrase) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx(i => (i + 1) % phrases.length);
    } else if (deleting) {
      timeout = setTimeout(() => setText(t => t.slice(0, -1)), 42);
    } else {
      timeout = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 75);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span className="hero-typewriter">
      {text}<span className="cursor">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <ParticleCanvas />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-glow-3" />

      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <span className="dot" />
            Software Micro-Agency · Est. 2025
          </div>
          <h1 className="hero-title">
            We Build <br />
            <Typewriter />
          </h1>
          <p className="hero-desc">
            Custom digital tools for colleges &amp; small businesses.
            We solve real operational problems through web apps, dashboards,
            and automation — so you can focus on what matters.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-ghost">
              <Play size={14} /> See Our Work
            </a>
          </div>

          <div className="hero-stats">
            {[
              { val: '50+', label: 'Projects Delivered' },
              { val: '98%', label: 'Client Satisfaction' },
              { val: '2×', label: 'Faster Workflows' },
            ].map(s => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-val">{s.val}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-card-mockup">
            <div className="mockup-topbar">
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-dot" />
            </div>
            <div className="mockup-line medium" />
            <div className="mockup-line short" />
            <div className="mockup-chart">
              {chartHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="chart-bar"
                  style={{ height: `${h}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
                />
              ))}
            </div>
            <div className="mockup-stats">
              <div className="mockup-stat">
                <div className="mockup-stat-val">↑ 234%</div>
                <div className="mockup-stat-label">Efficiency</div>
              </div>
              <div className="mockup-stat">
                <div className="mockup-stat-val">12h</div>
                <div className="mockup-stat-label">Saved / Week</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

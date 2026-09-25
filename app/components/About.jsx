'use client';
import { motion } from 'framer-motion';
import { IconLinkedIn, IconGitHub, IconFileText, IconLeetCode } from '../lib/icons';
import { stagger, fadeUp } from '../lib/animations';

const connects = [
  { icon: <IconLinkedIn />, name: 'LinkedIn', handle: 'deepanshu-singla', href: 'https://www.linkedin.com/in/deepanshu-singla-519057335/' },
  { icon: <IconGitHub />, name: 'GitHub', handle: 'deepanshusingla076', href: 'https://github.com/deepanshusingla076' },
  { icon: <IconLeetCode />, name: 'LeetCode', handle: 'd_singla', href: 'https://leetcode.com/u/d_singla/' },
  { icon: <IconFileText />, name: 'Resume', handle: 'View / Download', href: '/resume/Deepanshu_Singla_Resume.pdf' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <motion.div
            className="about-bio"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp}>
              I&apos;m <strong>Deepanshu Singla</strong>, a fourth-year Computer Science student at Chitkara University (CGPA: 9.13/10), focused on building scalable, production-grade applications.
            </motion.p>
            <motion.p variants={fadeUp}>
              I specialize in backend and full-stack development, designing real-time and data-driven systems using Node.js, Spring Boot, FastAPI, Redis, and Socket.io, with a strong emphasis on performance, reliability, and clean architecture.
            </motion.p>
            <motion.p variants={fadeUp}>
              I also explore AI/ML and integrate intelligent capabilities into applications. With a solid foundation in fundamentals, I aim to build robust, maintainable, and production-ready systems.
            </motion.p>
            <motion.p variants={fadeUp}>
              I actively contribute to open source, participate in hackathons, and continuously strengthen my problem-solving skills on GeeksforGeeks and LeetCode.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="connect-label">Connect</div>
            <div className="connect-grid">
              {connects.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-card"
                >
                  <div className="connect-icon-box">{c.icon}</div>
                  <div className="connect-info">
                    <div className="connect-name">{c.name}</div>
                    <div className="connect-handle">{c.handle}</div>
                  </div>
                  <span className="connect-arrow">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const courses = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management",
  "Computer Networks",
  "Object-Oriented Programming",
  "System Design",
];

const CGPA = 9.13;
const CIRCUMFERENCE = 2 * Math.PI * 24; 

export default function Education() {
  const cgpaPercent = (CGPA / 10) * 100;
  const semesterProgress = (7 / 8) * 100;

  return (
    <section id="education" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>

        <motion.div
          className="edu-card-v2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="edu-accent-bar" />

          <div className="edu-content">
            {/* ─── Left: University Info ─── */}
            <div className="edu-left">
              <div className="edu-uni-logo">CU</div>

              <div className="edu-uni-info">
                <span className="edu-badge-pill">B.E. · Computer Science &amp; Engineering</span>
                <h3 className="edu-degree-title">Chitkara University</h3>
                <p className="edu-uni-location">Punjab, India</p>
              </div>

              <div className="edu-timeline">
                <div className="edu-timeline-header">
                  <span className="edu-timeline-label">Academic Progress</span>
                  <span className="edu-timeline-value">Sem 7 / 8</span>
                </div>
                <div className="edu-progress-bar">
                  <div
                    className="edu-progress-fill"
                    style={{ width: `${semesterProgress}%` }}
                  />
                </div>
                <div className="edu-timeline-years">
                  <span>2023</span>
                  <span>2025 ↑ Now</span>
                  <span>2027</span>
                </div>
              </div>
            </div>

            {/* ─── Right: Stats + Courses ─── */}
            <div className="edu-right">
              <div className="edu-stats-grid">
                {/* CGPA ring */}
                <div className="edu-stat-box edu-stat-main">
                  <div className="edu-stat-ring">
                    <svg viewBox="0 0 60 60" className="edu-ring-svg">
                      <circle cx="30" cy="30" r="24" className="edu-ring-bg" />
                      <circle
                        cx="30" cy="30" r="24"
                        className="edu-ring-fill"
                        style={{
                          strokeDasharray: `${(cgpaPercent / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`,
                        }}
                      />
                    </svg>
                    <span className="edu-ring-label">{CGPA}</span>
                  </div>
                  <span className="edu-stat-name">CGPA / 10</span>
                </div>

                {/* Semester */}
                <div className="edu-stat-box">
                  <span className="edu-stat-num">
                    7<span className="edu-stat-small">th</span>
                  </span>
                  <span className="edu-stat-name">Semester</span>
                </div>

                {/* Status */}
                <div className="edu-stat-box">
                  <span className="edu-stat-num edu-active-dot">Active</span>
                  <span className="edu-stat-name">Status</span>
                </div>
              </div>

              <div className="edu-courses-section">
                <p className="edu-courses-title">Key Coursework</p>
                <div className="edu-courses-grid">
                  {courses.map((c) => (
                    <span key={c} className="edu-course-chip">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { SKILLS } from '../lib/data';
import { stagger, fadeUp } from '../lib/animations';
import {
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiSpringboot, SiFastapi, SiSocketdotio,
  SiMongodb, SiMysql, SiFirebase, SiRedis,
  SiAmazonaws, SiDocker, SiGit, SiGithub, SiLinux, SiPostman,
  SiVisualstudiocode,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const TECH_ICONS = {
  'Java': FaJava,
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Redux Toolkit': SiRedux,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Spring Boot': SiSpringboot,
  'FastAPI': SiFastapi,
  'Socket.IO': SiSocketdotio,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'Firebase': SiFirebase,
  'Firebase Hosting': SiFirebase,
  'Redis': SiRedis,
  'AWS (EC2, S3, IAM)': SiAmazonaws,
  'Docker': SiDocker,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Linux': SiLinux,
  'Postman': SiPostman,
  'VS Code': SiVisualstudiocode,
};

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-num">05</span>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-line" />
        </div>

        <motion.div
          className="skills-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {Object.entries(SKILLS).map(([cat, items]) => (
            <motion.div key={cat} className="skill-cat" variants={fadeUp}>
              <div className="skill-cat-header">
                <div className="skill-cat-title">{cat}</div>
                <span className="skill-cat-count">{items.length}</span>
              </div>
              <div className="skill-tags">
                {items.map((item) => {
                  const Icon = TECH_ICONS[item];
                  // Assign a unique color for each tech
                  const TECH_COLORS = {
                    'Java': '#f89820',
                    'Python': '#3776ab',
                    'JavaScript': '#f7df1e',
                    'TypeScript': '#3178c6',
                    'React.js': '#61dafb',
                    'Next.js': '#000000',
                    'Tailwind CSS': '#38bdf8',
                    'Redux Toolkit': '#764abc',
                    'Node.js': '#339933',
                    'Express.js': '#000000',
                    'Spring Boot': '#6db33f',
                    'FastAPI': '#009688',
                    'Socket.IO': '#010101',
                    'MongoDB': '#47a248',
                    'MySQL': '#00758f',
                    'Firebase': '#ffcb2b',
                    'Firebase Hosting': '#ffcb2b',
                    'Redis': '#d82c20',
                    'AWS (EC2, S3, IAM)': '#ff9900',
                    'Docker': '#2496ed',
                    'Git': '#f05032',
                    'GitHub': '#181717',
                    'Linux': '#fcc624',
                    'Postman': '#ff6c37',
                    'VS Code': '#007acc',
                  };
                  return (
                    <span key={item} className="skill-tag">
                      {Icon && (
                        <span className="skill-tag-icon">
                          <Icon size={13} style={{ color: TECH_COLORS[item] || '#fff' }} />
                        </span>
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

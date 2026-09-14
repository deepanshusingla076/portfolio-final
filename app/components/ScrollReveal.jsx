'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function ScrollReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div
      ref={ref}
      className={`scroll-reveal${isInView ? ' scroll-reveal-visible' : ''}`}
    >
      {children}
    </div>
  );
}
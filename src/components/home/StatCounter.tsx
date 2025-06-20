import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatCounterProps {
  number: number;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animation variant
  const statVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const duration = 2000; // 2 seconds
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            setCount(Math.floor(progress * number));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [number, hasAnimated]);

  return (
    <motion.div 
      className="text-center"
      variants={statVariant}
      ref={countRef}
    >
      <div className="text-5xl font-bold text-accent-500 mb-2">{count.toLocaleString()}+</div>
      <div className="text-lg text-gray-100">{label}</div>
    </motion.div>
  );
};

export default StatCounter;
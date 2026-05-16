import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, delay = 0, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { 
        y: -15, 
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(124,58,237,0.3)'
      } : {}}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 15,
        delay: delay 
      }}
      className={cn(
        'glass rounded-3xl p-8 transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

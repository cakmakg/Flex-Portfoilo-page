import { motion, useReducedMotion } from 'framer-motion';

// Standart giriş animasyonu sarmalayıcı. Her bölümde elle yazılan
// motion.div initial/whileInView bloklarının yerine geçer ve
// prefers-reduced-motion'da kaydırma/öteleme yerine sadece fade uygular.
export const Reveal = ({ children, delay = 0, y = 30, once = true, style }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

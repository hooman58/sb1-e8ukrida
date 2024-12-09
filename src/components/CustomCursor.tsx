import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

export const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 text-white/20"
      animate={{ x, y }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      <Sparkles className="w-6 h-6" />
    </motion.div>
  );
};
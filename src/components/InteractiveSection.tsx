import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import { AnimatedText } from './AnimatedText';
import type { Section } from '../types';

interface InteractiveSectionProps {
  section: Section;
}

export const InteractiveSection = ({ section }: InteractiveSectionProps) => {
  const { playSound } = useSound();

  return (
    <motion.div
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onHoverStart={() => playSound('hover')}
      onClick={() => playSound('click')}
    >
      {section.image && (
        <motion.img
          src={section.image}
          alt={section.title}
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      )}
      <div className="relative z-10 text-white p-8 max-w-4xl">
        <AnimatedText
          text={section.title}
          className="text-6xl font-bold mb-6 tracking-wider"
        />
        <AnimatedText
          text={section.content}
          className="text-xl opacity-80"
        />
      </div>
    </motion.div>
  );
};
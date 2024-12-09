import { motion } from 'framer-motion';

interface NavigationDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export const NavigationDots = ({ total, current, onChange }: NavigationDotsProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          className={`w-2 h-2 rounded-full ${
            index === current ? 'bg-white' : 'bg-white/30'
          }`}
          onClick={() => onChange(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
};
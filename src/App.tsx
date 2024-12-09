import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { sections } from './data/sections';
import { InteractiveSection } from './components/InteractiveSection';
import { CustomCursor } from './components/CustomCursor';
import { NavigationDots } from './components/NavigationDots';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % sections.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />

      <AnimatePresence mode="wait">
        <InteractiveSection
          key={sections[currentIndex].id}
          section={sections[currentIndex]}
        />
      </AnimatePresence>

      <NavigationDots
        total={sections.length}
        current={currentIndex}
        onChange={setCurrentIndex}
      />
    </div>
  );
}

export default App;
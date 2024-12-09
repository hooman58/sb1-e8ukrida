import { useCallback } from 'react';
import { Howl } from 'howler';

const sounds = {
  hover: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'] }),
  click: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'] }),
};

export const useSound = () => {
  const playSound = useCallback((type: keyof typeof sounds) => {
    sounds[type].play();
  }, []);

  return { playSound };
};
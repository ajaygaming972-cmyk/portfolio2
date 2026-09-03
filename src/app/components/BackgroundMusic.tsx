'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = 'auto';

    const playAudio = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay blocked — first user interaction will start it.
      }
    };

    // Try autoplay immediately
    playAudio();

    // If browser blocks autoplay, start audio on first user interaction
    const handleFirstInteraction = () => {
      playAudio();

      // Once started, no need to keep listening
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('pointerdown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('pointerdown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('pointerdown', handleFirstInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/Mahaan_60_to_95.mp3"
      loop
      preload="auto"
      aria-hidden="true"
    />
  );
}
'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    const startMusic = () => {
      if (!audio.paused) return;

      audio
        .play()
        .then(() => {
          window.removeEventListener('touchstart', startMusic);
          window.removeEventListener('click', startMusic);
        })
        .catch(() => {
          // Next interaction par dobara try karega
        });
    };

    // Mobile ke liye first real interaction
    window.addEventListener('touchstart', startMusic, {
      passive: true,
    });

    // Desktop fallback
    window.addEventListener('click', startMusic);

    return () => {
      window.removeEventListener('touchstart', startMusic);
      window.removeEventListener('click', startMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/Mahaan_60_to_95.mp3"
      preload="auto"
      loop
      playsInline
    />
  );
}
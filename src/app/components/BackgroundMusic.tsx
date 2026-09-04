'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;
    audio.preload = 'auto';

    const startMusic = async () => {
      if (audio.paused) {
        try {
          await audio.play();
          setStarted(true);

          document.removeEventListener('click', startMusic);
          document.removeEventListener('touchstart', startMusic);
          document.removeEventListener('pointerdown', startMusic);
          document.removeEventListener('keydown', startMusic);
        } catch {
          // Keep listeners active until a valid user interaction allows playback.
        }
      }
    };

    // Desktop browsers may allow this; mobile browsers usually require interaction.
    void startMusic();

    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic, { passive: true });
    document.addEventListener('pointerdown', startMusic);
    document.addEventListener('keydown', startMusic);

    return () => {
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
      document.removeEventListener('pointerdown', startMusic);
      document.removeEventListener('keydown', startMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/Mahaan_60_to_95.mp3"
      loop
      preload="auto"
      playsInline
      aria-hidden="true"
    />
  );
}

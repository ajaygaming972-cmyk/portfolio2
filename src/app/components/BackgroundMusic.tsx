'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = 'auto';

    const playAudio = () => {
      audio.play().catch(() => {
        // Browsers may block audible autoplay until the user interacts.
      });
    };

    playAudio();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/Mahaan_60_to_95.mp3"
      autoPlay
      loop
      preload="auto"
      aria-hidden="true"
    />
  );
}

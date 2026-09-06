'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const enableSound = async () => {
      try {
        audio.muted = false;
        await audio.play();

        document.removeEventListener('pointerdown', enableSound, true);
        document.removeEventListener('touchstart', enableSound, true);
        document.removeEventListener('click', enableSound, true);
        document.removeEventListener('keydown', enableSound, true);
      } catch (error) {
        console.log('Audio waiting for interaction');
      }
    };

    // Mobile browsers allow muted autoplay
    audio.play().catch(() => {});

    // Capture phase = website ke kisi button/link se event block nahi hoga
    document.addEventListener('pointerdown', enableSound, true);
    document.addEventListener('touchstart', enableSound, true);
    document.addEventListener('click', enableSound, true);
    document.addEventListener('keydown', enableSound, true);

    return () => {
      document.removeEventListener('pointerdown', enableSound, true);
      document.removeEventListener('touchstart', enableSound, true);
      document.removeEventListener('click', enableSound, true);
      document.removeEventListener('keydown', enableSound, true);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/Mahaan_60_to_95.mp3"
      autoPlay
      muted
      loop
      preload="auto"
      playsInline
    />
  );
}
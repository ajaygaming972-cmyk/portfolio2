'use client';

import { useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        audio.volume = 0.5;
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Music playback failed:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/Mahaan_60_to_95.mp3"
        loop
        preload="auto"
        playsInline
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        className="fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background/90 text-xl shadow-lg backdrop-blur-md"
      >
        {isPlaying ? '🔊' : '🎵'}
      </button>
    </>
  );
}
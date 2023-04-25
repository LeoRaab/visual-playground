import { useEffect, useRef } from 'react';
import { PositionalAudio as PositionalAudioComponent } from '@react-three/drei';
import { PositionalAudio } from 'three';
import useAudioStore from '../../stores/AudioStore';
import { SoundFile } from '../../type-definitions';
import useAudioAnalyser from '../../hooks/useAudioAnalyzer';
import useAudioFilters from '../../hooks/useAudioFilters';

const Sound = () => {
  const [isStarted, isPlaying, activeSound, setStarted, setPlaying] = useAudioStore((state) => [
    state.isStarted,
    state.isPlaying,
    state.activeSound,
    state.setStarted,
    state.setPlaying,
  ]);
  const audioRef = useRef<PositionalAudio | null>(null);
  const activeSoundRef = useRef<SoundFile | null>(null);

  useAudioAnalyser({ audio: audioRef.current });
  useAudioFilters({ audio: audioRef.current });

  useEffect(() => {
    if (!audioRef.current) return;

    if (activeSoundRef.current && activeSoundRef.current.title !== activeSound.title) {
      audioRef.current.stop();
    }

    if (isPlaying && !audioRef.current.isPlaying) {
      audioRef.current.play();
      setStarted(true);
      activeSoundRef.current = activeSound;
    }

    if (!isPlaying && isStarted) {
      audioRef.current.pause();
    }

    if (!isStarted && !isPlaying) {
      audioRef.current.stop();
    }
  }, [isStarted, isPlaying]);

  useEffect(() => {
    return () => {
      setStarted(false);
      setPlaying(false);
    };
  }, []);

  return (
    <>
      {(isStarted || isPlaying) && (
        <PositionalAudioComponent
          url={activeSound.url}
          distance={1}
          ref={audioRef}
          load={undefined}
        />
      )}
    </>
  );
};

export default Sound;

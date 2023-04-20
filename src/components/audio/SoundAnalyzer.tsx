import { useEffect, useRef } from 'react';
import { AudioAnalyser, PositionalAudio } from 'three';

type Props = {
  sound: PositionalAudio | null;
};

const SoundAnalyzer = ({ sound }: Props) => {
  const analyserRef = useRef<AudioAnalyser | null>(null);
  console.log(sound);
  useEffect(() => {
    if (analyserRef.current || !sound) return;

    analyserRef.current = new AudioAnalyser(sound, 128);
  }, []);

  console.log(analyserRef.current);

  return <></>;
};

export default SoundAnalyzer;

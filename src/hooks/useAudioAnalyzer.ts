import { useEffect, useRef } from 'react';
import { AudioAnalyser, PositionalAudio } from 'three';
import useCanvasStore from '../stores/CanvasStore';
import { useFrame } from '@react-three/fiber';
import { min, avg } from '../utils';
import useAudioStore from '../stores/AudioStore';

type Props = {
  audio: PositionalAudio | null;
};

const useAudioAnalyser = ({ audio }: Props) => {
  const analyserRef = useRef<AudioAnalyser | null>(null);
  const setFrequencyData = useAudioStore((state) => state.setFrequencyData);
  const setDynamicVec = useCanvasStore((state) => state.setDynamicVec);

  useEffect(() => {
    if (analyserRef.current || !audio) return;

    analyserRef.current = new AudioAnalyser(audio, 128);
  }, [audio]);

  useFrame(() => {
    if (!analyserRef.current) return;

    const frequencyDataArray = analyserRef.current.getFrequencyData();
    const kickArray = frequencyDataArray.slice(0, 10);
    setFrequencyData(frequencyDataArray);

    const freq = min(avg(kickArray) / 100, 0.7);
    setDynamicVec([freq, freq, freq]);
  });
};

export default useAudioAnalyser;

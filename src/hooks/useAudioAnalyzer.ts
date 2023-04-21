import { useEffect, useRef } from 'react';
import { AudioAnalyser, PositionalAudio } from 'three';
import useCanvasStore from '../stores/CanvasStore';
import { useFrame } from '@react-three/fiber';
import { min, avg } from '../utils';

type Props = {
  audio: PositionalAudio | null;
};

const useAudioAnalyser = ({ audio }: Props) => {
  const analyserRef = useRef<AudioAnalyser | null>(null);
  const setDynamicZoom = useCanvasStore((state) => state.setDynamicZoom);

  useEffect(() => {
    if (analyserRef.current || !audio) return;

    analyserRef.current = new AudioAnalyser(audio, 128);
  }, [audio]);

  useFrame(() => {
    if (!analyserRef.current) return;

    const frequencyDataArray = analyserRef.current.getFrequencyData();
    const kickArray = frequencyDataArray.slice(0, 10);
    const zoom = min(avg(kickArray) / 100, 0.7);
    setDynamicZoom([zoom, zoom, zoom]);
  });
};

export default useAudioAnalyser;

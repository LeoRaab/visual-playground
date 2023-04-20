import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { PositionalAudio as PositionalAudioComponent } from '@react-three/drei';
import { AudioAnalyser, Mesh, PositionalAudio, Vector3 } from 'three';
import SoundAnalyzer from './SoundAnalyzer';
import useAudioStore from '../../stores/AudioStore';
import useCanvasStore from '../../stores/CanvasStore';

const min = (calc: number, minValue: number) => {
  return calc < minValue ? minValue : calc;
};

const avg = (array: Uint8Array) => {
  return Math.floor(array.reduce((a, b) => a + b, 0) / array.length);
};

const Sound = () => {
  const { camera } = useThree();
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const setDynamicZoom = useCanvasStore((state) => state.setDynamicZoom);
  const audioRef = useRef<PositionalAudio | null>(null);
  const analyserRef = useRef<AudioAnalyser | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const vec = new Vector3();
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const [filters, setFilters] = useState<AudioNode[] | undefined>();

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.play();
    analyserRef.current = new AudioAnalyser(audioRef.current, 128);
    filterRef.current = new BiquadFilterNode(audioRef.current.context, {
      type: 'lowpass',
      frequency: 10000,
    });
    setFilters([filterRef.current]);
    //filterRef.current.frequency.value = 10;
  }, [isPlaying]);

  console.log(audioRef);

  useFrame(() => {
    if (!analyserRef.current) return;

    const frequencyDataArray = analyserRef.current.getFrequencyData();
    const kickArray = frequencyDataArray.slice(0, 10);
    const zoom = min(avg(kickArray) / 100, 0.7);
    //setDynamicZoom([zoomLevel, zoomLevel, zoomLevel]);
    meshRef.current?.scale.lerp(vec.set(zoom, zoom, zoom), 0.15);
  });

  return (
    <>
      {isPlaying && (
        <PositionalAudioComponent
          url="./middle-east.mp3"
          distance={1}
          ref={audioRef}
          load={undefined}
          filters={filters}
        />
      )}
      <mesh ref={meshRef} scale={1}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
};

export default Sound;

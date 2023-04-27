import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { useSpring } from '@react-spring/three';
import Wave from '../objects/Wave';
import useCanvasStore from '../../stores/CanvasStore';

const SoundWaveScene = () => {
  const [ticksSpring, clickSpring] = useCanvasStore((state) => [
    state.ticksSpring,
    state.clickSpring,
  ]);

  return (
    <>
      <Wave ticksSpring={ticksSpring} clickSpring={clickSpring} />
    </>
  );
};

export default SoundWaveScene;

// TODO: Refactor scenes and get common tasks
import { Canvas, useThree } from '@react-three/fiber';
import useAppStore from '../store';
import { Suspense, useEffect } from 'react';
import { PositionalAudio } from '@react-three/drei';
import { AudioListener, Audio, AudioLoader } from 'three';
import Sound from '../components/Sound';

const SceneContainer = () => {
  const activeScene = useAppStore((state) => state.activeScene);

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      {activeScene.component()}
      <Sound />
    </Canvas>
  );
};

export default SceneContainer;

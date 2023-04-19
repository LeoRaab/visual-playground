import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { getRandomIndex } from '../utils';
import useAppStore from '../store';
import BasicParticles from '../components/BasicParticles';
import { Canvas } from '@react-three/fiber';

const ParticleScene = () => {
  const isPlaying = useAppStore((state) => state.isPlaying);

  const colors = ['hotpink', 'aquamarine', 'orangered', 'indigo', 'gold', 'turquoise'];

  const [randomColor, setRandomColor] = useState<string>(colors[0]);

  const handleControlEnd = () => {
    setRandomColor((prevState) => {
      const currentIndex = colors.findIndex((color) => color === prevState);
      const randomIndex = getRandomIndex(currentIndex, 0, 5);

      return colors[randomIndex];
    });
  };

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <BasicParticles />
      <OrbitControls onEnd={handleControlEnd} autoRotate={isPlaying} />
    </>
  );
};

export default ParticleScene;

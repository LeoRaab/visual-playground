import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import Cube from '../components/Cube';
import { getRandomIndex } from '../utils';
import useAppStore from '../store';

const MeshScene = () => {
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
      <Cube color={randomColor} />
      <OrbitControls onEnd={handleControlEnd} autoRotate={isPlaying} />
    </>
  );
};

export default MeshScene;
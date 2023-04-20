import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { getRandomIndex } from '../../utils';
import BasicParticles from '../../components/objects/BasicParticles';
import useCanvasStore from '../../stores/CanvasStore';

const ParticleScene = () => {
  const isRotating = useCanvasStore((state) => state.isRotating);

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
      <OrbitControls onEnd={handleControlEnd} autoRotate={isRotating} />
    </>
  );
};

export default ParticleScene;
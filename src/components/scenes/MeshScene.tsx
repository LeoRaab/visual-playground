import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { getRandomIndex } from '../../utils';
import BaseMesh from '../../components/objects/BaseMesh';
import useCanvasStore from '../../stores/CanvasStore';

const MeshScene = () => {
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
      <pointLight position={[1, 80, 80]} />
      <BaseMesh mesh="sphere" size={[1, 64, 64]} color={randomColor} />
      <OrbitControls onEnd={handleControlEnd} autoRotate={isRotating} />
    </>
  );
};

export default MeshScene;

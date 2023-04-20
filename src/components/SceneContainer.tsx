import { OrbitControls } from '@react-three/drei';
import useCanvasStore from '../stores/CanvasStore';
import MeshScene from './scenes/MeshScene';
import ParticleScene from './scenes/ParticleScene';

const SceneContainer = () => {
  const [activeScene, isRotating, setRandomColor] = useCanvasStore((state) => [
    state.activeScene,
    state.isRotating,
    state.setRandomColor,
  ]);

  const handleControlEnd = () => {
    setRandomColor();
  };

  // TODO find better solution for handling dynamic scenes

  let scene;
  switch (activeScene.id) {
    case 0:
      scene = <MeshScene />;
      break;
    case 1:
      scene = <ParticleScene />;
      break;
    default:
      scene = <MeshScene />;
  }

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {scene}
      <OrbitControls onEnd={handleControlEnd} autoRotate={isRotating} />
    </>
  );
};

export default SceneContainer;

// TODO: Refactor scenes and get common tasks
import { Canvas } from '@react-three/fiber';
import Sound from './audio/Sound';
import useCanvasStore from '../stores/CanvasStore';

const CanvasPlayer = () => {
  const activeScene = useCanvasStore((state) => state.activeScene);

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      {activeScene.component()}
      <Sound />
    </Canvas>
  );
};

export default CanvasPlayer;

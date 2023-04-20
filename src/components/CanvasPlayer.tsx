import { Canvas } from '@react-three/fiber';
import Sound from './audio/Sound';
import SceneContainer from './SceneContainer';

const CanvasPlayer = () => {
  return (
    <Canvas>
      <SceneContainer />
      <Sound />
    </Canvas>
  );
};

export default CanvasPlayer;

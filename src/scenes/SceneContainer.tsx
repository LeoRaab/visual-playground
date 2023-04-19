// TODO: Refactor scenes and get common tasks
import { Canvas } from '@react-three/fiber';
import useAppStore from '../store';

const SceneContainer = () => {
  const activeScene = useAppStore((state) => state.activeScene);

  return <Canvas>{activeScene.component()}</Canvas>;
};

export default SceneContainer;

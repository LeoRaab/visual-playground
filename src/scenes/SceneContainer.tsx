import { Canvas } from "@react-three/fiber";
import CubeScene from "./CubeScene";

const SceneContainer = () => {
  return (
    <Canvas>
      <CubeScene />
    </Canvas>
  );
};

export default SceneContainer;

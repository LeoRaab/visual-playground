import { ArcballControls, CameraControls, OrbitControls, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Cube from "../components/Cube";
import { getRandomIndex, getRandomNumber } from "../utils";

const CubeScene = () => {
  const [autoRotate, setAutoRotate] = useState<boolean>(false);

  const handleClick = () => {
    setAutoRotate((prevState) => !prevState);
  };

  const colors = [
    'hotpink',
    'aquamarine',
    'orangered',
    'indigo',
    'gold',
    'turquoise',
  ];
  
  const [randomColor, setRandomColor] = useState<string>(colors[0]);

  const handleControlEnd = () => {

    setRandomColor(prevState => {
      const currentIndex = colors.findIndex((color) => color === prevState);
      const randomIndex = getRandomIndex(currentIndex, 0, 5);

      return colors[randomIndex];
    });

    setAutoRotate(prevState => !prevState);
  }

  return (
    <>
      <ambientLight />
      <pointLight position={[1, 10, 10]}/>
      <Cube color={randomColor} />
      <OrbitControls onEnd={handleControlEnd} autoRotate={autoRotate} />
    </>
  );
};

export default CubeScene;
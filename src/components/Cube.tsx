import { useRef, useState } from 'react';
import { Mesh } from 'three';

type Props = {
  color: string;
}

const Cube = ({color}: Props) => {
  const meshRef = useRef<Mesh | null>(null);

  return (    
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;

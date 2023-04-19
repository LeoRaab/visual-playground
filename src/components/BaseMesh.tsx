import { PositionalAudio } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

type Props = {
  mesh: 'box' | 'sphere';
  size: [x: number, y: number, z: number];
  color?: string;
};

const BaseMesh = ({ mesh, size, color }: Props) => {
  const meshRef = useRef<Mesh | null>(null);

  const meshStyle = mesh === 'box' ? <boxGeometry args={size} /> : <sphereGeometry args={size} />;

  return (
    <mesh ref={meshRef}>
      {meshStyle}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default BaseMesh;

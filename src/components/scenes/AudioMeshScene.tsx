import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';

type Props = {
  zoom: [x: number, y: number, z: number];
};

const AudioMeshScene = ({ zoom }: Props) => {
  const meshRef = useRef<Mesh | null>(null);
  const vec = new Vector3();

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.scale.lerp(vec.set(...zoom), 0.15);
  });

  return (
    <mesh ref={meshRef} scale={1}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default AudioMeshScene;

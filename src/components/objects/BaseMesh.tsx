import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Euler, Mesh, Vector3 } from 'three';
import useAudioReactive from '../../hooks/useAudioReactive';

type Props = {
  mesh: 'box' | 'sphere';
  size: [x: number, y: number, z: number];
  color?: string;
};

const BaseMesh = ({ mesh, size, color }: Props) => {
  const meshRef = useRef<Mesh | null>(null);
  const meshStyle = mesh === 'box' ? <boxGeometry args={size} /> : <sphereGeometry args={size} />;
  useAudioReactive({ objectRef: meshRef });

  return (
    <mesh ref={meshRef} rotation={new Euler(0, 2, 1)}>
      {meshStyle}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default BaseMesh;

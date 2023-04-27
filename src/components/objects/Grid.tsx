import { useFrame } from '@react-three/fiber';
import { useRef, useMemo, useLayoutEffect } from 'react';
import { InstancedMesh, Matrix4 } from 'three';
import useAudioStore from '../../stores/AudioStore';
import useAudioReactive from '../../hooks/useAudioReactive';

const Grid = () => {
  const meshRef = useRef<InstancedMesh>(null);
  const frequencyData = useAudioStore((state) => state.frequencyData);
  const kickArray = frequencyData.slice(0, 10);
  useAudioReactive({ meshObject: meshRef.current });

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    const transform = new Matrix4();

    for (let i = 0; i < 10000; ++i) {
      const x = (i % 100) - 50;
      const y = Math.floor(i / 100) - 50;
      let z = 0;

      if (i % 2) {
        z = 5 / kickArray[0];
      }

      console.log(z);

      transform.setPosition(x, y, z);
      meshRef.current.setMatrixAt(i, transform);
    }
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 10000]}>
      <boxGeometry args={[0.2, 0.2, 0.1]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
};

export default Grid;

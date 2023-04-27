import { useRef } from 'react';
import { Points } from 'three';
import useAudioReactive from '../../hooks/useAudioReactive';

const BasicParticles = () => {
  const pointsRef = useRef<Points | null>(null);
  useAudioReactive({ meshObject: pointsRef.current });

  return (
    <points ref={pointsRef}>
      <sphereGeometry args={[1, 92, 16]} />
      <pointsMaterial color="#FAFAFA" size={0.008} sizeAttenuation />
    </points>
  );
};

export default BasicParticles;

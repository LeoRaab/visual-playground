import { useRef } from 'react';
import { Points } from 'three';

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef<Points | null>(null);

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1.5, 6, 128]} />
      <pointsMaterial color="#FAFAFA" size={0.008} sizeAttenuation />
    </points>
  );
};

export default BasicParticles;

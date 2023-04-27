import { Instance, Instances } from '@react-three/drei';
import Grid from '../objects/Grid';
import { useRef } from 'react';
import { InstancedMesh } from 'three';
import useAudioReactive from '../../hooks/useAudioReactive';
import { useFrame } from '@react-three/fiber';

const GridScene = () => {
  return <Grid />;
};

export default GridScene;

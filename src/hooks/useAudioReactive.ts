import { useFrame } from '@react-three/fiber';
import { MutableRefObject } from 'react';
import { Object3D, Vector3 } from 'three';
import useCanvasStore from '../stores/CanvasStore';

type Props = {
  objectRef: MutableRefObject<Object3D | null>;
};

const useAudioReactive = ({ objectRef }: Props) => {
  const [isAudioReactive, dynamicZoom] = useCanvasStore((state) => [
    state.isAudioReactive,
    state.dynamicZoom,
  ]);
  const vec = new Vector3();

  useFrame(() => {
    if (!isAudioReactive) return;
    objectRef.current?.scale.lerp(vec.set(...dynamicZoom), 0.15);
  });
};

export default useAudioReactive;

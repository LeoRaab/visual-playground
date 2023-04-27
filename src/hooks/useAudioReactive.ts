import { useFrame } from '@react-three/fiber';
import { MutableRefObject, useEffect, useState } from 'react';
import { Object3D, Vector3 } from 'three';
import useCanvasStore from '../stores/CanvasStore';
import useAudioStore from '../stores/AudioStore';

type Props = {
  meshObject: Object3D | null;
};

const useAudioReactive = ({ meshObject }: Props) => {
  const [isAudioReactive, dynamicVec] = useCanvasStore((state) => [
    state.isAudioReactive,
    state.dynamicVec,
  ]);

  const vec = new Vector3();

  useFrame(() => {
    if (!isAudioReactive) return;
    meshObject?.scale.lerp(vec.set(...dynamicVec), 0.15);
  });

  return { dynamicVec: vec.set(...dynamicVec) };
};

export default useAudioReactive;

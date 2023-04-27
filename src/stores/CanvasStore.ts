import { create } from 'zustand';
import { SceneItem } from '../type-definitions';
import { getRandomElement } from '../utils';
import { COLORS, SCENES } from '../utils/constants';
import { SpringValue } from '@react-spring/three';

interface CanvasState {
  scenes: SceneItem[];
  activeScene: SceneItem;
  isRotating: boolean;
  isAudioReactive: boolean;
  dynamicVec: [x: number, y: number, z: number];
  randomColor: string;
  zoom: number;
  ticksSpring: SpringValue<number> | null;
  clickSpring: SpringValue<number> | null;
  setActiveScene: (scene: SceneItem) => void;
  setAudioReactive: (isAudioReactive: boolean) => void;
  setDynamicVec: (vec: [x: number, y: number, z: number]) => void;
  setRotating: (isRotating: boolean) => void;
  setRandomColor: () => void;
  setZoom: (zoom: number) => void;
  setTicksSpring: (ticks: SpringValue<number>) => void;
  setClickSpring: (click: SpringValue<number>) => void;
}

const useCanvasStore = create<CanvasState>()((set) => ({
  scenes: SCENES,
  activeScene: SCENES[0],
  isRotating: false,
  isAudioReactive: false,
  dynamicVec: [0, 0, 0],
  randomColor: COLORS[0],
  zoom: 20,
  ticksSpring: null,
  clickSpring: null,
  setActiveScene: (scene: SceneItem) => set({ activeScene: scene }),
  setAudioReactive: (isAudioReactive: boolean) => set({ isAudioReactive }),
  setDynamicVec: (vec: [x: number, y: number, z: number]) => set({ dynamicVec: vec }),
  setRotating: (isRotating: boolean) => set({ isRotating }),
  setRandomColor: () =>
    set((state) => ({ randomColor: getRandomElement<string>(state.randomColor, COLORS) })),
  setZoom: (zoom: number) => set({ zoom }),
  setTicksSpring: (ticks: SpringValue<number>) => set({ ticksSpring: ticks }),
  setClickSpring: (click: SpringValue<number>) => set({ clickSpring: click }),
}));

export default useCanvasStore;

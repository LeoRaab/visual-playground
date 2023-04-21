import { create } from 'zustand';
import { SceneItem } from '../type-definitions';
import { getRandomElement } from '../utils';
import { COLORS, SCENES } from '../utils/constants';

interface CanvasState {
  scenes: SceneItem[];
  activeScene: SceneItem;
  isRotating: boolean;
  isAudioReactive: boolean;
  dynamicZoom: [x: number, y: number, z: number];
  randomColor: string;
  setActiveScene: (scene: SceneItem) => void;
  setAudioReactive: (isAudioReactive: boolean) => void;
  setDynamicZoom: (zoom: [x: number, y: number, z: number]) => void;
  setRotating: (isRotating: boolean) => void;
  setRandomColor: () => void;
}

const useCanvasStore = create<CanvasState>()((set) => ({
  scenes: SCENES,
  activeScene: SCENES[0],
  isRotating: false,
  isAudioReactive: false,
  dynamicZoom: [0, 0, 0],
  randomColor: COLORS[0],
  setActiveScene: (scene: SceneItem) => set({ activeScene: scene }),
  setAudioReactive: (isAudioReactive: boolean) => set({ isAudioReactive }),
  setDynamicZoom: (zoom: [x: number, y: number, z: number]) => set({ dynamicZoom: zoom }),
  setRotating: (isRotating: boolean) => set({ isRotating }),
  setRandomColor: () =>
    set((state) => ({ randomColor: getRandomElement<string>(state.randomColor, COLORS) })),
}));

export default useCanvasStore;

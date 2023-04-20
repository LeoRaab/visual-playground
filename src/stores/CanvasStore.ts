import { create } from 'zustand';
import { SceneItem } from '../type-definitions';
import MeshScene from '../components/scenes/MeshScene';
import ParticleScene from '../components/scenes/ParticleScene';
import { getRandomElement } from '../utils';

const scenes: SceneItem[] = [
  {
    id: 0,
    title: 'Basic Mesh',
  },
  {
    id: 1,
    title: 'Particles',
  },
];

const colors = ['hotpink', 'aquamarine', 'orangered', 'indigo', 'gold', 'turquoise'];

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
  scenes,
  activeScene: scenes[0],
  isRotating: false,
  isAudioReactive: false,
  dynamicZoom: [0, 0, 0],
  randomColor: colors[0],
  setActiveScene: (scene: SceneItem) => set({ activeScene: scene }),
  setAudioReactive: (isAudioReactive: boolean) => set({ isAudioReactive }),
  setDynamicZoom: (zoom: [x: number, y: number, z: number]) => set({ dynamicZoom: zoom }),
  setRotating: (isRotating: boolean) => set({ isRotating }),
  setRandomColor: () =>
    set((state) => ({ randomColor: getRandomElement<string>(state.randomColor, colors) })),
}));

export default useCanvasStore;

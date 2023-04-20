import { create } from 'zustand';
import { SceneItem } from '../type-definitions';
import MeshScene from '../components/scenes/MeshScene';
import ParticleScene from '../components/scenes/ParticleScene';

const scenes = [
  {
    title: 'Basic Mesh',
    component: MeshScene,
  },
  {
    title: 'Particles',
    component: ParticleScene,
  },
];

interface CanvasState {
  scenes: SceneItem[];
  activeScene: SceneItem;
  isRotating: boolean;
  dynamicZoom: [x: number, y: number, z: number];
  setActiveScene: (scene: SceneItem) => void;
  setDynamicZoom: (zoom: [x: number, y: number, z: number]) => void;
  setRotating: (isRotating: boolean) => void;
}

const useCanvasStore = create<CanvasState>()((set) => ({
  scenes,
  activeScene: scenes[0],
  isRotating: false,
  dynamicZoom: [0, 0, 0],
  setActiveScene: (scene: SceneItem) => set({ activeScene: scene }),
  setDynamicZoom: (zoom: [x: number, y: number, z: number]) => set({ dynamicZoom: zoom }),
  setRotating: (isRotating: boolean) => set({ isRotating }),
}));

export default useCanvasStore;

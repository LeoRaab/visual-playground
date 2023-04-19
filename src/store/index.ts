import { create } from 'zustand';
import MeshScene from '../scenes/MeshScene';
import ParticleScene from '../scenes/ParticleScene';
import { SceneItem } from '../type-definitions';

interface AppState {
  isPlaying: boolean;
  scenes: SceneItem[];
  activeScene: SceneItem;
  setIsPlaying: (isPlaying: boolean) => void;
  setActiveScene: (scene: SceneItem) => void;
}

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

const useAppStore = create<AppState>()((set) => ({
  isPlaying: false,
  scenes,
  activeScene: scenes[0],
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setActiveScene: (scene: SceneItem) => set({ activeScene: scene }),
}));

export default useAppStore;

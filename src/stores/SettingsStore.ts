import { create } from 'zustand';
import { SceneItem } from '../type-definitions';
import MeshScene from '../components/scenes/MeshScene';
import ParticleScene from '../components/scenes/ParticleScene';

interface SettingsState {
  scenes: SceneItem[];
  activeScene: SceneItem;
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

const useSettingsStore = create<SettingsState>()((set) => ({
  scenes,
  activeScene: scenes[0],
  setActiveScene: (scene: SceneItem) => set({ activeScene: scene }),
}));

export default useSettingsStore;

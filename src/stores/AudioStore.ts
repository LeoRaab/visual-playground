import { create } from 'zustand';

interface AudioState {
  isStarted: boolean;
  isPlaying: boolean;
  setStarted: (isStarted: boolean) => void;
  setPlaying: (isPlaying: boolean) => void;
}

const useAudioStore = create<AudioState>()((set) => ({
  isStarted: false,
  isPlaying: false,
  setStarted: (isStarted: boolean) => set({ isStarted }),
  setPlaying: (isPlaying: boolean) => set({ isPlaying }),
}));

export default useAudioStore;

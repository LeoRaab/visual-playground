import { create } from 'zustand';
import { SoundFile, SoundFilter } from '../type-definitions';
import { SOUNDS, SOUND_FILTERS } from '../utils/constants';
import { getSoundFile } from '../utils';

interface AudioState {
  isStarted: boolean;
  isPlaying: boolean;
  sounds: SoundFile[];
  activeSound: SoundFile;
  filters: SoundFilter[];
  frequencyData: Uint8Array;
  setStarted: (isStarted: boolean) => void;
  setPlaying: (isPlaying: boolean) => void;
  playNext: () => void;
  playLast: () => void;
  updateFilterValue: (filterIndex: number, value: number) => void;
  setFilterOn: (filterIndex: number, isOn: boolean) => void;
  setFrequencyData: (frequencyData: Uint8Array) => void;
}

const useAudioStore = create<AudioState>()((set) => ({
  isStarted: false,
  isPlaying: false,
  sounds: SOUNDS,
  filters: SOUND_FILTERS,
  activeSound: SOUNDS[0],
  frequencyData: new Uint8Array(),
  setStarted: (isStarted: boolean) => set({ isStarted, isPlaying: isStarted }),
  setPlaying: (isPlaying: boolean) => set({ isPlaying }),
  playNext: () =>
    set((state) => ({
      activeSound: getSoundFile('next', state.activeSound),
      isStarted: false,
      isPlaying: true,
    })),
  playLast: () => set((state) => ({ activeSound: getSoundFile('last', state.activeSound) })),
  updateFilterValue: (filterIndex: number, value: number) =>
    set((state) => ({
      filters: state.filters.map((filter, index) => {
        if (filterIndex === index) {
          return {
            ...filter,
            value,
          };
        }
        return filter;
      }),
    })),
  setFilterOn: (filterIndex: number, isOn: boolean) =>
    set((state) => ({
      filters: state.filters.map((filter, index) => {
        if (filterIndex === index) {
          return {
            ...filter,
            isOn,
          };
        }
        return filter;
      }),
    })),
  setFrequencyData: (frequencyData: Uint8Array) => set({ frequencyData }),
}));

export default useAudioStore;

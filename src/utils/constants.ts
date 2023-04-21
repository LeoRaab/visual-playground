import { SceneItem, SoundFile, SoundFilter } from '../type-definitions';

export const SOUNDS: SoundFile[] = [
  {
    title: 'Middle East',
    url: './sounds/middle-east.mp3',
  },
  {
    title: 'Dark Mistery',
    url: './sounds/dark-mystery.mp3',
  },
  {
    title: 'Techno Beat',
    url: './sounds/techno-beat.mp3',
  },
  {
    title: 'LoFi Study',
    url: './sounds/lofi-study.mp3',
  },
];

export const SCENES: SceneItem[] = [
  {
    id: 0,
    title: 'Basic Mesh',
  },
  {
    id: 1,
    title: 'Particles',
  },
];

export const COLORS = ['hotpink', 'aquamarine', 'orangered', 'indigo', 'gold', 'turquoise'];

export const SOUND_FILTERS: SoundFilter[] = [
  {
    type: 'lowpass',
    value: 10000,
    unit: 'Hz',
    isOn: false,
    audioNode: null,
    min: 0,
    max: 20000,
    step: 500,
  },
];

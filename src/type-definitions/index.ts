export type SceneItem = {
  id: number;
  title: string;
};

export type SoundFile = {
  title: string;
  url: string;
};

export type SoundFilter = {
  type: BiquadFilterType;
  value: number;
  unit: string;
  isOn: boolean;
  min: number;
  max: number;
  step?: number;
};

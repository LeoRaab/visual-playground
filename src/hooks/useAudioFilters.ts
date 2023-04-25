import { PositionalAudio } from 'three';
import useAudioStore from '../stores/AudioStore';
import { useEffect } from 'react';

type Props = {
  audio: PositionalAudio | null;
};

const useAudioFilters = ({ audio }: Props) => {
  const filters = useAudioStore((state) => state.filters);

  useEffect(() => {
    if (!audio || !filters) return;

    if (audio.filters.length === 0) {
      const createdFilters = filters.map(
        (filter) =>
          new BiquadFilterNode(audio.context, {
            type: filter.isOn ? filter.type : 'allpass',
            frequency: filter.value,
          })
      );

      // TODO check why setFilters is not working!
      // audio.setFilters(createdFilters);
      // maybe use -> audio.context.createBiquadFilter()
      audio.filters.push(...createdFilters);
    }

    if (audio.filters.length > 0) {
      const biquadFilters = audio.filters as BiquadFilterNode[];

      biquadFilters.forEach((filterNode, index) => {
        const filter = filters[index];

        if (!filter) return;

        if (filterNode.frequency.value !== filter.value) {
          filterNode.frequency.value = filter.value;
        }

        if (filter.isOn && filterNode.type === 'allpass') {
          filterNode.type = filter.type;
        }

        if (!filter.isOn && filterNode.type !== 'allpass') {
          filterNode.type = 'allpass';
        }
      });
    }
  }, [audio, filters]);
};

export default useAudioFilters;

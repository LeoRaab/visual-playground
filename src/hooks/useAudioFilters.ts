import { useEffect, useRef, useState } from 'react';
import { PositionalAudio } from 'three';
import useAudioStore from '../stores/AudioStore';
import { SoundFilter } from '../type-definitions';
import { useFrame } from '@react-three/fiber';

type Props = {
  audio: PositionalAudio | null;
};

const useAudioFilters = ({ audio }: Props) => {
  const [filters, setFilters] = useAudioStore((state) => [state.filters, state.setFilters]);

  useFrame(() => {
    if (!audio || !filters) return;

    if (audio.filters.length === 0) {
      const createdFilters = filters.map(
        (filter) =>
          new BiquadFilterNode(audio.context, {
            type: filter.isOn ? filter.type : 'allpass',
            frequency: filter.value,
          })
      );
      audio.filters.push(...createdFilters);
    }

    if (audio.filters.length > 0) {
      const biquadFilters = audio.filters as BiquadFilterNode[];

      biquadFilters.forEach((filterNode, index) => {
        const filter = filters[index];

        if (!filter) return;

        if (filterNode.frequency.value !== filter.value) {
          console.log(filter.value);
          filterNode.frequency.value = filter.value;
        }

        if (filter.isOn && filterNode.type === 'allpass') {
          filterNode.type = filter.type;
          console.log('on');
        }

        if (!filter.isOn && filterNode.type !== 'allpass') {
          filterNode.type = 'allpass';
          console.log('off');
        }
      });
    }
  });

  // useEffect(() => {
  //   if (!audio || audio.filters.length === 0) return;

  //   const biquadFilters = audio.filters as BiquadFilterNode[];

  //   biquadFilters.forEach((filterNode, index) => {
  //     const filter = filters[index];

  //     if (!filter) return;

  //     filterNode.frequency.value = filter.value;

  //     if (filter.isOn && filterNode.type === 'allpass') {
  //       filterNode.type = filter.type;
  //     }

  //     if (!filter.isOn && filterNode.type !== 'allpass') {
  //       filterNode.type = 'allpass';
  //     }
  //   });
  // }, [audio, filters]);
};

export default useAudioFilters;

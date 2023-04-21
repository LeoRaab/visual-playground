import { useEffect, useRef, useState } from 'react';
import { PositionalAudio } from 'three';
import useAudioStore from '../stores/AudioStore';

type Props = {
  audio: PositionalAudio | null;
};

const useAudioFilters = ({ audio }: Props) => {
  const [filters, setFilters] = useAudioStore((state) => [state.filters, state.setFilters]);

  useEffect(() => {
    if (!audio) return;

    const createdFilters = filters.map((filter) => {
      return {
        ...filter,
        audioNode: new BiquadFilterNode(audio.context, {
          type: filter.type,
          frequency: filter.value,
        }),
      };
    });

    setFilters(createdFilters);
  }, [audio]);
};

export default useAudioFilters;

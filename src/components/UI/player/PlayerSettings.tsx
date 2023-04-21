import { useState } from 'react';
import CheckBox from '../elements/CheckBox';
import useAudioStore from '../../../stores/AudioStore';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import PlayerSettingsTitle from './PlayerSettingsTitle';
import PlayerSettingsElement from './PlayerSettingsElement';
import Filter from '../elements/Filter';

const PlayerSettings = () => {
  const [activeSound, filters, updateFilterValue, setFilterOn] = useAudioStore((state) => [
    state.activeSound,
    state.filters,
    state.updateFilterValue,
    state.setFilterOn,
  ]);

  return (
    <div className="bg-stone-800 rounded-t-xl px-6 py-8">
      <div className="flex flex-col space-y-4">
        <PlayerSettingsTitle>
          <h2 className="text-2xl tracking-wider">{activeSound.title}</h2>
          <MusicalNoteIcon className="h-6 w-6" />
        </PlayerSettingsTitle>
        {filters.map((filter, index) => (
          <PlayerSettingsElement key={filter.type}>
            <Filter
              filter={filter}
              onChange={(value: number) => updateFilterValue(index, value)}
              onSelect={() => setFilterOn(index, !filter.isOn)}
            />
          </PlayerSettingsElement>
        ))}
      </div>
    </div>
  );
};

export default PlayerSettings;

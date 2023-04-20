import { useState } from 'react';
import PlayerControls from './PlayerControls';
import PlayerSettings from './PlayerSettings';

const Player = () => {
  const [areSettingsOpen, setSettingsOpen] = useState<boolean>(false);

  return (
    <div className="w-1/5 font-mono text-stone-500">
      {areSettingsOpen && <PlayerSettings />}

      <PlayerControls
        areSettingsOpen={areSettingsOpen}
        onOpenSettings={() => setSettingsOpen(!areSettingsOpen)}
      />
    </div>
  );
};

export default Player;

import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  BackwardIcon,
  ForwardIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import PlayerButton from './PlayerButton';
import useAudioStore from '../../../stores/AudioStore';

type Props = {
  areSettingsOpen: boolean;
  onOpenSettings: () => void;
};

const PlayerControls = ({ areSettingsOpen, onOpenSettings }: Props) => {
  const [isStarted, isPlaying, setStarted, setPlaying] = useAudioStore((state) => [
    state.isStarted,
    state.isPlaying,
    state.setStarted,
    state.setPlaying,
  ]);

  return (
    <div
      className={`bg-stone-900 flex items-center ${
        areSettingsOpen ? 'rounded-b-xl' : 'rounded-xl'
      }`}
    >
      <div className="flex-auto flex items-center justify-evenly">
        <PlayerButton onClick={() => setStarted(false)} isDisabled={!isStarted}>
          <StopIcon className="h-8 w-8" />
        </PlayerButton>
        <PlayerButton onClick={() => console.log('last song')}>
          <BackwardIcon className="h-8 w-8" />
        </PlayerButton>
      </div>
      <PlayerButton onClick={() => setPlaying(!isPlaying)} keepActive={isPlaying} isMain>
        {isPlaying && <PauseIcon className="h-8 w-8" />}
        {!isPlaying && <PlayIcon className="h-8 w-8" />}
      </PlayerButton>
      <div className="flex-auto flex items-center justify-evenly">
        <PlayerButton onClick={() => console.log('next song')}>
          <ForwardIcon className="h-8 w-8" />
        </PlayerButton>
        <PlayerButton onClick={onOpenSettings} keepActive={areSettingsOpen}>
          {!areSettingsOpen && <ChevronUpIcon className="h-8 w-8" />}
          {areSettingsOpen && <ChevronDownIcon className="h-8 w-8" />}
        </PlayerButton>
      </div>
    </div>
  );
};

export default PlayerControls;

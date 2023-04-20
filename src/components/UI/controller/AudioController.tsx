import Player from '../player/Player';

const AudioController = () => {
  return (
    <div className="absolute z-10 bottom-0 w-full flex flex-col items-center font-mono font-semibold text-stone-500 p-6 opacity-50 hover:opacity-100">
      <Player />
    </div>
  );
};

export default AudioController;

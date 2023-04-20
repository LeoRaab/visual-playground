import useAudioStore from '../../../stores/AudioStore';

const AudioController = () => {
  const [isStarted, isPlaying, setStarted, setPlaying] = useAudioStore((state) => [
    state.isStarted,
    state.isPlaying,
    state.setStarted,
    state.setPlaying,
  ]);
  const playBtnTitle = isPlaying ? 'pause' : 'play';

  return (
    <div className="controller--container audio--controller">
      <div className="controller--list">
        <div className="audio--btn--container">
          <button
            className={`controller--btn ${isStarted ? 'btn--primary' : 'btn--disabled'}`}
            onClick={() => setStarted(false)}
            disabled={!isStarted}
          >
            stop
          </button>
          <button className="controller--btn btn--primary" onClick={() => setPlaying(!isPlaying)}>
            {playBtnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioController;

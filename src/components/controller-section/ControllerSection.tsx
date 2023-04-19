import useAppStore from '../../store';
import './ControllerSection.css';

const ControllerSection = () => {
  const isPlaying = useAppStore((state) => state.isPlaying);
  const setIsPlaying = useAppStore((state) => state.setIsPlaying);
  const btnTitle = isPlaying ? 'stop' : 'play';
  const activeScene = useAppStore((state) => state.activeScene);
  const scenes = useAppStore((state) => state.scenes);
  const setActiveScene = useAppStore((state) => state.setActiveScene);

  return (
    <div className="controller--container">
      <div className="controller--list">
        {scenes.map((scene) => (
          <div className="controller--item" onClick={() => setActiveScene(scene)}>
            {scene.title}
          </div>
        ))}
        <div className="controller--button--container">
          <button className="controller--button" onClick={() => setIsPlaying(!isPlaying)}>
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControllerSection;

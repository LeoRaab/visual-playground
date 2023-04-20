import useCanvasStore from '../../../stores/CanvasStore';
import './controller.css';

const SettingsController = () => {
  const isRotating = useCanvasStore((state) => state.isRotating);
  const setRotating = useCanvasStore((state) => state.setRotating);
  const btnTitle = isRotating ? 'stop' : 'play';
  const activeScene = useCanvasStore((state) => state.activeScene);
  const scenes = useCanvasStore((state) => state.scenes);
  const setActiveScene = useCanvasStore((state) => state.setActiveScene);

  return (
    <div className="controller--container">
      <div className="controller--list">
        {scenes.map((scene) => (
          <div
            className={`controller--item ${
              scene.title === activeScene.title ? 'controller--item--active' : ''
            }`}
            onClick={() => setActiveScene(scene)}
            key={scene.title}
          >
            {scene.title}
          </div>
        ))}
        <div className="controller--button--container">
          <button className="controller--button" onClick={() => setRotating(!isRotating)}>
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsController;

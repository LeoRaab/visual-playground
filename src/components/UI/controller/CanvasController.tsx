import useCanvasStore from '../../../stores/CanvasStore';
import './controller.css';

const CanvasController = () => {
  const [scenes, isRotating, isAudioReactive, setActiveScene, setRotating, setAudioReactive] =
    useCanvasStore((state) => [
      state.scenes,
      state.isRotating,
      state.isAudioReactive,
      state.setActiveScene,
      state.setRotating,
      state.setAudioReactive,
    ]);
  return (
    <div className="controller--container canvas--controller">
      <div className="controller--list">
        {scenes.map((scene) => (
          <div className="controller--item" onClick={() => setActiveScene(scene)} key={scene.title}>
            {scene.title}
          </div>
        ))}

        <div className="controller--item">
          <div className="controller--checkbox--container" onClick={() => setRotating(!isRotating)}>
            <input
              type="checkbox"
              id="rotate"
              name="rotate"
              onChange={() => setRotating(!isRotating)}
              checked={isRotating}
            />
            <label>Rotation</label>
          </div>
        </div>

        <div className="controller--item">
          <div
            className="controller--checkbox--container"
            onClick={() => setAudioReactive(!isAudioReactive)}
          >
            <input
              type="checkbox"
              id="audioreactive"
              name="audioreactive"
              onChange={() => setAudioReactive(!isAudioReactive)}
              checked={isAudioReactive}
            />
            <label>Audio reactive</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasController;

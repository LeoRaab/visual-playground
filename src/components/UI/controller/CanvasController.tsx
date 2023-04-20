import useCanvasStore from '../../../stores/CanvasStore';
import CheckBox from '../elements/CheckBox';
import List from '../list/List';
import ListHeader from '../list/ListHeader';
import ListItem from '../list/ListItem';

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
    <div className="absolute z-10 top-0 right-0 font-mono font-semibold text-stone-500 p-4 opacity-50 hover:opacity-100">
      <List>
        <ListHeader title="Scenes" />
        {scenes.map((scene) => (
          <ListItem onClick={() => setActiveScene(scene)} key={scene.title}>
            <span className="ml-8">{scene.title}</span>
          </ListItem>
        ))}
        <ListHeader title="Settings" />
        <ListItem>
          <CheckBox
            label="Rotation"
            isChecked={isRotating}
            onClick={() => setRotating(!isRotating)}
          />
        </ListItem>
        <ListItem>
          <CheckBox
            label="Audio reactive"
            isChecked={isAudioReactive}
            onClick={() => setAudioReactive(!isAudioReactive)}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default CanvasController;

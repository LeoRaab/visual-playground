import BaseMesh from '../../components/objects/BaseMesh';
import useCanvasStore from '../../stores/CanvasStore';

const MeshScene = () => {
  const randomColor = useCanvasStore((state) => state.randomColor);

  return (
    <>
      <BaseMesh mesh="sphere" size={[1, 64, 64]} color={randomColor} />
    </>
  );
};

export default MeshScene;

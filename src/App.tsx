import CanvasController from './components/UI/controller/CanvasController';
import CanvasPlayer from './components/CanvasPlayer';
import AudioController from './components/UI/controller/AudioController';

const App = () => {
  return (
    <>
      <CanvasPlayer />
      <CanvasController />
      <AudioController />
    </>
  );
};

export default App;

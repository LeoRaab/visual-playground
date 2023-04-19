import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { AudioListener, Audio, AudioLoader } from 'three';
import useAppStore from '../store';

const Sound = () => {
  const { camera } = useThree();
  const isPlaying = useAppStore((state) => state.activeScene);

  useEffect(() => {
    if (isPlaying) {
      console.log('hi');
      // create an AudioListener and add it to the camera
      const listener = new AudioListener();
      camera.add(listener);

      // create a global audio source
      const sound = new Audio(listener);

      // load a sound and set it as the Audio object's buffer
      const audioLoader = new AudioLoader();
      audioLoader.load('middle-east.mp3', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
      });

      sound.play();
    }
  }, [isPlaying]);

  return <></>;
};

export default Sound;

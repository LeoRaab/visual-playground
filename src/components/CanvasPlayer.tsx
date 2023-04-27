import { Canvas } from '@react-three/fiber';
import Sound from './audio/Sound';
import SceneContainer from './SceneContainer';
import { useEffect, useState } from 'react';
import { useSpring } from '@react-spring/three';
import useCanvasStore from '../stores/CanvasStore';

const CanvasPlayer = () => {
  const [zoom, setTicksSpring, setClickSpring] = useCanvasStore((state) => [
    state.zoom,
    state.setTicksSpring,
    state.setClickSpring,
  ]);
  const [ticks, setTicks] = useState(0);
  const { ticksSpring, clickSpring } = useSpring({
    ticksSpring: ticks, // Springy tick value (each click / release is a tick)
    clickSpring: ticks % 2 === 1 ? 1 : 0, // Springy click factor (1 means clicked, 0 means released)
    config: { tension: 20, friction: 20, clamp: true },
  });
  const isMobile = window.matchMedia('only screen and (max-width: 480px)').matches;

  const zoomLevel = isMobile ? 9 : 20;

  const onPointerDown = (e: any) => {
    // Capture the pointer so it's still tracked outside the window
    e.target.setPointerCapture(e.pointerId);
    setTicks(ticks + 1);
  };

  const onPointerUp = () => {
    // Prevent misfires
    if (ticks % 2 === 1) {
      // Only finish the animation if held down for long enough
      if (clickSpring.get() > 0.5) setTicks(ticks + 1);
      // Otherwise undo the contraction (this way you can't speed up the animation by spam clicking)
      else setTicks(ticks - 1);
    }
  };

  useEffect(() => {
    setTicksSpring(ticksSpring);
  }, [ticksSpring]);

  useEffect(() => {
    setClickSpring(clickSpring);
  }, [clickSpring]);

  return (
    <Canvas
      orthographic
      camera={{ zoom }}
      resize={{ polyfill: ResizeObserver }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <SceneContainer />
      <Sound />
    </Canvas>
  );
};

export default CanvasPlayer;

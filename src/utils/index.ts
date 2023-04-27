import { SoundFile, SoundFilter } from '../type-definitions';
import { SOUNDS } from './constants';

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min));

const getRandomIndex = (currentIndex: number, min: number, max: number): number => {
  const getNewIndex = (): number => {
    const randomIndex = getRandomNumber(min, max);
    if (currentIndex === randomIndex) {
      return getNewIndex();
    }

    return randomIndex;
  };

  const randomIndex = getNewIndex();

  return randomIndex;
};

export const getRandomElement = <T>(currentElement: T, array: T[]): T => {
  const currentIndex = array.findIndex((element) => element === currentElement);
  const randomIndex = getRandomIndex(currentIndex, 0, 5);

  return array[randomIndex];
};

// TODO be generic
export const updateFilterValue = (filters: SoundFilter[], filterIndex: number, value: number) => {
  return filters.map((filter, index) => {
    if (filterIndex === index) {
      return {
        ...filter,
        value,
      };
    }
    return filter;
  });
};

export const min = (calc: number, minValue: number): number => {
  return calc < minValue ? minValue : calc;
};

export const avg = (array: Uint8Array): number => {
  return Math.floor(array.reduce((a, b) => a + b, 0) / array.length);
};

export const getSoundFile = (direction: 'next' | 'last', activeSound: SoundFile): SoundFile => {
  const currentIndex = SOUNDS.findIndex((soundFile) => soundFile.title === activeSound.title);

  if (direction === 'next') {
    const nextIndex = currentIndex + 1;
    return nextIndex < SOUNDS.length ? SOUNDS[nextIndex] : SOUNDS[0];
  }

  if (direction === 'last') {
    const lastIndex = currentIndex - 1;
    return lastIndex > 0 ? SOUNDS[lastIndex] : SOUNDS[0];
  }

  return SOUNDS[0];
};

export const roundedSquareWave = (t: number, delta: number, a: number, f: number) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};

export const calcLowPassFreq = (x: number, y: number): number => {
  let lowPassMax: number;

  //Euclidean distance between lowest point of quadrant 3 and current point
  const distance = Math.sqrt(Math.pow(-1 - x, 2) + Math.pow(-1 - y, 2));
  console.log(distance);

  if (distance < 0.5) {
    lowPassMax = 500;
  } else if (distance > 0.5 && distance < 1.0) {
    lowPassMax = 1000;
  } else if (distance > 1.0 && distance < 1.5) {
    lowPassMax = 2000;
  } else if (distance > 1.5 && distance < 2.0) {
    lowPassMax = 6000;
  } else {
    lowPassMax = 8000;
  }

  return distance * lowPassMax;
};

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min));

const getRandomIndex = (currentIndex: number, min: number, max: number) => {
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

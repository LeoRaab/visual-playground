export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min));


export const getRandomIndex = (currentIndex: number, min: number, max: number) => {
  const getNewIndex = (): number => {
    const randomIndex = getRandomNumber(min, max);
    if (currentIndex === randomIndex) {
      return getNewIndex();      
    }

    return randomIndex;
  }

  const randomIndex = getNewIndex();

  return randomIndex;
}

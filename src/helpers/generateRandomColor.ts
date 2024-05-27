export const generateRandomColor = () => {
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomColorComponent = () => {
    return getRandomInt(50, 255);
  };

  let color;
  const uniqueColors = new Set();

  do {
    const r = randomColorComponent().toString(16).padStart(2, '0');
    const g = randomColorComponent().toString(16).padStart(2, '0');
    const b = randomColorComponent().toString(16).padStart(2, '0');

    color = `#${r}${g}${b}`;
  } while (uniqueColors.has(color));

  uniqueColors.add(color);

  return color;
};
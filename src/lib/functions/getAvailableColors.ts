export const getAvailableColors = () => {
  const allColors = [
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Blue",
    "Purple",
    "Pink",
    "White",
    "Black",
  ];
  return allColors.filter(() => Math.random() > 0.25);
};

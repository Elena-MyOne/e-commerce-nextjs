export const getAvailableSizes = () => {
  const allSizes = [
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "XXX-Large",
  ];
  return allSizes.filter(() => Math.random() > 0.25);
};

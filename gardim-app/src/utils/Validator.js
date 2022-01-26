export const validator = (type, value) => {
  if (value < type.humidity.min || value > type.humidity.max) {
    return 'Alert!';
  } else if (value < type.humidity.min + 5 || value > type.humidity.max - 5) {
    return 'Careful!';
  } else {
    return 'Good!';
  }
};

export const conversor = (value) => {
  const percentage = 100 * ((4095 - value) / 1795);
  return Math.round(percentage);
};

import { DAMP, DRY, LITTLE_DAMP, SOGGY, VERY_DAMP } from '../constants/Status';

export const evaluation = (min, max, value, name) => {
  console.log(name)
  console.log('min' + min);
  console.log('max' + max);
  console.log('value' + value);
  if (value < min || value > max) {
    return 'Alert!';
  } else if (value < min + 200 || value > max - 200) {
    return 'Careful!';
  } else {
    return 'Good!';
  }
};

export const conversor = (value) => {
  const percentage = 100 * ((4095 - value) / 1795);
  return Math.round(percentage);
};

export const status = (value) => {
  if (value <= 4095 && value > 3500) {
    return DRY;
  } else if (value <= 3500 && value > 3000) {
    return LITTLE_DAMP;
  } else if (value <= 3500 && value > 2000) {
    return DAMP;
  } else if (value <= 2000 && value > 1600) {
    return VERY_DAMP;
  } else {
    return SOGGY;
  }
};

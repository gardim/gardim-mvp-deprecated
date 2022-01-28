import { DRY, LITTLE_DAMP, SOGGY, VERY_DAMP } from './Status';

var INFO = [
  {
    name: 'Samambaia',
    type: 'samambaia',
    humidity: {
      min: LITTLE_DAMP,
      max: VERY_DAMP,
    },
  },
  {
    name: 'Cróton',
    type: 'croton',
    humidity: {
      min: LITTLE_DAMP,
      max: VERY_DAMP,
    },
  },
  {
    name: 'Orquídea',
    type: 'orquidea',
    humidity: {
      min: LITTLE_DAMP,
      max: LITTLE_DAMP,
    },
  },
  {
    name: 'Espada de São Jorge',
    type: 'espada',
    humidity: {
      min: LITTLE_DAMP,
      max: LITTLE_DAMP,
    },
  },
  {
    name: 'Bromélia',
    type: 'bromelia',
    humidity: {
      min: VERY_DAMP,
      max: SOGGY,
    },
  },
  {
    name: 'Suculenta',
    type: 'suculenta',
    humidity: {
      min: DRY,
      max: LITTLE_DAMP,
    },
  },
  {
    name: 'Cacto',
    type: 'cacto',
    humidity: {
      min: DRY,
      max: LITTLE_DAMP,
    },
  },
];

export default INFO;

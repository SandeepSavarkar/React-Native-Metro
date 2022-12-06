const SUN_FLOWER = '#FF5714';
const GREEN = '#6EEB83';
const MIDNIGHT_BLUE = '#2c2b2e';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const WHITE = '#ffffff';
const SILVER = '#bdc3c7';
const GRAY_BACKGROUND = '#F9F9F9';
const GRAY_BORDER = '#F9F9F9';
const LIGHT_GRAY = '#686D76';
const DARK_GRAY = '#171717';
const DARK_BLACK = '#141414';

const common = {
  PRIMARY: SUN_FLOWER,
  SECONDRY: GREEN,
  SUCCESS: EMERALD,
  ERROR: ALIZARIN,
  WHITE: WHITE,
  GRAY_BACKGROUND: GRAY_BACKGROUND,
  GRAY_BORDER: GRAY_BORDER,
};

const light = {
  ...common,
  BACKGROUND: 'pink',
  BACKGROUND_SECONDARY: WHITE,
  TEXT: DARK_GRAY,
  TEXT_SECONDARY: LIGHT_GRAY,
  id: 1,
};

const dark = {
  ...common,
  BACKGROUND: 'red',
  BACKGROUND_SECONDARY: DARK_BLACK,
  TEXT: CLOUDS,
  TEXT_SECONDARY: SILVER,
  id: 2,
};

export const colors = {light, dark};
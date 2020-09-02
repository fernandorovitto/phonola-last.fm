import { IBrowser } from 'redux-responsive/types';
export const browser: IBrowser = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _responsiveState: true,
  breakpoints: {
    extraLarge: 0,
    extraSmall: 480,
    infinity: 0,
    large: 1200,
    medium: 992,
    small: 768,
  },
  greaterThan: {
    extraLarge: true,
    extraSmall: true,
    infinity: false,
    large: true,
    medium: true,
    small: true,
  },
  is: {
    extraLarge: true,
    extraSmall: false,
    infinity: true,
    large: false,
    medium: false,
    small: false,
  },
  lessThan: {
    extraLarge: false,
    extraSmall: false,
    infinity: false,
    large: false,
    medium: false,
    small: false,
  },
  mediaType: 'infinity',
  orientation: 'lanscape',
};

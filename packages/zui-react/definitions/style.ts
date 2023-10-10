/* eslint-disable prettier/prettier */
export const ZuiStyle = {
  colors: ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning', 'neutral', 'black', 'white', 'canavas'],
  elevation: {
    types: ['primary', 'secondary'],
    levels: ['default', 'far', 'farther'],
  },
  typography: {
    variant: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'list'],
    weight: ['bold', 'regular', 'light'],
  },
} as const;

export type ColorVariant = (typeof ZuiStyle)['colors'][number];
export type ElevationType = (typeof ZuiStyle)['elevation']['types'][number];
export type ElevationLevel = (typeof ZuiStyle)['elevation']['levels'][number];
export type TypographyVariant = (typeof ZuiStyle)['typography']['variant'][number];
export type TypographyWeight = (typeof ZuiStyle)['typography']['weight'][number];

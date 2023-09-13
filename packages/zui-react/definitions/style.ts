export enum ElevationType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ElevationLevel {
  Default = 'default',
  Far = 'far',
  Farther = 'farther',
}

export enum GroupColors {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
}

export enum SingleColors {
  Black = 'black',
  White = 'white',
  Canvas = 'canvas',
}

export const ZuiConsts = {
  elevation: {
    types: [ElevationType.Primary, ElevationType.Secondary],
    levels: [ElevationLevel.Default, ElevationLevel.Far, ElevationLevel.Farther],
  },
} as const;

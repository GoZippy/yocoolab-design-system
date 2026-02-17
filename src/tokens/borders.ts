export const borderRadius = {
  none: '0px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

export const borderWidth = {
  none: '0px',
  thin: '1px',
  medium: '2px',
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;

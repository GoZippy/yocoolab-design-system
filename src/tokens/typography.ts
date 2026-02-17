export const fontFamily = {
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
} as const;

export const fontSize = {
  xs: '0.75rem',     // 12px
  sm: '0.8125rem',   // 13px
  base: '0.875rem',  // 14px
  md: '1rem',        // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '2rem',     // 32px
  '4xl': '2.5rem',   // 40px
  '5xl': '3rem',     // 48px
} as const;

export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeight = {
  tight: 1.2,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.625,
} as const;

export const letterSpacing = {
  tight: '-0.03em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
} as const;

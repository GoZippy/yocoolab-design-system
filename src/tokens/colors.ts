/** Brand color palette — pink scale centered on #E64FA9 */
export const brand = {
  50: '#fdf2f8',
  100: '#fce7f3',
  200: '#fbcfe8',
  300: '#f9a8d4',
  400: '#f472b6',
  500: '#ec4899',
  600: '#e64fa9',
  700: '#e64fa9',
  800: '#be185d',
  900: '#9d174d',
} as const;

/** Secondary color palette — purple accent */
export const secondary = {
  50: '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d29d9',
  800: '#5b21b6',
  900: '#4c1d95',
} as const;

/** Neutral gray palette — Tailwind zinc scale */
export const neutral = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
} as const;

/** Semantic status colors — WCAG AA contrast-safe */
export const semantic = {
  success: '#059669',
  warning: '#d97706',
  error: '#dc2626',
  info: '#2563eb',
} as const;

/** Double Diamond workflow phase colors */
export const phase = {
  discover: '#6366f1',
  define: '#8b5cf6',
  develop: '#0891b2',
  deliver: '#059669',
} as const;

export type BrandShade = keyof typeof brand;
export type SecondaryShade = keyof typeof secondary;
export type NeutralShade = keyof typeof neutral;
export type SemanticColor = keyof typeof semantic;
export type PhaseColor = keyof typeof phase;

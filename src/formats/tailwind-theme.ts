import { brand, secondary, neutral, semantic, phase } from '../tokens/colors';
import { fontFamily } from '../tokens/typography';

/**
 * Tailwind v4 @theme values.
 *
 * Usage in your CSS:
 * ```css
 * @import "tailwindcss";
 * @import "@yocoolab/design-system/styles";
 *
 * @theme {
 *   --font-sans: var(--yc-font-sans);
 *   --color-brand: var(--yc-color-brand-700);
 *   --color-secondary: var(--yc-color-secondary-700);
 * }
 * ```
 */
export const tailwindTheme = {
  colors: {
    brand: {
      DEFAULT: brand[700],
      light: brand[500],
      lighter: brand[400],
      dark: brand[800],
      darker: brand[900],
      50: brand[50],
      100: brand[100],
      200: brand[200],
      300: brand[300],
      400: brand[400],
      500: brand[500],
      600: brand[600],
      700: brand[700],
      800: brand[800],
      900: brand[900],
    },
    secondary: {
      DEFAULT: secondary[700],
      light: secondary[500],
      lighter: secondary[400],
      dark: secondary[800],
      darker: secondary[900],
      50: secondary[50],
      100: secondary[100],
      200: secondary[200],
      300: secondary[300],
      400: secondary[400],
      500: secondary[500],
      600: secondary[600],
      700: secondary[700],
      800: secondary[800],
      900: secondary[900],
    },
    neutral: { ...neutral },
    success: semantic.success,
    warning: semantic.warning,
    error: semantic.error,
    info: semantic.info,
    phase: { ...phase },
  },
  fontFamily: {
    sans: fontFamily.sans,
    mono: fontFamily.mono,
  },
} as const;

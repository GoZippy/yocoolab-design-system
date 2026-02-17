import { brand, secondary, neutral, semantic, phase } from '../tokens/colors';
import { fontFamily, fontSize, fontWeight, lineHeight } from '../tokens/typography';
import { spacing } from '../tokens/spacing';
import { borderRadius } from '../tokens/borders';
import { shadow, shadowDark } from '../tokens/shadows';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';

function entries<T extends Record<string, unknown>>(obj: T) {
  return Object.entries(obj) as [keyof T & string, T[keyof T & string]][];
}

function colorVars(prefix: string, palette: Record<string, string>): string {
  return entries(palette)
    .map(([key, val]) => `  --yc-${prefix}-${key}: ${val};`)
    .join('\n');
}

function tokenVars(prefix: string, obj: Record<string, string | number>): string {
  return entries(obj)
    .map(([key, val]) => `  --yc-${prefix}-${key}: ${val};`)
    .join('\n');
}

function themeVars(theme: Record<string, string | number>): string {
  return entries(theme)
    .map(([key, val]) => {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `  --yc-${cssKey}: ${val};`;
    })
    .join('\n');
}

export function generateCSS(): string {
  return `:root {
  /* Brand colors (pink) */
${colorVars('color-brand', brand)}

  /* Secondary colors (purple) */
${colorVars('color-secondary', secondary)}

  /* Neutral colors */
${colorVars('color-neutral', neutral)}

  /* Semantic colors */
${colorVars('color', semantic)}

  /* Phase colors */
${colorVars('color-phase', phase)}

  /* Typography */
${tokenVars('font', fontFamily)}
${tokenVars('font-size', fontSize)}
${tokenVars('font-weight', fontWeight)}
${tokenVars('line-height', lineHeight)}

  /* Spacing */
${tokenVars('space', spacing)}

  /* Border radius */
${tokenVars('radius', borderRadius)}

  /* Shadows */
${tokenVars('shadow', shadow)}

  /* Semantic theme (light) */
${themeVars(lightTheme as unknown as Record<string, string>)}
}

[data-theme="dark"] {
  /* Shadows (dark) */
${tokenVars('shadow', shadowDark)}

  /* Semantic theme (dark) */
${themeVars(darkTheme as unknown as Record<string, string>)}
}
`;
}

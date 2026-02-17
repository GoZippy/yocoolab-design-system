import { brand, neutral } from '../tokens/colors';
import { shadowDark } from '../tokens/shadows';
import type { SemanticTheme } from './types';

/** Convert hex to rgba — keeps all colors derived from tokens */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const darkTheme: SemanticTheme = {
  colorPrimary: brand[500],
  colorPrimaryHover: brand[400],
  colorPrimaryActive: brand[600],
  colorPrimaryBg: hexToRgba(brand[500], 0.1),

  colorBgContainer: neutral[900],
  colorBgLayout: neutral[950],
  colorBgElevated: neutral[800],

  colorBorder: neutral[600],
  colorBorderSecondary: neutral[700],

  colorText: 'rgba(255, 255, 255, 0.87)',
  colorTextSecondary: 'rgba(255, 255, 255, 0.75)',
  colorTextTertiary: 'rgba(255, 255, 255, 0.60)',
  colorTextDisabled: 'rgba(255, 255, 255, 0.45)',

  colorFill: 'rgba(255, 255, 255, 0.12)',
  colorFillSecondary: 'rgba(255, 255, 255, 0.08)',
  colorFillTertiary: 'rgba(255, 255, 255, 0.04)',

  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1890ff',

  shadow: shadowDark.md,
  shadowLg: shadowDark.lg,
};

import { brand, neutral, semantic } from '../tokens/colors';
import { shadow } from '../tokens/shadows';
import type { SemanticTheme } from './types';

export const lightTheme: SemanticTheme = {
  colorPrimary: brand[700],
  colorPrimaryHover: brand[800],
  colorPrimaryActive: brand[900],
  colorPrimaryBg: brand[50],

  colorBgContainer: '#ffffff',
  colorBgLayout: '#f8f7fc',
  colorBgElevated: '#ffffff',

  colorBorder: neutral[300],
  colorBorderSecondary: neutral[200],

  colorText: neutral[900],
  colorTextSecondary: neutral[600],     // 7:1 contrast on white
  colorTextTertiary: neutral[500],       // 4.6:1 contrast
  colorTextDisabled: neutral[400],       // 3.0:1 (acceptable for disabled)

  colorFill: 'rgba(0, 0, 0, 0.04)',
  colorFillSecondary: 'rgba(0, 0, 0, 0.02)',
  colorFillTertiary: 'rgba(0, 0, 0, 0.01)',

  colorSuccess: semantic.success,
  colorWarning: semantic.warning,
  colorError: semantic.error,
  colorInfo: semantic.info,

  shadow: shadow.md,
  shadowLg: shadow.lg,
};

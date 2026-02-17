export interface SemanticTheme {
  // Primary
  colorPrimary: string;
  colorPrimaryHover: string;
  colorPrimaryActive: string;
  colorPrimaryBg: string;

  // Backgrounds
  colorBgContainer: string;
  colorBgLayout: string;
  colorBgElevated: string;

  // Borders
  colorBorder: string;
  colorBorderSecondary: string;

  // Text
  colorText: string;
  colorTextSecondary: string;
  colorTextTertiary: string;
  colorTextDisabled: string;

  // Fill
  colorFill: string;
  colorFillSecondary: string;
  colorFillTertiary: string;

  // Status
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;

  // Shadows
  shadow: string;
  shadowLg: string;
}

export type ThemeMode = 'light' | 'dark';

import { brand, secondary, neutral } from '../tokens/colors';
import { borderRadius } from '../tokens/borders';
import { fontFamily } from '../tokens/typography';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';
import { phase } from '../tokens/colors';
import type { ThemeMode } from '../themes/types';

/**
 * Helper: convert a hex color to rgba string.
 * All opacity values derive from here — nothing hardcoded.
 */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Generate an Ant Design v6 ThemeConfig for the given mode.
 *
 * Usage:
 * ```tsx
 * import { generateAntdTheme } from '@yocoolab/design-system/antd';
 * import { ConfigProvider, theme } from 'antd';
 *
 * const themeConfig = generateAntdTheme('light');
 * <ConfigProvider theme={themeConfig}>...</ConfigProvider>
 * ```
 */
export function generateAntdTheme(mode: ThemeMode) {
  const t = mode === 'light' ? lightTheme : darkTheme;

  return {
    token: {
      colorPrimary: t.colorPrimary,
      colorBgContainer: t.colorBgContainer,
      colorBgLayout: t.colorBgLayout,
      colorBgElevated: t.colorBgElevated,
      colorBorder: t.colorBorder,
      colorBorderSecondary: t.colorBorderSecondary,
      colorText: t.colorText,
      colorTextSecondary: t.colorTextSecondary,
      colorTextTertiary: t.colorTextTertiary,
      colorTextDisabled: t.colorTextDisabled,
      colorFill: t.colorFill,
      colorFillSecondary: t.colorFillSecondary,
      colorFillTertiary: t.colorFillTertiary,
      colorSuccess: t.colorSuccess,
      colorWarning: t.colorWarning,
      colorError: t.colorError,
      colorInfo: t.colorInfo,
      borderRadius: parseInt(borderRadius.lg),
      fontFamily: fontFamily.sans,
    },
    components: {
      Card: {
        borderRadiusLG: parseInt(borderRadius['2xl']),
        colorBgContainer: t.colorBgContainer,
      },
      Button: {
        borderRadius: parseInt(borderRadius.md),
      },
      Menu: {
        itemBorderRadius: parseInt(borderRadius.lg),
        colorBgContainer: 'transparent',
        itemColor: t.colorTextSecondary,
        itemSelectedColor: mode === 'light' ? neutral[900] : '#ffffff',
        itemSelectedBg: hexToRgba(brand[700], mode === 'light' ? 0.1 : 0.25),
        itemHoverBg: t.colorFill,
      },
      Layout: {
        siderBg: mode === 'light' ? t.colorBgContainer : t.colorBgLayout,
        headerBg:
          mode === 'light'
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(31, 31, 31, 0.95)',
        ...(mode === 'dark' ? { bodyBg: t.colorBgLayout } : {}),
      },
      Table: {
        headerBg: mode === 'light' ? neutral[100] : t.colorBgElevated,
        ...(mode === 'dark'
          ? {
              colorBgContainer: t.colorBgContainer,
              rowHoverBg: 'rgba(255, 255, 255, 0.04)',
            }
          : {}),
      },
      ...(mode === 'dark'
        ? {
            Modal: {
              contentBg: t.colorBgContainer,
              headerBg: t.colorBgContainer,
            },
            Select: {
              colorBgContainer: t.colorBgLayout,
              colorBgElevated: t.colorBgContainer,
            },
            Input: {
              colorBgContainer: t.colorBgLayout,
            },
          }
        : {}),
    },
  };
}

/** Phase colors for Double Diamond workflow */
export const PHASE_COLORS = phase;

/** Secondary (purple) palette for accents */
export const SECONDARY_COLORS = secondary;

/** WIP limits for Kanban boards */
export const WIP_LIMITS = {
  discover: 0,
  define: 5,
  develop: 8,
  deliver: 3,
} as const;

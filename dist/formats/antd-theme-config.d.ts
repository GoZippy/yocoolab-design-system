import { ThemeMode } from '../themes/types';
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
export declare function generateAntdTheme(mode: ThemeMode): {
    token: {
        colorPrimary: string;
        colorBgContainer: string;
        colorBgLayout: string;
        colorBgElevated: string;
        colorBorder: string;
        colorBorderSecondary: string;
        colorText: string;
        colorTextSecondary: string;
        colorTextTertiary: string;
        colorTextDisabled: string;
        colorFill: string;
        colorFillSecondary: string;
        colorFillTertiary: string;
        colorSuccess: string;
        colorWarning: string;
        colorError: string;
        colorInfo: string;
        borderRadius: number;
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";
    };
    components: {
        Modal?: {
            contentBg: string;
            headerBg: string;
        } | undefined;
        Select?: {
            colorBgContainer: string;
            colorBgElevated: string;
        } | undefined;
        Input?: {
            colorBgContainer: string;
        } | undefined;
        Card: {
            borderRadiusLG: number;
            colorBgContainer: string;
        };
        Button: {
            borderRadius: number;
        };
        Menu: {
            itemBorderRadius: number;
            colorBgContainer: string;
            itemColor: string;
            itemSelectedColor: string;
            itemSelectedBg: string;
            itemHoverBg: string;
        };
        Layout: {
            bodyBg?: string | undefined;
            siderBg: string;
            headerBg: string;
        };
        Table: {
            colorBgContainer?: string | undefined;
            rowHoverBg?: string | undefined;
            headerBg: string;
        };
    };
};
/** Phase colors for Double Diamond workflow */
export declare const PHASE_COLORS: {
    readonly discover: "#6366f1";
    readonly define: "#8b5cf6";
    readonly develop: "#0891b2";
    readonly deliver: "#059669";
};
/** Secondary (purple) palette for accents */
export declare const SECONDARY_COLORS: {
    readonly 50: "#f5f3ff";
    readonly 100: "#ede9fe";
    readonly 200: "#ddd6fe";
    readonly 300: "#c4b5fd";
    readonly 400: "#a78bfa";
    readonly 500: "#8b5cf6";
    readonly 600: "#7c3aed";
    readonly 700: "#6d29d9";
    readonly 800: "#5b21b6";
    readonly 900: "#4c1d95";
};
/** WIP limits for Kanban boards */
export declare const WIP_LIMITS: {
    readonly discover: 0;
    readonly define: 5;
    readonly develop: 8;
    readonly deliver: 3;
};
//# sourceMappingURL=antd-theme-config.d.ts.map
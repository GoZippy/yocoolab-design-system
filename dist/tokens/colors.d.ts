/** Brand color palette — pink scale centered on #E64FA9 */
export declare const brand: {
    readonly 50: "#fdf2f8";
    readonly 100: "#fce7f3";
    readonly 200: "#fbcfe8";
    readonly 300: "#f9a8d4";
    readonly 400: "#f472b6";
    readonly 500: "#ec4899";
    readonly 600: "#e64fa9";
    readonly 700: "#e64fa9";
    readonly 800: "#be185d";
    readonly 900: "#9d174d";
};
/** Secondary color palette — purple accent */
export declare const secondary: {
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
/** Neutral gray palette — Tailwind zinc scale */
export declare const neutral: {
    readonly 50: "#fafafa";
    readonly 100: "#f4f4f5";
    readonly 200: "#e4e4e7";
    readonly 300: "#d4d4d8";
    readonly 400: "#a1a1aa";
    readonly 500: "#71717a";
    readonly 600: "#52525b";
    readonly 700: "#3f3f46";
    readonly 800: "#27272a";
    readonly 900: "#18181b";
    readonly 950: "#09090b";
};
/** Semantic status colors — WCAG AA contrast-safe */
export declare const semantic: {
    readonly success: "#059669";
    readonly warning: "#d97706";
    readonly error: "#dc2626";
    readonly info: "#2563eb";
};
/** Double Diamond workflow phase colors */
export declare const phase: {
    readonly discover: "#6366f1";
    readonly define: "#8b5cf6";
    readonly develop: "#0891b2";
    readonly deliver: "#059669";
};
export type BrandShade = keyof typeof brand;
export type SecondaryShade = keyof typeof secondary;
export type NeutralShade = keyof typeof neutral;
export type SemanticColor = keyof typeof semantic;
export type PhaseColor = keyof typeof phase;
//# sourceMappingURL=colors.d.ts.map
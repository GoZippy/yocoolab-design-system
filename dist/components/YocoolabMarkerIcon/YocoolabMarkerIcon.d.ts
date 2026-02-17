import { default as React } from 'react';
export type PointerPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
interface YocoolabMarkerIconProps {
    /** Where the triangular pointer should point (toward the comment panel) */
    pointerPosition?: PointerPosition;
    /** Rendered size in pixels */
    size?: number;
    /** When true, uses success green instead of brand colors */
    resolved?: boolean;
    className?: string;
}
export declare const YocoolabMarkerIcon: React.FC<YocoolabMarkerIconProps>;
export {};
//# sourceMappingURL=YocoolabMarkerIcon.d.ts.map
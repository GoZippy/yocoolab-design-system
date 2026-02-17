import { default as React } from 'react';
interface AccessibleIconProps {
    /** Material Symbols icon name */
    name: string;
    /** Icon size in pixels */
    size?: number;
    /** Accessible label for screen readers (required for interactive icons) */
    label?: string;
    /** Set to true for purely decorative icons */
    decorative?: boolean;
    /** Additional CSS class names */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
/**
 * Accessible icon component using Material Symbols.
 * - Use `decorative` for icons that are purely visual (next to text labels)
 * - Use `label` for icons that convey meaning on their own (icon-only buttons)
 */
export declare const AccessibleIcon: React.FC<AccessibleIconProps>;
export {};
//# sourceMappingURL=AccessibleIcon.d.ts.map
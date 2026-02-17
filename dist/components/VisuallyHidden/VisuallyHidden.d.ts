import { default as React } from 'react';
interface VisuallyHiddenProps {
    children: React.ReactNode;
    /** HTML element to render (default: span) */
    as?: 'span' | 'div' | 'label';
    /** For label elements, the associated input id */
    htmlFor?: string;
}
/**
 * Visually hides content while keeping it accessible to screen readers.
 * Use this for:
 * - Form labels when you want visual placeholder instead
 * - Skip links that appear on focus
 * - Additional context for screen reader users
 */
export declare const VisuallyHidden: React.FC<VisuallyHiddenProps>;
export {};
//# sourceMappingURL=VisuallyHidden.d.ts.map
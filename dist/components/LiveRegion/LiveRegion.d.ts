import { default as React } from 'react';
interface LiveRegionProps {
    /** The message to announce to screen readers */
    message: string;
    /** Politeness level: 'polite' waits for pause, 'assertive' interrupts */
    type?: 'polite' | 'assertive';
    /** Whether the entire region should be announced on change */
    atomic?: boolean;
}
/**
 * ARIA live region for announcing dynamic content changes to screen readers.
 * Use this for:
 * - Loading state announcements
 * - Form submission results
 * - Drag-and-drop status updates
 * - Any content that changes without page navigation
 */
export declare const LiveRegion: React.FC<LiveRegionProps>;
export {};
//# sourceMappingURL=LiveRegion.d.ts.map
import { default as React } from 'react';
export type Phase = 'discover' | 'define' | 'develop' | 'deliver';
interface PhaseBadgeProps {
    phase: Phase;
    size?: 'small' | 'default';
    /** Show icon alongside text (default: true) */
    showIcon?: boolean;
}
export declare const PhaseBadge: React.FC<PhaseBadgeProps>;
export {};
//# sourceMappingURL=PhaseBadge.d.ts.map
import { default as React } from 'react';
export type ThreadStatus = 'open' | 'resolved' | 'closed';
interface StatusBadgeProps {
    status: ThreadStatus;
    size?: 'small' | 'default';
    /** Show icon alongside text (default: true) */
    showIcon?: boolean;
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
export {};
//# sourceMappingURL=StatusBadge.d.ts.map
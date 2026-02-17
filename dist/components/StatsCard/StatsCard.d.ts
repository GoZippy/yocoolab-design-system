import { default as React } from 'react';
interface StatsCardProps {
    title: string;
    value: number | string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    color?: string;
    loading?: boolean;
    /** Trend direction for visual indicator */
    trend?: 'up' | 'down' | 'neutral';
    /** Trend value to display (e.g., "+12%") */
    trendValue?: string;
    /** Card size variant */
    size?: 'default' | 'large';
}
export declare const StatsCard: React.FC<StatsCardProps>;
export {};
//# sourceMappingURL=StatsCard.d.ts.map
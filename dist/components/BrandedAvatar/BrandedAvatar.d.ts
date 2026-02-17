import { default as React } from 'react';
export interface BrandedAvatarProps {
    /** Display text — typically initials (1-2 characters) or a single letter */
    initials: string;
    /** Background color of the egg circle. Defaults to brand pink */
    bgColor?: string;
    /** Size in pixels. Defaults to 28 (matches rc-avatar) */
    size?: number;
    /** Optional image URL — when provided, renders a circular photo instead of initials */
    src?: string;
    /** Alt text for image (used when src is provided) */
    alt?: string;
    /** Additional class name */
    className?: string;
}
export declare const BrandedAvatar: React.FC<BrandedAvatarProps>;
//# sourceMappingURL=BrandedAvatar.d.ts.map
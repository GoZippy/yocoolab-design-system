import React from 'react';

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
export const AccessibleIcon: React.FC<AccessibleIconProps> = ({
  name,
  size = 20,
  label,
  decorative = false,
  className,
  style,
}) => {
  const isDecorative = decorative || !label;

  return (
    <span
      className={`material-symbols-rounded ${className || ''}`}
      style={{ fontSize: size, lineHeight: 1, ...style }}
      aria-hidden={isDecorative}
      aria-label={!isDecorative ? label : undefined}
      role={!isDecorative && label ? 'img' : undefined}
    >
      {name}
    </span>
  );
};

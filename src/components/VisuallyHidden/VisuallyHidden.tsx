import React from 'react';

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
export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  as: Component = 'span',
  htmlFor,
}) => {
  return (
    <Component
      htmlFor={htmlFor}
      style={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      {children}
    </Component>
  );
};

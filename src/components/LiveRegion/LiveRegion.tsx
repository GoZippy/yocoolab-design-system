import React from 'react';

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
export const LiveRegion: React.FC<LiveRegionProps> = ({
  message,
  type = 'polite',
  atomic = true,
}) => {
  return (
    <div
      aria-live={type}
      aria-atomic={atomic}
      role="status"
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
      {message}
    </div>
  );
};

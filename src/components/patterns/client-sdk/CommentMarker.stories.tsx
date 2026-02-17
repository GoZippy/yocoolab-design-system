import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/figma-theme.css';
import { neutral } from '../../../tokens/colors';
import { YocoolabMarkerIcon } from '../../YocoolabMarkerIcon';
import type { PointerPosition } from '../../YocoolabMarkerIcon';

interface MarkerProps {
  isResolved?: boolean;
  isActive?: boolean;
  previewText?: string;
  pointerPosition?: PointerPosition;
  x?: number;
  y?: number;
}

const CommentMarkerDemo: React.FC<MarkerProps> = ({
  isResolved = false,
  isActive = false,
  previewText,
  pointerPosition = 'top-right',
  x = 120,
  y = 130,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div style={{ position: 'relative', height: 250, background: neutral[200], borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: 16, color: neutral[500], fontSize: 13 }}>
        Yocoolab logo marker. The pointer corner faces the comment panel.
      </div>
      <div
        className={`rc-marker ${isResolved ? 'resolved' : ''} ${isActive ? 'active' : ''}`}
        style={{
          left: x,
          top: y,
          transform: 'translate(-50%, -50%)',
        }}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        <YocoolabMarkerIcon
          pointerPosition={pointerPosition}
          resolved={isResolved}
          size={40}
        />

        {showPreview && previewText && (
          <div className="rc-marker-preview" style={{ opacity: 1 }}>
            <p className="rc-marker-preview-content">{previewText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const meta: Meta<typeof CommentMarkerDemo> = {
  title: 'Patterns/Client SDK/CommentMarker',
  component: CommentMarkerDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentMarkerDemo>;

export const Default: Story = {
  args: { pointerPosition: 'top-right', x: 120, y: 130 },
};

export const PointerTopLeft: Story = {
  args: { pointerPosition: 'top-left', x: 120, y: 130 },
};

export const PointerBottomRight: Story = {
  args: { pointerPosition: 'bottom-right', x: 120, y: 130 },
};

export const PointerBottomLeft: Story = {
  args: { pointerPosition: 'bottom-left', x: 120, y: 130 },
};

export const Active: Story = {
  args: { isActive: true, pointerPosition: 'top-right', x: 120, y: 130 },
};

export const Resolved: Story = {
  args: { isResolved: true, pointerPosition: 'top-right', x: 120, y: 130 },
};

export const WithPreview: Story = {
  args: {
    pointerPosition: 'top-right',
    x: 200,
    y: 150,
    previewText: 'The button alignment here looks off. Can we move it 8px to the left?',
  },
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 300, background: neutral[200], borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: 16, color: neutral[500], fontSize: 13 }}>
        All four pointer position variants of the yocoolab marker.
      </div>
      {([
        { pos: 'top-right' as const, x: 100, y: 140 },
        { pos: 'bottom-right' as const, x: 220, y: 140 },
        { pos: 'top-left' as const, x: 340, y: 140 },
        { pos: 'bottom-left' as const, x: 460, y: 140 },
      ]).map((m) => (
        <div key={m.pos}>
          <div
            className="rc-marker"
            style={{ left: m.x, top: m.y, transform: 'translate(-50%, -50%)' }}
          >
            <YocoolabMarkerIcon pointerPosition={m.pos} size={40} />
          </div>
          <span
            style={{
              position: 'absolute',
              left: m.x,
              top: m.y + 28,
              transform: 'translateX(-50%)',
              fontSize: 11,
              color: neutral[500],
              whiteSpace: 'nowrap',
            }}
          >
            {m.pos}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const MultipleMarkers: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 300, background: neutral[200], borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: 16, color: neutral[500], fontSize: 13 }}>
        Multiple markers — open, active, and resolved states with different pointer directions.
      </div>
      {[
        { pos: 'top-right' as const, x: 80, y: 110, resolved: false, active: false },
        { pos: 'top-left' as const, x: 200, y: 90, resolved: false, active: true },
        { pos: 'bottom-right' as const, x: 320, y: 150, resolved: true, active: false },
        { pos: 'bottom-left' as const, x: 150, y: 210, resolved: false, active: false },
      ].map((m, i) => (
        <div
          key={i}
          className={`rc-marker ${m.resolved ? 'resolved' : ''} ${m.active ? 'active' : ''}`}
          style={{ left: m.x, top: m.y, transform: 'translate(-50%, -50%)' }}
        >
          <YocoolabMarkerIcon pointerPosition={m.pos} resolved={m.resolved} size={40} />
        </div>
      ))}
    </div>
  ),
};

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { brand, neutral, semantic } from '../../../tokens/colors';

/**
 * The floating action button (FAB) from the client SDK.
 * Used to toggle the comment panel open/closed.
 * Styled with primary brand color, positioned at bottom-right.
 */

interface ToggleFABDemoProps {
  position?: 'right' | 'left';
  hasUnread?: boolean;
}

const ToggleFABDemo: React.FC<ToggleFABDemoProps> = ({
  position = 'right',
  hasUnread = false,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div style={{ position: 'relative', height: 200, background: neutral[100], borderRadius: 8 }}>
      <button
        onClick={() => setActive(!active)}
        style={{
          position: 'absolute',
          [position === 'right' ? 'right' : 'left']: 24,
          bottom: 24,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: active ? brand[800] : brand[700],
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {active ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 651 661" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M244.009 190.732C279.836 179.091 318.428 179.091 354.255 190.732C390.082 202.372 421.305 225.057 443.447 255.533C465.589 286.009 477.514 322.713 477.514 360.384C477.514 398.054 465.589 434.757 443.447 465.233C421.305 495.71 390.082 518.394 354.255 530.035C318.428 541.675 279.836 541.675 244.009 530.035C208.182 518.394 176.96 495.709 154.818 465.233C132.676 434.757 120.75 398.054 120.75 360.384C120.75 322.713 132.676 286.009 154.818 255.533C176.96 225.057 208.182 202.372 244.009 190.732ZM309.962 190.259C302.923 187.972 295.341 187.972 288.302 190.259C281.263 192.546 275.129 197.003 270.778 202.99C266.428 208.978 264.085 216.19 264.085 223.591C264.085 230.992 266.428 238.203 270.778 244.191C275.129 250.178 281.263 254.635 288.302 256.922C295.341 259.209 302.923 259.209 309.962 256.922C317.001 254.635 323.135 250.178 327.486 244.191C331.836 238.203 334.179 230.992 334.179 223.591C334.179 216.19 331.836 208.978 327.486 202.99C323.135 197.003 317.001 192.546 309.962 190.259Z" fill="currentColor"/>
            <path d="M505.485 271.745C482.848 219.489 441.25 177.358 389.367 154.03H505.485V271.745Z" fill="currentColor"/>
          </svg>
        )}
      </button>
      {hasUnread && !active && (
        <div
          style={{
            position: 'absolute',
            [position === 'right' ? 'right' : 'left']: 24,
            bottom: 72,
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: semantic.error,
            border: `2px solid ${neutral[100]}`,
          }}
        />
      )}
      <div style={{ position: 'absolute', top: 16, left: 16, color: neutral[500], fontSize: 13 }}>
        {active ? 'Panel is open — click FAB to close' : 'Click the FAB to toggle the comment panel'}
      </div>
    </div>
  );
};

const meta: Meta<typeof ToggleFABDemo> = {
  title: 'Patterns/Feedback/ToggleFAB',
  component: ToggleFABDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleFABDemo>;

export const Default: Story = { args: { position: 'right', hasUnread: false } };
export const LeftPosition: Story = { args: { position: 'left', hasUnread: false } };
export const WithUnread: Story = { args: { position: 'right', hasUnread: true } };

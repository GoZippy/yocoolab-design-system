import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/figma-theme.css';
import { neutral } from '../../../tokens/colors';
import { BrandedAvatar } from '../../BrandedAvatar';

const COMMENT_CATEGORIES = [
  'front-end', 'back-end', 'api', 'design', 'performance',
  'accessibility', 'security', 'data', 'devops',
] as const;

type CommentCategory = (typeof COMMENT_CATEGORIES)[number];

interface MockMarker {
  id: string;
  x: number;
  y: number;
  creatorName: string;
  content: string;
  status: 'open' | 'resolved';
  contextType: CommentCategory;
  replyCount: number;
}

const mockMarkers: MockMarker[] = [
  { id: '1', x: 120, y: 80, creatorName: 'Alice', content: 'Button alignment is off here.', status: 'open', contextType: 'design', replyCount: 2 },
  { id: '2', x: 340, y: 200, creatorName: 'Bob', content: 'This text overflows on mobile.', status: 'open', contextType: 'front-end', replyCount: 0 },
  { id: '3', x: 500, y: 140, creatorName: 'Charlie', content: 'Fixed the contrast ratio.', status: 'resolved', contextType: 'accessibility', replyCount: 3 },
];

// ─── Marker component ────────────────────────────────────────────────────

function MarkerIcon({
  number,
  isActive,
  isResolved,
  onClick,
  style,
}: {
  number: number;
  isActive: boolean;
  isResolved: boolean;
  onClick: () => void;
  style: React.CSSProperties;
}) {
  return (
    <div
      className={`rc-marker ${isActive ? 'active' : ''} ${isResolved ? 'resolved' : ''}`}
      onClick={onClick}
      style={{
        position: 'absolute',
        cursor: 'pointer',
        zIndex: 10,
        ...style,
      }}
    >
      {number}
    </div>
  );
}

// ─── Toggle FAB ──────────────────────────────────────────────────────────

function ToggleFAB({
  isPanelOpen,
  isAddingComment,
  threadCount,
  onClick,
  onAddClick,
}: {
  isPanelOpen: boolean;
  isAddingComment: boolean;
  threadCount: number;
  onClick: () => void;
  onAddClick: () => void;
}) {
  return (
    <div style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', gap: 8, zIndex: 20 }}>
      {isPanelOpen && (
        <button
          className={`rc-button ${isAddingComment ? '' : 'rc-button-secondary'}`}
          onClick={onAddClick}
          style={{ borderRadius: 20, padding: '8px 16px', fontSize: 13 }}
        >
          {isAddingComment ? 'Click to place...' : '+ Add comment'}
        </button>
      )}
      <button
        className="rc-toggle-button"
        onClick={onClick}
        title={isPanelOpen ? 'Close comments' : 'Open comments'}
        style={{ position: 'relative' }}
      >
        <svg width="28" height="28" viewBox="0 0 651 661" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M244.009 190.732C279.836 179.091 318.428 179.091 354.255 190.732C390.082 202.372 421.305 225.057 443.447 255.533C465.589 286.009 477.514 322.713 477.514 360.384C477.514 398.054 465.589 434.757 443.447 465.233C421.305 495.71 390.082 518.394 354.255 530.035C318.428 541.675 279.836 541.675 244.009 530.035C208.182 518.394 176.96 495.709 154.818 465.233C132.676 434.757 120.75 398.054 120.75 360.384C120.75 322.713 132.676 286.009 154.818 255.533C176.96 225.057 208.182 202.372 244.009 190.732ZM309.962 190.259C302.923 187.972 295.341 187.972 288.302 190.259C281.263 192.546 275.129 197.003 270.778 202.99C266.428 208.978 264.085 216.19 264.085 223.591C264.085 230.992 266.428 238.203 270.778 244.191C275.129 250.178 281.263 254.635 288.302 256.922C295.341 259.209 302.923 259.209 309.962 256.922C317.001 254.635 323.135 250.178 327.486 244.191C331.836 238.203 334.179 230.992 334.179 223.591C334.179 216.19 331.836 208.978 327.486 202.99C323.135 197.003 317.001 192.546 309.962 190.259Z" fill="currentColor"/>
          <path d="M505.485 271.745C482.848 219.489 441.25 177.358 389.367 154.03H505.485V271.745Z" fill="currentColor"/>
        </svg>
        {threadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: -4,
              right: -4,
              background: 'var(--figma-error, #dc2626)',
              color: 'white',
              borderRadius: 10,
              padding: '2px 6px',
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            {threadCount}
          </span>
        )}
      </button>
    </div>
  );
}

// ─── Mini panel (simplified for overlay story) ───────────────────────────

function MiniPanel({
  isOpen,
  markers,
  activeMarkerId,
  onClose,
  onMarkerSelect,
}: {
  isOpen: boolean;
  markers: MockMarker[];
  activeMarkerId: string | null;
  onClose: () => void;
  onMarkerSelect: (id: string) => void;
}) {
  const openMarkers = markers.filter((m) => m.status === 'open');

  return (
    <div
      className={`rc-panel ${isOpen ? 'open' : ''}`}
      style={{
        position: 'absolute',
        right: 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      }}
    >
      <div className="rc-panel-header">
        <h2 className="rc-panel-title">Comments</h2>
        <button className="rc-panel-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="rc-thread-list">
        {openMarkers.map((marker) => (
          <div
            key={marker.id}
            className={`rc-thread ${activeMarkerId === marker.id ? 'active' : ''}`}
            style={{ cursor: 'pointer', borderLeft: activeMarkerId === marker.id ? '3px solid var(--figma-primary)' : '3px solid transparent' }}
            onClick={() => onMarkerSelect(marker.id)}
          >
            <div className="rc-thread-header">
              <BrandedAvatar initials={marker.creatorName.charAt(0)} />
              <div className="rc-thread-meta">
                <div>
                  <span className="rc-thread-author">{marker.creatorName}</span>
                </div>
              </div>
            </div>
            <div className="rc-thread-content">{marker.content}</div>
            <div className="rc-thread-footer">
              {marker.replyCount > 0 && (
                <div className="rc-thread-replies">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 17l-5-5 5-5M4 12h11a4 4 0 0 1 0 8h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{marker.replyCount} {marker.replyCount === 1 ? 'reply' : 'replies'}</span>
                </div>
              )}
              <span className="rc-category-badge" style={{ marginLeft: 'auto' }}>
                {marker.contextType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Pending marker (click-to-place indicator) ───────────────────────────

function PendingMarker({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="rc-marker new"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        zIndex: 10,
      }}
    >
      +
    </div>
  );
}

// ─── Main CommentOverlay demo ────────────────────────────────────────────

interface CommentOverlayDemoProps {
  showMarkers?: boolean;
  initialPanelOpen?: boolean;
}

const CommentOverlayDemo: React.FC<CommentOverlayDemoProps> = ({
  showMarkers = true,
  initialPanelOpen = false,
}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(initialPanelOpen);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [pendingPosition, setPendingPosition] = useState<{ x: number; y: number } | null>(null);

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    if (isPanelOpen) {
      setActiveMarkerId(null);
      setIsAddingComment(false);
      setPendingPosition(null);
    }
  };

  const handleMarkerClick = (id: string) => {
    setActiveMarkerId(activeMarkerId === id ? null : id);
    setIsPanelOpen(true);
    setIsAddingComment(false);
    setPendingPosition(null);
  };

  const handleAddClick = () => {
    if (isAddingComment) {
      setIsAddingComment(false);
    } else {
      setIsAddingComment(true);
      setActiveMarkerId(null);
      setPendingPosition(null);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (!isAddingComment) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPendingPosition({ x, y });
    setIsAddingComment(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        height: 500,
        background: neutral[200],
        borderRadius: 8,
        overflow: 'hidden',
        cursor: isAddingComment ? 'crosshair' : 'default',
      }}
      onClick={handleBackgroundClick}
    >
      {/* Simulated page content */}
      <div style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 32, background: neutral[300], borderRadius: 6 }} />
          <div style={{ width: 120, height: 32, background: neutral[300], borderRadius: 6 }} />
        </div>
        <div style={{ height: 60, background: neutral[300], borderRadius: 8, marginBottom: 16 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
          <div style={{ height: 100, background: neutral[300], borderRadius: 8 }} />
          <div style={{ height: 100, background: neutral[300], borderRadius: 8 }} />
          <div style={{ height: 100, background: neutral[300], borderRadius: 8 }} />
        </div>
        <div style={{ height: 40, background: neutral[300], borderRadius: 6, width: '60%' }} />
      </div>

      {/* Comment markers */}
      {showMarkers && mockMarkers.map((marker, i) => (
        <MarkerIcon
          key={marker.id}
          number={i + 1}
          isActive={activeMarkerId === marker.id}
          isResolved={marker.status === 'resolved'}
          onClick={() => handleMarkerClick(marker.id)}
          style={{ left: marker.x, top: marker.y }}
        />
      ))}

      {/* Pending marker from click-to-place */}
      {pendingPosition && <PendingMarker x={pendingPosition.x} y={pendingPosition.y} />}

      {/* Instructions */}
      {isAddingComment && (
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--figma-primary, #E64FA9)',
            color: '#fff',
            padding: '6px 16px',
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 500,
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          Click anywhere to place a comment
        </div>
      )}

      {/* Side panel */}
      <MiniPanel
        isOpen={isPanelOpen}
        markers={mockMarkers}
        activeMarkerId={activeMarkerId}
        onClose={() => { setIsPanelOpen(false); setActiveMarkerId(null); }}
        onMarkerSelect={handleMarkerClick}
      />

      {/* Toggle FAB + Add button */}
      <ToggleFAB
        isPanelOpen={isPanelOpen}
        isAddingComment={isAddingComment}
        threadCount={mockMarkers.filter((m) => m.status === 'open').length}
        onClick={handleTogglePanel}
        onAddClick={handleAddClick}
      />
    </div>
  );
};

const meta: Meta<typeof CommentOverlayDemo> = {
  title: 'Patterns/Client SDK/CommentOverlay',
  component: CommentOverlayDemo,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof CommentOverlayDemo>;

export const Default: Story = {
  name: 'Overlay with Markers',
  args: { showMarkers: true, initialPanelOpen: false },
};

export const PanelOpen: Story = {
  name: 'Panel Open',
  args: { showMarkers: true, initialPanelOpen: true },
};

export const NoMarkers: Story = {
  name: 'Empty State',
  args: { showMarkers: false, initialPanelOpen: false },
};

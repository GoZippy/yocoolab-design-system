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

interface MockMessage {
  id: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  edited?: boolean;
}

interface MockThread {
  id: string;
  creatorName: string;
  createdAt: string;
  content: string;
  replyCount: number;
  status: 'open' | 'resolved';
  contextType: CommentCategory;
  messages: MockMessage[];
}

const mockThreads: MockThread[] = [
  {
    id: '1',
    creatorName: 'Alice Johnson',
    createdAt: '2 min ago',
    content: 'The button alignment looks off on mobile breakpoints.',
    replyCount: 3,
    status: 'open',
    contextType: 'design',
    messages: [
      { id: 'm1', authorName: 'Alice Johnson', content: 'The button alignment looks off on mobile breakpoints.', createdAt: '2 min ago' },
      { id: 'm2', authorName: 'Bob Smith', content: 'I see it too — the flex container is missing `flex-wrap`.', createdAt: '1 min ago' },
      { id: 'm3', authorName: 'Alice Johnson', content: 'Good catch, can you push a fix?', createdAt: '30 sec ago' },
    ],
  },
  {
    id: '2',
    creatorName: 'Bob Smith',
    createdAt: '1 hour ago',
    content: 'This API endpoint should return paginated results.',
    replyCount: 1,
    status: 'open',
    contextType: 'api',
    messages: [
      { id: 'm4', authorName: 'Bob Smith', content: 'This API endpoint should return paginated results.', createdAt: '1 hour ago' },
      { id: 'm5', authorName: 'Charlie Brown', content: 'Agreed, I will add cursor-based pagination.', createdAt: '45 min ago' },
    ],
  },
  {
    id: '3',
    creatorName: 'Charlie Brown',
    createdAt: '3 days ago',
    content: 'Fixed the color contrast issue on the nav bar.',
    replyCount: 5,
    status: 'resolved',
    contextType: 'accessibility',
    messages: [
      { id: 'm6', authorName: 'Charlie Brown', content: 'Fixed the color contrast issue on the nav bar.', createdAt: '3 days ago' },
    ],
  },
  {
    id: '4',
    creatorName: 'Diana Prince',
    createdAt: '1 week ago',
    content: 'Updated the responsive breakpoints for tablet.',
    replyCount: 2,
    status: 'resolved',
    contextType: 'front-end',
    messages: [
      { id: 'm7', authorName: 'Diana Prince', content: 'Updated the responsive breakpoints for tablet.', createdAt: '1 week ago' },
    ],
  },
];

// ─── Sub-components matching client composition ──────────────────────────

/** Thread list view — mirrors client/src/components/ThreadList.tsx */
function ThreadListView({
  threads,
  onThreadSelect,
  onStartAddComment,
}: {
  threads: MockThread[];
  onThreadSelect: (t: MockThread) => void;
  onStartAddComment: () => void;
}) {
  if (threads.length === 0) {
    return (
      <div className="rc-thread-list">
        <div className="rc-empty">
          <div className="rc-empty-icon">💬</div>
          <p className="rc-empty-text">No comments yet</p>
          <button className="rc-button" onClick={onStartAddComment} style={{ marginTop: 16 }}>
            Add comment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rc-thread-list">
      <button className="rc-button" onClick={onStartAddComment} style={{ width: '100%', marginBottom: 16 }}>
        + Add comment
      </button>
      {threads.map((thread) => (
        <div key={thread.id} className="rc-thread" style={{ cursor: 'pointer' }} onClick={() => onThreadSelect(thread)}>
          <div className="rc-thread-header">
            <BrandedAvatar initials={thread.creatorName.charAt(0)} />
            <div className="rc-thread-meta">
              <div>
                <span className="rc-thread-author">{thread.creatorName}</span>
                <span className="rc-thread-time">{thread.createdAt}</span>
              </div>
            </div>
          </div>
          <div className="rc-thread-content">{thread.content}</div>
          <div className="rc-thread-footer">
            {thread.replyCount > 0 && (
              <div className="rc-thread-replies">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 17l-5-5 5-5M4 12h11a4 4 0 0 1 0 8h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{thread.replyCount} {thread.replyCount === 1 ? 'reply' : 'replies'}</span>
              </div>
            )}
            {thread.status === 'resolved' && (
              <div className="rc-thread-status resolved">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Resolved</span>
              </div>
            )}
            <span className="rc-category-badge" style={{ marginLeft: 'auto' }}>
              {thread.contextType}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Thread detail view — mirrors client/src/components/ThreadDetail.tsx */
function ThreadDetailView({
  thread,
  onBack,
}: {
  thread: MockThread;
  onBack: () => void;
}) {
  const [replyText, setReplyText] = useState('');

  return (
    <div className="rc-thread-detail">
      <div className="rc-thread-detail-header">
        <button className="rc-back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h3 className="rc-panel-title">Thread</h3>
        <button
          className={`rc-button ${thread.status === 'resolved' ? 'rc-button-secondary' : ''}`}
          style={{ marginLeft: 'auto', fontSize: 12, padding: '6px 12px' }}
        >
          {thread.status === 'resolved' ? (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 4 }}>
                <path d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Reopen
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 4 }}>
                <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Resolve
            </>
          )}
        </button>
      </div>

      <div className="rc-thread-detail-body">
        {thread.messages.map((msg) => (
          <div key={msg.id} className="rc-message">
            <BrandedAvatar initials={msg.authorName.charAt(0).toUpperCase()} />
            <div className="rc-message-content">
              <div className="rc-message-header">
                <span className="rc-message-author">{msg.authorName}</span>
                <span className="rc-message-time">{msg.createdAt}</span>
              </div>
              <p className="rc-message-text">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {thread.status !== 'resolved' && (
        <div className="rc-input-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="rc-input-wrapper">
              <textarea
                className="rc-input"
                placeholder="Add a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={1}
              />
              <button type="submit" className="rc-button" disabled={!replyText.trim()}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14.667 1.333L7.333 8.667M14.667 1.333l-4 12-3.334-5.333-5.333-3.333 12.667-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

/** New thread form view — mirrors client/src/components/NewThreadForm.tsx */
function NewThreadFormView({
  position,
  onBack,
}: {
  position: { x: number; y: number };
  onBack: () => void;
}) {
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState<CommentCategory | null>(null);

  return (
    <div className="rc-thread-detail">
      <div className="rc-thread-detail-header">
        <button className="rc-back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h3 className="rc-panel-title">New comment</h3>
      </div>

      <div className="rc-thread-detail-body">
        <div style={{ marginBottom: 12, color: 'var(--figma-text-secondary)', fontSize: 13 }}>
          Position: ({position.x}, {position.y})
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="rc-category-pills">
            {COMMENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`rc-category-pill ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(category === cat ? null : cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <textarea
            className="rc-input"
            placeholder="What's on your mind?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{ width: '100%', marginBottom: 12 }}
          />

          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button type="button" className="rc-button rc-button-secondary" onClick={onBack}>
              Cancel
            </button>
            <button type="submit" className="rc-button" disabled={!message.trim()}>
              Add comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Main CommentPanel (composition pattern) ─────────────────────────────

type PanelView = 'list' | 'detail' | 'new';

interface CommentPanelDemoProps {
  isOpen?: boolean;
  position?: 'right' | 'left';
  initialView?: PanelView;
}

const CommentPanelDemo: React.FC<CommentPanelDemoProps> = ({
  isOpen = true,
  position = 'right',
  initialView = 'list',
}) => {
  const [activeTab, setActiveTab] = useState<'open' | 'resolved'>('open');
  const [filter, setFilter] = useState<'all' | CommentCategory>('all');
  const [view, setView] = useState<PanelView>(initialView);
  const [selectedThread, setSelectedThread] = useState<MockThread | null>(
    initialView === 'detail' ? mockThreads[0] : null
  );
  const pendingPosition = initialView === 'new' ? { x: 245, y: 180 } : null;

  const filteredThreads = mockThreads.filter((t) => {
    if (t.status !== activeTab) return false;
    if (filter !== 'all' && t.contextType !== filter) return false;
    return true;
  });
  const openCount = mockThreads.filter((t) => t.status === 'open').length;

  const handleBack = () => {
    setView('list');
    setSelectedThread(null);
  };

  const handleThreadSelect = (thread: MockThread) => {
    setSelectedThread(thread);
    setView('detail');
  };

  const handleStartAddComment = () => {
    setView('new');
  };

  // Determine panel content based on view
  const renderPanelContent = () => {
    if (view === 'detail' && selectedThread) {
      return <ThreadDetailView thread={selectedThread} onBack={handleBack} />;
    }

    if (view === 'new') {
      return <NewThreadFormView position={pendingPosition || { x: 245, y: 180 }} onBack={handleBack} />;
    }

    // Default: thread list
    return (
      <>
        {/* Tabs */}
        <div className="rc-panel-tabs">
          <button
            className={`rc-panel-tab ${activeTab === 'open' ? 'active' : ''}`}
            onClick={() => setActiveTab('open')}
          >
            Open
            {openCount > 0 && <span className="rc-panel-tab-badge">{openCount}</span>}
          </button>
          <button
            className={`rc-panel-tab ${activeTab === 'resolved' ? 'active' : ''}`}
            onClick={() => setActiveTab('resolved')}
          >
            Resolved
          </button>
        </div>

        {/* Category filter */}
        <div className="rc-category-pills" style={{ padding: '8px 20px' }}>
          <button
            className={`rc-category-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {COMMENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`rc-category-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(filter === cat ? 'all' : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Thread list (composition) */}
        <ThreadListView
          threads={filteredThreads}
          onThreadSelect={handleThreadSelect}
          onStartAddComment={handleStartAddComment}
        />
      </>
    );
  };

  return (
    <div style={{ position: 'relative', height: 600, background: neutral[200], borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: 16, color: neutral[500], fontSize: 13 }}>
        Background content — the comment panel slides in from the {position}.
        <br />
        <span style={{ fontSize: 11, opacity: 0.7 }}>
          Click a thread to see the detail view. Click "+ Add comment" for the new thread form.
        </span>
      </div>

      <div
        className={`rc-panel ${isOpen ? 'open' : ''}`}
        style={{
          position: 'absolute',
          ...(position === 'right'
            ? { right: 0, transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }
            : { left: 0, right: 'auto', borderLeft: 'none', borderRight: '1px solid var(--figma-border)', transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }
          ),
        }}
      >
        {/* Header */}
        <div className="rc-panel-header">
          <h2 className="rc-panel-title">Comments</h2>
          <button className="rc-panel-close" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {renderPanelContent()}
      </div>
    </div>
  );
};

const meta: Meta<typeof CommentPanelDemo> = {
  title: 'Patterns/Client SDK/CommentPanel',
  component: CommentPanelDemo,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    initialView: {
      control: 'select',
      options: ['list', 'detail', 'new'],
      description: 'Starting view to demonstrate the composition pattern',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentPanelDemo>;

export const ThreadListView_: Story = {
  name: 'Thread List',
  args: { isOpen: true, position: 'right', initialView: 'list' },
};

export const ThreadDetailView_: Story = {
  name: 'Thread Detail',
  args: { isOpen: true, position: 'right', initialView: 'detail' },
};

export const NewThreadFormView_: Story = {
  name: 'New Thread Form',
  args: { isOpen: true, position: 'right', initialView: 'new' },
};

export const LeftPosition: Story = {
  name: 'Left Position',
  args: { isOpen: true, position: 'left', initialView: 'list' },
};

export const Closed: Story = { args: { isOpen: false, position: 'right' } };

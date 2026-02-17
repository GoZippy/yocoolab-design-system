import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/figma-theme.css';
import { BrandedAvatar } from '../../BrandedAvatar';

type CommentCategory =
  | 'front-end' | 'back-end' | 'api' | 'design' | 'performance'
  | 'accessibility' | 'security' | 'data' | 'devops';

interface MockThread {
  id: string;
  creatorName: string;
  createdAt: string;
  content: string;
  replyCount: number;
  isResolved: boolean;
  contextType?: CommentCategory;
}

const mockThreads: MockThread[] = [
  {
    id: '1',
    creatorName: 'Alice Johnson',
    createdAt: '2 min ago',
    content: 'The button alignment here looks off. Can we move it 8px to the left?',
    replyCount: 3,
    isResolved: false,
    contextType: 'design',
  },
  {
    id: '2',
    creatorName: 'Bob Smith',
    createdAt: '1 hour ago',
    content: 'This API endpoint should return paginated results. The current implementation loads all records at once.',
    replyCount: 1,
    isResolved: false,
    contextType: 'api',
  },
  {
    id: '3',
    creatorName: 'Charlie Brown',
    createdAt: '3 days ago',
    content: 'Fixed! The color contrast now meets WCAG AA standards.',
    replyCount: 5,
    isResolved: true,
    contextType: 'accessibility',
  },
];

interface ThreadListDemoProps {
  threads?: MockThread[];
  showEmpty?: boolean;
}

const ThreadListDemo: React.FC<ThreadListDemoProps> = ({
  threads = mockThreads,
  showEmpty = false,
}) => {
  if (showEmpty) {
    return (
      <div className="rc-thread-list" style={{ width: 360, background: 'var(--figma-bg)', minHeight: 300 }}>
        <div className="rc-empty">
          <div className="rc-empty-icon">💬</div>
          <p className="rc-empty-text">No comments yet</p>
          <button className="rc-button" style={{ marginTop: 16 }}>Add comment</button>
        </div>
      </div>
    );
  }

  return (
    <div className="rc-thread-list" style={{ width: 360, background: 'var(--figma-bg)' }}>
      <button className="rc-button" style={{ width: '100%', marginBottom: 16 }}>
        + Add comment
      </button>
      {threads.map((thread) => (
        <div key={thread.id} className="rc-thread" style={{ cursor: 'pointer' }}>
          <div className="rc-thread-header">
            <BrandedAvatar initials={thread.creatorName.charAt(0).toUpperCase()} />
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
            {thread.isResolved && (
              <div className="rc-thread-status resolved">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Resolved</span>
              </div>
            )}
            {thread.contextType && (
              <span className="rc-category-badge" style={{ marginLeft: 'auto' }}>
                {thread.contextType}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ThreadListDemo> = {
  title: 'Patterns/Client SDK/ThreadList',
  component: ThreadListDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThreadListDemo>;

export const Default: Story = { args: {} };
export const Empty: Story = { args: { showEmpty: true } };
export const SingleThread: Story = { args: { threads: [mockThreads[0]] } };

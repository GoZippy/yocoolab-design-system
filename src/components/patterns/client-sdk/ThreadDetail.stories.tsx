import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/figma-theme.css';
import { BrandedAvatar } from '../../BrandedAvatar';

interface MockMessage {
  id: string;
  authorName: string;
  content: string;
  createdAt: string;
  edited?: boolean;
}

interface ThreadDetailDemoProps {
  status?: 'open' | 'resolved';
  messages?: MockMessage[];
}

const defaultMessages: MockMessage[] = [
  {
    id: '1',
    authorName: 'Alice Johnson',
    content: 'The button alignment here looks off. Can we move it 8px to the left?',
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    authorName: 'Bob Smith',
    content: 'Good catch! I think it was caused by the padding change in the last commit. I\'ll fix it.',
    createdAt: '1 hour ago',
  },
  {
    id: '3',
    authorName: 'Alice Johnson',
    content: 'Thanks Bob! Also, can we check the spacing on mobile as well?',
    createdAt: '45 min ago',
    edited: true,
  },
];

const ThreadDetailDemo: React.FC<ThreadDetailDemoProps> = ({
  status = 'open',
  messages = defaultMessages,
}) => {
  const [replyText, setReplyText] = useState('');

  return (
    <div className="rc-thread-detail" style={{ width: 360, height: 500, background: 'var(--figma-bg)', border: '1px solid var(--figma-border)', borderRadius: 8 }}>
      {/* Header */}
      <div className="rc-thread-detail-header">
        <button className="rc-back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h3 className="rc-panel-title">Thread</h3>
        <button
          className={`rc-button ${status === 'resolved' ? 'rc-button-secondary' : ''}`}
          style={{ marginLeft: 'auto', fontSize: 12, padding: '6px 12px' }}
        >
          {status === 'resolved' ? (
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

      {/* Messages */}
      <div className="rc-thread-detail-body">
        {messages.map((msg) => (
          <div key={msg.id} className="rc-message">
            <BrandedAvatar initials={msg.authorName.charAt(0).toUpperCase()} />
            <div className="rc-message-content">
              <div className="rc-message-header">
                <span className="rc-message-author">{msg.authorName}</span>
                <span className="rc-message-time">{msg.createdAt}</span>
                {msg.edited && (
                  <span className="rc-message-time" style={{ fontStyle: 'italic' }}>(edited)</span>
                )}
              </div>
              <p className="rc-message-text">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reply input (only if open) */}
      {status !== 'resolved' && (
        <div className="rc-input-container">
          <div className="rc-input-wrapper">
            <textarea
              className="rc-input"
              placeholder="Add a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={1}
            />
            <button className="rc-button" disabled={!replyText.trim()}>
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
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof ThreadDetailDemo> = {
  title: 'Patterns/Client SDK/ThreadDetail',
  component: ThreadDetailDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThreadDetailDemo>;

export const Open: Story = { args: { status: 'open' } };

export const Resolved: Story = { args: { status: 'resolved' } };

export const SingleMessage: Story = {
  args: {
    status: 'open',
    messages: [defaultMessages[0]],
  },
};

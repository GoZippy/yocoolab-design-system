import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/figma-theme.css';

const COMMENT_CATEGORIES = [
  'front-end', 'back-end', 'api', 'design', 'performance',
  'accessibility', 'security', 'data', 'devops',
] as const;

type CommentCategory = (typeof COMMENT_CATEGORIES)[number];

interface NewThreadFormDemoProps {
  positionX?: number;
  positionY?: number;
}

const NewThreadFormDemo: React.FC<NewThreadFormDemoProps> = ({
  positionX = 245,
  positionY = 180,
}) => {
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState<CommentCategory | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('');
      setCategory(null);
    }, 1500);
  };

  return (
    <div
      className="rc-thread-detail"
      style={{ width: 360, height: 420, background: 'var(--figma-bg)', border: '1px solid var(--figma-border)', borderRadius: 8 }}
    >
      <div className="rc-thread-detail-header">
        <button className="rc-back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h3 className="rc-panel-title">New comment</h3>
      </div>

      <div className="rc-thread-detail-body">
        <div style={{ marginBottom: 12, color: 'var(--figma-text-secondary)', fontSize: 13 }}>
          Position: ({positionX}, {positionY})
        </div>

        <form onSubmit={handleSubmit}>
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
            <button type="button" className="rc-button rc-button-secondary" disabled={isSubmitting}>
              Cancel
            </button>
            <button type="submit" className="rc-button" disabled={!message.trim() || isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Add comment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const meta: Meta<typeof NewThreadFormDemo> = {
  title: 'Patterns/Client SDK/NewThreadForm',
  component: NewThreadFormDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewThreadFormDemo>;

export const Default: Story = { args: { positionX: 245, positionY: 180 } };

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Empty, Button, Typography, theme } from 'antd';
import { neutral, semantic } from '../../../tokens/colors';
import { AccessibleIcon } from '../../AccessibleIcon';

interface EmptyStateDemoProps {
  variant?: 'default' | 'no-repositories' | 'no-results' | 'no-comments' | 'error';
}

const EmptyStateDemo: React.FC<EmptyStateDemoProps> = ({ variant = 'default' }) => {
  const { token } = theme.useToken();
  const variants: Record<string, React.ReactNode> = {
    default: (
      <Empty description="No data available">
        <Button type="primary">Create Now</Button>
      </Empty>
    ),
    'no-repositories': (
      <div style={{ textAlign: 'center', padding: 48 }}>
        <AccessibleIcon
          name="folder_code"
          decorative
          style={{ fontSize: 64, color: token.colorTextDisabled, display: 'block', marginBottom: 16 }}
        />
        <Typography.Title level={4} type="secondary">
          No repositories yet
        </Typography.Title>
        <Typography.Paragraph type="secondary">
          Connect your first repository to start tracking comments and collaboration.
        </Typography.Paragraph>
        <Button type="primary" icon={<AccessibleIcon name="add" decorative />}>
          Connect Repository
        </Button>
      </div>
    ),
    'no-results': (
      <div style={{ textAlign: 'center', padding: 48 }}>
        <AccessibleIcon
          name="search"
          decorative
          style={{ fontSize: 64, color: token.colorTextDisabled, display: 'block', marginBottom: 16 }}
        />
        <Typography.Title level={4} type="secondary">
          No results found
        </Typography.Title>
        <Typography.Paragraph type="secondary">
          Try adjusting your search or filter criteria.
        </Typography.Paragraph>
        <Button>Clear Filters</Button>
      </div>
    ),
    'no-comments': (
      <div style={{ textAlign: 'center', padding: 48 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>💬</div>
        <Typography.Paragraph type="secondary" style={{ fontSize: 14 }}>
          No comments yet
        </Typography.Paragraph>
        <Button type="primary" style={{ marginTop: 16 }}>
          Add comment
        </Button>
      </div>
    ),
    error: (
      <div style={{ textAlign: 'center', padding: 48 }}>
        <AccessibleIcon
          name="error"
          decorative
          style={{ fontSize: 64, color: semantic.error, display: 'block', marginBottom: 16 }}
        />
        <Typography.Title level={4} type="secondary">
          Something went wrong
        </Typography.Title>
        <Typography.Paragraph type="secondary">
          We encountered an error loading this page. Please try again.
        </Typography.Paragraph>
        <Button type="primary" danger>
          Retry
        </Button>
      </div>
    ),
  };

  return <div style={{ maxWidth: 500, margin: '0 auto' }}>{variants[variant]}</div>;
};

const meta: Meta<typeof EmptyStateDemo> = {
  title: 'Patterns/Data Display/EmptyState',
  component: EmptyStateDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyStateDemo>;

export const Default: Story = { args: { variant: 'default' } };
export const NoRepositories: Story = { args: { variant: 'no-repositories' } };
export const NoSearchResults: Story = { args: { variant: 'no-results' } };
export const NoComments: Story = { args: { variant: 'no-comments' } };
export const Error: Story = { args: { variant: 'error' } };

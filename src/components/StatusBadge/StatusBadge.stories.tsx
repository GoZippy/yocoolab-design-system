import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Open: Story = { args: { status: 'open' } };
export const Resolved: Story = { args: { status: 'resolved' } };
export const Closed: Story = { args: { status: 'closed' } };

export const Small: Story = { args: { status: 'open', size: 'small' } };
export const NoIcon: Story = { args: { status: 'resolved', showIcon: false } };

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <StatusBadge status="open" />
      <StatusBadge status="resolved" />
      <StatusBadge status="closed" />
    </div>
  ),
};

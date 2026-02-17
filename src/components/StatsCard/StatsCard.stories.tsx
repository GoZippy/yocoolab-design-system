import type { Meta, StoryObj } from '@storybook/react';
import { StatsCard } from './StatsCard';

const meta: Meta<typeof StatsCard> = {
  title: 'Components/StatsCard',
  component: StatsCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {
  args: {
    title: 'Open Comments',
    value: 42,
  },
};

export const WithTrendUp: Story = {
  args: {
    title: 'Active Users',
    value: 1234,
    trend: 'up',
    trendValue: '+12%',
  },
};

export const WithTrendDown: Story = {
  args: {
    title: 'Bug Reports',
    value: 8,
    trend: 'down',
    trendValue: '-23%',
  },
};

export const Large: Story = {
  args: {
    title: 'Total Repositories',
    value: 156,
    size: 'large',
    trend: 'up',
    trendValue: '+5',
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading...',
    value: 0,
    loading: true,
  },
};

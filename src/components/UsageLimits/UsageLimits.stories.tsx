import type { Meta, StoryObj } from '@storybook/react';
import { UsageLimits } from './UsageLimits';

const meta: Meta<typeof UsageLimits> = {
  title: 'Components/UsageLimits',
  component: UsageLimits,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UsageLimits>;

export const Normal: Story = {
  args: {
    current: 3,
    max: 10,
    label: 'Repositories',
  },
};

export const Warning: Story = {
  args: {
    current: 8,
    max: 10,
    label: 'Repositories',
  },
};

export const Exceeded: Story = {
  args: {
    current: 12,
    max: 10,
    label: 'Repositories',
  },
};

export const Unlimited: Story = {
  args: {
    current: 42,
    max: null,
    label: 'Repositories',
  },
};

export const WithoutBar: Story = {
  args: {
    current: 5,
    max: 10,
    label: 'Team Members',
    showBar: false,
  },
};

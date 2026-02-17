import type { Meta, StoryObj } from '@storybook/react';
import { PhaseBadge } from './PhaseBadge';

const meta: Meta<typeof PhaseBadge> = {
  title: 'Components/PhaseBadge',
  component: PhaseBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PhaseBadge>;

export const Discover: Story = { args: { phase: 'discover' } };
export const Define: Story = { args: { phase: 'define' } };
export const Develop: Story = { args: { phase: 'develop' } };
export const Deliver: Story = { args: { phase: 'deliver' } };

export const AllPhases: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <PhaseBadge phase="discover" />
      <PhaseBadge phase="define" />
      <PhaseBadge phase="develop" />
      <PhaseBadge phase="deliver" />
    </div>
  ),
};

export const SmallAllPhases: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <PhaseBadge phase="discover" size="small" />
      <PhaseBadge phase="define" size="small" />
      <PhaseBadge phase="develop" size="small" />
      <PhaseBadge phase="deliver" size="small" />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { LiveRegion } from './LiveRegion';

const meta: Meta<typeof LiveRegion> = {
  title: 'Components/LiveRegion',
  component: LiveRegion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LiveRegion>;

export const Polite: Story = {
  args: {
    message: 'Data loaded successfully',
    type: 'polite',
  },
};

export const Assertive: Story = {
  args: {
    message: 'Error: Failed to save changes',
    type: 'assertive',
  },
};

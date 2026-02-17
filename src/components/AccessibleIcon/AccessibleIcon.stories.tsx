import type { Meta, StoryObj } from '@storybook/react';
import { AccessibleIcon } from './AccessibleIcon';

const meta: Meta<typeof AccessibleIcon> = {
  title: 'Components/AccessibleIcon',
  component: AccessibleIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 12, max: 48 } },
  },
};

export default meta;
type Story = StoryObj<typeof AccessibleIcon>;

export const Decorative: Story = {
  args: {
    name: 'home',
    decorative: true,
    size: 24,
  },
};

export const WithLabel: Story = {
  args: {
    name: 'settings',
    label: 'Settings',
    size: 24,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <AccessibleIcon name="star" size={16} decorative />
      <AccessibleIcon name="star" size={20} decorative />
      <AccessibleIcon name="star" size={24} decorative />
      <AccessibleIcon name="star" size={32} decorative />
      <AccessibleIcon name="star" size={48} decorative />
    </div>
  ),
};

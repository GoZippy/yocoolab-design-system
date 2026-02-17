import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from './VisuallyHidden';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  args: {
    children: 'This text is only visible to screen readers',
  },
  render: (args) => (
    <div>
      <p>The text below is visually hidden but accessible to screen readers:</p>
      <VisuallyHidden {...args} />
    </div>
  ),
};

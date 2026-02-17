import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Space, theme, Tag, Switch } from 'antd';

const ThemeTestDemo: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <Space direction="vertical" size={16}>
      <div>
        <strong>token.colorPrimary:</strong> {token.colorPrimary}
        <div
          style={{
            width: 100,
            height: 30,
            background: token.colorPrimary,
            borderRadius: 4,
            marginTop: 4,
          }}
        />
      </div>
      <Space>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
      <Space>
        <Tag color="magenta">magenta</Tag>
        <Tag color={token.colorPrimary}>brand</Tag>
        <Switch defaultChecked />
      </Space>
    </Space>
  );
};

const meta: Meta<typeof ThemeTestDemo> = {
  title: 'Debug/ThemeTest',
  component: ThemeTestDemo,
};

export default meta;
type Story = StoryObj<typeof ThemeTestDemo>;

export const Default: Story = {};

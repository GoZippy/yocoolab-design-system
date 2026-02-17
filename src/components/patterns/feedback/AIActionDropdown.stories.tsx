import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, Button, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import {
  ThunderboltOutlined,
  RobotOutlined,
  FileSearchOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { brand } from '../../../tokens/colors';

interface AIActionDropdownDemoProps {
  variant?: 'button' | 'fab';
}

const AIActionDropdownDemo: React.FC<AIActionDropdownDemoProps> = ({ variant = 'button' }) => {
  const items: MenuProps['items'] = [
    {
      key: 'claude-build',
      icon: <RobotOutlined style={{ color: brand[700] }} />,
      label: 'Generate Build with Claude',
      onClick: () => message.info('Generating build with Claude...'),
    },
    {
      key: 'research-plan',
      icon: <FileSearchOutlined style={{ color: brand[700] }} />,
      label: 'Create Research Plan',
      onClick: () => message.info('Creating research plan...'),
    },
    { type: 'divider' },
    {
      key: 'pendo-insights',
      icon: <BarChartOutlined style={{ color: brand[700] }} />,
      label: 'View Pendo Insights',
      onClick: () => message.info('Opening Pendo insights...'),
    },
  ];

  if (variant === 'fab') {
    return (
      <div style={{ position: 'relative', height: 200 }}>
        <Dropdown menu={{ items }} trigger={['click']} placement="topRight">
          <Button
            shape="circle"
            size="large"
            icon={<ThunderboltOutlined />}
            style={{
              position: 'absolute',
              right: 24,
              bottom: 24,
              width: 56,
              height: 56,
              background: `linear-gradient(135deg, ${brand[700]} 0%, ${brand[500]} 100%)`,
              borderColor: brand[700],
              color: '#fff',
              fontSize: 24,
              boxShadow: `0 8px 24px ${brand[700]}4D`,
            }}
          />
        </Dropdown>
      </div>
    );
  }

  return (
    <Space>
      <Dropdown menu={{ items }} trigger={['click']} placement="topRight">
        <Button
          icon={<ThunderboltOutlined />}
          style={{
            background: `linear-gradient(135deg, ${brand[700]} 0%, ${brand[500]} 100%)`,
            borderColor: brand[700],
            color: '#fff',
          }}
        >
          AI Actions
        </Button>
      </Dropdown>
    </Space>
  );
};

const meta: Meta<typeof AIActionDropdownDemo> = {
  title: 'Patterns/Feedback/AIActionDropdown',
  component: AIActionDropdownDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AIActionDropdownDemo>;

export const ButtonVariant: Story = { args: { variant: 'button' } };
export const FABVariant: Story = { args: { variant: 'fab' } };

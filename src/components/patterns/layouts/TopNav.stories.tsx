import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout, Button, Dropdown, Avatar, Typography, theme } from 'antd';
import type { MenuProps } from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';

const { Header } = Layout;
const { Text } = Typography;

interface TopNavDemoProps {
  userName?: string;
  userEmail?: string;
  currentTheme?: 'light' | 'dark';
}

const TopNavDemo: React.FC<TopNavDemoProps> = ({
  userName = 'Jonah K',
  userEmail = 'jonah@yocoolab.com',
  currentTheme = 'light',
}) => {
  const { token } = theme.useToken();

  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const userItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <AccessibleIcon name="person" decorative />,
      label: 'Profile',
    },
    { type: 'divider' },
    {
      key: 'logout',
      icon: <AccessibleIcon name="logout" decorative />,
      label: 'Logout',
      danger: true,
    },
  ];

  return (
    <Header
      style={{
        background: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 64,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Button
          type="text"
          icon={
            <AccessibleIcon
              name={currentTheme === 'dark' ? 'light_mode' : 'dark_mode'}
              decorative
            />
          }
          aria-label={
            currentTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
          }
          style={{ color: token.colorTextSecondary }}
        />

        <Dropdown menu={{ items: userItems }} trigger={['click']}>
          <button
            type="button"
            aria-label={`User menu for ${userName}`}
            aria-haspopup="menu"
            style={{
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 0,
            }}
          >
            <Avatar style={{ backgroundColor: token.colorPrimary, color: '#fff' }}>
              {initials}
            </Avatar>
            <div style={{ textAlign: 'left' }}>
              <Text strong style={{ display: 'block', lineHeight: 1.3 }}>
                {userName}
              </Text>
              <Text type="secondary" style={{ fontSize: 12, display: 'block', lineHeight: 1.2 }}>
                {userEmail}
              </Text>
            </div>
          </button>
        </Dropdown>
      </div>
    </Header>
  );
};

const meta: Meta<typeof TopNavDemo> = {
  title: 'Patterns/Layouts/TopNav',
  component: TopNavDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TopNavDemo>;

export const Default: Story = {
  args: {
    userName: 'Jonah K',
    userEmail: 'jonah@yocoolab.com',
    currentTheme: 'light',
  },
};

export const DifferentUser: Story = {
  args: {
    userName: 'Alice Smith',
    userEmail: 'alice@company.com',
    currentTheme: 'light',
  },
};

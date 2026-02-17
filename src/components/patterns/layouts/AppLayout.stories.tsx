import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout, Menu, Button, Dropdown, Avatar, Typography, Spin, theme } from 'antd';
import type { MenuProps } from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';

const { Sider, Header, Content } = Layout;
const { Text } = Typography;

interface AppLayoutDemoProps {
  state?: 'authenticated' | 'loading';
  sidebarCollapsed?: boolean;
  selectedPath?: string;
}

const navItems = [
  { path: '/repositories', label: 'Repositories', icon: 'folder_code' },
];

const adminItems = [
  { path: '/admin/users', label: 'Users', icon: 'group' },
  { path: '/admin/teams', label: 'Teams', icon: 'groups' },
  { path: '/admin/audit-logs', label: 'Audit Logs', icon: 'history' },
  { path: '/admin/system', label: 'System Health', icon: 'monitor_heart' },
  { path: '/admin/privacy', label: 'Privacy & Data', icon: 'shield' },
  { path: '/admin/sessions', label: 'Sessions', icon: 'devices' },
];

const AppLayoutDemo: React.FC<AppLayoutDemoProps> = ({
  state = 'authenticated',
  sidebarCollapsed = false,
  selectedPath = '/repositories',
}) => {
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(sidebarCollapsed);

  if (state === 'loading') {
    return (
      <div
        style={{
          minHeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: token.colorBgLayout,
        }}
        role="status"
        aria-busy="true"
      >
        <Spin size="large" />
      </div>
    );
  }

  const menuItems: MenuProps['items'] = [
    ...navItems.map((item) => ({
      key: item.path,
      icon: <AccessibleIcon name={item.icon} decorative />,
      label: item.label,
    })),
    { type: 'divider' as const },
    {
      type: 'group' as const,
      label: collapsed ? '' : 'Admin',
      children: adminItems.map((item) => ({
        key: item.path,
        icon: <AccessibleIcon name={item.icon} decorative />,
        label: item.label,
      })),
    },
    { type: 'divider' as const },
    {
      key: '/settings',
      icon: <AccessibleIcon name="settings" decorative />,
      label: 'Settings',
    },
  ];

  const userMenuItems: MenuProps['items'] = [
    { key: 'profile', icon: <AccessibleIcon name="person" decorative />, label: 'Profile' },
    { type: 'divider' },
    { key: 'logout', icon: <AccessibleIcon name="logout" decorative />, label: 'Logout', danger: true },
  ];

  return (
    <Layout style={{ minHeight: 500, height: 500 }}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Sider
        collapsed={collapsed}
        collapsedWidth={64}
        width={220}
        style={{
          background: token.colorBgContainer,
          borderRight: `1px solid ${token.colorBorderSecondary}`,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: `1px solid ${token.colorBorderSecondary}`,
            cursor: 'pointer',
          }}
          onClick={() => setCollapsed(!collapsed)}
        >
          <span style={{ fontSize: collapsed ? 16 : 18, fontWeight: 600, overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {collapsed ? 'YC' : 'Yocoolab'}
          </span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedPath]}
          items={menuItems}
          style={{ background: 'transparent', borderRight: 'none', marginTop: 8 }}
        />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
              icon={<AccessibleIcon name="dark_mode" decorative />}
              style={{ color: token.colorTextSecondary }}
            />
            <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
              <button
                type="button"
                style={{ cursor: 'pointer', border: 'none', background: 'none', display: 'flex', alignItems: 'center', gap: 8, padding: 0 }}
              >
                <Avatar style={{ backgroundColor: token.colorPrimary, color: '#fff' }}>JK</Avatar>
                <div style={{ textAlign: 'left' }}>
                  <Text strong style={{ display: 'block', lineHeight: 1.3 }}>Jonah K</Text>
                  <Text type="secondary" style={{ fontSize: 12, display: 'block', lineHeight: 1.2 }}>jonah@yocoolab.com</Text>
                </div>
              </button>
            </Dropdown>
          </div>
        </Header>
        <Content
          id="main-content"
          role="main"
          style={{ padding: 24, background: token.colorBgLayout, overflow: 'auto', flex: 1 }}
        >
          <div style={{ padding: 24, background: token.colorBgContainer, borderRadius: 8 }}>
            <Typography.Title level={4}>Page Content Area</Typography.Title>
            <Typography.Paragraph type="secondary">
              This is the main content area where page components render. Selected path: <code>{selectedPath}</code>
            </Typography.Paragraph>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

const meta: Meta<typeof AppLayoutDemo> = {
  title: 'Patterns/Layouts/AppLayout',
  component: AppLayoutDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayoutDemo>;

export const Default: Story = {
  args: { state: 'authenticated', sidebarCollapsed: false, selectedPath: '/repositories' },
};

export const SidebarCollapsed: Story = {
  args: { state: 'authenticated', sidebarCollapsed: true, selectedPath: '/repositories' },
};

export const AdminPage: Story = {
  args: { state: 'authenticated', sidebarCollapsed: false, selectedPath: '/admin/users' },
};

export const Loading: Story = {
  args: { state: 'loading' },
};

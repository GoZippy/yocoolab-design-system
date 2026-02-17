import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';

const { Sider } = Layout;

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
}

const mainNavItems: NavItem[] = [
  { id: 'repositories', label: 'Repositories', path: '/repositories', icon: 'folder_code' },
];

const adminNavItems: NavItem[] = [
  { id: 'admin-users', label: 'Users', path: '/admin/users', icon: 'group' },
  { id: 'admin-teams', label: 'Teams', path: '/admin/teams', icon: 'groups' },
  { id: 'admin-audit', label: 'Audit Logs', path: '/admin/audit-logs', icon: 'history' },
  { id: 'admin-system', label: 'System Health', path: '/admin/system', icon: 'monitor_heart' },
  { id: 'admin-privacy', label: 'Privacy & Data', path: '/admin/privacy', icon: 'shield' },
  { id: 'admin-sessions', label: 'Sessions', path: '/admin/sessions', icon: 'devices' },
];

const settingsItem: NavItem = { id: 'settings', label: 'Settings', path: '/settings', icon: 'settings' };

interface SidebarDemoProps {
  collapsed?: boolean;
  selectedPath?: string;
  isDark?: boolean;
}

const SidebarDemo: React.FC<SidebarDemoProps> = ({
  collapsed = false,
  selectedPath = '/repositories',
  isDark = false,
}) => {
  const { token } = theme.useToken();
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const menuItems: MenuProps['items'] = [
    ...mainNavItems.map((item) => ({
      key: item.path,
      icon: <AccessibleIcon name={item.icon} decorative />,
      label: item.label,
    })),
    { type: 'divider' as const },
    {
      type: 'group' as const,
      label: isCollapsed ? '' : 'Admin',
      children: adminNavItems.map((item) => ({
        key: item.path,
        icon: <AccessibleIcon name={item.icon} decorative />,
        label: item.label,
      })),
    },
    { type: 'divider' as const },
    {
      key: settingsItem.path,
      icon: <AccessibleIcon name={settingsItem.icon} decorative />,
      label: settingsItem.label,
    },
  ];

  return (
    <Layout style={{ minHeight: 500 }}>
      <Sider
        collapsed={isCollapsed}
        collapsedWidth={64}
        width={220}
        role="navigation"
        aria-label="Main navigation"
        style={{
          background: isDark ? token.colorBgLayout : token.colorBgContainer,
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
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span
            style={{
              color: token.colorText,
              fontSize: isCollapsed ? 16 : 18,
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            {isCollapsed ? 'YC' : 'Yocoolab'}
          </span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedPath]}
          items={menuItems}
          aria-label="Navigation menu"
          style={{
            background: 'transparent',
            borderRight: 'none',
            marginTop: 8,
          }}
        />
      </Sider>
      <Layout.Content style={{ padding: 24, background: token.colorBgLayout }}>
        <div style={{ color: token.colorText }}>
          Click the logo to toggle collapse. Selected: <code>{selectedPath}</code>
        </div>
      </Layout.Content>
    </Layout>
  );
};

const meta: Meta<typeof SidebarDemo> = {
  title: 'Patterns/Layouts/Sidebar',
  component: SidebarDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SidebarDemo>;

export const Expanded: Story = {
  args: { collapsed: false, selectedPath: '/repositories' },
};

export const Collapsed: Story = {
  args: { collapsed: true, selectedPath: '/repositories' },
};

export const AdminSelected: Story = {
  args: { collapsed: false, selectedPath: '/admin/users' },
};

export const SettingsSelected: Story = {
  args: { collapsed: false, selectedPath: '/settings' },
};

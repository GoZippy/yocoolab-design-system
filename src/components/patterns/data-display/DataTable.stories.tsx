import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, Input, Button, Space, Tag, Avatar, Drawer, Descriptions, Typography, theme } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AccessibleIcon } from '../../AccessibleIcon';

const { Search } = Input;

// Mock user data matching admin-dashboard-react UsersPage pattern
interface MockUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  lastActive: string;
  teams: string[];
}

const mockUsers: MockUser[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@company.com', role: 'Admin', status: 'active', lastActive: '2 min ago', teams: ['Engineering', 'Design'] },
  { id: '2', name: 'Bob Smith', email: 'bob@company.com', role: 'Developer', status: 'active', lastActive: '1 hour ago', teams: ['Engineering'] },
  { id: '3', name: 'Charlie Brown', email: 'charlie@company.com', role: 'Viewer', status: 'inactive', lastActive: '3 days ago', teams: ['Marketing'] },
  { id: '4', name: 'Diana Prince', email: 'diana@company.com', role: 'Developer', status: 'active', lastActive: '30 min ago', teams: ['Engineering', 'QA'] },
  { id: '5', name: 'Eve Wilson', email: 'eve@company.com', role: 'Admin', status: 'suspended', lastActive: '2 weeks ago', teams: ['Operations'] },
];

interface DataTableDemoProps {
  showSearch?: boolean;
  showDetailDrawer?: boolean;
}

const statusColors: Record<string, string> = {
  active: 'green',
  inactive: 'default',
  suspended: 'red',
};

const DataTableDemo: React.FC<DataTableDemoProps> = ({
  showSearch = true,
  showDetailDrawer = false,
}) => {
  const { token } = theme.useToken();
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<MockUser | null>(
    showDetailDrawer ? mockUsers[0] : null
  );

  const filtered = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const columns: ColumnsType<MockUser> = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (name: string, record: MockUser) => (
        <Space>
          <Avatar style={{ backgroundColor: token.colorPrimary, color: '#fff' }}>
            {name.charAt(0)}
          </Avatar>
          <div>
            <div style={{ fontWeight: 500 }}>{name}</div>
            <div style={{ fontSize: 12, color: token.colorTextSecondary }}>{record.email}</div>
          </div>
        </Space>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      render: (role: string) => <Tag>{role}</Tag>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => (
        <Tag color={statusColors[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      ),
    },
    {
      title: 'Teams',
      dataIndex: 'teams',
      render: (teams: string[]) => (
        <Space size={4} wrap>
          {teams.map((t) => (
            <Tag key={t} color="purple">{t}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Last Active',
      dataIndex: 'lastActive',
      render: (text: string) => (
        <Typography.Text type="secondary">{text}</Typography.Text>
      ),
    },
    {
      title: '',
      key: 'actions',
      width: 48,
      render: (_: unknown, record: MockUser) => (
        <Button
          type="text"
          size="small"
          onClick={() => setSelectedUser(record)}
          icon={<AccessibleIcon name="open_in_new" decorative />}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {showSearch && (
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
          <Search
            placeholder="Search users..."
            style={{ width: 300 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
          <Button type="primary">
            <AccessibleIcon name="add" decorative /> Add User
          </Button>
        </div>
      )}

      <Table
        dataSource={filtered}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        onRow={(record) => ({
          onClick: () => setSelectedUser(record),
          style: { cursor: 'pointer' },
        })}
      />

      <Drawer
        title="User Details"
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        width={400}
      >
        {selectedUser && (
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Name">{selectedUser.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{selectedUser.email}</Descriptions.Item>
            <Descriptions.Item label="Role">{selectedUser.role}</Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={statusColors[selectedUser.status]}>
                {selectedUser.status}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Teams">
              {selectedUser.teams.join(', ')}
            </Descriptions.Item>
            <Descriptions.Item label="Last Active">{selectedUser.lastActive}</Descriptions.Item>
          </Descriptions>
        )}
      </Drawer>
    </div>
  );
};

const meta: Meta<typeof DataTableDemo> = {
  title: 'Patterns/Data Display/DataTable',
  component: DataTableDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTableDemo>;

export const Default: Story = {
  args: { showSearch: true },
};

export const WithDrawerOpen: Story = {
  args: { showSearch: true, showDetailDrawer: true },
};

export const NoSearch: Story = {
  args: { showSearch: false },
};

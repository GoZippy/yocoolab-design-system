import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Space, Tooltip, theme } from 'antd';
import { brand, semantic } from '../../../tokens/colors';
import { BrandedAvatar } from '../../BrandedAvatar';

interface UserAvatarDemoProps {
  variant?: 'single' | 'group' | 'sizes' | 'with-name';
}

const users = [
  { name: 'Alice Johnson', color: brand[700] },
  { name: 'Bob Smith', color: semantic.success },
  { name: 'Charlie Brown', color: semantic.warning },
  { name: 'Diana Prince', color: semantic.error },
  { name: 'Eve Wilson', color: semantic.info },
];

const UserAvatarDemo: React.FC<UserAvatarDemoProps> = ({ variant = 'single' }) => {
  const { token } = theme.useToken();

  if (variant === 'group') {
    return (
      <Space size={-8}>
        {users.map((u) => (
          <Tooltip key={u.name} title={u.name}>
            <BrandedAvatar
              initials={u.name.split(' ').map((n) => n[0]).join('')}
              bgColor={u.color}
            />
          </Tooltip>
        ))}
      </Space>
    );
  }

  if (variant === 'sizes') {
    return (
      <Space size={16} align="center">
        <BrandedAvatar initials="A" bgColor={token.colorPrimary} size={24} />
        <BrandedAvatar initials="AJ" bgColor={token.colorPrimary} size={32} />
        <BrandedAvatar initials="AJ" bgColor={token.colorPrimary} size={40} />
        <BrandedAvatar initials="AJ" bgColor={token.colorPrimary} size={64} />
      </Space>
    );
  }

  if (variant === 'with-name') {
    return (
      <Space direction="vertical" size={12}>
        {users.slice(0, 3).map((u) => (
          <Space key={u.name} size={8}>
            <BrandedAvatar
              initials={u.name.split(' ').map((n) => n[0]).join('')}
              bgColor={u.color}
            />
            <div>
              <div style={{ fontWeight: 500 }}>{u.name}</div>
              <div style={{ fontSize: 12, color: token.colorTextSecondary }}>
                {u.name.toLowerCase().replace(' ', '.')}@yocoolab.com
              </div>
            </div>
          </Space>
        ))}
      </Space>
    );
  }

  // single
  return (
    <Space size={16}>
      <BrandedAvatar initials="JK" bgColor={token.colorPrimary} />
      <BrandedAvatar initials="AS" bgColor={semantic.success} />
      <BrandedAvatar initials="CB" bgColor={semantic.warning} />
    </Space>
  );
};

const meta: Meta<typeof UserAvatarDemo> = {
  title: 'Patterns/Data Display/UserAvatar',
  component: UserAvatarDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserAvatarDemo>;

export const Single: Story = { args: { variant: 'single' } };
export const Group: Story = { args: { variant: 'group' } };
export const Sizes: Story = { args: { variant: 'sizes' } };
export const WithName: Story = { args: { variant: 'with-name' } };

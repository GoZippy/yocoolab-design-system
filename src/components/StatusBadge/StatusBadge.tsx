import React from 'react';
import { Tag } from 'antd';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

export type ThreadStatus = 'open' | 'resolved' | 'closed';

const statusConfig: Record<
  ThreadStatus,
  { color: string; label: string; icon: React.ReactNode }
> = {
  open: {
    color: 'orange',
    label: 'Open',
    icon: <ExclamationCircleOutlined aria-hidden="true" />,
  },
  resolved: {
    color: 'green',
    label: 'Resolved',
    icon: <CheckCircleOutlined aria-hidden="true" />,
  },
  closed: {
    color: 'default',
    label: 'Closed',
    icon: <CloseCircleOutlined aria-hidden="true" />,
  },
};

interface StatusBadgeProps {
  status: ThreadStatus;
  size?: 'small' | 'default';
  /** Show icon alongside text (default: true) */
  showIcon?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'default',
  showIcon = true,
}) => {
  const config = statusConfig[status] || statusConfig.open;

  return (
    <Tag
      color={config.color}
      icon={showIcon ? config.icon : undefined}
      style={size === 'small' ? { fontSize: 11, padding: '0 4px' } : undefined}
      role="status"
    >
      {config.label}
    </Tag>
  );
};

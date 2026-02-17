import React from 'react';
import { Tag } from 'antd';
import {
  SearchOutlined,
  EditOutlined,
  CodeOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import { phase } from '../../tokens/colors';

export type Phase = 'discover' | 'define' | 'develop' | 'deliver';

const phaseConfig: Record<
  Phase,
  { color: string; label: string; icon: React.ReactNode }
> = {
  discover: {
    color: phase.discover,
    label: 'Discover',
    icon: <SearchOutlined aria-hidden="true" />,
  },
  define: {
    color: phase.define,
    label: 'Define',
    icon: <EditOutlined aria-hidden="true" />,
  },
  develop: {
    color: phase.develop,
    label: 'Develop',
    icon: <CodeOutlined aria-hidden="true" />,
  },
  deliver: {
    color: phase.deliver,
    label: 'Deliver',
    icon: <RocketOutlined aria-hidden="true" />,
  },
};

interface PhaseBadgeProps {
  phase: Phase;
  size?: 'small' | 'default';
  /** Show icon alongside text (default: true) */
  showIcon?: boolean;
}

export const PhaseBadge: React.FC<PhaseBadgeProps> = ({
  phase,
  size = 'default',
  showIcon = true,
}) => {
  const config = phaseConfig[phase] || phaseConfig.discover;

  return (
    <Tag
      color={config.color}
      icon={showIcon ? config.icon : undefined}
      style={size === 'small' ? { fontSize: 11, padding: '0 4px' } : undefined}
    >
      {config.label}
    </Tag>
  );
};

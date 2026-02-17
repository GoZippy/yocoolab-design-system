import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col, Card, Statistic, Typography, theme } from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';
import { brand, semantic } from '../../../tokens/colors';

interface StatItem {
  title: string;
  value: number | string;
  icon: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  color?: string;
}

interface StatGridDemoProps {
  stats?: StatItem[];
  columns?: number;
}

const defaultStats: StatItem[] = [
  { title: 'Total Repositories', value: 156, icon: 'folder_code', trend: 'up', trendValue: '+12', color: brand[700] },
  { title: 'Active Users', value: 1234, icon: 'group', trend: 'up', trendValue: '+8%', color: semantic.success },
  { title: 'Open Comments', value: 42, icon: 'chat_bubble', trend: 'down', trendValue: '-5', color: semantic.info },
  { title: 'Resolved Issues', value: 89, icon: 'check_circle', trend: 'up', trendValue: '+23%', color: semantic.success },
];

const StatGridDemo: React.FC<StatGridDemoProps> = ({
  stats = defaultStats,
  columns = 4,
}) => {
  const { token } = theme.useToken();
  const span = 24 / columns;

  return (
    <Row gutter={[16, 16]}>
      {stats.map((stat, i) => (
        <Col key={i} span={span}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={
                  stat.trend && stat.trendValue ? (
                    <span
                      style={{
                        fontSize: 12,
                        color: stat.trend === 'up' ? semantic.success : semantic.error,
                        marginLeft: 4,
                      }}
                    >
                      {stat.trendValue}
                    </span>
                  ) : undefined
                }
              />
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: stat.color ? `${stat.color}15` : `${token.colorPrimary}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AccessibleIcon
                  name={stat.icon}
                  decorative
                  style={{ color: stat.color || token.colorPrimary, fontSize: 22 }}
                />
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

const meta: Meta<typeof StatGridDemo> = {
  title: 'Patterns/Data Display/StatGrid',
  component: StatGridDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatGridDemo>;

export const FourColumns: Story = {
  args: { stats: defaultStats, columns: 4 },
};

export const ThreeColumns: Story = {
  args: {
    stats: defaultStats.slice(0, 3),
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    stats: [
      { title: 'Active Sessions', value: 48, icon: 'devices', trend: 'up', trendValue: '+3', color: brand[700] },
      { title: 'Audit Events', value: '12.4k', icon: 'history', color: semantic.warning },
    ],
    columns: 2,
  },
};

import React from 'react';
import { Card, Statistic, Typography, theme } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, MinusOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface StatsCardProps {
  title: string;
  value: number | string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  color?: string;
  loading?: boolean;
  /** Trend direction for visual indicator */
  trend?: 'up' | 'down' | 'neutral';
  /** Trend value to display (e.g., "+12%") */
  trendValue?: string;
  /** Card size variant */
  size?: 'default' | 'large';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  color,
  loading = false,
  trend,
  trendValue,
  size = 'default',
}) => {
  const { token } = theme.useToken();

  const getTrendIcon = () => {
    if (!trend) return null;
    const iconStyle = { fontSize: 12, marginRight: 4 };
    switch (trend) {
      case 'up':
        return <ArrowUpOutlined style={{ ...iconStyle, color: token.colorSuccess }} aria-hidden="true" />;
      case 'down':
        return <ArrowDownOutlined style={{ ...iconStyle, color: token.colorError }} aria-hidden="true" />;
      default:
        return <MinusOutlined style={{ ...iconStyle, color: token.colorTextSecondary }} aria-hidden="true" />;
    }
  };

  const getTrendColor = () => {
    if (!trend) return undefined;
    switch (trend) {
      case 'up':
        return token.colorSuccess;
      case 'down':
        return token.colorError;
      default:
        return token.colorTextSecondary;
    }
  };

  return (
    <Card
      loading={loading}
      styles={{
        body: { padding: size === 'large' ? 24 : 16 },
      }}
    >
      <Statistic
        title={
          <Text
            type="secondary"
            style={{
              fontSize: size === 'large' ? 14 : 12,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            {title}
          </Text>
        }
        value={value}
        prefix={prefix}
        suffix={suffix}
        valueStyle={{
          color,
          fontSize: size === 'large' ? 32 : 24,
          fontWeight: 600,
        }}
      />
      {trend && trendValue && (
        <div style={{ marginTop: 8 }}>
          {getTrendIcon()}
          <Text style={{ fontSize: 12, color: getTrendColor() }}>
            {trendValue}
          </Text>
          <Text type="secondary" style={{ fontSize: 12, marginLeft: 4 }}>
            vs last period
          </Text>
        </div>
      )}
    </Card>
  );
};

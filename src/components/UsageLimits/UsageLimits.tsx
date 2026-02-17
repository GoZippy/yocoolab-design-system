import React from 'react';
import { Progress, Typography, Space } from 'antd';
import { semantic } from '../../tokens/colors';

const { Text } = Typography;

interface UsageLimitsProps {
  current: number;
  max: number | null;
  label: string;
  showBar?: boolean;
}

export const UsageLimits: React.FC<UsageLimitsProps> = ({ current, max, label, showBar = true }) => {
  if (max === null) {
    return (
      <Space>
        <Text type="secondary">{label}:</Text>
        <Text strong>{current}</Text>
        <Text type="secondary">/ Unlimited</Text>
      </Space>
    );
  }

  const percent = Math.round((current / max) * 100);
  const status = percent >= 100 ? 'exception' : percent >= 80 ? 'active' : 'normal';
  const strokeColor = percent >= 100 ? semantic.error : percent >= 80 ? semantic.warning : semantic.info;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <Text type="secondary">{label}</Text>
        <Text strong style={{ color: percent >= 100 ? semantic.error : undefined }}>
          {current} / {max}
        </Text>
      </div>
      {showBar && (
        <Progress
          percent={Math.min(percent, 100)}
          status={status}
          strokeColor={strokeColor}
          showInfo={false}
          size="small"
        />
      )}
    </div>
  );
};

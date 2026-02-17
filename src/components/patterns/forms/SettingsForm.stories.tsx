import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Card, Form, Input, Select, Switch, Button, Divider, Typography, Space, Row, Col,
  Progress, Table, Tag, theme,
} from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';
import { semantic } from '../../../tokens/colors';

const { Title, Text, Paragraph } = Typography;

interface SettingsFormDemoProps {
  tab?: 'general' | 'billing' | 'notifications';
}

const GeneralSettings = () => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Title level={4}>Organization Settings</Title>
      <Paragraph type="secondary">Manage your organization details and preferences.</Paragraph>
      <Divider />
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          orgName: 'Yocoolab',
          slug: 'yocoolab',
          defaultBranch: 'main',
          timezone: 'UTC',
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="orgName" label="Organization Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="slug" label="URL Slug">
              <Input addonBefore="app.yocoolab.com/" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="defaultBranch" label="Default Branch">
              <Select
                options={[
                  { value: 'main', label: 'main' },
                  { value: 'master', label: 'master' },
                  { value: 'develop', label: 'develop' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="timezone" label="Timezone">
              <Select
                options={[
                  { value: 'UTC', label: 'UTC' },
                  { value: 'US/Eastern', label: 'US/Eastern' },
                  { value: 'US/Pacific', label: 'US/Pacific' },
                  { value: 'Europe/London', label: 'Europe/London' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">Save Changes</Button>
          </Space>
        </div>
      </Form>
    </Card>
  );
};

const BillingSettings = () => {
  const { token } = theme.useToken();

  const usageLimits = [
    { label: 'Repositories', current: 12, limit: 25 },
    { label: 'Team Members', current: 8, limit: 10 },
    { label: 'Storage', current: 4.2, limit: 10, suffix: 'GB' },
    { label: 'API Calls', current: 45000, limit: 100000, suffix: '/mo' },
  ];

  const invoices = [
    { key: '1', date: 'Feb 1, 2026', amount: '$49.00', status: 'Paid' },
    { key: '2', date: 'Jan 1, 2026', amount: '$49.00', status: 'Paid' },
    { key: '3', date: 'Dec 1, 2025', amount: '$49.00', status: 'Paid' },
  ];

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      {/* Plan Card */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Tag color="purple" style={{ marginBottom: 8 }}>Pro Plan</Tag>
            <Title level={4} style={{ margin: 0 }}>$49/month</Title>
            <Text type="secondary">Billed monthly · Next billing: Mar 1, 2026</Text>
          </div>
          <Button type="primary">Upgrade Plan</Button>
        </div>
      </Card>

      {/* Usage Grid */}
      <Card title="Usage">
        <Row gutter={[24, 24]}>
          {usageLimits.map((item) => (
            <Col key={item.label} span={12}>
              <div style={{ marginBottom: 4 }}>
                <Text strong>{item.label}</Text>
                <Text type="secondary" style={{ float: 'right' }}>
                  {item.current}{item.suffix || ''} / {item.limit}{item.suffix || ''}
                </Text>
              </div>
              <Progress
                percent={Math.round((item.current / item.limit) * 100)}
                strokeColor={
                  item.current / item.limit > 0.8 ? semantic.error :
                  item.current / item.limit > 0.6 ? semantic.warning :
                  token.colorPrimary
                }
                showInfo={false}
              />
            </Col>
          ))}
        </Row>
      </Card>

      {/* Payment History */}
      <Card title="Payment History">
        <Table
          dataSource={invoices}
          pagination={false}
          size="small"
          columns={[
            { title: 'Date', dataIndex: 'date' },
            { title: 'Amount', dataIndex: 'amount' },
            {
              title: 'Status',
              dataIndex: 'status',
              render: (status: string) => <Tag color="green">{status}</Tag>,
            },
            {
              title: '',
              key: 'action',
              render: () => <Button type="link" size="small">Download</Button>,
            },
          ]}
        />
      </Card>
    </Space>
  );
};

const NotificationSettings = () => (
  <Card>
    <Title level={4}>Notification Preferences</Title>
    <Paragraph type="secondary">Choose what notifications you want to receive.</Paragraph>
    <Divider />
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      {[
        { title: 'New Comments', desc: 'Get notified when someone comments on your thread', default: true },
        { title: 'Thread Resolved', desc: 'Get notified when a thread you participated in is resolved', default: true },
        { title: 'Mentions', desc: 'Get notified when someone mentions you', default: true },
        { title: 'Weekly Digest', desc: 'Receive a weekly summary of activity', default: false },
        { title: 'Marketing Emails', desc: 'Product updates and announcements', default: false },
      ].map((item) => (
        <div key={item.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Text strong>{item.title}</Text>
            <br />
            <Text type="secondary" style={{ fontSize: 13 }}>{item.desc}</Text>
          </div>
          <Switch defaultChecked={item.default} />
        </div>
      ))}
    </Space>
  </Card>
);

const SettingsFormDemo: React.FC<SettingsFormDemoProps> = ({ tab = 'general' }) => {
  const components: Record<string, React.ReactNode> = {
    general: <GeneralSettings />,
    billing: <BillingSettings />,
    notifications: <NotificationSettings />,
  };

  return <div style={{ maxWidth: 800 }}>{components[tab]}</div>;
};

const meta: Meta<typeof SettingsFormDemo> = {
  title: 'Patterns/Forms/SettingsForm',
  component: SettingsFormDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SettingsFormDemo>;

export const General: Story = { args: { tab: 'general' } };
export const Billing: Story = { args: { tab: 'billing' } };
export const Notifications: Story = { args: { tab: 'notifications' } };

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Steps, Card, Typography, Tag, theme } from 'antd';
import { phase } from '../../../tokens/colors';

const { Title, Text } = Typography;

interface ProcessStepsDemoProps {
  variant?: 'phases' | 'onboarding' | 'deployment';
}

const phaseColors = phase;

const ProcessStepsDemo: React.FC<ProcessStepsDemoProps> = ({ variant = 'phases' }) => {
  const { token } = theme.useToken();

  if (variant === 'phases') {
    return (
      <Card>
        <Title level={4}>Project Phases</Title>
        <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
          Yocoolab's 4D framework for product development.
        </Text>
        <Steps
          current={2}
          items={[
            {
              title: (
                <Tag color={phaseColors.discover} style={{ marginRight: 0 }}>
                  Discover
                </Tag>
              ),
              description: 'Research & ideation',
            },
            {
              title: (
                <Tag color={phaseColors.define} style={{ marginRight: 0 }}>
                  Define
                </Tag>
              ),
              description: 'Specs & requirements',
            },
            {
              title: (
                <Tag color={phaseColors.develop} style={{ marginRight: 0 }}>
                  Develop
                </Tag>
              ),
              description: 'Build & iterate',
            },
            {
              title: (
                <Tag color={phaseColors.deliver} style={{ marginRight: 0 }}>
                  Deliver
                </Tag>
              ),
              description: 'Launch & measure',
            },
          ]}
        />
      </Card>
    );
  }

  if (variant === 'onboarding') {
    return (
      <Card style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={4}>Getting Started</Title>
        <Steps
          direction="vertical"
          current={1}
          items={[
            {
              title: 'Create your organization',
              description: 'Set up your team workspace',
              status: 'finish',
            },
            {
              title: 'Connect a repository',
              description: 'Link your GitHub or GitLab repository',
              status: 'process',
            },
            {
              title: 'Install the SDK',
              description: 'Add the review client to your app',
              status: 'wait',
            },
            {
              title: 'Invite team members',
              description: 'Get your team collaborating',
              status: 'wait',
            },
          ]}
        />
      </Card>
    );
  }

  // deployment
  return (
    <Card>
      <Title level={4}>Deployment Pipeline</Title>
      <Steps
        current={3}
        status="process"
        items={[
          { title: 'Build', description: 'Compiling assets', status: 'finish' },
          { title: 'Test', description: '156 tests passed', status: 'finish' },
          { title: 'Review', description: 'PR #42 approved', status: 'finish' },
          { title: 'Deploy', description: 'Publishing to production...', status: 'process' },
          { title: 'Verify', description: 'Health checks', status: 'wait' },
        ]}
      />
    </Card>
  );
};

const meta: Meta<typeof ProcessStepsDemo> = {
  title: 'Patterns/Feedback/ProcessSteps',
  component: ProcessStepsDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProcessStepsDemo>;

export const ProjectPhases: Story = { args: { variant: 'phases' } };
export const Onboarding: Story = { args: { variant: 'onboarding' } };
export const Deployment: Story = { args: { variant: 'deployment' } };

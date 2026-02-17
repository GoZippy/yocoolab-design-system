import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Form, Input, Button, Divider, Typography, Space, theme } from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';
import { brand, secondary } from '../../../tokens/colors';

const { Title, Text, Paragraph } = Typography;

interface LoginFormDemoProps {
  variant?: 'login' | 'signup' | 'forgot-password';
}

const LoginForm = () => {
  const { token } = theme.useToken();
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        minHeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: token.colorBgLayout,
        padding: 24,
      }}
    >
      <Card style={{ width: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <svg
            width={56}
            height={56}
            viewBox="0 0 651 661"
            fill="none"
            style={{ margin: '0 auto 16px', display: 'block' }}
            aria-label="Yocoolab"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M244.009 190.732C279.836 179.091 318.428 179.091 354.255 190.732C390.082 202.372 421.305 225.057 443.447 255.533C465.589 286.009 477.514 322.713 477.514 360.384C477.514 398.054 465.589 434.757 443.447 465.233C421.305 495.71 390.082 518.394 354.255 530.035C318.428 541.675 279.836 541.675 244.009 530.035C208.182 518.394 176.96 495.709 154.818 465.233C132.676 434.757 120.75 398.054 120.75 360.384C120.75 322.713 132.676 286.009 154.818 255.533C176.96 225.057 208.182 202.372 244.009 190.732ZM309.962 190.259C302.923 187.972 295.341 187.972 288.302 190.259C281.263 192.546 275.129 197.003 270.778 202.99C266.428 208.978 264.085 216.19 264.085 223.591C264.085 230.992 266.428 238.203 270.778 244.191C275.129 250.178 281.263 254.635 288.302 256.922C295.341 259.209 302.923 259.209 309.962 256.922C317.001 254.635 323.135 250.178 327.486 244.191C331.836 238.203 334.179 230.992 334.179 223.591C334.179 216.19 331.836 208.978 327.486 202.99C323.135 197.003 317.001 192.546 309.962 190.259Z" fill={brand[700]} />
            <path d="M505.485 271.745C482.848 219.489 441.25 177.358 389.367 154.03H505.485V271.745Z" fill={secondary[700]} />
          </svg>
          <Title level={3} style={{ margin: 0 }}>Welcome back</Title>
          <Paragraph type="secondary">Sign in to your Yocoolab account</Paragraph>
        </div>

        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          <Button block size="large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <AccessibleIcon name="code" decorative /> Continue with GitHub
          </Button>
          <Button block size="large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <AccessibleIcon name="mail" decorative /> Continue with Google
          </Button>
        </Space>

        <Divider>or</Divider>

        <Form layout="vertical">
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input size="large" placeholder="you@example.com" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
            <Button type="link" size="small" style={{ padding: 0 }}>
              Forgot password?
            </Button>
          </div>
          <Button type="primary" block size="large" loading={loading}>
            Sign In
          </Button>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Text type="secondary">
            Don't have an account? <Button type="link" style={{ padding: 0 }}>Sign up</Button>
          </Text>
        </div>
      </Card>
    </div>
  );
};

const SignupForm = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        minHeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: token.colorBgLayout,
        padding: 24,
      }}
    >
      <Card style={{ width: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={3} style={{ margin: 0 }}>Create your account</Title>
          <Paragraph type="secondary">Start collaborating with your team</Paragraph>
        </div>

        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          <Button block size="large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <AccessibleIcon name="code" decorative /> Continue with GitHub
          </Button>
          <Button block size="large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <AccessibleIcon name="mail" decorative /> Continue with Google
          </Button>
        </Space>

        <Divider>or</Divider>

        <Form layout="vertical">
          <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
            <Input size="large" placeholder="Your name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input size="large" placeholder="you@example.com" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, min: 8 }]}>
            <Input.Password size="large" placeholder="Create a password" />
          </Form.Item>
          <Button type="primary" block size="large">
            Create Account
          </Button>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Text type="secondary">
            Already have an account? <Button type="link" style={{ padding: 0 }}>Sign in</Button>
          </Text>
        </div>
      </Card>
    </div>
  );
};

const ForgotPasswordForm = () => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        minHeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: token.colorBgLayout,
        padding: 24,
      }}
    >
      <Card style={{ width: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <AccessibleIcon
            name="lock"
            decorative
            style={{ fontSize: 48, color: token.colorPrimary, display: 'block', marginBottom: 16 }}
          />
          <Title level={3} style={{ margin: 0 }}>Reset your password</Title>
          <Paragraph type="secondary">
            Enter your email and we'll send you a reset link.
          </Paragraph>
        </div>

        <Form layout="vertical">
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input size="large" placeholder="you@example.com" />
          </Form.Item>
          <Button type="primary" block size="large">
            Send Reset Link
          </Button>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Button type="link">Back to sign in</Button>
        </div>
      </Card>
    </div>
  );
};

const LoginFormDemo: React.FC<LoginFormDemoProps> = ({ variant = 'login' }) => {
  const components: Record<string, React.ReactNode> = {
    login: <LoginForm />,
    signup: <SignupForm />,
    'forgot-password': <ForgotPasswordForm />,
  };
  return <>{components[variant]}</>;
};

const meta: Meta<typeof LoginFormDemo> = {
  title: 'Patterns/Forms/LoginForm',
  component: LoginFormDemo,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LoginFormDemo>;

export const Login: Story = { args: { variant: 'login' } };
export const Signup: Story = { args: { variant: 'signup' } };
export const ForgotPassword: Story = { args: { variant: 'forgot-password' } };

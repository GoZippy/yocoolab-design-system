import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, Form, Input, Select, Button, Space, Tag, message } from 'antd';
import { AccessibleIcon } from '../../AccessibleIcon';

interface CrudModalDemoProps {
  mode?: 'create' | 'edit';
  open?: boolean;
  entityType?: string;
}

const CrudModalDemo: React.FC<CrudModalDemoProps> = ({
  mode = 'create',
  open = true,
  entityType = 'Team',
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      setLoading(true);
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1000));
      message.success(`${entityType} ${mode === 'create' ? 'created' : 'updated'} successfully`);
      setLoading(false);
      setIsOpen(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setIsOpen(true)}>
        <AccessibleIcon name="add" decorative /> {mode === 'create' ? `Create ${entityType}` : `Edit ${entityType}`}
      </Button>

      <Modal
        title={mode === 'create' ? `Create ${entityType}` : `Edit ${entityType}`}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={
          <Space>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button type="primary" loading={loading} onClick={handleSubmit}>
              {mode === 'create' ? 'Create' : 'Save Changes'}
            </Button>
          </Space>
        }
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={
            mode === 'edit'
              ? { name: 'Engineering', description: 'Core engineering team', visibility: 'private' }
              : undefined
          }
        >
          <Form.Item
            name="name"
            label={`${entityType} Name`}
            rules={[{ required: true, message: `Please enter a ${entityType.toLowerCase()} name` }]}
          >
            <Input placeholder={`Enter ${entityType.toLowerCase()} name`} />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} placeholder="Add a description..." />
          </Form.Item>

          <Form.Item name="visibility" label="Visibility" initialValue="private">
            <Select
              options={[
                { value: 'public', label: 'Public' },
                { value: 'private', label: 'Private' },
                { value: 'internal', label: 'Internal' },
              ]}
            />
          </Form.Item>

          <Form.Item name="members" label="Members">
            <Select
              mode="multiple"
              placeholder="Add members..."
              options={[
                { value: 'alice', label: 'Alice Johnson' },
                { value: 'bob', label: 'Bob Smith' },
                { value: 'charlie', label: 'Charlie Brown' },
                { value: 'diana', label: 'Diana Prince' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const meta: Meta<typeof CrudModalDemo> = {
  title: 'Patterns/Forms/CrudModal',
  component: CrudModalDemo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CrudModalDemo>;

export const CreateTeam: Story = {
  args: { mode: 'create', open: true, entityType: 'Team' },
};

export const EditTeam: Story = {
  args: { mode: 'edit', open: true, entityType: 'Team' },
};

export const CreateRepository: Story = {
  args: { mode: 'create', open: true, entityType: 'Repository' },
};

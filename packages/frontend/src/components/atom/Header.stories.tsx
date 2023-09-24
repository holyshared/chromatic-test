import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const TitleOnly: Story = {
  render: () => <Header title='title' />,
};

export const TitleWithDescription: Story = {
  render: () => <Header title='title' description='description description description' />,
};
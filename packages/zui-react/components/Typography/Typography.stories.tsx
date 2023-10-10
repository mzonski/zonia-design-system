import type { Meta, StoryObj } from '@storybook/react';

import Typography from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum sit dolor amet',
  },
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    children: 'Lorem ipsum sit dolor amet',
    variant: 'h3',
  },
};

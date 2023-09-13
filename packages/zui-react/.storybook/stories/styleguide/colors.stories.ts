import type { Meta, StoryObj } from '@storybook/react';

import ColorsDisplay from './components/Colors';

const meta = {
  title: 'Styleguide/Colors',
  component: ColorsDisplay,
} satisfies Meta<typeof ColorsDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};

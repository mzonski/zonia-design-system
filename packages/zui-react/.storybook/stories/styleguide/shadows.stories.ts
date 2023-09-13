import type { Meta, StoryObj } from '@storybook/react';

import ColorsDisplay from './components/Colors';
import ShadowsDisplay from "./components/Shadows";

const meta = {
  title: 'Styleguide/Shadows',
  component: ShadowsDisplay,
} satisfies Meta<typeof ShadowsDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadows: Story = {};

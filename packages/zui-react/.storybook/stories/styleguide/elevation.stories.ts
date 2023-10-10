import type { Meta, StoryObj } from '@storybook/react';

import ElevationDisplay from "./components/Elevation";

const meta = {
  title: 'Styleguide/Elevation',
  component: ElevationDisplay,
} satisfies Meta<typeof ElevationDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevation: Story = {};
